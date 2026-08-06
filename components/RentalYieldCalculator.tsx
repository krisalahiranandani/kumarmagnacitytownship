"use client";

import { useState } from "react";
import { TrendingUp, DollarSign, PieChart, ShieldCheck, ArrowRight } from "lucide-react";
import { useModal } from "@/lib/modal-context";

export default function RentalYieldCalculator() {
  const { openModal } = useModal();
  const [unitType, setUnitType] = useState<"2bhk" | "3bhk">("2bhk");
  const [holdingYears, setHoldingYears] = useState(5);

  const basePrice = unitType === "2bhk" ? 7299000 : 10500000;
  const monthlyRent = unitType === "2bhk" ? 28000 : 42000;
  const annualRent = monthlyRent * 12;
  const rentalYield = ((annualRent / basePrice) * 100).toFixed(2);

  // 15% Annual Capital Appreciation
  const projectedValue = Math.round(basePrice * Math.pow(1.15, holdingYears));
  const totalProfit = projectedValue - basePrice;

  return (
    <section className="py-24 bg-warm-bg border-t border-primary/10 relative overflow-hidden" id="rental-yield-calculator">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] uppercase tracking-widest">
            <TrendingUp size={14} /> Investor Yield Engine
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary tracking-tight">
            Rental Income & <span className="text-gradient-gold">Capital ROI Model</span>
          </h2>
          <p className="text-sm md:text-base text-primary/60">
            Calculate passive monthly rental yields and projected 5-year capital growth driven by Pune East infrastructure expansion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Left */}
          <div className="lg:col-span-7 bg-white border border-primary/10 rounded-3xl p-8 backdrop-blur-xl space-y-8 shadow-sm">
            <div>
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-primary/60 mb-3 block">
                1. Select Property Typology
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setUnitType("2bhk")}
                  className={`p-5 rounded-2xl border text-left transition-all ${
                    unitType === "2bhk"
                      ? "border-accent bg-accent/10 ring-2 ring-accent/40"
                      : "border-primary/10 bg-primary/5 hover:border-primary/20"
                  }`}
                >
                  <h3 className="text-base font-serif font-bold text-primary mb-1">2 BHK Luxury Suite</h3>
                  <p className="text-xs text-primary/60 font-mono">757 Sq.Ft • ₹72.99 Lakhs*</p>
                </button>
                <button
                  onClick={() => setUnitType("3bhk")}
                  className={`p-5 rounded-2xl border text-left transition-all ${
                    unitType === "3bhk"
                      ? "border-accent bg-accent/10 ring-2 ring-accent/40"
                      : "border-primary/10 bg-primary/5 hover:border-primary/20"
                  }`}
                >
                  <h3 className="text-base font-serif font-bold text-primary mb-1">3 BHK Premium Suite</h3>
                  <p className="text-xs text-primary/60 font-mono">1053 Sq.Ft • ₹1.05 Cr.*</p>
                </button>
              </div>
            </div>

            {/* Holding Horizon Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-primary/60 font-mono">Investment Horizon</span>
                <span className="text-xl font-bold text-accent font-mono">{holdingYears} Years</span>
              </div>
              <input
                type="range"
                min={3}
                max={10}
                step={1}
                value={holdingYears}
                onChange={(e) => setHoldingYears(Number(e.target.value))}
                className="w-full h-2 bg-primary/10 rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-[10px] text-primary/40 font-mono">
                <span>3 Years</span>
                <span>10 Years</span>
              </div>
            </div>
          </div>

          {/* Results Output Right */}
          <div className="lg:col-span-5 bg-gradient-to-b from-primary/5 to-white border border-accent/30 rounded-3xl p-8 backdrop-blur-2xl shadow-2xl space-y-6">
            <div className="flex justify-between items-center border-b border-primary/10 pb-4">
              <span className="text-xs font-mono text-primary/60 uppercase font-bold">Est. Monthly Rental</span>
              <span className="text-2xl font-bold text-emerald-600 font-mono">₹{monthlyRent.toLocaleString("en-IN")}/mo</span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-primary/60">Gross Rental Yield</span>
                <span className="font-bold text-accent font-mono">{rentalYield}% p.a.</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-primary/60">Projected Value in {holdingYears} Yrs</span>
                <span className="font-bold text-primary font-mono">₹{(projectedValue / 100000).toFixed(2)} Lakhs</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-primary/60">Est. Capital Appreciation</span>
                <span className="font-bold text-emerald-600 font-mono">+₹{(totalProfit / 100000).toFixed(2)} Lakhs</span>
              </div>
            </div>

            <button
              onClick={() => openModal({ title: `Request Investor ROI Dossier - ${unitType.toUpperCase()}` })}
              className="w-full py-4 rounded-xl bg-accent text-white font-bold text-xs uppercase tracking-widest hover:bg-dark transition-all flex items-center justify-center gap-2 shadow-xl"
            >
              Download Comprehensive ROI Report <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
