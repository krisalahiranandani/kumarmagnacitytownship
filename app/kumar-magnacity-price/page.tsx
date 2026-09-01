import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SovereignBar from "@/components/SovereignBar";
import BreadcrumbsNavigation from "@/components/BreadcrumbsNavigation";
import { IndianRupee, ShieldCheck, Download, Calculator, PhoneCall, Calendar } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kumar Magnacity Price List 2026 | 2 & 3 BHK Flats & NA Plots Hadapsar",
  description: "Official indicative pricing and cost sheet for Kumar Magnacity Township, Manjari BK near Hadapsar Pune. 2 BHK from ₹72.99L*, 3 BHK from ₹1.05Cr*, NA Plots from ₹1.49Cr*.",
  alternates: {
    canonical: "https://kumarmagnacitytownship.com/kumar-magnacity-price",
  },
};

const PRICE_TIERS = [
  {
    typology: "2 BHK Smart Luxury Suite",
    carpetArea: "~757 Sq.Ft",
    balconies: "Double Balcony Layout",
    startingPrice: "₹72.99 Lakhs*",
    bookingToken: "₹1,00,000 (100% Refundable)",
    emiEstimate: "From ₹54,000 / month*",
    phase: "Phase 1 Towers (RERA: P52100052096)",
    href: "/kumar-magnacity-2bhk-flats-hadapsar-pune-price",
  },
  {
    typology: "3 BHK Grand Family Suite",
    carpetArea: "~1,053 Sq.Ft",
    balconies: "Expansive Dual Deck Balconies",
    startingPrice: "₹1.05 Crore*",
    bookingToken: "₹2,00,000 (100% Refundable)",
    emiEstimate: "From ₹78,000 / month*",
    phase: "Phase 1 Towers (RERA: P52100052096)",
    href: "/kumar-magnacity-3bhk-apartments-manjari-pune-price",
  },
  {
    typology: "Sovereign NA Villa Plot",
    carpetArea: "1,700 to 3,500+ Sq.Ft",
    balconies: "Custom G+2 Villa Construction Sanctioned",
    startingPrice: "₹1.49 Crore*",
    bookingToken: "₹2,50,000 (100% Refundable)",
    emiEstimate: "Custom Plotted Loan Available*",
    phase: "Phase 2 Plots (RERA: P52100054476)",
    href: "/kumar-magnacity-na-bungalow-plots-availability",
  },
];

export default function PricePage() {
  return (
    <main className="min-h-screen bg-light selection:bg-accent/30 font-sans">
      <Header />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-[#0D0B08] text-white border-b border-white/10 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 space-y-6">
          <BreadcrumbsNavigation />

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent font-bold text-[10px] uppercase tracking-widest">
              <Calendar size={12} />
              <span>Indicative Price Schedule — Updated September 2026</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
              Kumar Magnacity — <span className="text-gradient-gold">Price List &amp; Cost Sheet Schedule</span>
            </h1>
            <p className="text-xs md:text-sm text-stone-400 max-w-2xl leading-relaxed">
              Transparent, phase-aligned pricing breakdown for 2 BHK, 3 BHK luxury residences, and Sovereign NA Villa Plots at Hadapsar Annexe, Manjari BK Pune.
            </p>
          </div>
        </div>
      </section>

      {/* Price Table Section */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICE_TIERS.map((tier, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-[#FAF9F5] border border-stone-200/80 hover:border-accent/40 transition-all space-y-6 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="text-[10px] uppercase tracking-wider text-stone-500 font-bold font-sans">
                    {tier.phase}
                  </div>

                  <h3 className="text-xl font-heading font-bold text-primary">
                    {tier.typology}
                  </h3>

                  <div className="p-4 rounded-2xl bg-white border border-stone-200/80 space-y-1">
                    <span className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider">Starting Agreement Value</span>
                    <div className="text-3xl font-heading font-bold text-accent">
                      {tier.startingPrice}
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs text-stone-600 font-sans divide-y divide-stone-200">
                    <div className="pt-2 flex justify-between">
                      <span className="text-stone-500 font-medium">Carpet Area:</span>
                      <strong className="text-primary font-semibold">{tier.carpetArea}</strong>
                    </div>
                    <div className="pt-2 flex justify-between">
                      <span className="text-stone-500 font-medium">Layout:</span>
                      <span className="text-primary font-medium">{tier.balconies}</span>
                    </div>
                    <div className="pt-2 flex justify-between">
                      <span className="text-stone-500 font-medium">Booking Token:</span>
                      <span className="text-emerald-700 font-bold">{tier.bookingToken}</span>
                    </div>
                    <div className="pt-2 flex justify-between">
                      <span className="text-stone-500 font-medium">Est. Monthly EMI:</span>
                      <span className="text-primary font-medium">{tier.emiEstimate}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200">
                  <Link
                    href={tier.href}
                    className="w-full btn-gold py-3 px-6 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-sm text-center"
                  >
                    <span>View Detailed Layout &amp; Specs</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Terms & Disclaimers */}
          <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/15 space-y-3 text-xs text-stone-600 leading-relaxed font-sans">
            <h4 className="font-bold text-primary uppercase tracking-wider text-[11px] flex items-center gap-2">
              <ShieldCheck size={16} className="text-accent" />
              <span>Important Pricing Notes &amp; Statutory Disclaimers</span>
            </h4>
            <ul className="space-y-1.5 text-stone-600 list-disc list-inside text-[11px]">
              <li>Prices indicated are starting indicative prices and are subject to inventory availability, floor rise, view premiums, and statutory government levies (Stamp Duty, Registration, GST, and Infrastructure Maintenance).</li>
              <li>Promoter reserves the right to revise price schedules without prior intimation. Final price quotes are formalized only upon formal application and agreement with Kumar Properties.</li>
              <li>Booking token is 100% refundable prior to agreement execution in accordance with standard partner refund guidelines.</li>
            </ul>
          </div>

        </div>
      </section>

      <Footer />
      <SovereignBar />
    </main>
  );
}
