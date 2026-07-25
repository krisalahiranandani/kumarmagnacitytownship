"use client";

import { useState } from "react";
import { Check, ShieldCheck, ArrowRight, Layers, Sparkles } from "lucide-react";
import { useModal } from "@/lib/modal-context";

const INVENTORY = [
  {
    type: "2 BHK Luxury Residence",
    carpet: "757 Sq.Ft Carpet",
    facing: "East-West Vastu Facing",
    tower: "Tower A & Tower B",
    launchPrice: "₹72.99 Lacs*",
    possession: "December 2027",
    features: [
      "2 Spacious Bedrooms + 2 Bathrooms",
      "Private Deck Balcony",
      "Gypsum Plaster Finish Walls",
      "Podar School Access On-Campus"
    ],
    recommended: true
  },
  {
    type: "3 BHK Premium Residence",
    carpet: "1,053 Sq.Ft Carpet",
    facing: "Panoramic High-Rise View",
    tower: "Tower B & Tower C",
    launchPrice: "₹1.05 Cr.*",
    possession: "December 2027",
    features: [
      "3 Large Bedrooms + 3 Bathrooms",
      "Foyer Entry & Master Suite",
      "Concealed Jaquar Fittings",
      "Direct View of ~1 Lakh Sq.Ft Clubhouse"
    ],
    recommended: false
  },
  {
    type: "NA Villa Bungalow Plot",
    carpet: "1,700+ Sq.Ft Plot Area",
    facing: "Custom Villa Plot Layout",
    tower: "Gated Bungalow Sector",
    launchPrice: "₹1.08 Cr.*",
    possession: "Immediate Demarcation",
    features: [
      "100% NA Sanctioned Plot",
      "Custom Architecture Freedom",
      "26-Acre Green Belt Access",
      "Demarcated Boundary Walls"
    ],
    recommended: false
  }
];

export default function PriceComparisonMatrix() {
  const { openModal } = useModal();

  return (
    <section className="py-24 bg-[#030303] border-t border-white/10 relative overflow-hidden" id="price-comparison">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-[11px] uppercase tracking-widest">
            <Layers size={14} /> Inventory & Pricing Matrix
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Compare <span className="text-gradient-gold">Residences & NA Plots</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Side-by-side comparison of carpet areas, pricing structures, possession schedules, and specification highlights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {INVENTORY.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                item.recommended
                  ? "bg-gradient-to-b from-accent/20 to-white/5 border-2 border-accent shadow-2xl shadow-accent/10"
                  : "bg-white/5 border border-white/10 hover:border-white/20"
              }`}
            >
              {item.recommended && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider bg-accent text-dark px-3 py-1 rounded-full shadow-lg">
                  Fastest Selling Typology
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-gray-400 uppercase font-bold">{item.tower}</span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-1">{item.type}</h3>
                  <p className="text-xs text-accent font-mono mt-1 font-bold">{item.carpet}</p>
                </div>

                <div className="border-t border-b border-white/10 py-4">
                  <span className="text-xs text-gray-400 block font-mono">Launch All-Inclusive Price</span>
                  <span className="text-3xl font-serif font-bold text-emerald-400">{item.launchPrice}</span>
                  <span className="text-[10px] text-gray-400 block mt-1 font-mono">Possession: {item.possession}</span>
                </div>

                <ul className="space-y-3 text-xs text-gray-300">
                  {item.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <Check size={16} className="text-accent shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => openModal(`Request Complete Cost Sheet - ${item.type}`)}
                className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 mt-8 shadow-xl ${
                  item.recommended
                    ? "bg-accent text-dark hover:bg-white"
                    : "bg-white/10 text-white hover:bg-white hover:text-dark border border-white/10"
                }`}
              >
                Request Cost Sheet & Floorplan <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
