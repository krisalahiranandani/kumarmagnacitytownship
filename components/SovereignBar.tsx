"use client";

import { useState, useEffect } from "react";
import { useModal } from "@/lib/modal-context";
import { Phone, MessageSquare, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SovereignBar() {
  const { openModal } = useModal();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
          exit={{ y: 100, x: "-50%", opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[10001] md:hidden w-[90%] max-w-[360px]"
        >
          <div className="bg-[#0D0B08]/85 backdrop-blur-2xl border border-white/15 p-1.5 rounded-full flex items-center justify-between gap-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
            <a 
              href="tel:+919225512120"
              className="flex-1 flex items-center justify-center gap-1.5 bg-white/10 text-stone-200 py-2.5 rounded-full active:scale-95 transition-all text-xs font-sans font-medium"
            >
              <Phone size={13} className="text-accent" />
              <span>Call</span>
            </a>
            
            <button 
              onClick={() => openModal({ title: "Priority Briefing", source: "Dynamic Island Mobile" })}
              className="flex-[1.4] btn-gold py-2.5 rounded-full active:scale-95 transition-all text-xs font-sans font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
            >
               <Sparkles size={13} className="text-primary" />
               <span>Enquire</span>
            </button>
            
            <a 
              href="https://wa.me/917744009295?text=Hi!%20I%20want%20the%20brochure%20and%20price%20list%20for%20Kumar%20Magnacity."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-500/15 text-emerald-400 py-2.5 rounded-full active:scale-95 transition-all border border-emerald-500/25 text-xs font-sans font-medium"
            >
              <MessageSquare size={13} />
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
