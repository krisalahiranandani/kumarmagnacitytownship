'use client';

import { useExitIntent } from '@/hooks/useExitIntent';
import AdvancedEnquiryForm from './AdvancedEnquiryForm';
import { X, Sparkles, Check, ShieldCheck, Building2, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExitIntentModal() {
  const { shouldShowExitIntent, closeExitIntent } = useExitIntent();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (shouldShowExitIntent) {
      setIsVisible(true);
    }
  }, [shouldShowExitIntent]);

  const handleClose = () => {
    setIsVisible(false);
    closeExitIntent();
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[10002] flex items-center justify-center p-4 md:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Dark Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          onClick={handleClose}
        />
        
        {/* Modal Window */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative z-10 w-full max-w-4xl bg-white border border-stone-200 rounded-[2.5rem] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.35)] my-auto"
        >
          {/* Prominent Close Button */}
          <button 
            onClick={handleClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-3 bg-stone-100 hover:bg-accent hover:text-primary text-stone-600 rounded-full transition-all duration-200 z-30 shadow-sm hover:scale-105 cursor-pointer"
          >
            <X size={20} />
          </button>

          <div className="grid md:grid-cols-12">
            {/* Left Column: Value Proposition */}
            <div className="md:col-span-5 p-8 md:p-10 flex flex-col justify-between bg-gradient-to-br from-[#1A1814] to-[#2A2620] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 border border-accent/40 rounded-full text-accent font-bold text-[10px] uppercase tracking-widest">
                  <Sparkles size={12} /> Exclusive Priority Pass
                </div>

                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
                  Unlock Priority Pricing & Inventory
                </h2>

                <p className="text-stone-300 text-sm leading-relaxed">
                  Before you leave, secure direct access to the 150-Acre Masterplan, floor plan drawings, and pre-launch pricing advantages.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs text-stone-200">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                      <Check size={12} />
                    </div>
                    <span>2 BHK (757 sq.ft) starting ₹72.99L*</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-stone-200">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                      <Check size={12} />
                    </div>
                    <span>3 BHK (1053 sq.ft) starting ₹1.05Cr*</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-stone-200">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                      <Check size={12} />
                    </div>
                    <span>NA Villa Bungalow Plots from ₹1.49Cr*</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-stone-200">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                      <Check size={12} />
                    </div>
                    <span>Podar International School on Campus</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between text-[10px] text-stone-400 uppercase tracking-widest relative z-10">
                <span className="flex items-center gap-1.5 font-semibold text-accent">
                  <ShieldCheck size={13} /> MahaRERA Approved
                </span>
                <span>P52100052096</span>
              </div>
            </div>

            {/* Right Column: High-Contrast Form */}
            <div className="md:col-span-7 p-6 md:p-8 bg-[#FDFBF7] flex flex-col justify-center">
              <AdvancedEnquiryForm 
                formId="Exit_Intent_Capture"
                title="Instant Brochure Download"
                subtitle="Enter your contact details to download the complete presentation & price sheet."
                buttonText="DOWNLOAD BROCHURE & PRICE LIST"
                compact={true}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
