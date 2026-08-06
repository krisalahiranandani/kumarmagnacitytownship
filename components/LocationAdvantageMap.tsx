"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nearbyLandmarks } from "@/data/apartments";
import { cn } from "@/lib/utils";
import { MapPin, Building2, GraduationCap, Stethoscope, ShoppingBag, Train } from "lucide-react";

type Category = "all" | "it-park" | "school" | "hospital" | "shopping" | "transit";

const categoryConfig = {
  "all": { label: "All", icon: MapPin },
  "it-park": { label: "IT Parks", icon: Building2 },
  "school": { label: "Education", icon: GraduationCap },
  "hospital": { label: "Healthcare", icon: Stethoscope },
  "shopping": { label: "Lifestyle", icon: ShoppingBag },
  "transit": { label: "Connectivity", icon: Train },
};

export default function LocationAdvantageMap() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredLandmarks = activeCategory === "all" 
    ? nearbyLandmarks 
    : nearbyLandmarks.filter(l => l.category === activeCategory);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section className="py-24 bg-white text-primary relative" id="location">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/10 bg-primary/5 text-primary text-[10px] uppercase tracking-[0.3em] mb-6"
          >
            <MapPin size={12} />
            Strategic Location
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl mb-6"
          >
            The Center of <span className="text-[#0A4D3C]">Everything</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary/60 max-w-2xl mx-auto"
          >
            Connected to major IT hubs, premium educational institutions, and world-class healthcare, while retaining the tranquility of a 150-acre ecosystem.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {(Object.keys(categoryConfig) as Category[]).map((cat) => {
            const Icon = categoryConfig[cat].icon;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border",
                  isActive 
                    ? "bg-[#0A4D3C] text-white border-[#0A4D3C] shadow-lg shadow-[#0A4D3C]/20" 
                    : "bg-white text-primary/70 border-primary/10 hover:border-primary/30 hover:text-primary"
                )}
              >
                <Icon size={16} />
                {categoryConfig[cat].label}
              </button>
            );
          })}
        </div>

        {/* Landmarks Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredLandmarks.map((landmark, idx) => {
              const Icon = categoryConfig[landmark.category].icon;
              return (
                <motion.div
                  key={`${landmark.name}-${idx}`}
                  layout
                  variants={item}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="glass-white rounded-3xl p-6 border border-primary/5 hover:border-[#0A4D3C]/30 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#0A4D3C]/5 flex items-center justify-center text-[#0A4D3C] mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h4 className="font-heading text-xl mb-4 text-primary/90">{landmark.name}</h4>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-primary/40 font-bold mb-1">Distance</span>
                      <span className="font-mono text-primary/80">{landmark.distance}</span>
                    </div>
                    <div className="w-px h-8 bg-primary/10"></div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-primary/40 font-bold mb-1">Drive Time</span>
                      <span className="font-mono text-[#0A4D3C] font-medium">{landmark.travelTime}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Google Map Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full h-[500px] mt-16 rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group"
        >
          <iframe 
            src="https://maps.google.com/maps?q=kumar+magnacity+pune&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[10%] contrast-100 hover:grayscale-0 transition-all duration-700"
          ></iframe>
          
          {/* SEO Overlay Backlink */}
          <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-primary/10 max-w-[280px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h4 className="font-heading font-bold text-primary text-xl leading-tight mb-2">Kumar Magnacity Township</h4>
            <p className="text-xs text-primary/70 mb-4 font-sans leading-relaxed">Strategic 150-Acre Township in Manjari, Hadapsar Annexe, Pune East.</p>
            <a href="https://kumarmagnacitytownship.com" className="inline-block text-[10px] uppercase font-bold tracking-[0.2em] text-[#0A4D3C] hover:text-[#C9A227] transition-colors border-b border-[#0A4D3C]/30 hover:border-[#C9A227]">
              Visit Official Website &rarr;
            </a>
          </div>
        </motion.div>

        {/* Summary Stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-[#C9A227] to-transparent">
            <div className="px-8 py-4 rounded-full bg-white text-sm font-medium text-primary/80">
              <span className="text-[#0A4D3C] font-bold text-lg mr-2">{nearbyLandmarks.length}</span> 
              Premium destinations within a 30-minute radius
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
