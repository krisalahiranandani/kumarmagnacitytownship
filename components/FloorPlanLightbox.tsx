"use client";

import { useState } from "react";
import { X, ZoomIn, Download, Layers, ShieldCheck } from "lucide-react";
import { useModal } from "@/lib/modal-context";

interface FloorPlanLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  carpetArea: string;
  price: string;
  imageSrc: string;
}

export default function FloorPlanLightbox({
  isOpen,
  onClose,
  title,
  carpetArea,
  price,
  imageSrc,
}: FloorPlanLightboxProps) {
  const { openModal } = useModal();
  const [zoomLevel, setZoomLevel] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8 animate-fade-in">
      <div className="bg-[#0a0a0a] border border-white/15 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col relative shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-accent">
              <Layers size={14} /> Official Architectural Layout
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white mt-0.5">{title}</h3>
            <p className="text-xs text-gray-400 font-mono">Carpet: {carpetArea} • Price: {price}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white hover:text-dark transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Zoomable Image Container */}
        <div className="flex-1 overflow-auto p-6 flex items-center justify-center relative bg-black/60 min-h-[350px]">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[60vh] object-contain transition-transform duration-300 rounded-xl border border-white/10 shadow-2xl"
            style={{ transform: `scale(${zoomLevel})` }}
          />

          {/* Zoom Control Pill */}
          <div className="absolute bottom-4 right-4 bg-dark/80 border border-white/20 rounded-full px-4 py-2 flex items-center gap-3 backdrop-blur-md">
            <button
              onClick={() => setZoomLevel(Math.max(1, zoomLevel - 0.25))}
              className="text-xs text-gray-300 font-bold hover:text-white"
            >
              -
            </button>
            <span className="text-xs font-mono text-accent font-bold">{Math.round(zoomLevel * 100)}%</span>
            <button
              onClick={() => setZoomLevel(Math.min(2.5, zoomLevel + 0.25))}
              className="text-xs text-gray-300 font-bold hover:text-white"
            >
              +
            </button>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-white/10 bg-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <ShieldCheck size={16} className="text-emerald-400" />
            100% Vastu Compliant Layout Plan
          </div>
          <button
            onClick={() => {
              onClose();
              openModal(`Download PDF Floor Plan - ${title}`);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-accent text-dark font-bold text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <Download size={16} /> Download High-Res PDF Layout
          </button>
        </div>
      </div>
    </div>
  );
}
