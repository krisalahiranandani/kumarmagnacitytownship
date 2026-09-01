"use client";

import React from "react";
import { Building2, MapPin, ShieldCheck, GraduationCap, Calendar, IndianRupee, Layers, ExternalLink } from "lucide-react";

interface FactItem {
  label: string;
  value: string;
  icon: React.ReactNode;
  detail?: string;
  link?: string;
}

const PROJECT_FACTS: FactItem[] = [
  {
    label: "Project Name",
    value: "Kumar Magnacity",
    icon: <Building2 size={18} className="text-accent shrink-0" />,
    detail: "Master-Planned Integrated Residential Township"
  },
  {
    label: "Promoter / Developer",
    value: "Kumar Properties",
    icon: <Building2 size={18} className="text-accent shrink-0" />,
    detail: "60-Year Legacy in Real Estate Development (Since 1966)"
  },
  {
    label: "Location",
    value: "Manjari BK, Hadapsar Annexe, Pune East",
    icon: <MapPin size={18} className="text-accent shrink-0" />,
    detail: "Pin: 412307 • Coordinates: 18.4948931, 73.9828496"
  },
  {
    label: "Master Plan Scale",
    value: "Approx. 150-Acre Master Plan",
    icon: <Layers size={18} className="text-accent shrink-0" />,
    detail: "Integrated multi-phase township with separately registered RERA phases"
  },
  {
    label: "Configurations & Carpet Area",
    value: "2 BHK, 3 BHK & Sovereign NA Villa Plots",
    icon: <Layers size={18} className="text-accent shrink-0" />,
    detail: "2 BHK: ~757 Sq.Ft • 3 BHK: ~1,053 Sq.Ft • Plots: 1,700 to 3,500+ Sq.Ft"
  },
  {
    label: "MahaRERA Registrations",
    value: "P52100052096 (Towers) | P52100054476 (Plots)",
    icon: <ShieldCheck size={18} className="text-accent shrink-0" />,
    detail: "Phase 1 Towers: P52100052096 • Phase 2 Plots: P52100054476",
    link: "https://maharera.maharashtra.gov.in/"
  },
  {
    label: "In-Campus School",
    value: "Podar International School (K-12 CBSE)",
    icon: <GraduationCap size={18} className="text-accent shrink-0" />,
    detail: "Operational CBSE campus inside master township gates"
  },
  {
    label: "Starting Price Range",
    value: "₹72.99 Lakhs* onwards",
    icon: <IndianRupee size={18} className="text-accent shrink-0" />,
    detail: "2 BHK from ₹72.99L* • 3 BHK from ₹1.05Cr* • Plots from ₹1.49Cr*"
  },
  {
    label: "Project Status",
    value: "Under Construction (Phase-wise Delivery)",
    icon: <Calendar size={18} className="text-accent shrink-0" />,
    detail: "Possession as per applicable MahaRERA phase schedules"
  },
  {
    label: "Authorized Channel Partner",
    value: "Propsmart Realty (MahaRERA: A52100025458)",
    icon: <ShieldCheck size={18} className="text-accent shrink-0" />,
    detail: "Project Information & Priority Sales Partner Desk"
  }
];

export default function ProjectFactSheet({ isMarathi = false }: { isMarathi?: boolean }) {
  return (
    <section className="py-16 bg-white border-y border-stone-200/80" id="project-facts">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent font-bold text-[10px] uppercase tracking-widest">
            <ShieldCheck size={12} />
            <span>{isMarathi ? "अधिकृत प्रकल्प माहिती" : "Official Project Fact Sheet"}</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-primary tracking-tight">
            Kumar Magnacity — <span className="text-accent font-normal italic">Key Project Facts &amp; Disclosures</span>
          </h2>
          <p className="text-xs md:text-sm text-stone-600 font-sans leading-relaxed">
            {isMarathi 
              ? "पारदर्शक माहिती आणि महारेरा नोंदी. खालील सर्व तपशील अधिकृत मंजुरी आणि दस्तऐवजांवर आधारित आहेत."
              : "Verified technical, legal, and configuration parameters. All data is structured for transparent homebuyer due diligence."}
          </p>
        </div>

        {/* Fact Sheet Table Grid */}
        <div className="bg-[#FAF9F5] rounded-3xl border border-stone-200/80 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200/80">
            
            {/* Column 1 */}
            <div className="divide-y divide-stone-200/80">
              {PROJECT_FACTS.slice(0, 5).map((fact, idx) => (
                <div key={idx} className="p-5 md:p-6 flex items-start gap-4 hover:bg-white/80 transition-colors">
                  <div className="p-2.5 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                    {fact.icon}
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-stone-500 font-bold block font-sans">
                      {fact.label}
                    </span>
                    <div className="text-sm md:text-base font-bold text-primary font-heading">
                      {fact.value}
                    </div>
                    {fact.detail && (
                      <p className="text-xs text-stone-600 font-sans leading-relaxed">
                        {fact.detail}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="divide-y divide-stone-200/80">
              {PROJECT_FACTS.slice(5).map((fact, idx) => (
                <div key={idx} className="p-5 md:p-6 flex items-start gap-4 hover:bg-white/80 transition-colors">
                  <div className="p-2.5 rounded-xl bg-white border border-stone-200/80 shadow-xs">
                    {fact.icon}
                  </div>
                  <div className="space-y-1 flex-1">
                    <span className="text-[11px] uppercase tracking-wider text-stone-500 font-bold block font-sans">
                      {fact.label}
                    </span>
                    <div className="text-sm md:text-base font-bold text-primary font-heading flex items-center justify-between gap-2">
                      <span>{fact.value}</span>
                      {fact.link && (
                        <a 
                          href={fact.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] text-accent hover:underline font-sans font-normal shrink-0"
                        >
                          <span>Verify</span>
                          <ExternalLink size={10} />
                        </a>
                      )}
                    </div>
                    {fact.detail && (
                      <p className="text-xs text-stone-600 font-sans leading-relaxed">
                        {fact.detail}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Footnote & Disclaimers */}
        <div className="mt-6 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/15 text-[11px] text-stone-600 font-sans leading-relaxed">
          <p>
            <strong>Disclaimer:</strong> Prices indicated are starting prices and subject to inventory availability, floor rise, view premiums, statutory taxes, and revisions by Kumar Properties. Project master plan spans approximately 150 acres with individual phases registered separately under MahaRERA. Prospective buyers are advised to verify sanctioned plans, promoter details, and quarterly updates directly on the official portal at{" "}
            <a 
              href="https://maharera.maharashtra.gov.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-accent underline font-semibold"
            >
              maharera.maharashtra.gov.in
            </a>.
          </p>
        </div>

      </div>
    </section>
  );
}
