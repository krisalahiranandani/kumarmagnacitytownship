"use client";

import React, { useEffect, useState } from "react";
import { useModal } from "@/lib/modal-context";
import { useDataLayer } from "@/hooks/useDataLayer";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, MessageSquare } from "lucide-react";
import AdvancedEnquiryForm from "./AdvancedEnquiryForm";

export default function EnquiryModal() {
  const { isOpen, closeModal, modalData } = useModal();
  const [isMobile, setIsMobile] = useState(false);
  const { trackBeginCheckout } = useDataLayer();

  useEffect(() => {
    if (isOpen) {
      trackBeginCheckout(modalData.source || 'modal');
    }
  }, [isOpen, modalData.source, trackBeginCheckout]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, closeModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[10001] flex items-center justify-center p-3 md:p-6 overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Enquiry Form Modal"
        >
          {/* Minimalist Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-dark/95 backdrop-blur-2xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={isMobile ? { y: "100%" } : { opacity: 0, scale: 0.95, y: 30 }}
            animate={isMobile ? { y: 0 } : { opacity: 1, scale: 1, y: 0 }}
            exit={isMobile ? { y: "100%" } : { opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", damping: 30, stiffness: 250 }}
            className="relative w-full max-w-2xl bg-white border border-primary/10 rounded-t-[2.5rem] md:rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(44,36,24,0.3)] max-h-[90vh] md:max-h-[92vh] overflow-y-auto z-10 scrollbar-thin scrollbar-thumb-primary/10"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              aria-label="Close Enquiry Modal"
              className="absolute top-5 right-6 z-[100] text-primary/40 hover:text-primary transition-all p-2.5 bg-primary/5 hover:bg-primary/10 rounded-full border border-primary/10"
            >
              <X size={18} />
            </button>

            {/* Content Section */}
            <div className="p-4 md:p-6 pt-8">
              <AdvancedEnquiryForm 
                title={modalData.title || "The Sovereign Brief"}
                subtitle={modalData.subtitle || "Access the exclusive inventory suite and pre-launch pricing."}
                formId={`modal-${modalData.source || 'general'}`}
                plotId={modalData.plotId}
              />

              {/* Swift WhatsApp Option */}
              <div className="mt-6 pt-6 border-t border-primary/10 text-center px-4 pb-6">
                 <p className="text-[10px] text-primary/40 uppercase tracking-[0.3em] mb-3">Swift Connect</p>
                 <a 
                   href={`https://wa.me/917744009295?text=${encodeURIComponent("Hi! I am interested in " + (modalData.title || "Kumar Magnacity") + ". Please share brochure and pricing.")}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center justify-center gap-2 text-accent hover:text-accent-hover transition-all text-xs font-bold uppercase tracking-widest bg-accent/5 hover:bg-accent/10 py-3 px-6 rounded-xl border border-accent/20 hover:border-accent/40"
                 >
                    <MessageSquare size={15} />
                    WhatsApp Intelligence Direct
                 </a>
              </div>
            </div>

            {/* Bottom context marker */}
            <div className="hidden md:flex bg-primary/[0.02] py-4 px-8 border-t border-primary/5 justify-center items-center gap-3">
              <MapPin size={12} className="text-accent/60" />
              <span className="text-[9px] text-primary/50 uppercase tracking-[0.2em] font-bold">150-Acre Master Planned Sanctuary</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

