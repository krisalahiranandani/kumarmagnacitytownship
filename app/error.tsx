"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("System Failure Detected:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-warm-bg flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full p-12 bg-light/50 backdrop-blur-3xl border border-primary/10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
        {/* Decorative Glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 blur-[80px] rounded-full" />
        
        <div className="relative z-10 space-y-8">
          <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto text-red-500 border border-red-500/20">
            <AlertTriangle size={36} />
          </div>
          
          <div className="space-y-3">
            <h1 className="text-3xl font-heading font-black text-primary tracking-tight uppercase">System Exception</h1>
            <p className="text-primary/40 text-sm leading-relaxed">
              Our Sovereign vault encountered a temporary synchronisation issue. Access remains secure.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => reset()}
              className="w-full bg-accent text-primary font-bold uppercase tracking-widest py-5 rounded-2xl transition-all flex items-center justify-center gap-3 hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(197,160,89,0.3)]"
            >
              <RefreshCcw size={18} />
              Reload Protocol
            </button>
            
            <Link
              href="/"
              className="w-full bg-primary/5 text-primary/60 font-medium uppercase tracking-[0.2em] text-[10px] py-4 rounded-2x border border-primary/10 hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
            >
              <Home size={14} />
              Return to Center
            </Link>
          </div>
          
          <div className="pt-4 border-t border-primary/5">
             <span className="text-[8px] text-primary/20 uppercase tracking-[0.5em]">Sovereign Security Node: 500-ERR</span>
          </div>
        </div>
      </div>
    </div>
  );
}
