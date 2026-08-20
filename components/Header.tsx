"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight, Sparkles, PhoneCall } from "lucide-react";
import { useModal } from "@/lib/modal-context";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";

const NAV_LINKS = [
  { name: "Township", href: "/kumar-magnacity-na-bungalow-plots-concept" },
  { name: "Residences", href: "/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune" },
  { name: "Villa Plots", href: "/kumar-magnacity-na-bungalow-plots-availability" },
  { name: "Location & School", href: "/kumar-magnacity-location-advantages-hadapsar-manjari" },
  { name: "ROI Matrix", href: "/kumar-magnacity-investment-plan-pune-east" },
];

const MARATHI_NAV_LINKS = [
  { name: "टाउनशिप", href: "/mr/kumar-magnacity-na-bungalow-plots-concept" },
  { name: "अपार्टमेंट्स", href: "/mr/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune" },
  { name: "प्लॉट्स", href: "/mr/kumar-magnacity-na-bungalow-plots-availability" },
  { name: "लोकेशन व शाळा", href: "/mr/kumar-magnacity-location-advantages-hadapsar-manjari" },
  { name: "गुंतवणूक", href: "/mr/kumar-magnacity-investment-plan-pune-east" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useModal();
  const isMarathi = pathname.startsWith("/mr");
  const links = isMarathi ? MARATHI_NAV_LINKS : NAV_LINKS;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Sleek Floating Glassmorphic Capsule Header */}
      <header
        className={cn(
          "fixed top-2.5 md:top-4 left-1/2 -translate-x-1/2 w-[94%] max-w-[1140px] z-[10000] transition-all duration-500 rounded-full",
          isScrolled 
            ? "py-1.5 md:py-2 bg-[#0D0B08]/85 backdrop-blur-2xl border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.35)]" 
            : "py-2 md:py-2.5 bg-[#0D0B08]/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
        )}
      >
        <div className="container mx-auto px-3.5 md:px-5 flex items-center justify-between gap-3">
          
          {/* Brand Logo */}
          <Link href={isMarathi ? "/mr" : "/"} className="flex items-center group shrink-0">
            <BrandLogo height={30} showBg={true} />
          </Link>

          {/* Desktop Navigation Links - Google Outfit Font */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-1.5 text-[13px] font-sans font-medium rounded-full transition-all duration-200 whitespace-nowrap",
                    isActive 
                      ? "bg-white/15 text-accent font-semibold shadow-inner" 
                      : "text-stone-300 hover:text-white hover:bg-white/8"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Pills */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Direct Enquiry CTA */}
            <button
              onClick={() => openModal({
                title: isMarathi ? "एलिट ॲक्सेस मिळवा" : "Sovereign Priority Access",
                subtitle: isMarathi ? "अचूक किंमत आणि इन्व्हेंटरी डेटा अनलॉक करा." : "Unlock exact pricing, master plan & floor plans.",
                source: "Header Desktop"
              })}
              className="btn-gold text-[12px] font-sans font-semibold py-1.5 px-4 rounded-full flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <Sparkles size={12} className="text-primary" />
              <span>{isMarathi ? "चौकशी करा" : "Enquire Now"}</span>
            </button>

            {/* Language Switcher Pill */}
            <div className="flex items-center bg-white/8 border border-white/10 rounded-full p-0.5">
              <Link 
                href="/" 
                className={cn(
                  "text-[11px] font-sans font-semibold px-2.5 py-1 rounded-full transition-all",
                  !isMarathi ? "bg-accent text-[#0D0B08] shadow-sm" : "text-stone-400 hover:text-white"
                )}
              >
                EN
              </Link>
              <Link 
                href="/mr" 
                className={cn(
                  "text-[11px] font-sans font-semibold px-2.5 py-1 rounded-full transition-all",
                  isMarathi ? "bg-accent text-[#0D0B08] shadow-sm" : "text-stone-400 hover:text-white"
                )}
              >
                MR
              </Link>
            </div>
          </div>

          {/* Mobile Right Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => openModal({
                title: isMarathi ? "एलिट ॲक्सेस" : "Instant Priority Access",
                subtitle: "Unlock exact pricing and brochure.",
                source: "Header Mobile"
              })}
              className="btn-gold text-[11px] font-sans font-semibold py-1 px-3 rounded-full flex items-center gap-1"
            >
              <span>Enquire</span>
            </button>

            <div className="flex items-center bg-white/8 border border-white/10 rounded-full p-0.5 text-[10px]">
              <Link 
                href="/" 
                className={cn("px-2 py-0.5 rounded-full font-semibold", !isMarathi ? "bg-accent text-primary" : "text-stone-400")}
              >
                EN
              </Link>
              <Link 
                href="/mr" 
                className={cn("px-2 py-0.5 rounded-full font-semibold", isMarathi ? "bg-accent text-primary" : "text-stone-400")}
              >
                MR
              </Link>
            </div>

            <button
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all active:scale-95"
            >
              <Menu size={18} />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu - Fluid Glassmorphism */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10005] bg-black/85 backdrop-blur-3xl flex flex-col justify-between p-6 lg:hidden"
          >
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <BrandLogo height={28} showBg={true} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Links List */}
            <div className="flex flex-col gap-2 py-8 overflow-y-auto">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-5 py-3.5 rounded-2xl text-base font-sans font-medium transition-all flex items-center justify-between",
                      isActive 
                        ? "bg-accent/20 text-accent font-semibold border border-accent/30" 
                        : "text-stone-300 hover:text-white hover:bg-white/5"
                    )}
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={16} className="opacity-50" />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Actions */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal({
                    title: isMarathi ? "एलिट ॲक्सेस मिळवा" : "Sovereign Priority Access",
                    subtitle: "Unlock exact pricing and inventory master-plan data instantly.",
                    source: "Mobile Drawer"
                  });
                }}
                className="w-full btn-gold py-3.5 rounded-full font-sans font-bold text-sm flex items-center justify-center gap-2"
              >
                <Sparkles size={16} />
                <span>{isMarathi ? "आता चौकशी करा" : "Download Brochure & Price Sheet"}</span>
              </button>

              <a
                href="tel:+919225512120"
                className="w-full py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-sans font-medium text-xs flex items-center justify-center gap-2 border border-white/15 transition-colors"
              >
                <PhoneCall size={14} className="text-accent" />
                <span>Call Sales Desk: +91 92255 12120</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
