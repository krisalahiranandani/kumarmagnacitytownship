"use client";

import { FileCheck, ShieldCheck, Download, CheckCircle2 } from "lucide-react";
import { useModal } from "@/lib/modal-context";
import MahaRERAQRCodeModal from "@/components/MahaRERAQRCodeModal";

const LEGAL_DOCS = [
  {
    title: "MahaRERA Certificate (Phase 1)",
    number: "RERA ID: P52100052096",
    status: "Verified & Government Approved",
    type: "RERA Sanction"
  },
  {
    title: "MahaRERA Certificate (Phase 2)",
    number: "RERA ID: P52100054476",
    status: "Verified & Government Approved",
    type: "RERA Sanction"
  },
  {
    title: "PMRDA Sanctioned Layout Plan",
    number: "Sanction No: PMRDA/2024/0912",
    status: "Sanctioned Master Plan",
    type: "Layout Approval"
  },
  {
    title: "Clear Title Legal Opinion",
    number: "Adv. K. R. Advocate & Associates",
    status: "100% Freehold Land Title",
    type: "Legal Clearance"
  }
];

export default function LegalTransparencyVault() {
  const { openModal } = useModal();

  return (
    <section className="py-24 bg-[#020202] border-t border-white/10 relative overflow-hidden" id="legal-vault">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-[11px] uppercase tracking-widest">
            <ShieldCheck size={14} /> Official Transparency Vault
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            100% Verified <span className="text-gradient-gold">Legal Approvals</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Download government RERA certificates, PMRDA sanctioned layouts, and legal title opinion documents.
          </p>
          <div className="pt-2">
            <MahaRERAQRCodeModal />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEGAL_DOCS.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-accent/40 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono text-accent border-b border-white/10 pb-3">
                  <span>{doc.type}</span>
                  <CheckCircle2 size={14} className="text-emerald-400" />
                </div>
                <h3 className="text-base font-serif font-bold text-white leading-tight">{doc.title}</h3>
                <p className="text-xs text-accent font-mono font-bold">{doc.number}</p>
                <p className="text-[11px] text-gray-400">{doc.status}</p>
              </div>

              <button
                onClick={() => openModal(`Download ${doc.title}`)}
                className="mt-6 w-full py-3 rounded-xl bg-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-accent hover:text-dark transition-all flex items-center justify-center gap-2 border border-white/10"
              >
                <Download size={14} /> Download PDF
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
