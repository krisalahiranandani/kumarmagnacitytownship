"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight, Home, LayoutGrid, Info, MessageSquare, Building2 } from "lucide-react";
import { useModal } from "@/lib/modal-context";
import { motion, AnimatePresence } from "framer-motion";

import BrandLogo from "@/components/BrandLogo";

const NAV_LINKS = [
  { name: "100-ACRE TOWNSHIP", href: "/kumar-magnacity-na-bungalow-plots-concept", icon: Home },
  { name: "2 & 3 BHK RESIDENCES", href: "/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune", icon: Building2 },
  { name: "VILLA PLOTS", href: "/kumar-magnacity-na-bungalow-plots-availability", icon: LayoutGrid },
  { name: "LOCATION & SCHOOL", href: "/kumar-magnacity-location-advantages-hadapsar-manjari", icon: Info },
  { name: "ROI MATRIX", href: "/kumar-magnacity-investment-plan-pune-east", icon: MessageSquare },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useModal();
  const isMarathi = pathname.startsWith("/mr");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-[10000] transition-all duration-700 rounded-[2rem] overflow-hidden",
          isScrolled 
            ? "py-3 bg-dark/80 backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)]" 
            : "py-5 bg-dark/40 backdrop-blur-md border border-white/5"
        )}
      >
        <div className="container mx-auto px-6 lg:px-10 flex items-center justify-between gap-4">
          
          {/* LOGO AREA - Official Brand Logo */}
          <div className="flex items-center gap-4 lg:gap-8 shrink-0">
            <Link href={isMarathi ? "/mr" : "/"} className="flex items-center group">
              <BrandLogo height={44} />
            </Link>
            
            {/* 60 Years Trust Badge */}
            <div className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-accent/20 to-transparent border border-accent/30 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[9px] lg:text-[10px] uppercase font-black tracking-[0.2em] text-accent">60 Years of Trust</span>
            </div>
          </div>


          {/* DESKTOP NAVIGATION & ACTIONS - Fluid Spacing */}
          <div className="hidden lg:flex items-center justify-end flex-1 gap-6 lg:gap-12">
            
            {/* Primary Links */}
            <nav className="flex items-center gap-1 xl:gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={isMarathi ? `/mr${link.href}` : link.href}
                  className={cn(
                    "px-4 py-2 text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.25em] transition-all relative group whitespace-nowrap",
                    pathname === (isMarathi ? `/mr${link.href}` : link.href) ? "text-accent font-extrabold" : "text-stone-300 hover:text-white"
                  )}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-3/4" />
                </Link>
              ))}
            </nav>
            
            {/* Action Group */}
            <div className="flex items-center gap-6 lg:gap-8 border-l border-white/15 pl-6 lg:pl-8">
                <button
                  onClick={() => openModal({
                    title: isMarathi ? "एलिट ॲक्सेस मिळवा" : "Sovereign Elite Access",
                    subtitle: isMarathi ? "अचूक किंमत आणि इन्व्हेंटरी डेटा अनलॉक करा." : "Unlock exact pricing and inventory master-plan data instantly.",
                    source: "Header Desktop"
                  })}
                  className="btn-gold text-[11px] font-bold px-7 py-3 rounded-full hover:scale-105 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
                >
                  {isMarathi ? "आता चौकशी करा" : "ENQUIRE NOW"}
                </button>

                {/* Language Switcher */}
                <div className="flex items-center gap-2 shrink-0">
                   <Link href="/" className={cn("text-[11px] font-black tracking-wider transition-all px-3 py-1.5 rounded-lg", !isMarathi ? "bg-accent text-[#0D0B08] shadow-md shadow-accent/30 font-extrabold" : "text-stone-400 hover:text-white hover:bg-white/10")}>EN</Link>
                   <Link href="/mr" className={cn("text-[11px] font-black tracking-wider transition-all px-3 py-1.5 rounded-lg", isMarathi ? "bg-accent text-[#0D0B08] shadow-md shadow-accent/30 font-extrabold" : "text-stone-400 hover:text-white hover:bg-white/10")}>MR</Link>
                </div>
            </div>
          </div>

          {/* Mobile Toggle & Mini Actions */}
          <div className="lg:hidden flex items-center gap-4">
             <div className="flex items-center gap-2 mr-2">
                <Link href="/" className={cn("text-[11px] font-bold px-2 py-1 rounded transition-colors", !isMarathi ? "text-accent bg-white/5" : "text-white/20")}>EN</Link>
                <div className="w-[1px] h-3 bg-white/10" />
                <Link href="/mr" className={cn("text-[11px] font-bold px-2 py-1 rounded transition-colors", isMarathi ? "text-accent bg-white/5" : "text-white/20")}>MR</Link>
             </div>
             <button
               aria-label="Open Mobile Menu"
               onClick={() => setMobileMenuOpen(true)}
               className="text-white p-2.5 border border-white/10 rounded-2xl bg-white/5 active:scale-90 transition-all shadow-xl"
             >
               <Menu size={22} />
             </button>
          </div>

        </div>
      </header>

      {/* Immersive Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10002] bg-dark/98 backdrop-blur-3xl md:hidden"
          >
            {/* Header in Menu */}
            <div className="flex items-center justify-between px-8 py-8 border-b border-white/10">
                <Link href={isMarathi ? "/mr" : "/"} onClick={() => setMobileMenuOpen(false)}>
                  <BrandLogo height={40} />
                </Link>
               <button 
                 aria-label="Close Mobile Menu"
                 onClick={() => setMobileMenuOpen(false)} 
                 className="text-white p-2 bg-white/5 rounded-full"
               >
                  <X size={28} />
               </button>
            </div>

            {/* Links Content */}
            <div className="flex flex-col justify-between h-[calc(100vh-120px)] p-8 overflow-y-auto">
               <nav className="space-y-4 pt-4">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between py-6 border-b border-white/5 group"
                      >
                         <div className="flex items-center gap-6">
                            <link.icon className="text-accent/30 group-hover:text-accent transition-colors" size={22} />
                            <span className="text-2xl font-heading font-medium text-white group-hover:text-accent transition-colors uppercase tracking-tight">
                               {link.name}
                            </span>
                         </div>
                         <ArrowRight className="text-white/10" size={18} />
                      </Link>
                    </motion.div>
                  ))}
               </nav>

               <div className="space-y-6 pb-10">
                  <button 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openModal({ title: "Priority Briefing", source: "Mobile Immersive Menu" });
                    }}
                    className="w-full bg-primary text-white font-bold py-6 rounded-3xl text-center tracking-[0.25em] uppercase text-xs shadow-2xl flex items-center justify-center gap-3 shine-effect border border-white/10"
                  >
                    <MessageSquare size={16} className="text-accent" />
                    Enquire Now
                  </button>
                  <p className="text-[10px] text-white/20 text-center uppercase tracking-widest">Sovereign Asset Management Vault</p>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
