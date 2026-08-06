"use client";

import { useState } from "react";
import { Eye, Video, Sparkles, ChevronRight, Play, CheckCircle2 } from "lucide-react";
import { useModal } from "@/lib/modal-context";

const VR_SCENES = [
  {
    id: "scene-2bhk",
    title: "2 BHK Luxury Suite (757 sq.ft)",
    subtitle: "High-Rise Living Room & Designer Balcony",
    image: "/assets/hero-bg.jpg",
    badge: "360° VR Ready",
    specs: "Living Room • Master Bed • Dining • Modular Kitchen"
  },
  {
    id: "scene-3bhk",
    title: "3 BHK Premium Suite (1053 sq.ft)",
    subtitle: "Panoramic Hadapsar Skyline View",
    image: "/assets/hero-bg.jpg",
    badge: "360° VR Ready",
    specs: "Foyer • 3 Bedrooms • 3 Bathrooms • Terrace Balcony"
  },
  {
    id: "scene-plots",
    title: "NA Villa Bungalow Plot (1700+ sq.ft)",
    subtitle: "Custom Estate Plot & Peripheral Green Belt",
    image: "/assets/hero-bg.jpg",
    badge: "360° VR Ready",
    specs: "Independent Land • Demarcated Boundary • Gated Entry"
  }
];

export default function VirtualVRHub() {
  const [activeScene, setActiveScene] = useState(VR_SCENES[0]);
  const { openModal } = useModal();

  return (
    <section className="py-24 bg-warm-bg border-t border-primary/10 relative overflow-hidden" id="vr-tour-hub">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-600 font-mono text-[11px] uppercase tracking-widest">
            <Eye size={14} /> Virtual Reality Tour Hub
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary tracking-tight">
            Immersive <span className="text-gradient-gold">360° VR Walkthrough</span>
          </h2>
          <p className="text-sm md:text-base text-primary/60">
            Experience realistic 3D virtual walkthroughs of 2BHK, 3BHK residences, and NA Villa Plots from anywhere in the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Virtual Tour Screen Preview */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-primary/10 shadow-sm group">
            <div className="aspect-video relative bg-black flex items-center justify-center">
              <img
                src={activeScene.image}
                alt={activeScene.title}
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Play / Launch VR Button */}
              <button
                onClick={() => openModal({ title: `360 VR Tour - ${activeScene.title}` })}
                className="absolute z-20 flex flex-col items-center gap-3 p-6 rounded-full bg-accent/90 text-white hover:bg-dark hover:scale-110 transition-all shadow-2xl group/btn"
              >
                <Play size={28} className="fill-white ml-1 group-hover/btn:scale-110 transition-transform" />
              </button>

              {/* Scene Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-accent/20 text-accent px-3 py-1 rounded-full border border-accent/40 mb-2 inline-block">
                    {activeScene.badge}
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-white">{activeScene.title}</h3>
                  <p className="text-xs text-gray-300 font-mono mt-1">{activeScene.specs}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Selector List */}
          <div className="lg:col-span-4 space-y-4">
            {VR_SCENES.map((scene) => {
              const isSelected = activeScene.id === scene.id;
              return (
                <button
                  key={scene.id}
                  onClick={() => setActiveScene(scene)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all ${
                    isSelected
                      ? "border-accent bg-accent/10 ring-1 ring-accent/40 shadow-xl"
                      : "border-primary/10 bg-white hover:border-primary/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase font-bold text-accent">{scene.badge}</span>
                    {isSelected && <CheckCircle2 size={16} className="text-accent" />}
                  </div>
                  <h4 className="text-sm font-bold text-primary mb-1">{scene.title}</h4>
                  <p className="text-xs text-primary/60 font-mono">{scene.subtitle}</p>
                </button>
              );
            })}

            <button
              onClick={() => openModal({ title: "Schedule Live VR Walkthrough Call", source: "Virtual VR Hub" })}
              className="w-full py-4 rounded-xl bg-accent text-white font-bold text-xs uppercase tracking-widest hover:bg-dark transition-all flex items-center justify-center gap-2 shadow-xl mt-4"
            >
              Book 1-on-1 Guided VR Consultation <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
