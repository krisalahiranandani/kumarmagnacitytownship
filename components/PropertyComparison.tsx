"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { useModal } from "@/lib/modal-context";

interface PropertyOption {
  type: string;
  badge: string;
  carpetArea: string;
  price: string;
  emi: string;
  possession: string;
  idealFor: string;
  features: string[];
}

const PROPERTY_OPTIONS: PropertyOption[] = [
  {
    type: "2 BHK Luxury Apartment",
    badge: "Smart Luxury",
    carpetArea: "757 sq.ft",
    price: "₹72.99 Lacs*",
    emi: "₹19,800/mo*",
    possession: "December 2028",
    idealFor: "IT Professionals & First-Time Buyers",
    features: [
      "Vastu-compliant East/West Facing",
      "Private Deck Balcony",
      "Vitrified Flooring Throughout",
      "Pre-fitted AC Points in Bedrooms",
      "Access to 1 Lakh Sq.Ft Clubhouse",
      "Podar School inside Township"
    ]
  },
  {
    type: "3 BHK Luxury Apartment",
    badge: "Family Suite",
    carpetArea: "1,053 sq.ft",
    price: "₹1.05 Cr*",
    emi: "₹28,500/mo*",
    possession: "December 2028",
    idealFor: "Growing Families & Senior Executives",
    features: [
      "3 Bedrooms + 2 Attached Bathrooms",
      "Expansive Living & Dining Layout",
      "Granite Kitchen Counter & SS Sink",
      "Pooja Nook / Home Office Space",
      "High-Speed Automatic Lifts",
      "Podar School inside Township"
    ]
  },
  {
    type: "NA Villa Bungalow Plot",
    badge: "Landed Legacy",
    carpetArea: "1,700+ sq.ft",
    price: "₹1.49 Cr* + taxes",
    emi: "Custom Loan",
    possession: "Immediate Possession",
    idealFor: "Bungalow Buyers & Land Investors",
    features: [
      "Individual 7/12 Extract Title",
      "100% Legal RERA Clearance",
      "Custom G+2 Bungalow Architecture",
      "Gated Infrastructure & Underground Cables",
      "Generational Wealth Appreciation",
      "Full Township Amenities Access"
    ]
  }
];

export default function PropertyComparison() {
  const { openModal } = useModal();

  return (
    <section className="py-24 bg-warm-bg text-primary relative overflow-hidden" id="compare">
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-[10px] uppercase tracking-[0.3em] shadow-xl">
            <Sparkles size={14} className="animate-pulse" />
            Township Portfolio Comparison
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-primary">
            Compare <span className="text-accent italic">Your Options</span>
          </h2>
          <p className="text-primary/60 max-w-2xl mx-auto text-sm md:text-base font-light">
            Side-by-side breakdown of 2BHK, 3BHK, and NA Villa Plots at Kumar Magnacity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROPERTY_OPTIONS.map((prop, idx) => (
            <motion.div
              key={prop.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white border border-primary/10 rounded-[3rem] p-8 space-y-8 flex flex-col justify-between hover:border-accent/50 transition-all duration-500 hover:scale-[1.02] shadow-2xl relative overflow-hidden group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full border border-accent/30">
                    {prop.badge}
                  </span>
                  <span className="text-[10px] text-primary/40 uppercase tracking-widest">Kumar Magnacity</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-heading font-bold text-primary tracking-tight">{prop.type}</h3>
                  <div className="text-4xl font-heading font-bold text-accent pt-2">{prop.price}</div>
                  <p className="text-xs text-primary/40">Est. EMI: {prop.emi}</p>
                </div>

                <div className="space-y-3 pt-4 border-t border-primary/10 text-xs">
                  <div className="flex justify-between py-1 border-b border-primary/5">
                    <span className="text-primary/60">Carpet / Plot Area:</span>
                    <span className="font-bold text-primary">{prop.carpetArea}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-primary/5">
                    <span className="text-primary/60">Target Possession:</span>
                    <span className="font-bold text-primary">{prop.possession}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-primary/5">
                    <span className="text-primary/60">Ideal Profile:</span>
                    <span className="font-semibold text-accent">{prop.idealFor}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <span className="text-[10px] text-primary/40 uppercase font-bold tracking-widest">Key Highlights</span>
                  <ul className="space-y-2.5">
                    {prop.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-xs text-primary/70">
                        <Check size={14} className="text-accent shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => openModal({
                    title: `Enquire: ${prop.type}`,
                    subtitle: `Request pricing breakdown and floor plan for ${prop.type}.`,
                    source: `Comparison Card - ${prop.type}`
                  })}
                  className="w-full bg-accent text-white font-black uppercase tracking-[0.2em] py-4 rounded-2xl transition-all flex items-center justify-center gap-3 hover:bg-dark text-xs shadow-xl"
                >
                  GET FULL BREAKDOWN
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
