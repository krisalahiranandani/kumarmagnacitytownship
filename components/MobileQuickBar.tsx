"use client";

import { Phone, MessageSquare, Sparkles } from "lucide-react";
import { useModal } from "@/lib/modal-context";

export default function MobileQuickBar() {
  const { openModal } = useModal();

  return (
    <div className="md:hidden fixed bottom-3 left-4 right-4 z-[9999] bg-[#0D0B08]/85 backdrop-blur-2xl border border-white/15 rounded-full p-1 shadow-[0_12px_40px_rgba(0,0,0,0.45)] flex items-center justify-between gap-1.5">
      {/* 1-Tap Direct Phone Call */}
      <a
        href="tel:+917744009295"
        aria-label="Call Kumar Magnacity Priority Sales Desk at +91 77440 09295"
        title="Direct Call to Kumar Magnacity Hadapsar Sales Office"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-white/10 text-stone-200 font-sans font-medium text-xs hover:bg-white/15 transition-all"
      >
        <Phone size={13} className="text-accent" />
        <span>Call</span>
      </a>

      {/* Instant WhatsApp Lead */}
      <a
        href="https://wa.me/917744009295?text=Hi,%20I%20want%20to%20know%20more%20about%20Kumar%20Magnacity%20Township%20Hadapsar%20Annexe."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Kumar Magnacity Official Desk on WhatsApp"
        title="Instant WhatsApp Cost Sheet Delivery"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-emerald-500/20 text-emerald-400 font-sans font-semibold text-xs border border-emerald-500/30 hover:bg-emerald-500/30 transition-all"
      >
        <MessageSquare size={13} />
        <span>WhatsApp</span>
      </a>

      {/* Book VIP Site Visit */}
      <button
        onClick={() => openModal({ title: "Priority VIP Access", source: "Mobile Quick Dock" })}
        aria-label="Schedule VIP Experience Centre Walkthrough at Kumar Magnacity"
        title="Book Chauffeured Site Visit"
        className="flex-1 btn-gold py-2.5 rounded-full text-xs font-sans font-bold flex items-center justify-center gap-1 cursor-pointer shadow-md"
      >
        <Sparkles size={12} className="text-primary" />
        <span>Enquire</span>
      </button>
    </div>
  );
}
