"use client";

import { useState } from "react";
import { MessageSquare, Video, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { submitLead } from "@/lib/submitLead";

export default function WhatsAppCallbackScheduler() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "11:00 AM" });
  const [loading, setLoading] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const success = await submitLead({
      ...form,
      source: "WhatsApp Video Tour Scheduler",
      preferredDate: form.date,
      preferredTime: form.time
    });
    setLoading(false);
    if (success) {
      setIsScheduled(true);
    }
  };

  return (
    <section className="py-24 bg-warm-bg border-t border-primary/10 relative overflow-hidden" id="whatsapp-video-scheduler">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="bg-gradient-to-r from-emerald-950/40 via-emerald-900/20 to-emerald-950/40 border border-emerald-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left info */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] uppercase tracking-widest">
              <Video size={14} /> Live HD Video Consultation
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary tracking-tight">
              Schedule 5-Min <span className="text-gradient-gold">WhatsApp Video Tour</span>
            </h2>
            <p className="text-sm md:text-base text-primary/60 leading-relaxed">
              Cannot visit the site in person today? Book a live 1-on-1 WhatsApp video walkthrough with our property executive directly from your mobile.
            </p>
          </div>

          {/* Form right */}
          <div className="lg:col-span-6 bg-white border border-primary/10 rounded-2xl p-6 shadow-2xl">
            {isScheduled ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 size={40} className="text-emerald-400 mx-auto" />
                <h3 className="text-xl font-serif font-bold text-primary">WhatsApp Video Tour Scheduled</h3>
                <p className="text-xs text-primary/60">Our advisor will video call you at {form.phone} on {form.date || "your requested date"} at {form.time}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase font-bold text-stone-600 block mb-1">Full Name*</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-3 text-xs text-primary focus:outline-none focus:bg-white focus:border-emerald-500 shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-bold text-stone-600 block mb-1">WhatsApp Number*</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-3 text-xs text-primary focus:outline-none focus:bg-white focus:border-emerald-500 shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase font-bold text-stone-600 block mb-1">Preferred Date</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-3 text-xs text-primary focus:outline-none focus:bg-white focus:border-emerald-500 shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-bold text-stone-600 block mb-1">Preferred Time Slot</label>
                    <select
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-3 text-xs text-primary focus:outline-none focus:bg-white focus:border-emerald-500 shadow-sm appearance-none"
                    >
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="06:00 PM">06:00 PM</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 shadow-xl"
                >
                  {loading ? "Scheduling..." : "Book WhatsApp Video Tour"} <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
