"use client";

import { useState } from "react";
import { QrCode, ExternalLink, ShieldCheck, CheckCircle2, X } from "lucide-react";

export default function MahaRERAQRCodeModal() {
  const [isOpen, setIsOpen] = useState(false);

  const reraProjects = [
    {
      phase: "Kumar Magnacity Phase 1",
      number: "P52100052096",
      qrUrl: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://maharera.mahaonline.gov.in/SearchList/Search?searchtext=P52100052096",
      govUrl: "https://maharera.mahaonline.gov.in/"
    },
    {
      phase: "Kumar Magnacity Phase 2",
      number: "P52100054476",
      qrUrl: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://maharera.mahaonline.gov.in/SearchList/Search?searchtext=P52100054476",
      govUrl: "https://maharera.mahaonline.gov.in/"
    }
  ];

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/40 text-accent hover:bg-accent hover:text-dark text-xs font-mono font-bold transition-all shadow-lg"
      >
        <QrCode size={16} /> Scan MahaRERA QR Code
      </button>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-[#0A0A0A] border border-accent/40 rounded-3xl max-w-2xl w-full p-6 md:p-8 space-y-6 relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] uppercase">
                <ShieldCheck size={12} /> Government Verified Registration
              </div>
              <h2 className="text-2xl font-serif font-bold text-white">MahaRERA Official QR Codes</h2>
              <p className="text-xs text-gray-400">
                Scan with your phone camera to verify registration details directly on the official MahaRERA Government Portal.
              </p>
            </div>

            {/* QR Code Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {reraProjects.map((proj, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center space-y-4">
                  <h3 className="text-sm font-serif font-bold text-white">{proj.phase}</h3>
                  
                  {/* QR Image */}
                  <div className="bg-white p-3 rounded-xl inline-block shadow-xl">
                    <img
                      src={proj.qrUrl}
                      alt={`MahaRERA QR Code ${proj.number}`}
                      className="w-40 h-40 mx-auto"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-mono font-bold text-accent">RERA NO: {proj.number}</p>
                    <a
                      href={proj.govUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-gray-400 hover:text-white underline mt-1 font-mono"
                    >
                      Verify on MahaRERA Portal <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-2 border-t border-white/10">
              <p className="text-[10px] text-gray-500 font-mono">
                Official MahaRERA Portal: maharera.mahaonline.gov.in
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
