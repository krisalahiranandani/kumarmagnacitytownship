"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Navigation, 
  Phone, 
  MessageSquare, 
  ExternalLink, 
  Star, 
  ShieldCheck, 
  Clock, 
  Globe, 
  Copy, 
  Check, 
  Building2,
  Compass,
  Smartphone
} from "lucide-react";
import { useModal } from "@/lib/modal-context";
import { cn } from "@/lib/utils";

interface GoogleMapsCommandHubProps {
  className?: string;
  showCardOnly?: boolean;
}

export default function GoogleMapsCommandHub({ className, showCardOnly = false }: GoogleMapsCommandHubProps) {
  const { openModal } = useModal();
  const [copied, setCopied] = useState(false);

  const GOOGLE_MAPS_PLACE_URL = "https://www.google.com/maps/place/Magnacity+by+Kumar+Realty/@18.4948931,73.9828496,16z/data=!4m6!3m5!1s0x3bc2c3aeb2585a9d:0xf198bb1c684e72e1!8m2!3d18.4948931!4d73.9828496!16s%2Fg%2F11rzskhbtj";
  const GOOGLE_SEARCH_PANEL_URL = "https://www.google.com/search?q=kumar+magnacity";
  const GOOGLE_DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=18.4948931,73.9828496&destination_place_id=ChIJVVpYsq7DwrwR4XJOGBu7mPE";
  
  const PRIMARY_PHONE = "+919225512120";
  const PRIMARY_PHONE_DISPLAY = "+91 92255 12120";
  
  const SECONDARY_PHONE = "+917744009295";
  const SECONDARY_PHONE_DISPLAY = "+91 77440 09295";
  
  const OFFICIAL_WEBSITE_URL = "https://kumarmagnacitytownship.com";
  const OFFICIAL_WEBSITE_DISPLAY = "kumarmagnacitytownship.com";
  
  const ADDRESS = "Magnacity by Kumar Realty, Manjari Road, Hadapsar Annexe, Manjari Budruk, Pune, Maharashtra 412307";

  const handleCopyAddress = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className={cn("py-16 md:py-24 bg-warm-bg text-primary relative overflow-hidden", className)} id="google-maps-hub">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="badge-gold">
            <MapPin size={13} className="text-accent" />
            <span>Official Google Maps & Verified Business Profile</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary tracking-tight">
            Locate & Visit <span className="text-gradient-gold">Kumar Magnacity</span>
          </h2>
          <p className="text-sm md:text-base text-stone-600 font-sans max-w-2xl mx-auto">
            Official Google Business Profile, live GPS navigation, and direct priority sales desk for Magnacity by Kumar Realty in Hadapsar Annexe, Manjari, Pune East.
          </p>
        </div>

        {/* 4 Interactive Command Actions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          
          {/* Action 1: Live GPS Directions */}
          <a
            href={GOOGLE_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-white border border-stone-200/90 shadow-md hover:shadow-xl hover:border-accent/40 transition-all flex items-start gap-4 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Navigation size={22} />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 block">Live Navigation</span>
              <h4 className="font-heading font-bold text-base text-primary group-hover:text-accent-dark transition-colors">
                Get Directions
              </h4>
              <p className="text-xs text-stone-500 font-sans mt-0.5 font-mono">18.4948931, 73.9828496</p>
            </div>
          </a>

          {/* Action 2: 1-Click Call Sales Desk 1 */}
          <a
            href={`tel:${PRIMARY_PHONE}`}
            className="group p-5 rounded-2xl bg-white border border-stone-200/90 shadow-md hover:shadow-xl hover:border-accent/40 transition-all flex items-start gap-4 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-accent-dark flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Phone size={22} />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent-dark block">Priority Desk</span>
              <h4 className="font-heading font-bold text-base text-primary group-hover:text-accent transition-colors font-mono">
                {PRIMARY_PHONE_DISPLAY}
              </h4>
              <p className="text-xs text-emerald-600 font-sans mt-0.5 font-semibold">1-Click Instant Call</p>
            </div>
          </a>

          {/* Action 3: Google Search Local Viewer */}
          <a
            href={GOOGLE_SEARCH_PANEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-white border border-stone-200/90 shadow-md hover:shadow-xl hover:border-accent/40 transition-all flex items-start gap-4 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#4285F4] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Compass size={22} />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 block">Google Search</span>
              <h4 className="font-heading font-bold text-base text-primary group-hover:text-[#4285F4] transition-colors">
                Local Place Panel
              </h4>
              <p className="text-xs text-stone-500 font-sans mt-0.5">Google SERP Profile</p>
            </div>
          </a>

          {/* Action 4: Google Maps App */}
          <a
            href={GOOGLE_MAPS_PLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-white border border-stone-200/90 shadow-md hover:shadow-xl hover:border-accent/40 transition-all flex items-start gap-4 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Smartphone size={22} />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-rose-600 block">Google Maps App</span>
              <h4 className="font-heading font-bold text-base text-primary group-hover:text-rose-600 transition-colors">
                Open in Maps App
              </h4>
              <p className="text-xs text-stone-500 font-sans mt-0.5">4.9 ★ (386+ Reviews)</p>
            </div>
          </a>

        </div>

        {/* Google Command Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Google Business Profile Entity Card */}
          <div className="lg:col-span-5 bg-white border border-stone-200/90 rounded-[2.5rem] p-6 md:p-8 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
            
            {/* Top Google Business Badge */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  {/* Google 4-Color G icon representation */}
                  <div className="w-8 h-8 rounded-full bg-white shadow-md border border-stone-200 flex items-center justify-center font-bold text-xs">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#34A853]">g</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">Verified Google Business</span>
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                      <ShieldCheck size={12} /> Claimed & Verified Listing
                    </span>
                  </div>
                </div>

                {/* Rating Pill */}
                <a 
                  href={GOOGLE_MAPS_PLACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                >
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  <span className="font-bold text-xs text-stone-900">4.9</span>
                  <span className="text-[10px] text-stone-500">(386+ Reviews)</span>
                </a>
              </div>

              {/* Title & Category */}
              <div className="space-y-1.5">
                <h3 className="text-2xl font-heading font-bold text-primary">
                  Magnacity by Kumar Realty
                </h3>
                <p className="text-xs font-sans font-semibold text-accent-dark">
                  150-Acre Integrated Township • Real Estate Developer
                </p>
                <div className="flex items-center gap-2 text-xs text-stone-500 pt-1">
                  <Clock size={13} className="text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Open Daily</span>
                  <span>• Experience Centre: 9:30 AM – 8:00 PM</span>
                </div>
              </div>

              {/* Official Website URL Injection */}
              <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Globe size={16} className="text-[#4285F4]" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-blue-700 block">Official Website</span>
                    <a 
                      href={OFFICIAL_WEBSITE_URL} 
                      className="text-xs font-bold text-primary hover:text-[#4285F4] transition-colors"
                    >
                      {OFFICIAL_WEBSITE_DISPLAY}
                    </a>
                  </div>
                </div>
                <a
                  href={OFFICIAL_WEBSITE_URL}
                  className="text-[11px] font-bold text-[#4285F4] hover:underline"
                >
                  Visit &rarr;
                </a>
              </div>

              {/* Address with 1-Click Copy */}
              <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-stone-200 space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                    <p className="text-xs text-stone-700 font-sans leading-relaxed">
                      {ADDRESS}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-stone-200/70 text-[11px]">
                  <span className="text-stone-500 font-mono">18.4948931, 73.9828496</span>
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1 text-accent-dark font-bold hover:text-accent cursor-pointer transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-emerald-600" />
                        <span className="text-emerald-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Dual Contact Phone Numbers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Primary Desk */}
                <div className="p-3.5 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-accent">
                      <Phone size={14} />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase font-bold text-stone-500 block">Sales Desk 1</span>
                      <a href={`tel:${PRIMARY_PHONE}`} className="text-xs font-bold text-primary hover:text-accent transition-colors font-mono">
                        {PRIMARY_PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Secondary Desk (7744009295) */}
                <div className="p-3.5 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-accent">
                      <Phone size={14} />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase font-bold text-stone-500 block">Sales Desk 2</span>
                      <a href={`tel:${SECONDARY_PHONE}`} className="text-xs font-bold text-primary hover:text-accent transition-colors font-mono">
                        {SECONDARY_PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Actions Footer */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={GOOGLE_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md text-center cursor-pointer"
              >
                <Navigation size={14} />
                <span>Get Directions</span>
              </a>

              <a
                href={GOOGLE_MAPS_PLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-full bg-white hover:bg-stone-100 text-stone-900 border border-stone-300 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all text-center cursor-pointer shadow-sm"
              >
                <ExternalLink size={14} />
                <span>Google Maps App</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-Definition Live Google Map Viewport */}
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] border border-stone-200/90 p-2 shadow-2xl overflow-hidden relative flex flex-col min-h-[500px]">
            
            {/* Live Interactive Map Iframe */}
            <div className="w-full h-full min-h-[460px] rounded-[2rem] overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15134.165399551024!2d73.9828496!3d18.4948931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3aeb2585a9d%3A0xf198bb1c684e72e1!2sMagnacity%20by%20Kumar%20Realty!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "460px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Magnacity by Kumar Realty - Google Maps Official Embed"
                className="w-full h-full grayscale-[0%] contrast-100"
              />

              {/* Floating Google Place Link Badge */}
              <div className="absolute top-4 left-4 z-10 bg-[#0D0B08]/90 backdrop-blur-xl border border-white/15 p-3.5 rounded-2xl shadow-xl max-w-[280px] hidden sm:block">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent">Verified Google Place</span>
                </div>
                <p className="text-xs font-bold text-white leading-tight">Magnacity by Kumar Realty</p>
                <p className="text-[10px] text-stone-300 font-sans mt-0.5">Hadapsar Annexe, Manjari, Pune 412307</p>
                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/10 text-[10px] text-accent font-mono">
                  <span>+91 92255 12120</span>
                  <span>•</span>
                  <span>+91 77440 09295</span>
                </div>
              </div>

              {/* Floating Bottom Control Bar */}
              <div className="absolute bottom-4 left-4 right-4 z-10 bg-white/95 backdrop-blur-xl border border-stone-200 p-3 rounded-2xl shadow-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-sans font-medium text-stone-700">
                  <Building2 size={15} className="text-accent shrink-0" />
                  <span className="hidden sm:inline">10 Mins from Magarpatta Cybercity • 15 Mins from Kharadi EON</span>
                  <span className="sm:hidden">Hadapsar Annexe, Pune</span>
                </div>

                <a
                  href={GOOGLE_SEARCH_PANEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-accent text-[#0D0B08] font-bold text-[11px] uppercase tracking-wider hover:bg-accent-hover transition-colors whitespace-nowrap shadow-sm"
                >
                  View Google Search Panel &rarr;
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
