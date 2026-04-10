"use client";

import { useState, useEffect } from "react";
import { Phone, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SovereignBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={cn(
        "fixed bottom-0 left-0 w-full z-[10001] md:hidden transition-all duration-500",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      )}
    >
      <div className="bg-primary/85 backdrop-blur-2xl border-t border-accent/30 py-4 px-6 flex items-center justify-between gap-4 shadow-[0_-10px_30px_rgba(0,0,0,0.2)]">
        <a 
          href="tel:+917744009295"
          className="flex-1 flex items-center justify-center gap-2 bg-accent text-white py-3 rounded-xl font-bold uppercase tracking-wider text-[12px] active:scale-95 transition-all shadow-lg"
        >
          <Phone size={16} />
          Call Now
        </a>
        <a 
          href="https://wa.me/917744009295?text=Hi!%20Interested%20in%20Kumar%20Magnacity%20Bungalow%20Plots."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-bold uppercase tracking-wider text-[12px] active:scale-95 transition-all shadow-lg"
        >
          <MessageSquare size={16} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
