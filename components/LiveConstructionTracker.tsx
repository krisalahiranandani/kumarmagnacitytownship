"use client";

import { useState } from "react";
import { HardHat, CheckCircle2, Calendar, Sparkles, ChevronRight, Video } from "lucide-react";
import { useModal } from "@/lib/modal-context";

const MILESTONES = [
  {
    phase: "Phase 1 - Land & Foundation",
    title: "150-Acre Land Clearing & Piling Complete",
    status: "Completed",
    date: "Q1 2025",
    description: "Deep RCC pile foundation completed across Tower A, Tower B, and Tower C footprints."
  },
  {
    phase: "Phase 2 - High-Rise RCC Slabs",
    title: "G+30 Podium & Superstructure Casting",
    status: "In Progress (Active)",
    date: "Current Status 2026",
    description: "Multi-level podium car park and high-rise slab casting underway using Aluform shuttering."
  },
  {
    phase: "Phase 3 - AAC Masonry & MEP",
    title: "AAC Blocks & Concealed Plumbing",
    status: "Scheduled Q4 2026",
    date: "Target Q4 2026",
    description: "Gypsum internal plastering, Jaquar sanitary fittings, and concealed electrical wiring."
  },
  {
    phase: "Phase 4 - Handover & Possession",
    title: "Final Fit-out & Handover Keys",
    status: "Target Dec 2027",
    date: "December 2027",
    description: "Key handover and occupancy certificate (OC) issuance for G+30 high-rise towers."
  }
];

export default function LiveConstructionTracker() {
  const { openModal } = useModal();

  return (
    <section className="py-24 bg-[#020202] border-t border-white/10 relative overflow-hidden" id="construction-tracker">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[11px] uppercase tracking-widest">
            <HardHat size={14} /> Live Construction Progress
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Transparent <span className="text-gradient-gold">Milestone Timeline</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Track real-time engineering milestones, slab casting status, and possession readiness for December 2027 delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MILESTONES.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl border transition-all flex flex-col justify-between ${
                item.status.includes("Active") || item.status.includes("Progress")
                  ? "border-accent bg-accent/10 ring-2 ring-accent/30 shadow-2xl"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 border-b border-white/10 pb-3">
                  <span>{item.date}</span>
                  <span
                    className={`font-bold px-2 py-0.5 rounded-full ${
                      item.status.includes("Completed")
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                        : item.status.includes("Active")
                        ? "bg-accent/20 text-accent border border-accent/40"
                        : "bg-white/10 text-gray-400"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <h3 className="text-base font-serif font-bold text-white leading-tight">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-accent">
                <span>{item.phase}</span>
                {item.status.includes("Completed") && <CheckCircle2 size={14} className="text-emerald-400" />}
              </div>
            </div>
          ))}
        </div>

        {/* Live Drone Video CTA */}
        <div className="mt-12 p-8 bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-3xl border border-white/15 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-accent/10 border border-accent/30 text-accent">
              <Video size={28} />
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold text-white">Request Monthly Drone Footage Report</h4>
              <p className="text-xs text-gray-400 font-mono">High-definition aerial site footage updated on the 1st of every month.</p>
            </div>
          </div>

          <button
            onClick={() => openModal("Request Monthly Construction Drone Report")}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-accent text-dark font-bold text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2 shadow-xl whitespace-nowrap"
          >
            Download HD Drone Report <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
