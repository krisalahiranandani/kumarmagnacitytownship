"use client";

import React, { useState, useEffect } from "react";
import { Globe, ArrowRight } from 'lucide-react';

interface NRIGeoBannerProps {
  country?: string;
}

export default function NRIGeoBanner({ country }: NRIGeoBannerProps) {
  const [detectedCountry, setDetectedCountry] = useState<string>(country || "UNKNOWN");

  useEffect(() => {
    if (!country && typeof window !== "undefined") {
      // Check for timezone / locale clues if geo header is not directly available
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      if (timeZone.includes("Dubai") || timeZone.includes("Asia/Muscat")) {
        setDetectedCountry("AE");
      } else if (timeZone.includes("New_York") || timeZone.includes("Los_Angeles") || timeZone.includes("Chicago")) {
        setDetectedCountry("US");
      } else if (timeZone.includes("London")) {
        setDetectedCountry("GB");
      } else if (timeZone.includes("Singapore")) {
        setDetectedCountry("SG");
      }
    }
  }, [country]);

  // Target high-value foreign countries
  const nriCountries = ['AE', 'US', 'GB', 'SG', 'QA', 'SA', 'AU'];
  
  if (!nriCountries.includes(detectedCountry)) {
    return null; // Do not show for domestic traffic
  }

  return (
    <div className="bg-accent text-dark px-4 py-2 text-center relative z-[100] border-b border-dark/10">
      <div className="container mx-auto max-w-7xl flex items-center justify-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Globe size={16} />
          <span className="text-sm font-bold uppercase tracking-widest">
            NRI Investment Desk
          </span>
        </div>
        <div className="text-sm font-medium">
          Special pre-launch allocation and structured payment plans available for investors from your region.
        </div>
        <a 
          href="/nri-investment" 
          className="inline-flex items-center gap-1 text-[11px] font-bold bg-light text-primary px-3 py-1 rounded-full hover:bg-white transition-colors"
        >
          VIEW NRI OFFERS <ArrowRight size={12} />
        </a>
      </div>
    </div>
  );
}
