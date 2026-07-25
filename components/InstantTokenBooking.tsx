"use client";

import { useState } from "react";
import { ShieldCheck, CheckCircle2, ArrowRight, Lock, Sparkles, Building2, Layers } from "lucide-react";
import { submitLead } from "@/lib/submitLead";

const UNITS = [
  {
    id: "2bhk",
    title: "2 BHK Luxury Residence",
    carpet: "757 Sq.Ft Carpet Area",
    price: "₹72.99 Lakhs*",
    token: "₹50,000",
    possession: "December 2027",
    badge: "Most Popular"
  },
  {
    id: "3bhk",
    title: "3 BHK Premium Residence",
    carpet: "1,053 Sq.Ft Carpet Area",
    price: "₹1.05 Cr.*",
    token: "₹50,000",
    possession: "December 2027",
    badge: "High-Rise View"
  },
  {
    id: "plots",
    title: "NA Villa Bungalow Plot",
    carpet: "1,700+ Sq.Ft Plot Area",
    price: "₹1.08 Cr.*",
    token: "₹50,000",
    possession: "Immediate Possession",
    badge: "Limited Plots"
  }
];

export default function InstantTokenBooking() {
  const [selectedUnit, setSelectedUnit] = useState(UNITS[0]);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const success = await submitLead({
      ...form,
      source: "Instant Token Reservation",
      unitType: selectedUnit.title,
      price: selectedUnit.price,
      tokenAmount: selectedUnit.token,
    });
    setLoading(false);
    if (success) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="py-24 bg-[#030303] border-t border-white/10 relative overflow-hidden" id="instant-booking">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-[11px] uppercase tracking-widest">
            <Lock size={14} /> Priority Inventory Lock
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Reserve Your Unit with <span className="text-gradient-gold">₹50,000 Token</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Lock festive launch pricing and select your preferred floor stack before upcoming price revisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Unit Selection */}
          <div className="lg:col-span-7 space-y-4">
            {UNITS.map((unit) => {
              const isSelected = selectedUnit.id === unit.id;
              return (
                <button
                  key={unit.id}
                  onClick={() => setSelectedUnit(unit)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                    isSelected
                      ? "border-accent bg-accent/10 ring-2 ring-accent/40 shadow-2xl"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase font-bold text-accent bg-accent/10 px-2.5 py-0.5 rounded-full border border-accent/30">
                        {unit.badge}
                      </span>
                      <span className="text-xs text-gray-400 font-mono">Possession: {unit.possession}</span>
                    </div>
                    <h3 className="text-lg font-serif font-bold text-white">{unit.title}</h3>
                    <p className="text-xs text-gray-400 font-mono">{unit.carpet}</p>
                  </div>

                  <div className="text-left sm:text-right border-t sm:border-t-0 border-white/10 pt-3 sm:pt-0 w-full sm:w-auto">
                    <span className="text-xs text-gray-400 block font-mono">Launch Price</span>
                    <span className="text-xl font-bold text-emerald-400 font-mono">{unit.price}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Reservation Form */}
          <div className="lg:col-span-5 bg-gradient-to-b from-white/10 to-white/5 border border-accent/30 rounded-3xl p-8 backdrop-blur-2xl shadow-2xl space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-accent mb-2">
                <ShieldCheck size={16} /> 100% Refundable Token Reservation
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Reserve {selectedUnit.title}</h3>
              <p className="text-xs text-gray-400 mt-1">Nominal Token Amount: <span className="text-accent font-bold font-mono">{selectedUnit.token}</span></p>
            </div>

            {isSubmitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-3">
                <CheckCircle2 size={36} className="text-emerald-400 mx-auto" />
                <h4 className="text-lg font-serif font-bold text-white">Inventory Lock Request Confirmed</h4>
                <p className="text-xs text-gray-300">Our sales lead manager will call you at {form.phone} within 15 minutes with the official unit cost sheet.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[10px] uppercase font-mono text-gray-400 block mb-1">Full Name*</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-mono text-gray-400 block mb-1">Phone Number*</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-mono text-gray-400 block mb-1">Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-accent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-accent text-dark font-bold text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2 shadow-xl"
                >
                  {loading ? "Locking Inventory..." : `Lock Unit with ${selectedUnit.token} Token`} <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
