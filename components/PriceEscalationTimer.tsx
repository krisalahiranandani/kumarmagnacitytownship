"use client";

import { useState, useEffect } from "react";
import { AlertCircle, ArrowRight, TrendingUp } from "lucide-react";
import { useModal } from "@/lib/modal-context";

export default function PriceEscalationTimer() {
  const { openModal } = useModal();
  const [timeLeft, setTimeLeft] = useState({ hours: 48, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 48, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 py-3.5 px-6 border-y border-amber-400/40 shadow-xl">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-3 text-dark">
        <div className="flex items-center gap-2 text-xs md:text-sm font-bold tracking-wide text-center md:text-left">
          <TrendingUp size={18} className="shrink-0 animate-bounce" />
          <span>Launch Offer Alert: <span className="font-extrabold underline">Upcoming ₹200/Sq.Ft Price Revision</span> across Phase 1 inventory!</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 font-mono text-xs font-bold bg-black/20 px-3 py-1 rounded-full text-white">
            <span>{String(timeLeft.hours).padStart(2, "0")}h</span>:
            <span>{String(timeLeft.minutes).padStart(2, "0")}m</span>:
            <span>{String(timeLeft.seconds).padStart(2, "0")}s</span>
          </div>

          <button
            onClick={() => openModal("Lock Launch Price Before Revision")}
            className="px-4 py-1.5 rounded-full bg-primary text-white font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-primary transition-all flex items-center gap-1 shadow-md whitespace-nowrap"
          >
            Lock Price Now <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
