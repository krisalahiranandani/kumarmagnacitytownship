"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Landmark, School, Sparkles, Trophy, ShoppingBag, ShieldCheck, Download, ArrowRight, Trees, ChevronRight } from "lucide-react";
import { useModal } from "@/lib/modal-context";
import { cn } from "@/lib/utils";

interface SectorData {
  id: string;
  name: string;
  badge: string;
  category: "residential" | "plots" | "school" | "clubhouse" | "park" | "commercial";
  tagline: string;
  startingPrice: string;
  carpetArea: string;
  possession: string;
  highlights: string[];
  description: string;
  hotspot: { x: number; y: number };
}

const MASTERPLAN_SECTORS: SectorData[] = [
  {
    id: "towers",
    name: "Sky Towers A, B & C",
    badge: "G+30 High-Rise Living",
    category: "residential",
    tagline: "Luxury 2 & 3 BHK High-Rise Residences",
    startingPrice: "₹72.99 Lakhs*",
    carpetArea: "757 - 1,053 sq.ft",
    possession: "December 2027",
    highlights: [
      "Vastu-compliant East/West Facing Layouts",
      "Expansive Private Sun Deck Balconies",
      "High-speed Otis Elevators & Smart Intercom",
      "Unobstructed Views of Mula-Mutha Riverbank"
    ],
    description: "Architecturally crafted G+30 high-rise residential towers offering panoramic skyline views of Pune East with premium Italian-finish vitrified flooring.",
    hotspot: { x: 30, y: 38 }
  },
  {
    id: "plots",
    name: "Sovereign NA Villa Plots",
    badge: "Landed Sovereign Legacy",
    category: "plots",
    tagline: "Private Bungalow Plots with Individual 7/12",
    startingPrice: "₹1.49 Crore*",
    carpetArea: "1,700 - 3,500+ sq.ft",
    possession: "Ready for Registration",
    highlights: [
      "Individual 7/12 Extract & Clear Title",
      "Complete Infrastructure: Water, Power & Wide Internal Roads",
      "Permission for G+2 Custom Bungalow Construction",
      "Zero Land Share Dilution • High Capital Growth"
    ],
    description: "Pune East's rare opportunity to own individual NA bungalow land within a 150-acre master-planned gated sanctuary with world-class community security.",
    hotspot: { x: 72, y: 35 }
  },
  {
    id: "clubhouse",
    name: "The Grand 1-Lakh Sq.Ft Clubhouse",
    badge: "Premier Wellness Suite",
    category: "clubhouse",
    tagline: "Olympic-Sized Lap Pool & Sports Arena",
    startingPrice: "Exclusive to Residents",
    carpetArea: "1,00,000 sq.ft Space",
    possession: "Phased Handover 2027",
    highlights: [
      "Olympic-Sized Swimming Pool & Kids Splash Zone",
      "Badminton, Squash & Indoor Basketball Courts",
      "State-of-the-art TechnoGym Cardio Suite",
      "Banqueting Hall & Private Screening Theatre"
    ],
    description: "One of Pune's largest township clubhouses spanning nearly 1 Lakh sq.ft, designed to cater to wellness, sports tournaments, and high-society gatherings.",
    hotspot: { x: 50, y: 55 }
  },
  {
    id: "school",
    name: "Podar International School Campus",
    badge: "On-Campus K-12 CBSE",
    category: "school",
    tagline: "Zero-Commute Walk-to-School Safety",
    startingPrice: "Admissions Open",
    carpetArea: "Multi-Acre Campus",
    possession: "Operational on Campus",
    highlights: [
      "Direct Gated Walkway from Towers (Zero Main Road Crossing)",
      "CBSE Affiliation with STEM Laboratories",
      "Full-sized Football Ground & Athletic Track",
      "Complete Peace of Mind for Working Parents"
    ],
    description: "Located right inside the township gates, Podar International School allows your children to walk safely to school in under 3 minutes.",
    hotspot: { x: 38, y: 75 }
  },
  {
    id: "park",
    name: "5-Acre Central Eco-Park & Lakes",
    badge: "Green Lung Sanctuary",
    category: "park",
    tagline: "Oxygen-Rich Forest Trails & Promenade",
    startingPrice: "Township Amenity",
    carpetArea: "5+ Acres Green Cover",
    possession: "Continuous Greenery",
    highlights: [
      "1,000+ Native Planted Shaded Trees",
      "1.5 km Continuous Jogging & Cycling Track",
      "Zen Meditation Pergolas & Senior Citizen Plaza",
      "Bird-watching Promenade & Reflexology Pathways"
    ],
    description: "A continuous ribbon of biodiversity that keeps the local Air Quality Index (AQI) at green levels, giving residents clean, crisp air every day.",
    hotspot: { x: 62, y: 72 }
  }
];

export default function MasterplanSectorInspector() {
  const [activeSector, setActiveSector] = useState<SectorData>(MASTERPLAN_SECTORS[0]);
  const { openModal } = useModal();

  return (
    <section className="py-24 bg-warm-bg text-primary relative overflow-hidden" id="masterplan-inspector">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="badge-gold">
            <Sparkles size={12} className="text-accent" />
            <span>Interactive 150-Acre Masterplan</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary tracking-tight">
            Explore the Township <span className="text-gradient-gold">Sector by Sector</span>
          </h2>
          <p className="text-sm md:text-base text-primary/70 max-w-2xl mx-auto">
            Click on any sector below to inspect architectural layouts, live inventory availability, and infrastructure connectivity across our 150-acre integrated mega-township.
          </p>
        </div>

        {/* Sector Navigation Pill Selector */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {MASTERPLAN_SECTORS.map((sector) => {
            const isSelected = activeSector.id === sector.id;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveSector(sector)}
                className={cn(
                  "px-4 py-2.5 rounded-full text-xs font-sans font-medium whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm",
                  isSelected
                    ? "bg-[#0D0B08] text-accent border border-accent/40 shadow-md scale-105 font-semibold"
                    : "bg-white text-stone-600 border border-stone-200 hover:border-accent/40 hover:text-primary"
                )}
              >
                {sector.category === "residential" && <Building2 size={14} className={isSelected ? "text-accent" : "text-stone-400"} />}
                {sector.category === "plots" && <Landmark size={14} className={isSelected ? "text-accent" : "text-stone-400"} />}
                {sector.category === "clubhouse" && <Trophy size={14} className={isSelected ? "text-accent" : "text-stone-400"} />}
                {sector.category === "school" && <School size={14} className={isSelected ? "text-accent" : "text-stone-400"} />}
                {sector.category === "park" && <Trees size={14} className={isSelected ? "text-accent" : "text-stone-400"} />}
                <span>{sector.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Visual Blueprint Canvas */}
          <div className="lg:col-span-7 bg-[#12100D] rounded-[2.5rem] p-6 md:p-8 relative border border-white/15 overflow-hidden shadow-2xl flex flex-col justify-between min-h-[460px]">
            {/* Background Masterplan Graphic Simulation */}
            <div 
              className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B08] via-transparent to-[#0D0B08]/70" />

            {/* Interactive Blueprint Gridlines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            {/* Live Interactive Hotspots */}
            <div className="relative z-10 flex-1 w-full h-full min-h-[300px]">
              {MASTERPLAN_SECTORS.map((sector) => {
                const isSelected = activeSector.id === sector.id;
                return (
                  <button
                    key={sector.id}
                    onClick={() => setActiveSector(sector)}
                    style={{ left: `${sector.hotspot.x}%`, top: `${sector.hotspot.y}%` }}
                    className={cn(
                      "absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-300 focus:outline-none",
                      isSelected ? "scale-125 z-30" : "scale-100 z-20 hover:scale-110"
                    )}
                    aria-label={`Inspect ${sector.name}`}
                  >
                    {/* Pulsing Ripple Halo */}
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                      isSelected 
                        ? "bg-accent text-[#0D0B08] shadow-[0_0_25px_rgba(212,154,31,0.9)] ring-4 ring-accent/30" 
                        : "bg-white/20 text-white backdrop-blur-md border border-white/40 hover:bg-accent hover:text-[#0D0B08]"
                    )}>
                      {sector.category === "residential" && <Building2 size={16} />}
                      {sector.category === "plots" && <Landmark size={16} />}
                      {sector.category === "clubhouse" && <Trophy size={16} />}
                      {sector.category === "school" && <School size={16} />}
                      {sector.category === "park" && <Trees size={16} />}
                    </div>

                    {/* Sector Tooltip Tag */}
                    <div className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded-full text-[10px] font-sans font-bold whitespace-nowrap transition-all shadow-lg pointer-events-none",
                      isSelected 
                        ? "bg-accent text-[#0D0B08] opacity-100" 
                        : "bg-[#0D0B08]/90 text-stone-200 border border-white/15 opacity-0 group-hover:opacity-100"
                    )}>
                      {sector.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Masterplan Footer Status */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white font-medium">150-Acre Master Township Infrastructure Operational</span>
              </div>
              <span className="hidden sm:inline-block font-mono text-[11px] text-accent">MahaRERA P52100052096</span>
            </div>
          </div>

          {/* Right Detailed Inspector Panel */}
          <div className="lg:col-span-5 bg-white border border-stone-200 rounded-[2.5rem] p-6 md:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSector.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Sector Badge & Title */}
                <div className="space-y-2">
                  <div className="badge-gold">
                    <Sparkles size={11} className="text-accent" />
                    <span>{activeSector.badge}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">
                    {activeSector.name}
                  </h3>
                  <p className="text-xs md:text-sm text-stone-600 font-sans leading-relaxed">
                    {activeSector.description}
                  </p>
                </div>

                {/* Quick Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 p-4 bg-[#FAF9F5] border border-stone-200 rounded-2xl">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-500 block">Launch Pricing</span>
                    <span className="text-lg font-heading font-bold text-accent">{activeSector.startingPrice}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-500 block">Area Scale</span>
                    <span className="text-sm font-sans font-bold text-primary mt-0.5 block">{activeSector.carpetArea}</span>
                  </div>
                </div>

                {/* Architectural Highlights List */}
                <div className="space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary block">Sector Specifications</span>
                  <ul className="space-y-2">
                    {activeSector.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 font-sans">
                        <div className="w-4 h-4 rounded-full bg-accent/15 flex items-center justify-center text-accent shrink-0 mt-0.5">
                          <ChevronRight size={12} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Action Button */}
            <div className="pt-6 mt-6 border-t border-stone-200 space-y-3">
              <button
                onClick={() => openModal({
                  title: `Inspect ${activeSector.name}`,
                  subtitle: `Request complete sector layout drawings, floor plans, and pricing sheet for ${activeSector.name}.`,
                  source: `Masterplan Inspector: ${activeSector.name}`
                })}
                className="w-full btn-gold py-3.5 rounded-full font-sans font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Download size={14} />
                <span>DOWNLOAD {activeSector.name.toUpperCase()} DOSSIER</span>
              </button>

              <div className="flex items-center justify-between text-[10px] text-stone-500 font-medium px-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={12} className="text-emerald-600" />
                  100% Clear Title Verification
                </span>
                <span>Immediate Handover Support</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
