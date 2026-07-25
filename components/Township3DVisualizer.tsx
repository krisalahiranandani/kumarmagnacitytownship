"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Compass, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { useModal } from "@/lib/modal-context";

const TOWERS = [
  {
    id: "tower-a",
    name: "Tower A (High-Rise)",
    floors: 30,
    status: "Phase 1 - Open for Booking",
    possession: "December 2027",
    typologies: ["2 BHK (757 sq.ft)", "3 BHK (1053 sq.ft)"],
    price: "₹72.99 Lakhs*",
    color: "from-amber-500/20 to-yellow-500/10",
    border: "border-amber-500/40",
    badge: "Fast Selling"
  },
  {
    id: "tower-b",
    name: "Tower B (High-Rise)",
    floors: 30,
    status: "Phase 1 - Open for Booking",
    possession: "December 2027",
    typologies: ["2 BHK (757 sq.ft)", "3 BHK (1053 sq.ft)"],
    price: "₹72.99 Lakhs*",
    color: "from-blue-500/20 to-indigo-500/10",
    border: "border-blue-500/40",
    badge: "Premium View"
  },
  {
    id: "tower-c",
    name: "Tower C (High-Rise)",
    floors: 30,
    status: "Phase 1 - New Release",
    possession: "December 2027",
    typologies: ["2 BHK (757 sq.ft)", "3 BHK (1053 sq.ft)"],
    price: "₹72.99 Lakhs*",
    color: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/40",
    badge: "Clubhouse Facing"
  }
];

export default function Township3DVisualizer() {
  const [selectedTower, setSelectedTower] = useState(TOWERS[0]);
  const { openModal } = useModal();

  return (
    <section className="py-24 bg-[#030303] relative overflow-hidden border-t border-white/10" id="3d-masterplan">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-[11px] uppercase tracking-widest">
            <Sparkles size={14} /> 3D Isometric Tower Visualizer
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Explore <span className="text-gradient-gold">G+30 High-Rise Towers</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Select a tower in the 150-acre masterplan to inspect floor counts, possession schedules, and live unit availability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-8 relative min-h-[420px] flex flex-col justify-between backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                <Compass size={16} className="text-accent animate-spin-slow" />
                Vastu Compliant East-West Orientation
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/30">
                150-Acre Masterplan
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 my-auto">
              {TOWERS.map((tower) => {
                const isSelected = selectedTower.id === tower.id;
                return (
                  <motion.button
                    key={tower.id}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedTower(tower)}
                    className={`relative p-6 rounded-2xl border text-left transition-all duration-300 bg-gradient-to-b ${tower.color} ${
                      isSelected ? "border-accent ring-2 ring-accent/40 shadow-2xl shadow-accent/20" : "border-white/10 opacity-75 hover:opacity-100"
                    }`}
                  >
                    <span className="absolute -top-3 right-3 text-[9px] font-bold uppercase tracking-wider bg-accent text-dark px-2.5 py-0.5 rounded-full shadow-md">
                      {tower.badge}
                    </span>
                    <Building2 className={`mb-3 ${isSelected ? "text-accent" : "text-gray-400"}`} size={32} />
                    <h3 className="text-sm font-bold text-white mb-1">{tower.name}</h3>
                    <p className="text-[11px] text-gray-400 font-mono">G+30 Floors</p>
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap justify-between items-center text-[11px] text-gray-400 gap-4">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-accent" /> Podar International School On-Campus</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-accent" /> ~1 Lakh Sq.Ft Clubhouse</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-accent" /> 26-Acre Green Belt</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTower.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white/5 border border-accent/30 rounded-3xl p-8 backdrop-blur-2xl space-y-6 shadow-2xl relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
                    {selectedTower.status}
                  </span>
                  <span className="text-xs font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    Possession: {selectedTower.possession}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{selectedTower.name}</h3>
                  <p className="text-xs text-gray-400">G+30 High-Rise Architecture with AAC Blocks & Gypsum Finish</p>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Structure</span>
                    <span className="font-bold text-white font-mono">G + 30 High Rise</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Available Typologies</span>
                    <span className="font-bold text-accent font-mono">2 & 3 BHK</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Starting Price</span>
                    <span className="font-bold text-emerald-400 font-mono text-base">{selectedTower.price}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">RERA Approved</span>
                    <span className="font-bold text-white font-mono">P52100052096</span>
                  </div>
                </div>

                <button
                  onClick={() => openModal(`Check Availability - ${selectedTower.name}`)}
                  className="w-full py-4 rounded-xl bg-accent text-dark font-bold text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2 group shadow-xl"
                >
                  Request Live Unit Cost Sheet <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
