"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, 
  MapPin, 
  Building2, 
  ShieldCheck, 
  Car, 
  School, 
  Trees, 
  Compass, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  FileText, 
  Briefcase, 
  DollarSign, 
  PhoneCall,
  Clock,
  Layers
} from "lucide-react";
import { useModal } from "@/lib/modal-context";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "migration", label: "West vs East Migration", icon: Compass },
  { id: "infrastructure", label: "PMRDA Infra 2026-2030", icon: TrendingUp },
  { id: "township_moat", label: "Township vs Standalone", icon: Building2 },
  { id: "na_plots", label: "NA Plots Land Scarcity", icon: Layers },
  { id: "rental_yield", label: "260K+ IT Rental Yield", icon: Briefcase },
];

export default function PuneMarketIntelligenceHub({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState("migration");
  const { openModal } = useModal();

  const PHONE_NUMBER = "+917744009295";
  const PHONE_DISPLAY = "+91 77440 09295";

  return (
    <section className={cn("py-20 md:py-28 bg-[#FAF9F5] text-primary relative overflow-hidden border-t border-stone-200/80", className)} id="pune-market-intelligence">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="badge-gold">
            <TrendingUp size={13} className="text-accent" />
            <span>Pune Real Estate Macro Intelligence 2026–2030</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary tracking-tight">
            The East Pune Real Estate Shift & <span className="text-gradient-gold">Kumar Magnacity</span>
          </h2>
          <p className="text-sm md:text-base text-stone-600 font-sans max-w-2xl mx-auto leading-relaxed">
            Data-backed analysis of Pune’s macro-economic drivers, PMRDA infrastructure corridors, IT workforce migrations, and why 150-acre integrated townships dominate the market.
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer shadow-sm",
                  isActive 
                    ? "bg-[#0D0B08] text-white shadow-lg border border-accent/40 scale-105"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                )}
              >
                <Icon size={15} className={isActive ? "text-accent" : "text-stone-500"} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display Area */}
        <div className="bg-white rounded-[2.5rem] border border-stone-200/90 p-6 md:p-12 shadow-xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: WEST VS EAST MIGRATION */}
            {activeTab === "migration" && (
              <motion.div
                key="migration"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-stone-100">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-accent-dark block mb-1">Macro Trend 1</span>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">
                      Why Pune Tech Leaders are Migrating from West to East
                    </h3>
                  </div>
                  <div className="px-4 py-2 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs font-bold text-stone-800">
                    East Pune: 18% Higher Livability Score
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* West Pune Card */}
                  <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading font-bold text-lg text-stone-800">West Pune (Hinjewadi / Wakad / Baner)</h4>
                      <span className="text-[10px] uppercase font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full">Saturated Pocket</span>
                    </div>
                    <ul className="space-y-2.5 text-xs text-stone-600 font-sans">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold">✕</span>
                        <span>Severe Hinjewadi Flyover & Wakad traffic bottlenecks during peak IT hours.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold">✕</span>
                        <span>Fragmented 2-to-4 acre standalone high-rises with heavy tanker water dependency.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold">✕</span>
                        <span>Inflated ticket sizes (₹9,500–₹12,500/sq.ft) leaving limited capital appreciation headroom.</span>
                      </li>
                    </ul>
                  </div>

                  {/* East Pune Kumar Magnacity Card */}
                  <div className="p-6 rounded-3xl bg-amber-50/60 border border-amber-200/90 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading font-bold text-lg text-primary">Kumar Magnacity (Hadapsar Annexe, Manjari)</h4>
                      <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">High-Growth Sanctuary</span>
                    </div>
                    <ul className="space-y-2.5 text-xs text-stone-700 font-sans">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>150-Acre Master Township:</strong> 25+ acres green lungs, internal Podar School & Miyawaki forests.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Twin IT Hub Connectivity:</strong> 10 mins to Magarpatta Cybercity & 15 mins to Kharadi EON IT Park.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>High Capital Upside:</strong> Entry price from ₹72.99L* with 14%–18% forecasted annual capital growth.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: PMRDA INFRASTRUCTURE 2026-2030 */}
            {activeTab === "infrastructure" && (
              <motion.div
                key="infrastructure"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-stone-100">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-accent-dark block mb-1">Macro Trend 2</span>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">
                      4 PMRDA Mega Corridors Driving Kumar Magnacity Value
                    </h3>
                  </div>
                  <div className="px-4 py-2 rounded-2xl bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800">
                    Infrastructure Velocity: High
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Catalyst 1 */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <span className="text-xs font-bold text-accent-dark">01. 128 km PMRDA Ring Road</span>
                    <h5 className="font-heading font-bold text-base text-primary">Manjari Interchange</h5>
                    <p className="text-xs text-stone-600 font-sans leading-relaxed">
                      Connects Pune East directly to Mumbai Expressway & Purandar Airport without crossing city traffic.
                    </p>
                  </div>

                  {/* Catalyst 2 */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <span className="text-xs font-bold text-accent-dark">02. River Bridge Link</span>
                    <h5 className="font-heading font-bold text-base text-primary">Manjari - Kharadi Bridge</h5>
                    <p className="text-xs text-stone-600 font-sans leading-relaxed">
                      Slashes travel time to EON IT Park Phase 1 & 2 and World Trade Center from 35 mins to under 12 mins.
                    </p>
                  </div>

                  {/* Catalyst 3 */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <span className="text-xs font-bold text-accent-dark">03. Pune Metro Expansion</span>
                    <h5 className="font-heading font-bold text-base text-primary">Metro Line 3 Hadapsar</h5>
                    <p className="text-xs text-stone-600 font-sans leading-relaxed">
                      High-speed metro transit connecting Hadapsar Annexe to Swargate, Civil Court, and Shivajinagar.
                    </p>
                  </div>

                  {/* Catalyst 4 */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <span className="text-xs font-bold text-accent-dark">04. Expressway Widening</span>
                    <h5 className="font-heading font-bold text-base text-primary">Pune-Solapur 6-Lane</h5>
                    <p className="text-xs text-stone-600 font-sans leading-relaxed">
                      Signal-free 60-meter wide arterial highway access bypassing Hadapsar Gadital bottlenecks.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: TOWNSHIP VS STANDALONE */}
            {activeTab === "township_moat" && (
              <motion.div
                key="township_moat"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-stone-100">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-accent-dark block mb-1">Macro Trend 3</span>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">
                      150-Acre Self-Sustaining Ecosystem vs Standalone Towers
                    </h3>
                  </div>
                  <div className="px-4 py-2 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
                    25% Higher Rental Premium
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-sans border-collapse">
                    <thead>
                      <tr className="bg-stone-100 text-stone-700 font-bold border-b border-stone-200">
                        <th className="p-4 rounded-l-xl">Feature / Parameter</th>
                        <th className="p-4">Standard Standalone High-Rise</th>
                        <th className="p-4 text-accent-dark bg-amber-50 rounded-r-xl">Kumar Magnacity 150-Acre Township</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                      <tr>
                        <td className="p-4 font-bold text-stone-800">Campus Schooling</td>
                        <td className="p-4 text-stone-500">None (45-60 min daily bus commute)</td>
                        <td className="p-4 font-bold text-emerald-700 bg-amber-50/50">Podar International School On-Campus (Walk-to-School)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-stone-800">Clubhouse & Sports Area</td>
                        <td className="p-4 text-stone-500">Small 5,000–8,000 sq.ft gym room</td>
                        <td className="p-4 font-bold text-emerald-700 bg-amber-50/50">~1 Lakh Sq.Ft Mega Social Hub + Olympic Sports Arena</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-stone-800">Open Green Cover</td>
                        <td className="p-4 text-stone-500">10%–15% peripheral concrete setbacks</td>
                        <td className="p-4 font-bold text-emerald-700 bg-amber-50/50">25+ Acres Continuous Green Lungs & Miyawaki Forest</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-stone-800">Infrastructure Security</td>
                        <td className="p-4 text-stone-500">Private tanker dependency</td>
                        <td className="p-4 font-bold text-emerald-700 bg-amber-50/50">Centralized STP, Solar Substations & Underground Cabling</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* TAB 4: NA PLOTS SCARCITY */}
            {activeTab === "na_plots" && (
              <motion.div
                key="na_plots"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-stone-100">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-accent-dark block mb-1">Macro Trend 4</span>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">
                      Severe Scarcity of Clear-Title NA Villa Plots in Pune East
                    </h3>
                  </div>
                  <div className="px-4 py-2 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs font-bold text-stone-800">
                    Individual 7/12 Extract (७/१२ उतारा)
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200 space-y-3">
                    <ShieldCheck size={24} className="text-accent" />
                    <h4 className="font-heading font-bold text-base text-primary">100% Clear Title Land</h4>
                    <p className="text-xs text-stone-600 font-sans leading-relaxed">
                      Zero Gunthewari risk. Every plot in Kumar Magnacity Phase 2 comes with an individual 7/12 extract and Town Planning sanction.
                    </p>
                  </div>

                  <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200 space-y-3">
                    <Building2 size={24} className="text-accent" />
                    <h4 className="font-heading font-bold text-base text-primary">G+2 Custom Villa Sanction</h4>
                    <p className="text-xs text-stone-600 font-sans leading-relaxed">
                      Complete architectural freedom to construct your bespoke luxury bungalow with private swimming pool, terrace garden, and EV garage.
                    </p>
                  </div>

                  <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200 space-y-3">
                    <TrendingUp size={24} className="text-accent" />
                    <h4 className="font-heading font-bold text-base text-primary">16.4% CAGR Land Growth</h4>
                    <p className="text-xs text-stone-600 font-sans leading-relaxed">
                      Landed assets in the Hadapsar-Manjari corridor have historically outperformed equity markets due to acute land availability shortages.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 5: 260K+ IT RENTAL YIELD */}
            {activeTab === "rental_yield" && (
              <motion.div
                key="rental_yield"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-stone-100">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-accent-dark block mb-1">Macro Trend 5</span>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">
                      260,000+ Corporate IT Workforce Rental Yield Engine
                    </h3>
                  </div>
                  <div className="px-4 py-2 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
                    Gross Yield: 4.8% – 5.4% p.a.
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Hub 1 */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <h5 className="font-heading font-bold text-sm text-primary">Magarpatta Cybercity</h5>
                      <span className="text-[10px] font-bold text-accent-dark font-mono">10 Mins (6 km)</span>
                    </div>
                    <p className="text-xs text-stone-600 font-sans">
                      100,000+ tech employees (Amdocs, BNY Mellon, Accenture, Red Hat, HCL).
                    </p>
                    <div className="text-[11px] font-bold text-emerald-700 font-mono pt-1">
                      Avg Rent: ₹32,000 – ₹45,000/mo
                    </div>
                  </div>

                  {/* Hub 2 */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <h5 className="font-heading font-bold text-sm text-primary">Kharadi EON & WTC</h5>
                      <span className="text-[10px] font-bold text-accent-dark font-mono">15 Mins (7.5 km)</span>
                    </div>
                    <p className="text-xs text-stone-600 font-sans">
                      120,000+ global workforce (Barclays, UBS, Credit Suisse, Citi, Veritas).
                    </p>
                    <div className="text-[11px] font-bold text-emerald-700 font-mono pt-1">
                      Avg Rent: ₹40,000 – ₹65,000/mo
                    </div>
                  </div>

                  {/* Hub 3 */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <h5 className="font-heading font-bold text-sm text-primary">SP Infocity & Biotech SEZ</h5>
                      <span className="text-[10px] font-bold text-accent-dark font-mono">12 Mins (6.5 km)</span>
                    </div>
                    <p className="text-xs text-stone-600 font-sans">
                      40,000+ employees (IBM, Wipro, Allstate, Serum Institute of India).
                    </p>
                    <div className="text-[11px] font-bold text-emerald-700 font-mono pt-1">
                      Avg Rent: ₹30,000 – ₹42,000/mo
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Action Footer */}
          <div className="mt-10 pt-8 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent">
                <Sparkles size={18} />
              </div>
              <div>
                <h5 className="font-heading font-bold text-sm text-primary">Download Comprehensive Pune Market Intelligence Report</h5>
                <p className="text-xs text-stone-500 font-sans">Includes 2026-2030 appreciation models and unit inventory sheets.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => openModal({ title: "Pune Market Intelligence Report", subtitle: "Instant PDF delivery of complete ROI matrices and infrastructure master plan.", source: "Market Intelligence Hub" })}
                className="btn-gold py-3 px-6 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md w-full sm:w-auto text-center"
              >
                <span>Request Market Report</span>
                <ArrowRight size={14} />
              </button>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="hidden md:inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <PhoneCall size={14} className="text-accent" />
                <span>{PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
