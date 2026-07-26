"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, DollarSign, ShieldCheck, ArrowRight, Video, FileText } from "lucide-react";
import { useModal } from "@/lib/modal-context";

interface CurrencyRate {
  code: string;
  symbol: string;
  name: string;
  rateToINR: number;
}

const CURRENCIES: CurrencyRate[] = [
  { code: "USD", symbol: "$", name: "US Dollar", rateToINR: 83.5 },
  { code: "AED", symbol: "د.إ", name: "UAE Dirham", rateToINR: 22.7 },
  { code: "SGD", symbol: "S$", name: "Singapore Dollar", rateToINR: 62.0 },
  { code: "EUR", symbol: "€", name: "Euro", rateToINR: 90.5 },
  { code: "GBP", symbol: "£", name: "British Pound", rateToINR: 106.0 },
];

export default function NRICurrencySuite() {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyRate>(CURRENCIES[0]);
  const { openModal } = useModal();

  const calculateConverted = (inrLacs: number) => {
    const inrValue = inrLacs * 100000;
    const converted = inrValue / selectedCurrency.rateToINR;
    return `${selectedCurrency.symbol}${Math.round(converted).toLocaleString()}`;
  };

  return (
    <section className="py-24 bg-warm-bg text-primary relative overflow-hidden" id="nri-suite">
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/10 rounded-[3.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl backdrop-blur-3xl">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-[10px] uppercase tracking-[0.3em]">
                <Globe size={14} />
                Global Investor Suite
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-primary">
                  Invest in Pune East <br />
                  <span className="text-accent italic">From Anywhere in the World</span>
                </h2>
                <p className="text-primary/60 text-sm md:text-base font-light leading-relaxed">
                  Kumar Magnacity offers streamlined NRI property acquisition, full RBI compliance guidance, NRE/NRO account transfer support, and virtual 3D site walkthroughs.
                </p>
              </div>

              {/* Currency Converter Controls */}
              <div className="space-y-4 pt-4">
                <span className="text-xs text-primary/40 uppercase font-bold tracking-widest">Select Your Home Currency:</span>
                <div className="flex flex-wrap gap-3">
                  {CURRENCIES.map((curr) => (
                    <button
                      key={curr.code}
                      onClick={() => setSelectedCurrency(curr)}
                      className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all border ${
                        selectedCurrency.code === curr.code
                          ? "bg-accent text-white border-accent shadow-[0_0_20px_rgba(201,162,39,0.5)]"
                          : "bg-primary/5 text-primary/70 border-primary/10 hover:border-accent/40 hover:text-primary"
                      }`}
                    >
                      {curr.code} ({curr.symbol})
                    </button>
                  ))}
                </div>
              </div>

              {/* Converted Pricing Cards */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 space-y-2">
                  <span className="text-[10px] text-accent uppercase font-bold tracking-widest">2 BHK Residence</span>
                  <div className="text-2xl font-bold text-primary">{calculateConverted(72.99)}</div>
                  <span className="text-[10px] text-primary/40">Approx. ₹72.99 Lacs*</span>
                </div>
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 space-y-2">
                  <span className="text-[10px] text-accent uppercase font-bold tracking-widest">3 BHK Residence</span>
                  <div className="text-2xl font-bold text-primary">{calculateConverted(105.00)}</div>
                  <span className="text-[10px] text-primary/40">Approx. ₹1.05 Crore*</span>
                </div>
              </div>
            </div>

            {/* Right Action & Consultation Hub */}
            <div className="lg:col-span-5 bg-light border border-primary/10 rounded-[3rem] p-8 md:p-10 space-y-8 shadow-2xl relative">
              <div className="space-y-3">
                <h3 className="text-2xl font-heading font-bold text-primary">Schedule NRI Video Tour</h3>
                <p className="text-xs text-primary/60 leading-relaxed">
                  Book a private Zoom/Google Meet video walkthrough with an NRI investment specialist.
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-3 text-primary/70">
                  <ShieldCheck size={16} className="text-accent" />
                  <span>100% RBI Repatriation Legal Assistance</span>
                </div>
                <div className="flex items-center gap-3 text-primary/70">
                  <FileText size={16} className="text-accent" />
                  <span>Rental Management & Tenant Services</span>
                </div>
                <div className="flex items-center gap-3 text-primary/70">
                  <Video size={16} className="text-accent" />
                  <span>Live HD Drone Walkthrough & Site Feeds</span>
                </div>
              </div>

              <button
                onClick={() => openModal({
                  title: "Book NRI Video Consultation",
                  subtitle: "Select your preferred timezone and currency details.",
                  source: "NRI Currency Suite"
                })}
                className="w-full bg-accent text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl transition-all flex items-center justify-center gap-3 hover:bg-accent-hover text-xs shadow-xl"
              >
                BOOK VIRTUAL CONSULTATION
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
