'use client';

import { useExitIntent } from '@/hooks/useExitIntent';
import AdvancedEnquiryForm from './AdvancedEnquiryForm';
import { X, AlertTriangle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ExitIntentModal() {
  const { shouldShowExitIntent, closeExitIntent } = useExitIntent();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (shouldShowExitIntent) {
      setIsVisible(true);
    }
  }, [shouldShowExitIntent]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-dark/80 backdrop-blur-sm"
        onClick={() => {
          setIsVisible(false);
          closeExitIntent();
        }}
      />
      
      <div className="relative z-10 w-full max-w-4xl bg-white border border-accent/20 rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(201,162,39,0.15)] animate-in fade-in zoom-in duration-300">
        <button 
          onClick={() => {
            setIsVisible(false);
            closeExitIntent();
          }}
          className="absolute top-6 right-6 p-2 bg-primary/5 hover:bg-accent hover:text-white text-primary rounded-full transition-colors z-20"
        >
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="p-12 flex flex-col justify-center bg-accent/5">
            <div className="inline-flex items-center gap-2 text-accent font-bold text-[11px] uppercase tracking-widest mb-6">
              <AlertTriangle size={16} /> Wait Before You Leave
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary leading-tight mb-6">
              Unlock Priority Pricing.
            </h2>
            <p className="text-primary/70 text-lg leading-relaxed mb-8">
              You are about to miss out on the complete 150-Acre Masterplan, Phase 1 pricing, and the exclusive layout brochure.
            </p>
            <div className="text-[10px] font-bold text-primary/50 uppercase tracking-widest">
              Secure your spot instantly. No commitment required.
            </div>
          </div>
          <div className="p-8 md:p-12 bg-light">
            <AdvancedEnquiryForm formId="Exit_Intent_Capture" />
          </div>
        </div>
      </div>
    </div>
  );
}
