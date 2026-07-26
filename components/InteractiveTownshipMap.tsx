"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Building2, School, Landmark, ShoppingBag, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { useModal } from "@/lib/modal-context";

interface Sector {
  id: string;
  name: string;
  category: "residential" | "plots" | "school" | "clubhouse" | "commercial";
  tagline: string;
  price: string;
  specs: string;
  description: string;
  icon: any;
  color: string;
  hotspotPos: { x: string; y: string };
}

const SECTORS: Sector[] = [
  {
    id: "sector-1",
    name: "Sector 1: High-Rise Luxury Residences",
    category: "residential",
    tagline: "G+30 Towers with Panoramic Views",
    price: "From ₹72.99 Lacs*",
    specs: "2 BHK (757 sq.ft) & 3 BHK (1053 sq.ft)",
    description: "Modern high-rise towers designed with Vastu compliance, vitrified flooring, private balconies, and smart home automation points.",
    icon: Building2,
    color: "from-accent via-accent-hover to-[#C5A059]",
    hotspotPos: { x: "25%", y: "35%" }
  },
  {
    id: "sector-2",
    name: "Sector 2: Sovereign NA Villa Plots",
    category: "plots",
    tagline: "Bungalow Plots with Individual 7/12",
    price: "From ₹1.49 Crore* + taxes",
    specs: "1700+ sq.ft Custom Plots",
    description: "Build your dream custom bungalow within a secure gated community. Complete NA titles and individual 7/12 extract documentation.",
    icon: Landmark,
    color: "from-amber-400 to-yellow-600",
    hotspotPos: { x: "65%", y: "45%" }
  },
  {
    id: "sector-3",
    name: "Sector 3: Podar International School",
    category: "school",
    tagline: "Premier K-12 Education Inside Campus",
    price: "On-Campus Facility",
    specs: "World-class Sports & Academic Infrastructure",
    description: "World-class education right within your township gate. Children walk to school without ever stepping out onto main city traffic.",
    icon: School,
    color: "from-blue-400 to-indigo-600",
    hotspotPos: { x: "40%", y: "70%" }
  },
  {
    id: "sector-4",
    name: "Sector 4: ~1 Lakh Sq.Ft Mega Clubhouse",
    category: "clubhouse",
    tagline: "Grand Recreation & Social Hub",
    price: "Exclusive Resident Access",
    specs: "Olympic Pool, Tennis Courts, Indoor Arenas",
    description: "The magnum opus social center featuring temperature-controlled pools, badminton courts, squash courts, spa, and banquet halls.",
    icon: ShieldCheck,
    color: "from-emerald-400 to-teal-600",
    hotspotPos: { x: "75%", y: "25%" }
  },
  {
    id: "sector-5",
    name: "Sector 5: High-Street Retail & Health Hub",
    category: "commercial",
    tagline: "Daily Essentials & Healthcare",
    price: "Integrated High Street",
    specs: "Pharmacies, Cafes, Grocery Superstores",
    description: "High-street retail promenade bringing cafes, boutique shopping, pharmacies, and primary healthcare centers to your doorstep.",
    icon: ShoppingBag,
    color: "from-purple-400 to-violet-600",
    hotspotPos: { x: "50%", y: "20%" }
  }
];

export default function InteractiveTownshipMap() {
  const [selectedSector, setSelectedSector] = useState<Sector>(SECTORS[0]);
  const { openModal } = useModal();

  return (
    <section className="py-24 bg-warm-bg text-primary relative overflow-hidden" id="township-map">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,162,39,0.06),transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-[10px] uppercase tracking-[0.3em] shadow-xl">
            <Sparkles size={14} className="animate-pulse" />
            100+ Acre Master Plan Visualizer
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight">
            Explore <span className="text-accent italic">The Mega Township</span>
          </h2>
          <p className="text-primary/50 max-w-2xl mx-auto text-sm md:text-base font-light">
            Click on any sector in the interactive layout to inspect floor plans, pricing, and infrastructure features.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Interactive Map Visualizer Canvas */}
          <div className="lg:col-span-7 bg-primary/5 border border-primary/10 rounded-[3rem] p-6 md:p-10 relative min-h-[420px] md:min-h-[500px] flex items-center justify-center overflow-hidden shadow-2xl backdrop-blur-2xl group">
            {/* Background Map Grid Styling */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-warm-bg/80 via-transparent to-warm-bg/80 pointer-events-none" />

            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
              <span className="text-[10px] font-bold text-accent uppercase tracking-[0.4em] mb-4 bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
                100+ ACRE TOWNSHIP LAYOUT
              </span>
              <p className="text-xs text-primary/30 mb-8 uppercase tracking-widest font-mono">Click Hotspot Pin to Switch Sector</p>

              {/* Hotspot Pins */}
              <div className="relative w-full max-w-md aspect-[16/10] bg-primary/10 border border-primary/10 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#C5A059_1px,transparent_1px)] bg-[size:16px_16px]" />
                
                {SECTORS.map((sector) => {
                  const isSelected = selectedSector.id === sector.id;
                  const Icon = sector.icon;
                  return (
                    <button
                      key={sector.id}
                      onClick={() => setSelectedSector(sector)}
                      style={{ left: sector.hotspotPos.x, top: sector.hotspotPos.y }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group/pin focus:outline-none transition-transform hover:scale-125 z-20"
                    >
                      <div className="relative flex items-center justify-center">
                        {isSelected && (
                          <span className="absolute w-12 h-12 rounded-full bg-accent/40 animate-ping" />
                        )}
                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-2xl border transition-all duration-300 ${
                          isSelected 
                            ? "bg-accent text-white border-white scale-110 shadow-[0_0_20px_rgba(201,162,39,0.8)]" 
                            : "bg-dark/90 text-white/80 border-white/20 hover:border-accent hover:text-accent"
                        }`}>
                          <Icon size={18} />
                        </div>
                        <span className="absolute left-1/2 -bottom-6 -translate-x-1/2 whitespace-nowrap text-[9px] font-bold tracking-widest text-white/90 bg-dark/90 px-2 py-0.5 rounded-full border border-white/10 shadow-lg">
                          {sector.name.split(":")[0]}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sector Details Panel */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSector.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-primary/5 border border-primary/10 rounded-[3rem] p-8 md:p-10 space-y-8 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent font-bold text-[10px] uppercase tracking-widest">
                    {selectedSector.category.toUpperCase()}
                  </div>
                  <span className="text-xs text-accent font-bold tracking-wider">{selectedSector.price}</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary tracking-tight">
                    {selectedSector.name}
                  </h3>
                  <p className="text-xs text-accent/80 font-bold uppercase tracking-widest">
                    {selectedSector.tagline}
                  </p>
                  <p className="text-sm text-primary/60 leading-relaxed font-light pt-2">
                    {selectedSector.description}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-primary/[0.03] border border-primary/5 space-y-1">
                  <span className="text-[9px] text-primary/40 uppercase tracking-widest font-bold">Sector Specifications</span>
                  <p className="text-sm font-semibold text-primary">{selectedSector.specs}</p>
                </div>

                <button
                  onClick={() => openModal({
                    title: `Enquire: ${selectedSector.name}`,
                    subtitle: `Request detailed brochure and pricing for ${selectedSector.name}.`,
                    source: `Township Map - ${selectedSector.name}`
                  })}
                  className="w-full bg-gradient-to-r from-accent to-accent-hover text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-[0_20px_40px_-10px_rgba(201,162,39,0.3)] hover:scale-[1.02] active:scale-95 text-xs"
                >
                  REQUEST SECTOR BROCHURE
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
