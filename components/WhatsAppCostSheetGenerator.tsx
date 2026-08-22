"use client";

import { useState } from "react";
import { MessageSquare, Calculator, Check, ArrowRight, ShieldCheck, Download, Sparkles, Building2, Landmark, PhoneCall } from "lucide-react";
import { submitLead } from "@/lib/submitLead";
import { useDataLayer } from "@/hooks/useDataLayer";
import { sendGAEvent } from "@next/third-parties/google";
import { cn } from "@/lib/utils";

interface UnitOption {
  id: string;
  name: string;
  category: "2bhk" | "3bhk" | "plot";
  carpetArea: string;
  basePrice: number;
  basePriceFormatted: string;
  approxStampDuty: number;
  approxGstAndMaint: number;
  estimatedTotal: string;
}

const UNIT_OPTIONS: UnitOption[] = [
  {
    id: "2bhk",
    name: "2 BHK Luxury Apartment",
    category: "2bhk",
    carpetArea: "757 sq.ft Carpet",
    basePrice: 7299000,
    basePriceFormatted: "₹72.99 Lakhs*",
    approxStampDuty: 510000,
    approxGstAndMaint: 365000,
    estimatedTotal: "₹81.74 Lakhs*"
  },
  {
    id: "3bhk",
    name: "3 BHK Grand Residence",
    category: "3bhk",
    carpetArea: "1,053 sq.ft Carpet",
    basePrice: 10500000,
    basePriceFormatted: "₹1.05 Crore*",
    approxStampDuty: 735000,
    approxGstAndMaint: 525000,
    estimatedTotal: "₹1.176 Crore*"
  },
  {
    id: "plot",
    name: "NA Villa Bungalow Plot",
    category: "plot",
    carpetArea: "1,700+ sq.ft Land",
    basePrice: 14900000,
    basePriceFormatted: "₹1.49 Crore*",
    approxStampDuty: 1043000,
    approxGstAndMaint: 250000,
    estimatedTotal: "₹1.619 Crore*"
  }
];

export default function WhatsAppCostSheetGenerator() {
  const [selectedUnit, setSelectedUnit] = useState<UnitOption>(UNIT_OPTIONS[0]);
  const [floorPreference, setFloorPreference] = useState<string>("Middle Floor (Levels 6 - 18)");
  const [paymentPlan, setPaymentPlan] = useState<string>("20:80 Bank Construction-Linked Plan");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const { trackLead } = useDataLayer();

  const handleGenerateWhatsAppQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // 1. Submit lead to database/CRM
    try {
      await submitLead({
        name,
        phone,
        email: "WhatsApp Request",
        timing: "Instant WhatsApp Delivery",
        intent: `${selectedUnit.name} (${floorPreference})`,
        source_url: typeof window !== "undefined" ? window.location.href : "",
        form_id: "WhatsApp_Cost_Sheet_Generator",
        timestamp
      });

      trackLead({
        lead_type: selectedUnit.name,
        project: "Kumar Magnacity",
        phone
      });
      sendGAEvent({ event: "conversion", send_to: "AW-1123456789/AbCd-EfGhiJkLmNo" });
    } catch (err) {
      console.warn("Lead record notice:", err);
    }

    // 2. Format detailed WhatsApp message payload
    const whatsappMessage = encodeURIComponent(
      `🏛️ *KUMAR MAGNACITY TOWNSHIP - INSTANT COST SHEET REQUEST*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📱 *Phone:* ${phone}\n` +
      `🏡 *Unit Choice:* ${selectedUnit.name} (${selectedUnit.carpetArea})\n` +
      `🏢 *Floor Preference:* ${floorPreference}\n` +
      `💳 *Payment Option:* ${paymentPlan}\n` +
      `💰 *Estimated Launch Price:* ${selectedUnit.basePriceFormatted}\n\n` +
      `📄 *Please share the official PDF cost sheet, unit floor plan, and festive payment schedule on this WhatsApp number.*`
    );

    setIsSubmitting(false);
    setIsGenerated(true);

    // Open WhatsApp directly
    window.open(`https://wa.me/917744009295?text=${whatsappMessage}`, "_blank");
  };

  return (
    <section className="py-24 bg-[#FAF9F5] text-primary relative overflow-hidden" id="whatsapp-cost-sheet">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 font-sans font-semibold text-[11px] uppercase tracking-wider">
            <MessageSquare size={13} />
            <span>Instant Digital Delivery • Zero Waiting</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary tracking-tight">
            1-Click WhatsApp <span className="text-gradient-gold">Cost Sheet Generator</span>
          </h2>
          <p className="text-sm md:text-base text-primary/70 max-w-2xl mx-auto">
            Customize your unit configuration and receive the complete official cost breakdown, payment milestones, and PDF floor plan directly on your WhatsApp in under 30 seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Configuration Tray */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Unit Selector */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-primary/80 block">
                Step 1: Choose Your Preferred Configuration
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {UNIT_OPTIONS.map((unit) => {
                  const isSelected = selectedUnit.id === unit.id;
                  return (
                    <button
                      key={unit.id}
                      type="button"
                      onClick={() => setSelectedUnit(unit)}
                      className={cn(
                        "p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer",
                        isSelected
                          ? "bg-white border-accent ring-2 ring-accent/30 shadow-lg"
                          : "bg-white/70 border-stone-200 hover:border-stone-300 hover:bg-white"
                      )}
                    >
                      <div className="flex items-center justify-between mb-2">
                        {unit.category === "2bhk" && <Building2 size={16} className={isSelected ? "text-accent" : "text-stone-400"} />}
                        {unit.category === "3bhk" && <Building2 size={16} className={isSelected ? "text-accent" : "text-stone-400"} />}
                        {unit.category === "plot" && <Landmark size={16} className={isSelected ? "text-accent" : "text-stone-400"} />}
                        <span className={cn("text-[10px] font-bold uppercase px-2 py-0.5 rounded-full", isSelected ? "bg-accent/20 text-accent-dark" : "bg-stone-100 text-stone-500")}>
                          {unit.category}
                        </span>
                      </div>
                      <h4 className="text-xs font-heading font-bold text-primary">{unit.name}</h4>
                      <p className="text-[11px] text-stone-500 font-sans mt-0.5">{unit.carpetArea}</p>
                      <p className="text-sm font-bold text-accent mt-2">{unit.basePriceFormatted}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Floor / Location Stack Selection */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-primary/80 block">
                Step 2: Preferred Floor Stack & Orientation
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  "Garden & Riverbank Facing",
                  "Middle Floor (Levels 6 - 18)",
                  "Sky Penthouse (Levels 20+)"
                ].map((pref) => (
                  <button
                    key={pref}
                    type="button"
                    onClick={() => setFloorPreference(pref)}
                    className={cn(
                      "px-3.5 py-3 rounded-xl border text-xs font-sans font-medium transition-all text-left cursor-pointer",
                      floorPreference === pref
                        ? "bg-[#0D0B08] text-accent border-accent/50 shadow-md font-semibold"
                        : "bg-white text-stone-600 border-stone-200 hover:border-stone-300"
                    )}
                  >
                    {pref}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Payment Structure Selection */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-primary/80 block">
                Step 3: Preferred Funding / Payment Structure
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  "20:80 Bank Construction-Linked Plan",
                  "Festive 10:90 Developer Flexi Scheme",
                  "Self-Funding Milestone Allocation"
                ].map((plan) => (
                  <button
                    key={plan}
                    type="button"
                    onClick={() => setPaymentPlan(plan)}
                    className={cn(
                      "px-3.5 py-3 rounded-xl border text-xs font-sans font-medium transition-all text-left cursor-pointer",
                      paymentPlan === plan
                        ? "bg-[#0D0B08] text-accent border-accent/50 shadow-md font-semibold"
                        : "bg-white text-stone-600 border-stone-200 hover:border-stone-300"
                    )}
                  >
                    {plan}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Live Quotation Summary Card & WhatsApp Trigger Form */}
          <div className="lg:col-span-5 bg-white border border-stone-200 rounded-[2.5rem] p-6 md:p-8 shadow-xl space-y-6">
            
            {/* Quotation Header */}
            <div className="border-b border-stone-200 pb-4">
              <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                <span>Quotation Preview</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Calculation
                </span>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary">{selectedUnit.name}</h3>
              <p className="text-xs text-stone-500">{floorPreference}</p>
            </div>

            {/* Price Itemized Breakdown */}
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between text-stone-600">
                <span>Agreement Base Value</span>
                <span className="font-bold text-primary">{selectedUnit.basePriceFormatted}</span>
              </div>
              <div className="flex items-center justify-between text-stone-600">
                <span>Estimated Stamp Duty & Reg. (~7%)</span>
                <span>₹{(selectedUnit.approxStampDuty / 100000).toFixed(2)} Lakhs*</span>
              </div>
              <div className="flex items-center justify-between text-stone-600">
                <span>GST & Infrastructure Allocation</span>
                <span>₹{(selectedUnit.approxGstAndMaint / 100000).toFixed(2)} Lakhs*</span>
              </div>
              <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-sm">
                <span className="font-bold text-primary">All-Inclusive Estimate</span>
                <span className="text-lg font-heading font-bold text-accent">{selectedUnit.estimatedTotal}</span>
              </div>
            </div>

            {/* Input Form for WhatsApp Dispatch */}
            <form onSubmit={handleGenerateWhatsAppQuote} className="space-y-3.5 pt-2">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block mb-1">Your Full Name*</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Anand Kulkarni"
                  className="w-full bg-[#FAF9F5] border border-stone-300 rounded-xl px-4 py-3 text-xs text-primary placeholder:text-stone-400 focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all font-medium"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block mb-1">WhatsApp Number*</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#FAF9F5] border border-stone-300 rounded-xl px-4 py-3 text-xs text-primary placeholder:text-stone-400 focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all font-medium"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 cursor-pointer mt-2"
              >
                <MessageSquare size={16} className="fill-white" />
                <span>SEND COST SHEET TO WHATSAPP</span>
                <ArrowRight size={14} />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-stone-500 text-center pt-1">
                <ShieldCheck size={12} className="text-emerald-600 shrink-0" />
                <span>Direct Sales Desk • 0 Spam Guarantee • Instant PDF Delivery</span>
              </div>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
