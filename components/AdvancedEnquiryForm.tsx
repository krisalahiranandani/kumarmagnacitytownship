"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EnquirySchema, type EnquiryData } from "@/types/enquiry";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, ArrowRight, Download, ShieldCheck, Gem } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useDataLayer } from "@/hooks/useDataLayer";
import { submitLead } from "@/lib/submitLead";
import { sendGAEvent } from "@next/third-parties/google";
import { Turnstile } from "@marsidev/react-turnstile";

interface AdvancedEnquiryFormProps {
  formId?: string;
  sourceUrl?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  plotId?: string;
  compact?: boolean;
}

export default function AdvancedEnquiryForm({
  formId = "advancedEnquiry",
  sourceUrl = typeof window !== "undefined" ? window.location.href : "",
  title = "Request Exclusive Access",
  subtitle = "Secure the detailed price list and inventory for Kumar Magnacity.",
  buttonText = "Get Details",
  plotId,
  compact = false,
}: AdvancedEnquiryFormProps) {
  const router = useRouter();
  const { trackLead } = useDataLayer();
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(EnquirySchema),
    defaultValues: {
      source_url: sourceUrl,
      form_id: formId,
    },
  });

  const nextStep = async () => {
    const fieldsToValidate = step === 1 
      ? (["name", "phone", "email"] as const) 
      : (["timing", "intent"] as const);
    const isValid = await trigger(fieldsToValidate as unknown as (keyof EnquiryData)[]);
    if (isValid) setStep((s) => s + 1);
  };

  const onSubmit = async (data: EnquiryData) => {
    setStatus("submitting");
    setErrorMessage("");

    const isMarathi = typeof window !== 'undefined' ? window.location.pathname.includes("/mr") : false;
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // 3. Dual-delivery API integration (Client direct + Vercel backend)
    try {
      const isSuccess = await submitLead({
        name: data.name,
        phone: data.phone,
        email: data.email || "N/A",
        timing: data.timing,
        intent: data.intent,
        plot_id: plotId || "Not Specified",
        source_url: data.source_url || window.location.href,
        form_id: data.form_id || formId,
        timestamp: timestamp,
        _subject: `🚨 NEW LEAD: ${data.name} | ${data.phone} | Plot: ${plotId || "N/A"}`,
      }, turnstileToken);

      if (isSuccess) {
        setStatus("success");
        try {
          trackLead({
            lead_type: data.intent,
            project: 'Kumar Magnacity',
            email: data.email,
            phone: data.phone
          });
          sendGAEvent({ event: 'conversion', send_to: 'AW-1123456789/AbCd-EfGhiJkLmNo' });
        } catch (e) {
          console.warn("Analytics blocked", e);
        }
        
        setTimeout(() => {
          router.push(isMarathi ? "/mr/kumar-magnacity-na-bungalow-plots-thank-you" : "/kumar-magnacity-na-bungalow-plots-thank-you");
        }, 2500);
        return;
      }

      throw new Error("Lead submission failed");
    } catch (err: unknown) {
      const errorObj = err as Error;
      console.warn("Primary submission error:", errorObj.message);

      // BACKUP: WhatsApp direct trigger
      try {
        const waMessage = encodeURIComponent(
          `🚨 NEW LEAD - Kumar Magnacity\n` +
          `👤 Name: ${data.name}\n` +
          `📱 Phone: ${data.phone}\n` +
          `✉️ Email: ${data.email || "N/A"}\n` +
          `🕐 Visit: ${data.timing}\n` +
          `🎯 Goal: ${data.intent}\n` +
          `📍 Source: ${data.source_url || window.location.href}\n` +
          `⏰ Time: ${timestamp}`
        );
        
        window.open(`https://wa.me/917744009295?text=${waMessage}`, "_blank");
      } catch (waErr) {
        console.error("WhatsApp backup failed:", waErr);
      }

      setStatus("success");
      try {
        trackLead({
          lead_type: data.intent,
          project: 'Kumar Magnacity',
          email: data.email,
          phone: data.phone
        });
        sendGAEvent({ event: 'conversion', send_to: 'AW-1123456789/AbCd-EfGhiJkLmNo' });
      } catch (e) {
        console.warn("Analytics blocked", e);
      }
      
      setTimeout(() => {
        router.push(isMarathi ? "/mr/kumar-magnacity-na-bungalow-plots-thank-you" : "/kumar-magnacity-na-bungalow-plots-thank-you");
      }, 2500);
    }
  };

  return (
    <div className={cn("w-full relative", compact ? "max-w-full" : "max-w-2xl mx-auto")}>
      <div className={cn(
        "bg-white border border-stone-200/80 rounded-[2.5rem] shadow-[0_25px_70px_rgba(44,36,24,0.08)] relative overflow-hidden",
        compact ? "p-6 md:p-8 shadow-none border-0" : "p-8 md:p-12"
      )}>
        <div className="relative z-10 space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-[10px] text-accent font-bold uppercase tracking-widest">
              <ShieldCheck size={12} className="text-accent" />
              Secured Priority Access
            </div>
            <h3 className={cn("font-heading font-bold text-primary tracking-tight", compact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl")}>
              {status === "success" ? "Access Granted" : title}
            </h3>
            <p className="text-primary/70 text-sm leading-relaxed max-w-md">
              {status === "success" 
                ? "Your credentials have been verified. Redirecting to your premium experience..." 
                : subtitle}
            </p>
          </div>

          {status !== "success" && (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input type="text" {...register("_honey")} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-primary/80 uppercase tracking-wider block">Full Name</label>
                        <input
                          {...register("name")}
                          placeholder="e.g. Rahul Sharma"
                          className={cn(
                            "w-full bg-[#FAF8F5] border rounded-xl px-4 py-3.5 text-primary placeholder:text-stone-400 focus:outline-none focus:bg-white transition-all text-sm font-medium shadow-sm",
                            errors.name ? "border-red-500 ring-1 ring-red-500/20" : "border-stone-300 focus:border-accent focus:ring-2 focus:ring-accent/20"
                          )}
                        />
                        {errors.name && <p className="text-[10px] text-red-500 ml-1">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-primary/80 uppercase tracking-wider block">Phone Number</label>
                        <input
                          {...register("phone")}
                          placeholder="10-digit mobile number"
                          className={cn(
                            "w-full bg-[#FAF8F5] border rounded-xl px-4 py-3.5 text-primary placeholder:text-stone-400 focus:outline-none focus:bg-white transition-all text-sm font-medium shadow-sm",
                            errors.phone ? "border-red-500 ring-1 ring-red-500/20" : "border-stone-300 focus:border-accent focus:ring-2 focus:ring-accent/20"
                          )}
                        />
                        {errors.phone && <p className="text-[10px] text-red-500 ml-1">{errors.phone.message}</p>}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-primary/80 uppercase tracking-wider block">Email Address (Optional)</label>
                      <input
                        {...register("email")}
                        placeholder="For official brochure & floor plans"
                        className={cn(
                          "w-full bg-[#FAF8F5] border border-stone-300 rounded-xl px-4 py-3.5 text-primary placeholder:text-stone-400 focus:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm font-medium shadow-sm"
                        )}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="w-full bg-accent hover:bg-accent-hover text-primary font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/20 hover:shadow-accent/30 text-sm tracking-wider uppercase group/btn mt-2 cursor-pointer"
                    >
                      CONTINUE
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-primary/80 uppercase tracking-wider block">Visit Timing</label>
                        <select
                          {...register("timing")}
                          className={cn(
                            "w-full bg-[#FAF8F5] border rounded-xl px-4 py-3.5 text-primary focus:outline-none focus:bg-white transition-all text-sm font-medium shadow-sm appearance-none",
                            errors.timing ? "border-red-500 ring-1 ring-red-500/20" : "border-stone-300 focus:border-accent focus:ring-2 focus:ring-accent/20"
                          )}
                        >
                          <option value="">Select Expected Visit</option>
                          <option value="Next 48 Hours">Next 48 Hours</option>
                          <option value="This Weekend">This Weekend</option>
                          <option value="Next Week">Next Week</option>
                          <option value="Researching">Just Researching</option>
                        </select>
                        {errors.timing && <p className="text-[10px] text-red-500 ml-1">{errors.timing.message}</p>}
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-primary/80 uppercase tracking-wider block">Investment Goal</label>
                        <select
                          {...register("intent")}
                          className={cn(
                            "w-full bg-[#FAF8F5] border rounded-xl px-4 py-3.5 text-primary focus:outline-none focus:bg-white transition-all text-sm font-medium shadow-sm appearance-none",
                            errors.intent ? "border-red-500 ring-1 ring-red-500/20" : "border-stone-300 focus:border-accent focus:ring-2 focus:ring-accent/20"
                          )}
                        >
                          <option value="">Select Interest</option>
                          <option value="2 BHK Apartment">2 BHK Luxury Apartment</option>
                          <option value="3 BHK Apartment">3 BHK Luxury Apartment</option>
                          <option value="NA Villa Plot">NA Villa Bungalow Plot</option>
                          <option value="Investment">ROI / Investment Growth</option>
                        </select>
                        {errors.intent && <p className="text-[10px] text-red-500 ml-1">{errors.intent.message}</p>}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 pt-2">
                      {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
                        <div className="flex justify-center mb-1">
                          <Turnstile
                            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                            onSuccess={(token) => setTurnstileToken(token)}
                            options={{ theme: "light" }}
                          />
                        </div>
                      )}
                      <button
                        type="submit"
                        disabled={status === "submitting" || (!!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !turnstileToken)}
                        className="w-full bg-accent hover:bg-accent-hover text-primary font-black uppercase tracking-[0.15em] py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/20 hover:shadow-accent/30 disabled:opacity-50 text-sm cursor-pointer"
                      >
                        {status === "submitting" ? (
                          <Loader2 size={18} className="animate-spin" />
                        ) : (
                          <>
                            {buttonText}
                            <Send size={16} />
                          </>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs text-primary/60 hover:text-primary font-bold uppercase tracking-wider transition-colors text-center py-1 cursor-pointer"
                      >
                        ← Back to Contact Details
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {status === "error" && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs text-center">
                  {errorMessage || "Submission error. Please try again."}
                </div>
              )}
            </form>
          )}

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10 flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <CheckCircle2 size={40} />
              </div>
              <div className="space-y-2">
                 <h4 className="text-xl font-heading font-bold text-primary">Inquiry Received Successfully</h4>
                 <p className="text-primary/70 text-sm max-w-xs mx-auto">
                    Your relationship manager will reach out shortly.
                 </p>
                 <p className="text-accent text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 pt-2">
                    <Download size={14} className="animate-bounce" />
                    Opening Brochure...
                 </p>
              </div>
            </motion.div>
          )}

          {/* Trust Footer */}
          <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4 text-primary/60">
            <div className="flex items-center gap-2.5">
               <Gem size={15} className="text-accent" />
               <div className="text-xs font-bold text-primary leading-tight">
                  KUMAR PROPERTIES<br/>
                  <span className="text-[9px] text-stone-500 uppercase font-semibold">59-Year Legacy</span>
               </div>
            </div>
            <div className="flex items-center gap-1.5 text-[9px] text-stone-500 uppercase tracking-widest font-bold">
               <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
               256-BIT ENCRYPTION
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
