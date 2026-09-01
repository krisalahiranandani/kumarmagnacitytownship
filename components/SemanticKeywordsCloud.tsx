"use client";

import React from "react";
import Link from "next/link";
import { Compass, ArrowRight, ShieldCheck, FileText, Layers, MapPin, School } from "lucide-react";

interface DirectoryCategory {
  title: string;
  icon: React.ReactNode;
  links: { name: string; href: string }[];
}

const DIRECTORY_CATEGORIES: DirectoryCategory[] = [
  {
    title: "Residential Configurations",
    icon: <Layers size={14} className="text-accent" />,
    links: [
      { name: "2 BHK Smart Luxury Suites (~757 Sq.Ft)", href: "/kumar-magnacity-2bhk-flats-hadapsar-pune-price" },
      { name: "3 BHK Grand Family Suites (~1,053 Sq.Ft)", href: "/kumar-magnacity-3bhk-apartments-manjari-pune-price" },
      { name: "Sovereign NA Villa Bungalow Plots", href: "/kumar-magnacity-na-bungalow-plots-availability" },
      { name: "Floor Plans & Layout Selector", href: "/kumar-magnacity-floor-plan-2bhk-3bhk" },
      { name: "Master Township Layout Plan", href: "/kumar-magnacity-na-bungalow-plots-master-plan" }
    ]
  },
  {
    title: "Location & Transit Corridors",
    icon: <MapPin size={14} className="text-accent" />,
    links: [
      { name: "Manjari Road & Hadapsar Annexe Connectivity", href: "/kumar-magnacity-location-advantages-hadapsar-manjari" },
      { name: "Flats Near Magarpatta Cybercity (10 Mins)", href: "/flats-near-magarpatta-city" },
      { name: "Flats Near Kharadi EON IT Park (14 Mins)", href: "/flats-near-kharadi-it-park" },
      { name: "Flats Near SP Infocity Phursungi (12 Mins)", href: "/flats-near-sp-infocity" },
      { name: "Interactive Location Map", href: "/kumar-magnacity-manjari-location-map" }
    ]
  },
  {
    title: "Education & Amenities",
    icon: <School size={14} className="text-accent" />,
    links: [
      { name: "Podar International School CBSE Campus", href: "/kumar-magnacity-location-advantages-hadapsar-manjari" },
      { name: "Mega Social & Sports Clubhouse (~1 Lakh Sq.Ft)", href: "/kumar-magnacity-na-bungalow-plots-amenities" },
      { name: "25+ Acres Continuous Green Lungs", href: "/kumar-magnacity-na-bungalow-plots-concept" },
      { name: "Apartment Specifications & Fittings", href: "/kumar-magnacity-specifications-apartments" },
      { name: "Township Security & Smart Utilities", href: "/kumar-magnacity-na-bungalow-plots-amenities" }
    ]
  },
  {
    title: "MahaRERA & Project Due Diligence",
    icon: <ShieldCheck size={14} className="text-accent" />,
    links: [
      { name: "MahaRERA Phase 1 Towers (P52100052096)", href: "https://maharera.maharashtra.gov.in/" },
      { name: "MahaRERA Phase 2 Plots (P52100054476)", href: "https://maharera.maharashtra.gov.in/" },
      { name: "Kumar Properties 60-Year Track Record", href: "/kumar-magnacity-hadapsar" },
      { name: "Pune East Market Trends & Rental Insights", href: "/kumar-magnacity-market-data-pune-east" },
      { name: "Frequently Asked Questions (FAQ)", href: "/kumar-magnacity-na-bungalow-plots-faq" }
    ]
  },
  {
    title: "Project Comparisons in Pune East",
    icon: <FileText size={14} className="text-accent" />,
    links: [
      { name: "Kumar Magnacity vs Godrej Rivergreens", href: "/compare/kumar-magnacity-vs-godrej-rivergreens-manjari" },
      { name: "Kumar Magnacity vs Amanora Park Town", href: "/compare/kumar-magnacity-vs-amanora-park-town-hadapsar" },
      { name: "Kumar Magnacity vs Shapoorji Joyville", href: "/compare/kumar-magnacity-vs-shapoorji-joyville-hadapsar" },
      { name: "Kumar Magnacity vs VTP Pegasus Kharadi", href: "/compare/kumar-magnacity-vs-vtp-pegasus-kharadi" },
      { name: "Comprehensive Buyer & Investor Guide", href: "/insights/kumar-magnacity-hadapsar-township-complete-buyer-guide" }
    ]
  }
];

export default function SemanticKeywordsCloud() {
  return (
    <section className="py-16 bg-[#0D0B08] text-white relative overflow-hidden border-t border-white/10" id="township-directory">
      {/* Background Accent */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-accent uppercase tracking-widest mb-3">
              <Compass size={12} />
              <span>Township Architecture &amp; Resource Directory</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight">
              Explore <span className="text-gradient-gold">Kumar Magnacity Resources</span>
            </h2>
          </div>

          <p className="text-xs text-stone-400 font-sans max-w-md">
            Direct navigation across residential floor plans, MahaRERA registrations, in-campus education, and regional micro-market corridors.
          </p>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIRECTORY_CATEGORIES.map((cat, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/40 transition-colors space-y-4"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-accent flex items-center gap-2">
                {cat.icon}
                <span>{cat.title}</span>
              </h3>

              <ul className="space-y-2.5">
                {cat.links.map((link, lIdx) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={lIdx}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between text-xs text-stone-300 hover:text-accent font-sans transition-colors"
                        >
                          <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                          <ArrowRight size={12} className="text-accent/50 group-hover:text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="group flex items-center justify-between text-xs text-stone-300 hover:text-accent font-sans transition-colors"
                        >
                          <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                          <ArrowRight size={12} className="text-accent/50 group-hover:text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Institutional Verification Footnote */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400 font-sans">
          <span>Official Domain: https://kumarmagnacitytownship.com • Priority Sales Desk: +91 77440 09295</span>
          <span>MahaRERA: P52100052096 (Towers) | P52100054476 (Plots)</span>
        </div>

      </div>
    </section>
  );
}
