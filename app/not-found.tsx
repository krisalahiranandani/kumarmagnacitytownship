"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { House, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-warm-bg flex flex-col">
      <Header />
      
      <div className="flex-grow flex items-center justify-center pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="relative glass-obsidian rounded-[4rem] p-12 md:p-24 border border-primary/10 overflow-hidden text-center reveal-luxury">
             {/* Decorative Media Background */}
             <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center grayscale" />
                <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />
             </div>

             <div className="relative z-10 space-y-12">
                <div className="space-y-4">
                    <span className="text-[140px] md:text-[220px] font-heading font-black text-primary/5 leading-none block select-none">404</span>
                    <div className="space-y-2 -mt-16 md:-mt-28">
                       <h1 className="text-4xl md:text-7xl font-heading font-bold text-primary tracking-tight">Path to Excellence <br /><span className="text-accent italic font-light">Sublimated</span></h1>
                       <div className="w-20 h-1 bg-accent/30 mx-auto rounded-full" />
                    </div>
                    <p className="text-primary/40 max-w-lg mx-auto leading-relaxed font-light text-lg pt-6">
                        The luxury you seek remains within our sanctuary, but this specific frequency does not exist. Allow us to guide you back to the Sovereign Estate.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link 
                        href="/" 
                        className="btn-gold px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-2 shadow-lg"
                    >
                        <House size={16} />
                        RETURN HOME
                    </Link>
                    <Link 
                        href="/kumar-magnacity-manjari-location-map" 
                        className="px-10 py-4 rounded-full bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 font-bold uppercase tracking-widest text-xs flex items-center gap-2 transition-all shadow-sm"
                    >
                        EXPLORE LOCATION
                        <Search size={16} />
                    </Link>
                </div>
                
                <div className="pt-12 border-t border-stone-200/60 grid grid-cols-2 md:grid-cols-6 gap-3 text-center">
                    <Link href="/kumar-magnacity-hadapsar" className="text-xs font-bold uppercase tracking-wider text-stone-600 hover:text-accent transition-colors py-2">
                        Township
                    </Link>
                    <Link href="/kumar-magnacity-2bhk-flats-hadapsar-pune-price" className="text-xs font-bold uppercase tracking-wider text-stone-600 hover:text-accent transition-colors py-2">
                        2 BHK Flats
                    </Link>
                    <Link href="/kumar-magnacity-3bhk-apartments-manjari-pune-price" className="text-xs font-bold uppercase tracking-wider text-stone-600 hover:text-accent transition-colors py-2">
                        3 BHK Suites
                    </Link>
                    <Link href="/kumar-magnacity-na-bungalow-plots-concept" className="text-xs font-bold uppercase tracking-wider text-stone-600 hover:text-accent transition-colors py-2">
                        NA Plots
                    </Link>
                    <Link href="/kumar-magnacity-price" className="text-xs font-bold uppercase tracking-wider text-stone-600 hover:text-accent transition-colors py-2">
                        Price List
                    </Link>
                    <Link href="/kumar-magnacity-rera" className="text-xs font-bold uppercase tracking-wider text-stone-600 hover:text-accent transition-colors py-2">
                        MahaRERA
                    </Link>
                </div>
             </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
