"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Car, MapPin, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { useModal } from "@/lib/modal-context";

export default function SiteVisitScheduler() {
  const { openModal } = useModal();
  const [selectedPickup, setSelectedPickup] = useState("Magarpatta / Hadapsar");

  const PICKUP_LOCATIONS = [
    "Magarpatta / Hadapsar",
    "Kharadi / EON IT Park",
    "Pune International Airport",
    "Pune Station / Camp",
    "Viman Nagar / Kalyani Nagar"
  ];

  return (
    <section className="py-24 bg-warm-bg text-primary relative overflow-hidden" id="site-visit">
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="bg-gradient-to-r from-accent/10 via-primary/5 to-transparent border border-accent/30 rounded-[3.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl backdrop-blur-3xl">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-[10px] uppercase tracking-[0.3em]">
                <Car size={14} />
                Complimentary VIP Pickup
              </div>

              <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary tracking-tight">
                Experience <span className="text-accent italic">Kumar Magnacity</span> In Person
              </h2>

              <p className="text-primary/60 text-sm md:text-base font-light leading-relaxed">
                Book a private site visit today. We provide complimentary AC cab pickup and drop-off from anywhere in Pune East, plus an exclusive tour of the Podar International School campus, sample apartments, and the ~1 Lakh sq.ft clubhouse site.
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs text-primary/40 uppercase font-bold tracking-widest">Select Pickup Region:</span>
                <div className="flex flex-wrap gap-2">
                  {PICKUP_LOCATIONS.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => setSelectedPickup(loc)}
                      className={`px-4 py-2 rounded-xl text-xs font-medium transition-all border ${
                        selectedPickup === loc
                          ? "bg-accent text-white border-accent font-bold"
                          : "bg-primary/5 text-primary/70 border-primary/10 hover:border-accent/30"
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white border border-primary/10 rounded-[3rem] p-8 md:p-10 text-center space-y-6 shadow-2xl backdrop-blur-2xl">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center text-accent mx-auto border border-accent/30 animate-pulse">
                <Calendar size={28} />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-heading font-bold text-primary">Book VIP Walkthrough</h3>
                <p className="text-xs text-primary/60">
                  Pickup Region: <span className="text-accent font-bold">{selectedPickup}</span>
                </p>
              </div>

              <button
                onClick={() => openModal({
                  title: "Book VIP Site Visit",
                  subtitle: `Complimentary cab pickup requested for ${selectedPickup}.`,
                  source: `Site Visit Scheduler - ${selectedPickup}`
                })}
                className="w-full bg-accent text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl transition-all flex items-center justify-center gap-3 hover:bg-accent-hover text-xs shadow-xl"
              >
                SCHEDULE PRIVATE CAB PICKUP
                <ArrowRight size={16} />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-primary/40 uppercase tracking-widest">
                <ShieldCheck size={12} className="text-accent" />
                Zero Cost • No Obligation Visit
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
