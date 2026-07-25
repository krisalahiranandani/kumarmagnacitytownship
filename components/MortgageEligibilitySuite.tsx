"use client";

import { useState } from "react";
import { Calculator, Landmark, ShieldCheck, ArrowRight, Percent, Check } from "lucide-react";
import { submitLead } from "@/lib/submitLead";

const BANKS = [
  { name: "SBI Home Loans", rate: 8.40, logo: "🏦" },
  { name: "HDFC Bank", rate: 8.50, logo: "🏦" },
  { name: "ICICI Bank", rate: 8.55, logo: "🏦" },
  { name: "Axis Bank", rate: 8.60, logo: "🏦" }
];

export default function MortgageEligibilitySuite() {
  const [loanAmount, setLoanAmount] = useState(6000000); // ₹60 Lakhs
  const [tenureYears, setTenureYears] = useState(20);
  const [selectedBank, setSelectedBank] = useState(BANKS[0]);
  
  const [leadForm, setLeadForm] = useState({ name: "", phone: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // EMI Calculation Formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const monthlyRate = selectedBank.rate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  // Sec 24 (Interest Tax Savings up to 2 Lakhs/year @ 30% tax bracket = ₹60,000/yr)
  const annualTaxSavings = 60000;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const success = await submitLead({
      ...leadForm,
      source: "Mortgage Calculator Suite",
      loanAmount: `₹${(loanAmount / 100000).toFixed(2)} Lakhs`,
      tenure: `${tenureYears} Years`,
      bank: selectedBank.name,
      estimatedEmi: `₹${emi.toLocaleString("en-IN")}`
    });
    setLoading(false);
    if (success) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="py-24 bg-[#050505] border-t border-white/10 relative overflow-hidden" id="home-loan-calculator">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] uppercase tracking-widest">
            <Landmark size={14} /> Bank Partner Network
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            AI Home Loan & <span className="text-gradient-gold">Tax Savings Calculator</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Calculate your monthly EMI, compare preferred bank interest rates (SBI, HDFC, ICICI), and check Section 24 & 80C tax rebates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Calculator Inputs & Sliders */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl space-y-8">
            {/* Bank Selection Cards */}
            <div>
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-3 block">
                Select Preferred Lending Bank
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {BANKS.map((bank, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedBank(bank)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedBank.name === bank.name
                        ? "border-accent bg-accent/10 ring-1 ring-accent/40"
                        : "border-white/10 bg-white/5 hover:border-white/20"
                    }`}
                  >
                    <span className="text-xl mb-1 block">{bank.logo}</span>
                    <h3 className="text-xs font-bold text-white">{bank.name}</h3>
                    <p className="text-[11px] text-emerald-400 font-mono font-bold">{bank.rate}% p.a.</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Loan Amount Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400 font-mono">Loan Amount</span>
                <span className="text-xl font-bold text-accent font-mono">₹{(loanAmount / 100000).toFixed(2)} Lakhs</span>
              </div>
              <input
                type="range"
                min={2000000}
                max={15000000}
                step={100000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>₹20 Lakhs</span>
                <span>₹1.5 Crores</span>
              </div>
            </div>

            {/* Tenure Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400 font-mono">Loan Tenure</span>
                <span className="text-xl font-bold text-white font-mono">{tenureYears} Years</span>
              </div>
              <input
                type="range"
                min={5}
                max={30}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>5 Years</span>
                <span>30 Years</span>
              </div>
            </div>

            {/* Live Calculation Output Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <span className="text-[10px] uppercase font-mono text-gray-400 block mb-1">Monthly EMI</span>
                <span className="text-xl font-bold text-emerald-400 font-mono">₹{emi.toLocaleString("en-IN")}</span>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <span className="text-[10px] uppercase font-mono text-gray-400 block mb-1">Total Interest</span>
                <span className="text-xl font-bold text-white font-mono">₹{Math.round(totalInterest / 100000).toFixed(2)}L</span>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 col-span-2 sm:col-span-1">
                <span className="text-[10px] uppercase font-mono text-gray-400 block mb-1">Est. Tax Rebate</span>
                <span className="text-xl font-bold text-accent font-mono">~₹{(annualTaxSavings / 1000).toFixed(0)}k/yr</span>
              </div>
            </div>
          </div>

          {/* Right: Instant Pre-Approval Lead Capture */}
          <div className="lg:col-span-5 bg-gradient-to-b from-white/10 to-white/5 border border-accent/30 rounded-3xl p-8 backdrop-blur-2xl shadow-2xl space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-accent mb-2">
                <ShieldCheck size={16} /> Pre-Approved Bank Tie-Ups
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Get Pre-Approved Loan Sanction</h3>
              <p className="text-xs text-gray-400 mt-1">Receive official bank pre-approval letters and custom ROI schedules.</p>
            </div>

            {isSubmitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-3">
                <Check size={32} className="text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Loan Pre-Approval Request Received</h4>
                <p className="text-xs text-gray-300">Our bank partner executive will contact you shortly at {leadForm.phone}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[10px] uppercase font-mono text-gray-400 block mb-1">Full Name*</label>
                  <input
                    type="text"
                    required
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-mono text-gray-400 block mb-1">Phone Number*</label>
                  <input
                    type="tel"
                    required
                    value={leadForm.phone}
                    onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-mono text-gray-400 block mb-1">Email Address</label>
                  <input
                    type="email"
                    value={leadForm.email}
                    onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-accent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-accent text-dark font-bold text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2 shadow-xl"
                >
                  {loading ? "Processing..." : "Get Bank Pre-Approval Sanction"} <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
