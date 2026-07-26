"use client";

import { useState } from "react";
import { Navigation, Car, Bike, ShieldCheck, MapPin } from "lucide-react";

const COMMUTES = [
  { destination: "Magarpatta Cybercity", distance: "4.2 km", carTime: "10 Mins", bikeTime: "8 Mins", category: "IT Hub" },
  { destination: "Kharadi EON IT Park", distance: "6.5 km", carTime: "12 Mins", bikeTime: "10 Mins", category: "Tech Hub" },
  { destination: "World Trade Center Pune", distance: "6.8 km", carTime: "14 Mins", bikeTime: "11 Mins", category: "Financial Hub" },
  { destination: "Amanora Mall & Town Centre", distance: "3.8 km", carTime: "9 Mins", bikeTime: "7 Mins", category: "Shopping & Dining" },
  { destination: "SP Infocity (Phursungi)", distance: "7.0 km", carTime: "15 Mins", bikeTime: "12 Mins", category: "IT SEZ" },
  { destination: "Pune International Airport", distance: "14.5 km", carTime: "25 Mins", bikeTime: "22 Mins", category: "Aviation" }
];

export default function CommuteTimeMatrix() {
  const [mode, setMode] = useState<"car" | "bike">("car");

  return (
    <section className="py-24 bg-warm-bg border-t border-primary/10 relative overflow-hidden" id="commute-matrix">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-[11px] uppercase tracking-widest">
            <Navigation size={14} /> Real-Time Transit Matrix
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary tracking-tight">
            Seamless <span className="text-gradient-gold">IT Hub Connectivity</span>
          </h2>
          <p className="text-sm md:text-base text-primary/60">
            Strategic location advantage via the new Manjari bridge corridor connecting directly to Magarpatta & Kharadi.
          </p>

          {/* Mode Switcher */}
          <div className="inline-flex p-1.5 rounded-full bg-primary/5 border border-primary/10 mt-4">
            <button
              onClick={() => setMode("car")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono transition-all ${
                mode === "car" ? "bg-accent text-white font-bold shadow-lg" : "text-primary/60 hover:text-primary"
              }`}
            >
              <Car size={14} /> Four-Wheeler (Car / Cab)
            </button>
            <button
              onClick={() => setMode("bike")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono transition-all ${
                mode === "bike" ? "bg-accent text-white font-bold shadow-lg" : "text-primary/60 hover:text-primary"
              }`}
            >
              <Bike size={14} /> Two-Wheeler (Bike)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMMUTES.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-primary/10 rounded-3xl p-6 hover:border-accent/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono text-accent border-b border-primary/10 pb-3">
                  <span>{item.category}</span>
                  <span className="text-primary/60 font-mono">{item.distance}</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-primary">{item.destination}</h3>
              </div>

              <div className="mt-6 pt-4 border-t border-primary/10 flex items-center justify-between">
                <span className="text-xs text-primary/60 font-mono">Transit Time</span>
                <span className="text-xl font-bold font-mono text-emerald-600 flex items-center gap-1.5">
                  {mode === "car" ? <Car size={18} /> : <Bike size={18} />}
                  {mode === "car" ? item.carTime : item.bikeTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
