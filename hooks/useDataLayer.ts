"use client";

import { useCallback } from "react";

export type EventName = 
  | 'generate_lead' 
  | 'view_item' 
  | 'add_to_cart' 
  | 'begin_checkout' 
  | 'virtual_page_view' 
  | 'conversion';

export interface LeadEventData {
  currency?: string;
  value?: number;
  lead_type?: string;
  project?: string;
  email?: string;
  phone?: string;
}

export interface AnalyticsItem {
  item_id: string;
  item_name: string;
  item_category?: string;
  price?: number;
}

export type DataLayerPayload = Record<string, string | number | boolean | AnalyticsItem[] | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (command: string, targetIdOrEvent: string, configOrParams?: Record<string, unknown>) => void;
    fbq?: (command: string, eventName: string, params?: Record<string, unknown>) => void;
  }
}

export function useDataLayer() {
  const pushToDataLayer = useCallback((event: EventName, data?: DataLayerPayload) => {
    if (typeof window !== "undefined") {
      // 1. Push to GTM DataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event,
        ...data,
      });

      // 2. Direct GA4 / Google Ads gtag call (Fallback/Explicit)
      if (typeof window.gtag === 'function') {
        window.gtag('event', event, data as Record<string, unknown>);
      }
    }
  }, []);

  const trackLead = useCallback((data: LeadEventData) => {
    // Google Ecosystem (GA4 & GTM)
    pushToDataLayer('generate_lead', {
      currency: 'INR',
      value: data.value || 0,
      lead_type: data.lead_type || 'enquiry',
      project: data.project || 'Kumar Magnacity',
    });

    // Google Ads Conversion tracking
    const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
    const adsLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
    if (adsId && adsLabel && typeof window !== "undefined" && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        'send_to': `${adsId}/${adsLabel}`
      });
    }

    // Meta Pixel Fallback Tracker
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq('track', 'Lead', {
        currency: 'INR',
        value: data.value || 0,
        content_name: data.project || 'Kumar Magnacity'
      });
    }

    // Server-Side Measurement Protocol (Bypass Ad Blockers)
    if (data.email || data.phone) {
      fetch('/api/track-conversion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'generate_lead',
          lead_type: data.lead_type,
          project: data.project,
          email: data.email,
          phone: data.phone
        })
      }).catch(err => console.warn('SS-Track Error:', err));
    }
  }, [pushToDataLayer]);

  const trackViewItem = useCallback((itemId: string, itemName: string, category: string = 'Real Estate') => {
    pushToDataLayer('view_item', {
      items: [{ item_id: itemId, item_name: itemName, item_category: category }]
    });
  }, [pushToDataLayer]);

  const trackAddToCart = useCallback((itemId: string, itemName: string) => {
    pushToDataLayer('add_to_cart', {
      items: [{ item_id: itemId, item_name: itemName, item_category: 'Brochure/PriceList' }]
    });
  }, [pushToDataLayer]);

  const trackBeginCheckout = useCallback((formName: string) => {
    pushToDataLayer('begin_checkout', {
      items: [{ item_id: formName, item_name: formName, item_category: 'Enquiry Form' }]
    });
  }, [pushToDataLayer]);

  return {
    pushToDataLayer,
    trackLead,
    trackViewItem,
    trackAddToCart,
    trackBeginCheckout
  };
}
