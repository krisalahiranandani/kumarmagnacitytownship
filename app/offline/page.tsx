import React from "react";
import Link from "next/link";
import { Phone, MapPin, WifiOff, RefreshCw, Navigation } from "lucide-react";

export const metadata = {
  title: "Offline Mode | Kumar Magnacity Hadapsar Annexe",
  description: "You are currently offline. Contact the sales desk directly or view cached GPS directions.",
};

export default function OfflinePage() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-[#0D0B08] text-white px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-stone-900/80 border border-stone-800 p-8 rounded-3xl shadow-2xl backdrop-blur-xl">
        <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto animate-pulse">
          <WifiOff size={32} />
        </div>

        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold">Offline Experience</span>
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-white">Connection Paused</h1>
          <p className="text-xs text-stone-400 font-sans leading-relaxed">
            You appear to be offline or in a low-reception zone near Manjari. You can still reach our sales team directly via phone or access GPS navigation.
          </p>
        </div>

        {/* Priority Phone Desk */}
        <div className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700/80 text-left space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
            <Phone size={14} />
            <span>Direct Sales Hotline</span>
          </div>
          <a
            href="tel:+917744009295"
            className="block text-lg font-mono font-bold text-white hover:text-amber-400 transition-colors"
          >
            +91 77440 09295
          </a>
          <p className="text-[10px] text-stone-400">Open Daily: 9:30 AM – 8:00 PM</p>
        </div>

        {/* GPS Coordinates */}
        <div className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700/80 text-left space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
            <MapPin size={14} />
            <span>Site Location</span>
          </div>
          <p className="text-xs text-stone-300">
            Kumar Magnacity Township, Manjari Road, Hadapsar Annexe, Pune 412307
          </p>
          <div className="pt-2">
            <a
              href="https://www.google.com/maps/place/Magnacity+by+Kumar+Realty/@18.4948931,73.9828496,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:underline"
            >
              <Navigation size={12} />
              <span>Open in Google Maps App &rarr;</span>
            </a>
          </div>
        </div>

        {/* Retry Button */}
        <div className="pt-2">
          <Link
            href="/"
            className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <RefreshCw size={14} />
            <span>Retry Connection</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
