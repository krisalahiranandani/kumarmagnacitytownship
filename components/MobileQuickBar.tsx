"use client";

import { Phone, MessageSquare, Calendar } from "lucide-react";
import { useModal } from "@/lib/modal-context";

export default function MobileQuickBar() {
  const { openModal } = useModal();

  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-[9999] bg-dark/95 backdrop-blur-2xl border border-white/20 rounded-full p-2 shadow-2xl flex items-center justify-between ring-1 ring-white/10">
      {/* 1-Tap Direct Phone Call */}
      <a
        href="tel:+919225512120"
        className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-full bg-white/10 text-white font-bold text-xs hover:bg-white/20 transition-all border border-white/10"
      >
        <Phone size={15} className="text-emerald-400" />
        <span>Call Now</span>
      </a>

      {/* Instant WhatsApp Lead */}
      <a
        href="https://wa.me/919225512120?text=Hi,%20I%20want%20to%20know%20more%20about%20Kumar%20Magnacity%20Township%20Hadapsar%20Annexe."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-full bg-emerald-500 text-white font-bold text-xs hover:bg-emerald-400 transition-all shadow-lg mx-1.5"
      >
        <MessageSquare size={15} className="fill-white" />
        <span>WhatsApp</span>
      </a>

      {/* Book VIP Site Visit */}
      <button
        onClick={() => openModal({ title: "VIP Site Visit", source: "Mobile Quick Dock" })}
        className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-full bg-accent text-white font-bold text-xs hover:bg-accent/90 transition-all shadow-lg"
      >
        <Calendar size={15} />
        <span>Book Visit</span>
      </button>
    </div>
  );
}
