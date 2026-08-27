"use client";

import { useState } from "react";
import { QrCode, ExternalLink, ShieldCheck, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MahaRERAQRCodeModal() {
  const [isOpen, setIsOpen] = useState(false);

  const reraProjects = [
    {
      phase: "Kumar Magnacity Phase 1 (Residential Towers)",
      number: "P52100052096",
      qrUrl: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://maharera.maharashtra.gov.in/",
      govUrl: "https://maharera.maharashtra.gov.in/"
    },
    {
      phase: "Kumar Magnacity Phase 2 (NA Villa Plots)",
      number: "P52100054476",
      qrUrl: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://maharera.maharashtra.gov.in/",
      govUrl: "https://maharera.maharashtra.gov.in/"
    }
  ];

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 hover:bg-emerald-600 hover:text-white text-xs font-sans font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer"
      >
        <ShieldCheck size={15} className="text-emerald-500" />
        <span>MahaRERA QR Verification</span>
      </button>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[10003] flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white border border-stone-200 rounded-[2.5rem] max-w-2xl w-full p-6 md:p-8 space-y-6 relative shadow-2xl z-10 my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close modal"
                className="absolute top-5 right-5 text-stone-500 hover:text-primary p-2.5 rounded-full bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div className="text-center space-y-2">
                <div className="badge-gold">
                  <ShieldCheck size={13} className="text-accent" /> Government Verified Registrations
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary">
                  Official MahaRERA QR Certificates
                </h2>
                <p className="text-xs md:text-sm text-primary/70 max-w-md mx-auto">
                  Scan with your smartphone camera to verify the approved master plan and title certificates directly on the government portal.
                </p>
              </div>

              {/* QR Code Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
                {reraProjects.map((proj, idx) => (
                  <div key={idx} className="bg-[#FAF9F5] border border-stone-200/90 rounded-2xl p-5 text-center space-y-3.5 shadow-sm hover:border-accent/50 transition-all">
                    <h3 className="text-xs font-heading font-bold text-primary">{proj.phase}</h3>
                    
                    {/* QR Image */}
                    <div className="bg-white p-3 rounded-xl inline-block shadow-md border border-stone-100">
                      <img
                        src={proj.qrUrl}
                        alt={`MahaRERA QR Code ${proj.number}`}
                        className="w-36 h-36 mx-auto object-contain"
                      />
                    </div>

                    <div>
                      <div className="inline-block px-3 py-1 bg-accent/15 border border-accent/30 text-accent-dark font-sans font-bold text-xs rounded-full mb-2">
                        {proj.number}
                      </div>
                      <div>
                        <a
                          href={proj.govUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-primary font-semibold hover:text-accent transition-colors"
                        >
                          Verify on MahaRERA Portal <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center pt-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
                <span>Portal: maharera.maharashtra.gov.in</span>
                <span className="flex items-center gap-1 font-semibold text-emerald-600">
                  <Sparkles size={12} /> 100% Clear Title
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
