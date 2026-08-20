"use client";

import { motion } from "framer-motion";
import { Trees, Warehouse, Droplets, Trophy, ShieldCheck, HeartPulse, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const amenities = [
  {
    icon: <Warehouse size={28} />,
    title: "1 Lakh Sq.ft Clubhouse",
    subtitle: "The Magnum Opus",
    desc: "A massive central social hub featuring banquet halls, luxury lounges, private screening theatre, and fine dining.",
    category: "Social"
  },
  {
    icon: <Trophy size={28} />,
    title: "Olympic Sports Arena",
    subtitle: "Podium Performance",
    desc: "Professional indoor badminton, squash, basketball, and tennis courts within a secure gated ecosystem.",
    category: "Sports"
  },
  {
    icon: <Droplets size={28} />,
    title: "Eco-Filtration Lakes",
    subtitle: "Sustainable Serenity",
    desc: "Natural water bodies integrated into the 150-acre masterplan providing pleasant micro-climates and natural cooling.",
    category: "Nature"
  },
  {
    icon: <HeartPulse size={28} />,
    title: "Wellness Sanctuary",
    subtitle: "Mind & Body",
    desc: "State-of-the-art TechnoGym cardio studio, open-air sunrise yoga decks, and dedicated zen meditation zones.",
    category: "Wellness"
  },
  {
    icon: <Trees size={28} />,
    title: "25-Acre Greens",
    subtitle: "Infinite Oxygen",
    desc: "Vast landscaped gardens, peripheral Miyawaki forests, and a continuous 1.5 km jogging and cycling track.",
    category: "Nature"
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Tier-IV 360° Security",
    subtitle: "Gated Sanctuary",
    desc: "AI-monitored perimeter surveillance, RFID vehicle boom barriers, and 24/7 on-ground security patrols.",
    category: "Safety"
  }
];

export default function AmenityGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {amenities.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="group relative h-full"
        >
          <div className="h-full p-8 md:p-10 rounded-[2.5rem] bg-white border border-stone-200/90 hover:border-accent/60 transition-all duration-500 flex flex-col justify-between space-y-8 relative overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer">
            
            {/* Ambient Corner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full group-hover:bg-accent/15 transition-all duration-500 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300 shadow-sm border border-accent/25">
                {item.icon}
              </div>

              <div className="space-y-2">
                <div className="badge-gold">
                  <span>{item.category} • {item.subtitle}</span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-600 font-sans font-medium text-xs md:text-sm leading-relaxed pt-1">
                  {item.desc}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-accent uppercase tracking-wider group-hover:translate-x-1 transition-transform">
              <span>EXPLORE AMENITY</span>
              <ArrowRight size={14} />
            </div>

          </div>
        </motion.div>
      ))}
    </div>
  );
}
