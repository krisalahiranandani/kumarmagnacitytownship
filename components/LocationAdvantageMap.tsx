"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nearbyLandmarks } from "@/data/apartments";
import { cn } from "@/lib/utils";
import { MapPin, Building2, GraduationCap, Stethoscope, ShoppingBag, Train } from "lucide-react";

type Category = "all" | "it-park" | "school" | "hospital" | "shopping" | "transit";

const categoryConfig = {
  "all": { label: "All Destinations", icon: MapPin, color: "text-[#D49A1F]", bg: "bg-amber-50", border: "border-amber-300", activeBg: "bg-[#0D0B08] text-[#D49A1F] border-accent/40" },
  "it-park": { label: "IT & Tech Parks", icon: Building2, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-300", activeBg: "bg-blue-600 text-white border-blue-600" },
  "school": { label: "Schools & Colleges", icon: GraduationCap, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-300", activeBg: "bg-amber-600 text-white border-amber-600" },
  "hospital": { label: "Healthcare & Hospitals", icon: Stethoscope, color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-300", activeBg: "bg-rose-600 text-white border-rose-600" },
  "shopping": { label: "Malls & Lifestyle", icon: ShoppingBag, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-300", activeBg: "bg-purple-600 text-white border-purple-600" },
  "transit": { label: "Transit & Highways", icon: Train, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-300", activeBg: "bg-emerald-600 text-white border-emerald-600" },
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
      transition: { staggerChildren: 0.08 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section className="py-24 bg-warm-bg text-primary relative overflow-hidden" id="location">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16 space-y-4">
          <div className="badge-gold">
            <MapPin size={13} className="text-accent" />
            <span>Strategic Location Proximity</span>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-primary">
            The Center of <span className="text-gradient-gold">Everything in Pune East</span>
          </h2>
          <p className="text-sm md:text-base text-stone-600 max-w-2xl mx-auto font-sans leading-relaxed">
            Direct arterial connectivity to Magarpatta Cybercity, Kharadi EON IT Park, Solapur Highway, and upcoming Pune Ring Road while enjoying a 150-acre peaceful sanctuary.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {(Object.keys(categoryConfig) as Category[]).map((cat) => {
            const config = categoryConfig[cat];
            const Icon = config.icon;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer shadow-sm",
                  isActive 
                    ? `${config.activeBg} shadow-lg scale-105 ring-2 ring-offset-2 ring-accent/30` 
                    : "bg-white text-stone-600 border-stone-200 hover:border-stone-400 hover:text-primary"
                )}
              >
                <Icon size={15} className={isActive ? "" : config.color} />
                {config.label}
              </button>
            );
          })}
        </div>

        {/* Landmarks Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredLandmarks.map((landmark, idx) => {
              const config = categoryConfig[landmark.category as Category] || categoryConfig.all;
              const Icon = config.icon;
              return (
                <motion.div
                  key={`${landmark.name}-${idx}`}
                  layout
                  variants={item}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-md hover:shadow-xl hover:border-accent/50 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm", config.bg, config.color)}>
                        <Icon size={22} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-stone-600 font-mono">
                        {landmark.category}
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-lg mb-4 text-primary leading-snug group-hover:text-accent-dark transition-colors">{landmark.name}</h4>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-stone-100 text-xs">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-stone-600 font-bold">Distance</span>
                      <span className="font-mono font-bold text-stone-800">{landmark.distance}</span>
                    </div>
                    <div className="w-px h-6 bg-stone-200"></div>
                    <div className="flex flex-col text-right">
                      <span className="text-[10px] uppercase tracking-widest text-stone-600 font-bold">Drive Time</span>
                      <span className="font-mono text-emerald-700 font-bold">{landmark.travelTime}</span>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15134.165399551024!2d73.9828496!3d18.4948931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3aeb2585a9d%3A0xf198bb1c684e72e1!2sMagnacity%20by%20Kumar%20Realty!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Magnacity by Kumar Realty - Official Google Maps Location"
            className="w-full h-full grayscale-[5%] contrast-105 hover:grayscale-0 transition-all duration-700"
          ></iframe>
          
          {/* SEO Overlay Backlink & Official Google Business Link */}
          <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-primary/10 max-w-[300px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h4 className="font-heading font-bold text-primary text-lg leading-tight mb-1">Magnacity by Kumar Realty</h4>
            <p className="text-xs text-stone-600 mb-3 font-sans leading-relaxed">Official 150-Acre Master Township at Manjari, Hadapsar Annexe, Pune East 412307.</p>
            <a 
              href="https://www.google.com/maps/place/Magnacity+by+Kumar+Realty/@18.4948931,73.9828496,16z/data=!4m6!3m5!1s0x3bc2c3aeb2585a9d:0xf198bb1c684e72e1!8m2!3d18.4948931!4d73.9828496!16s%2Fg%2F11rzskhbtj" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[10px] uppercase font-bold tracking-wider text-accent-dark hover:text-accent transition-colors"
            >
              Open in Google Maps &rarr;
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
            <div className="px-8 py-4 rounded-full bg-white text-sm font-medium text-stone-700 shadow-sm border border-stone-200/80">
              <span className="text-accent-dark font-heading font-bold text-xl mr-2">{nearbyLandmarks.length}</span> 
              Premium destinations within a 30-minute radius of Kumar Magnacity
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
