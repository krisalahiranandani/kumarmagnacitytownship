"use client";

import { useState } from "react";
import { Car, Clock, MapPin, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { submitLead } from "@/lib/submitLead";

const LOCATIONS = [
  { id: "magarpatta", name: "Magarpatta City / Hadapsar", duration: "10 Mins" },
  { id: "kharadi", name: "Kharadi EON IT Park / WTC", duration: "12 Mins" },
  { id: "koregaon", name: "Koregaon Park / Kalyani Nagar", duration: "20 Mins" },
  { id: "airport", name: "Pune Airport / Viman Nagar", duration: "25 Mins" },
  { id: "other", name: "Custom Home Pickup (Pune East)", duration: "Direct Pickup" }
];

const TIME_SLOTS = [
  "10:00 AM (Morning Slot)",
  "02:00 PM (Afternoon Slot)",
  "05:00 PM (Evening Slot)"
];

export default function SiteVisitCabTracker() {
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[0]);
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [loading, setLoading] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const success = await submitLead({
      ...form,
      source: "Free AC Cab Dispatcher",
      pickupLocation: selectedLocation.name,
      preferredSlot: selectedSlot,
    });
    setLoading(false);
    if (success) {
      setIsBooked(true);
    }
  };

  return (
    <section className="py-24 bg-warm-bg border-t border-primary/10 relative overflow-hidden" id="cab-scheduler">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] uppercase tracking-widest">
            <Car size={14} /> VIP Chauffeur Service
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary tracking-tight">
            Complimentary <span className="text-gradient-gold">AC Cab Site Visit</span> Pickup
          </h2>
          <p className="text-sm md:text-base text-primary/60">
            Enjoy doorstep pickup and drop in a sanitized luxury AC sedan for your family site visit to Kumar Magnacity Township.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Pickup Selection Left */}
          <div className="lg:col-span-7 bg-white border border-primary/10 rounded-3xl p-8 backdrop-blur-xl space-y-6">
            <div>
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-3 block">
                1. Select Pickup Zone
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {LOCATIONS.map((loc) => {
                  const isSelected = selectedLocation.id === loc.id;
                  return (
                    <button
                      key={loc.id}
                      onClick={() => setSelectedLocation(loc)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        isSelected
                          ? "border-accent bg-accent/10 ring-1 ring-accent/40"
                          : "border-primary/10 bg-primary/5 hover:border-primary/20"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin size={16} className={isSelected ? "text-accent" : "text-gray-400"} />
                        <h4 className="text-xs font-bold text-primary">{loc.name}</h4>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-mono">Est. Transit: {loc.duration}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-3 block">
                2. Select Preferred Time Slot
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TIME_SLOTS.map((slot, idx) => {
                  const isSelected = selectedSlot === slot;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedSlot(slot)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        isSelected
                          ? "border-accent bg-accent text-white font-bold"
                          : "border-primary/10 bg-primary/5 text-primary/70 hover:border-primary/20"
                      }`}
                    >
                      <Clock size={14} className="mx-auto mb-1 opacity-70" />
                      <span className="text-xs font-mono">{slot}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Booking Confirmation Form Right */}
          <div className="lg:col-span-5 bg-gradient-to-b from-primary/5 to-transparent border border-accent/30 rounded-3xl p-8 backdrop-blur-2xl shadow-2xl space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 mb-2">
                <ShieldCheck size={16} /> Zero Cost • Doorstep Pickup
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary">Confirm Cab Dispatch</h3>
              <p className="text-xs text-primary/60 mt-1">Zone: <span className="text-primary font-mono">{selectedLocation.name}</span></p>
            </div>

            {isBooked ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-3">
                <CheckCircle2 size={36} className="text-emerald-400 mx-auto" />
                <h4 className="text-lg font-serif font-bold text-primary">Chauffeur Scheduled</h4>
                <p className="text-xs text-primary/60">Driver details will be dispatched via SMS to {form.phone} 1 hour prior to your {selectedSlot} slot.</p>
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
                    placeholder="Enter your name"
                    className="w-full bg-white border border-primary/10 rounded-xl px-4 py-3 text-xs text-primary focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-mono text-gray-400 block mb-1">Mobile Number*</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-white border border-primary/10 rounded-xl px-4 py-3 text-xs text-primary focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-mono text-gray-400 block mb-1">Pickup Address / Society Name</label>
                  <input
                    type="text"
                    required
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    placeholder="Enter pickup society name / landmark"
                    className="w-full bg-white border border-primary/10 rounded-xl px-4 py-3 text-xs text-primary focus:outline-none focus:border-accent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-accent text-white font-bold text-xs uppercase tracking-widest hover:bg-accent/90 transition-all flex items-center justify-center gap-2 shadow-xl"
                >
                  {loading ? "Dispatching..." : "Dispatch Free AC Cab"} <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
