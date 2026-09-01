import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SovereignBar from "@/components/SovereignBar";
import BreadcrumbsNavigation from "@/components/BreadcrumbsNavigation";
import SectionHeader from "@/components/SectionHeader";
import { ShieldCheck, ExternalLink, FileText, CheckCircle2, Download, Building2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kumar Magnacity MahaRERA Details | P52100052096 & P52100054476",
  description: "Official MahaRERA registration details for Kumar Magnacity Township at Manjari BK, Hadapsar Annexe Pune. Verified promoter, sanctioned layouts, and compliance documents.",
  alternates: {
    canonical: "https://kumarmagnacitytownship.com/kumar-magnacity-rera",
  },
};

const RERA_PHASES = [
  {
    phaseName: "Phase 1 — High-Rise Residential Towers",
    reraNo: "P52100052096",
    promoter: "Kumar Properties & Real Estate Pvt. Ltd.",
    type: "2 BHK & 3 BHK Luxury Apartments (G+30 High-Rise)",
    landArea: "Sanctioned Residential Sector within 150-Acre Master Plan",
    carpetArea: "2 BHK: ~757 Sq.Ft • 3 BHK: ~1,053 Sq.Ft",
    status: "Under Construction (RERA Approved)",
    verificationUrl: "https://maharera.maharashtra.gov.in/",
  },
  {
    phaseName: "Phase 2 — Sovereign NA Villa Bungalow Plots",
    reraNo: "P52100054476",
    promoter: "Kumar Properties & Real Estate Pvt. Ltd.",
    type: "Gated Plotted Layout with Individual 7/12 Extracts",
    landArea: "Sanctioned Plotted Sector within 150-Acre Master Plan",
    carpetArea: "Plot Sizes: 1,700 Sq.Ft to 3,500+ Sq.Ft",
    status: "Under Development (RERA Approved)",
    verificationUrl: "https://maharera.maharashtra.gov.in/",
  },
];

export default function ReraPage() {
  return (
    <main className="min-h-screen bg-light selection:bg-accent/30 font-sans">
      <Header />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-[#0D0B08] text-white border-b border-white/10 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 space-y-6">
          <BreadcrumbsNavigation />

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent font-bold text-[10px] uppercase tracking-widest">
              <ShieldCheck size={12} />
              <span>Official Regulatory Transparency Hub</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
              Kumar Magnacity — <span className="text-gradient-gold">MahaRERA Verification &amp; Sanctions</span>
            </h1>
            <p className="text-xs md:text-sm text-stone-400 max-w-2xl leading-relaxed">
              Complete technical, promoter, and phase-wise registration details for Kumar Magnacity Township, Manjari BK, Hadapsar Annexe Pune.
            </p>
          </div>
        </div>
      </section>

      {/* RERA Phases Grid */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary">
              Registered Project Phases
            </h2>
            <p className="text-xs text-stone-600">
              Each development phase within the 150-acre master plan is registered separately under MahaRERA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RERA_PHASES.map((phase, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-[#FAF9F5] border border-stone-200/80 hover:border-accent/40 transition-all space-y-6 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-[10px] uppercase tracking-wider">
                      {phase.phaseName.split("—")[0]}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      RERA Approved
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-primary">
                    {phase.phaseName}
                  </h3>

                  <div className="space-y-3 text-xs text-stone-600 font-sans divide-y divide-stone-200">
                    <div className="pt-2 flex justify-between">
                      <span className="text-stone-500 font-medium">MahaRERA Registration No:</span>
                      <strong className="text-primary font-bold text-sm">{phase.reraNo}</strong>
                    </div>
                    <div className="pt-2 flex justify-between">
                      <span className="text-stone-500 font-medium">Promoter Entity:</span>
                      <span className="text-primary font-semibold text-right">{phase.promoter}</span>
                    </div>
                    <div className="pt-2 flex justify-between">
                      <span className="text-stone-500 font-medium">Typology / Inventory:</span>
                      <span className="text-primary font-semibold text-right">{phase.type}</span>
                    </div>
                    <div className="pt-2 flex justify-between">
                      <span className="text-stone-500 font-medium">Carpet / Plot Dimensions:</span>
                      <span className="text-primary font-semibold text-right">{phase.carpetArea}</span>
                    </div>
                    <div className="pt-2 flex justify-between">
                      <span className="text-stone-500 font-medium">Master Plan Context:</span>
                      <span className="text-primary font-semibold text-right">{phase.landArea}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200">
                  <a
                    href={phase.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-gold py-3 px-6 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Verify {phase.reraNo} on MahaRERA</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Legal Due Diligence Guidelines */}
          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3 text-xs text-stone-600 leading-relaxed font-sans">
            <h4 className="font-bold text-primary uppercase tracking-wider text-[11px] flex items-center gap-2">
              <CheckCircle2 size={16} className="text-accent" />
              <span>Homebuyer Due Diligence Protocol</span>
            </h4>
            <p>
              Under the Real Estate (Regulation and Development) Act, 2016, buyers are entitled to review sanctioned building layouts, floor plans, commencement certificates, encumbrance certificates, and quarterly construction milestone filings directly from the state regulatory authority portal.
            </p>
            <p className="text-[11px] text-stone-500">
              Official State Portal: <a href="https://maharera.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" className="text-accent underline font-semibold">https://maharera.maharashtra.gov.in/</a> • Authorized Channel Partner: Propsmart Realty (MahaRERA Reg. No: A52100025458).
            </p>
          </div>

        </div>
      </section>

      <Footer />
      <SovereignBar />
    </main>
  );
}
