"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, X, Building2, MapPin, Calculator, FileText, Phone, ShieldCheck, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const QUICK_ACTIONS = [
  { icon: Building2, label: "2 BHK Luxury Apartments (₹72.99L*)", path: "/kumar-magnacity-2bhk-flats-hadapsar-pune-price", category: "Residences" },
  { icon: Building2, label: "3 BHK Grand Family Suites (₹1.05Cr*)", path: "/kumar-magnacity-3bhk-apartments-manjari-pune-price", category: "Residences" },
  { icon: MapPin, label: "Sovereign NA Villa Plots (7/12 Clear)", path: "/kumar-magnacity-na-bungalow-plots-concept", category: "Land" },
  { icon: FileText, label: "Interactive Floor Plans & Layouts", path: "/kumar-magnacity-floor-plan-2bhk-3bhk", category: "Plans" },
  { icon: Calculator, label: "Real Estate ROI & EMI Calculator", path: "/roi-calculator", category: "Finance" },
  { icon: MapPin, label: "Location Map & Distance Advantages", path: "/kumar-magnacity-location-advantages-hadapsar-manjari", category: "Location" },
  { icon: ShieldCheck, label: "MahaRERA Certifications (P52100052096)", path: "/kumar-magnacity-hadapsar", category: "Compliance" },
  { icon: Phone, label: "Priority Sales Desk (+91 77440 09295)", path: "tel:+917744009295", category: "Contact" }
];

export default function QuickSearchDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filtered = QUICK_ACTIONS.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (path: string) => {
    setIsOpen(false);
    if (path.startsWith("tel:")) {
      window.location.href = path;
    } else {
      router.push(path);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-20 md:pt-28 px-4 bg-black/70 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="w-full max-w-xl bg-stone-900 border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden text-white"
          >
            {/* Search Input Bar */}
            <div className="p-4 border-b border-stone-800 flex items-center gap-3">
              <Search size={20} className="text-amber-400 shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search flats, plots, prices, location, floor plans... (ESC to exit)"
                className="w-full bg-transparent border-none text-sm text-white placeholder:text-stone-500 focus:outline-none"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-3 space-y-1">
              {filtered.length === 0 ? (
                <div className="p-6 text-center text-xs text-stone-400">
                  No matching results found for &ldquo;{query}&rdquo;
                </div>
              ) : (
                filtered.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(item.path)}
                      className="w-full p-3 rounded-2xl flex items-center justify-between text-left hover:bg-stone-800/80 hover:border-amber-500/30 border border-transparent transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <Icon size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-stone-200 group-hover:text-amber-400 transition-colors">
                            {item.label}
                          </p>
                          <span className="text-[10px] text-stone-500 font-sans uppercase tracking-wider">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <ArrowRight size={14} className="text-stone-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Hint */}
            <div className="p-3 bg-stone-950/80 border-t border-stone-800 flex items-center justify-between text-[10px] text-stone-500">
              <span>Navigation Shortcut: <kbd className="px-1.5 py-0.5 rounded bg-stone-800 text-stone-300 font-mono">Cmd+K</kbd></span>
              <span className="text-amber-400/80">Kumar Magnacity Official Portal</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
