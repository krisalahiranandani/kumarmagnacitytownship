"use client";

import { Sun, Leaf, Droplets, Zap, ShieldCheck } from "lucide-react";

const ECO_FEATURES = [
  {
    icon: Sun,
    title: "Rooftop Solar Generation",
    metric: "40% Common Power Savings",
    description: "Grid-tied solar photovoltaic system powering high-rise lifts, clubhouse lighting, and perimeter security."
  },
  {
    icon: Leaf,
    title: "26-Acre Peripheral Greens",
    metric: "Oxygen-Rich Microclimate",
    description: "Extensive native tree plantations, botanical walking trails, and open air oxygen zones."
  },
  {
    icon: Droplets,
    title: "Rainwater & ZLD STP Plant",
    metric: "Zero Liquid Discharge",
    description: "100% recycled water management for landscape irrigation and flushing systems."
  },
  {
    icon: Zap,
    title: "EV Charging Infrastructure",
    metric: "Fast EV Charging Bays",
    description: "Dedicated electric vehicle charging points for resident car parking slots."
  }
];

export default function SolarSustainabilitySuite() {
  return (
    <section className="py-24 bg-warm-bg border-t border-primary/10 relative overflow-hidden" id="sustainability-suite">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 font-mono text-[11px] uppercase tracking-widest">
            <Leaf size={14} /> Eco-Friendly Smart Township
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary tracking-tight">
            Sustainable <span className="text-gradient-gold">Green Architecture</span>
          </h2>
          <p className="text-sm md:text-base text-primary/60">
            Engineered for long-term ecological balance and reduced maintenance overheads for apartment owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ECO_FEATURES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-primary/10 hover:border-emerald-500/50 rounded-3xl p-6 transition-all shadow-sm group"
              >
                <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-600 block mb-1">
                  {item.metric}
                </span>
                <h3 className="text-lg font-serif font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-xs text-primary/60 leading-relaxed font-sans">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
