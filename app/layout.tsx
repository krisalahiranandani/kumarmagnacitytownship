import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#c9a227",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/lib/modal-context";
import EnquiryModal from "@/components/EnquiryModal";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import GoogleConsent from "@/components/GoogleConsent";
import GoogleSpeculationRules from "@/components/GoogleSpeculationRules";
import StructuredData from "@/components/StructuredData";
import ExitIntentModal from "@/components/ExitIntentModal";
import AIChatWidget from "@/components/AIChatWidget";
import NRIGeoBanner from "@/components/NRIGeoBanner";
import MetaPixel from "@/components/MetaPixel";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Suspense } from "react";
import ScrollProgress from "@/components/ScrollProgress";
import MobileQuickBar from "@/components/MobileQuickBar";
import FeaturedSnippetsSchema from "@/components/FeaturedSnippetsSchema";
import SiteNavigationSchema from "@/components/SiteNavigationSchema";
import SpeakableSchema from "@/components/SpeakableSchema";
import HowToBookingSchema from "@/components/HowToBookingSchema";
import VideoTourSchema from "@/components/VideoTourSchema";
import OpenHouseEventSchema from "@/components/OpenHouseEventSchema";
import UnitCarouselSchema from "@/components/UnitCarouselSchema";
import GoogleProductSchema from "@/components/GoogleProductSchema";

export const runtime = "nodejs";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kumarmagnacitytownship.com"),
  manifest: "/manifest.json",
  title: {
    default: "Kumar Magnacity Hadapsar | ₹72.99L* (4.9★) 2 & 3 BHK Flats & Plots Pune",
    template: "%s | Kumar Magnacity Hadapsar"
  },
  description: "Kumar Magnacity Hadapsar (Hadapsar Annexe, Manjari) — Pune's premier 150-acre mega township. 2BHK apartments from ₹72.99L*, 3BHK from ₹1.05Cr* + NA bungalow plots from ₹1.49Cr*. Podar International School on campus, ~1 Lakh sq.ft clubhouse. By Kumar Properties.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: "mr_IN",
    url: "https://kumarmagnacitytownship.com",
    siteName: "Kumar Magnacity Hadapsar",
    title: "Kumar Magnacity Hadapsar | 2BHK & 3BHK Luxury Apartments & Plots",
    description: "Pune's premier 150-acre township at Hadapsar Annexe, Manjari. Premium 2BHK & 3BHK flats and NA plots by Kumar Properties.",
    images: [
      {
        url: "/assets/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Kumar Magnacity Hadapsar Masterplan",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumar Magnacity Hadapsar | Official Portal",
    description: "Premium 2BHK & 3BHK flats and NA plots at Hadapsar Annexe, Manjari Pune.",
    images: ["/assets/hero-bg.jpg"],
  },
  alternates: {
    canonical: "https://kumarmagnacitytownship.com",
    languages: {
      "x-default": "https://kumarmagnacitytownship.com",
      "en-IN": "https://kumarmagnacitytownship.com",
      "en-US": "https://kumarmagnacitytownship.com",
      "en-AE": "https://kumarmagnacitytownship.com",
      "en-GB": "https://kumarmagnacitytownship.com",
      "en-SG": "https://kumarmagnacitytownship.com",
      "mr-IN": "https://kumarmagnacitytownship.com/mr",
    },
  },
  icons: {
    icon: [
      { url: "/assets/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_ID || "PLACEHOLDER_GOOGLE_VERIFICATION_ID",
  },
  other: {
    "geo.position": "18.4948931;73.9828496",
    "geo.region": "IN-MH",
    "geo.placename": "Hadapsar Annexe, Manjari, Pune",
    "ICBM": "18.4948931, 73.9828496",
    "business:contact_data:phone_number": "+917744009295",
    "business:contact_data:website": "https://kumarmagnacitytownship.com",
    "business:contact_data:locality": "Manjari Budruk, Hadapsar, Pune",
    "business:contact_data:region": "Maharashtra",
    "business:contact_data:postal_code": "412307",
    "business:contact_data:country_name": "India",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Consent Mode V2 (Must execute FIRST before any analytics or trackers) */}
        <GoogleConsent />
        
        {/* Google Chrome Enterprise Speculation Rules for sub-50ms instant loads */}
        <GoogleSpeculationRules />

        {/* Core Web Vitals Resource Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="preload" as="image" href="/assets/hero-bg.jpg" fetchPriority="high" />

        {/* WebSub / PubSubHubbub Real-Time Googlebot Indexing Protocol */}
        <link rel="hub" href="https://pubsubhubbub.appspot.com/" />
        <link rel="self" href="https://kumarmagnacitytownship.com/google-product-feed.xml" />
        
        {/* Server-Rendered Google Rich Results Schemas */}
        <StructuredData />
        <FeaturedSnippetsSchema />
        <SiteNavigationSchema />
        <SpeakableSchema />
        <HowToBookingSchema />
        <VideoTourSchema />
        <OpenHouseEventSchema />
        <UnitCarouselSchema />
        <GoogleProductSchema />
        
        {/* Google Sitelinks Search Box Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Kumar Magnacity Hadapsar",
              "url": "https://kumarmagnacitytownship.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://kumarmagnacitytownship.com/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={`${playfair.variable} ${outfit.variable} font-sans antialiased bg-warm-bg text-primary`}>
        <NRIGeoBanner />
        {/* Google Tag Manager (Loads asynchronously without blocking rendering) */}
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'} />
        {/* Google Analytics 4 */}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'} />
        {/* Google Ads Global Site Tag */}
        {process.env.NEXT_PUBLIC_GOOGLE_ADS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ADS_ID} />
        )}
        
        {/* Application Shell */}
        <ModalProvider>
          <ScrollProgress />
          {children}
          <EnquiryModal />
          <ExitIntentModal />
          <AIChatWidget />
          <WhatsAppWidget />
          <MobileQuickBar />
          <Suspense fallback={null}>
            <MetaPixel />
          </Suspense>
        </ModalProvider>
      </body>
    </html>
  );
}
