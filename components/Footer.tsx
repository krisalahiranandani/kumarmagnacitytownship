"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, PhoneCall, Mail, MapPin, ExternalLink, QrCode, Sparkles } from "lucide-react";
import MahaRERAQRCodeModal from "@/components/MahaRERAQRCodeModal";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  const [showReraModal, setShowReraModal] = useState(false);

  return (
    <>
      <footer className="bg-[#0D0B08] text-white border-t border-white/10 pt-16 pb-12 font-sans relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[250px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 space-y-12">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            
            {/* Column 1: Brand & Authorized Channel Partner */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="inline-block">
                <BrandLogo height={36} showBg={true} />
              </Link>
              
              <div className="space-y-2 text-xs text-stone-400 leading-relaxed max-w-sm">
                <p className="font-medium text-stone-300">
                  Kumar Magnacity is a 150-acre master-planned integrated township located at Manjari BK, Hadapsar Annexe, Pune East by Kumar Properties.
                </p>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1 text-[11px]">
                  <p className="text-accent font-bold uppercase tracking-wider">Authorized Marketing Partner</p>
                  <p className="text-stone-300">Propsmart Realty • MahaRERA Agent Reg. No: <strong className="text-white">A52100025458</strong></p>
                  <p className="text-stone-400 text-[10px]">Project Information &amp; Direct Homebuyer Sales Desk</p>
                </div>
              </div>

              {/* RERA Quick Badge */}
              <div className="pt-2">
                <MahaRERAQRCodeModal />
              </div>
            </div>

            {/* Column 2: Configurations & Layouts */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent font-sans">
                Project Inventory
              </h4>
              <ul className="space-y-2 text-xs text-stone-400">
                <li>
                  <Link href="/kumar-magnacity-2bhk-flats-hadapsar-pune-price" className="hover:text-white transition-colors">
                    2 BHK Smart Luxury (~757 Sq.Ft)
                  </Link>
                </li>
                <li>
                  <Link href="/kumar-magnacity-3bhk-apartments-manjari-pune-price" className="hover:text-white transition-colors">
                    3 BHK Grand Suites (~1,053 Sq.Ft)
                  </Link>
                </li>
                <li>
                  <Link href="/kumar-magnacity-na-bungalow-plots-availability" className="hover:text-white transition-colors">
                    Sovereign NA Villa Plots
                  </Link>
                </li>
                <li>
                  <Link href="/kumar-magnacity-floor-plan-2bhk-3bhk" className="hover:text-white transition-colors">
                    Floor Plans &amp; Dimensions
                  </Link>
                </li>
                <li>
                  <Link href="/kumar-magnacity-na-bungalow-plots-master-plan" className="hover:text-white transition-colors">
                    Master Township Plan
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Resources & Location */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent font-sans">
                Township &amp; Location
              </h4>
              <ul className="space-y-2 text-xs text-stone-400">
                <li>
                  <Link href="/kumar-magnacity-location-advantages-hadapsar-manjari" className="hover:text-white transition-colors">
                    Location &amp; Podar School
                  </Link>
                </li>
                <li>
                  <Link href="/kumar-magnacity-na-bungalow-plots-amenities" className="hover:text-white transition-colors">
                    ~1 Lakh Sq.Ft Clubhouse
                  </Link>
                </li>
                <li>
                  <Link href="/kumar-magnacity-manjari-location-map" className="hover:text-white transition-colors">
                    Hadapsar Annexe Map
                  </Link>
                </li>
                <li>
                  <Link href="/flats-near-magarpatta-city" className="hover:text-white transition-colors">
                    Near Magarpatta Cybercity
                  </Link>
                </li>
                <li>
                  <Link href="/flats-near-kharadi-it-park" className="hover:text-white transition-colors">
                    Near Kharadi EON IT Park
                  </Link>
                </li>
                <li>
                  <Link href="/kumar-magnacity-market-data-pune-east" className="hover:text-white transition-colors">
                    Pune East Market Trends
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Sales Office */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent font-sans">
                Priority Sales Desk
              </h4>
              <div className="space-y-2.5 text-xs text-stone-400">
                <a 
                  href="tel:+917744009295"
                  className="flex items-center gap-2 text-white hover:text-accent font-bold transition-colors"
                >
                  <PhoneCall size={14} className="text-accent shrink-0" />
                  <span>+91 77440 09295</span>
                </a>
                
                <a 
                  href="https://wa.me/917744009295?text=Hello%20Kumar%20Magnacity%20Team%2C%20I%20would%20like%20more%20information%20on%20pricing%20and%20floor%20plans."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-300 hover:text-accent transition-colors"
                >
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[9px] font-bold">WA</span>
                  <span>WhatsApp Priority Desk</span>
                </a>

                <div className="flex items-start gap-2 pt-1 text-[11px] text-stone-400">
                  <MapPin size={14} className="text-accent shrink-0 mt-0.5" />
                  <span>Kumar Magnacity, Manjari Road, Hadapsar Annexe, Pune 412307</span>
                </div>

                <div className="pt-2 text-[10px] text-stone-500">
                  Site Visit Hours: Mo–Su 09:30 AM to 08:00 PM
                </div>
              </div>
            </div>

          </div>

          {/* MahaRERA & Statutory Disclaimers */}
          <div className="pt-8 border-t border-white/10 space-y-4 text-[11px] text-stone-500 leading-relaxed">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-accent shrink-0" />
                <div>
                  <p className="text-stone-300 font-bold uppercase tracking-wider text-[11px]">
                    MAHARERA REGISTRATIONS: P52100052096 (TOWERS) | P52100054476 (PLOTS)
                  </p>
                  <p className="text-stone-500 text-[10px]">
                    Authorized Real Estate Agent: Propsmart Realty (MahaRERA Reg No: A52100025458)
                  </p>
                </div>
              </div>

              <a
                href="https://maharera.maharashtra.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent hover:underline font-semibold text-xs shrink-0"
              >
                <span>Verify on MahaRERA Portal</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <p>
              <strong>Disclaimer:</strong> This website is an informational and marketing portal managed by Propsmart Realty, an authorized channel partner (MahaRERA: A52100025458) for Kumar Properties’ project Kumar Magnacity. The information, artist impressions, specifications, floor plans, and pricing provided on this site are indicative and subject to change by the developer without prior notice. Prospective buyers are advised to independently verify all details, sanctioned layouts, RERA approvals, and payment terms directly from official promoter agreements and the Maharashtra Real Estate Regulatory Authority portal (
              <a 
                href="https://maharera.maharashtra.gov.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-400 underline"
              >
                maharera.maharashtra.gov.in
              </a>
              ) prior to making any purchase decisions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5 text-[10px] text-stone-600">
              <div className="flex items-center gap-4">
                <Link href="/kumar-magnacity-na-bungalow-plots-privacy-policy" className="hover:text-stone-400 transition-colors">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link href="/kumar-magnacity-na-bungalow-plots-faq" className="hover:text-stone-400 transition-colors">
                  FAQ &amp; Due Diligence
                </Link>
                <span>•</span>
                <Link href="/sitemap.xml" className="hover:text-stone-400 transition-colors">
                  Sitemap
                </Link>
              </div>
              <p>© {new Date().getFullYear()} Kumar Magnacity Partner Portal. All Rights Reserved.</p>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
