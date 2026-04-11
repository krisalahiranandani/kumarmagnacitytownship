"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { HeaderProps } from "@/types/components";

const NAV_LINKS = [
  { name: "The Concept", href: "/concept" },
  { name: "Neighborhood", href: "/location" },
  { name: "Our Plots", href: "/availability" },
  { name: "Amenities", href: "/amenities" },
  { name: "Investment", href: "/investment" },
  { name: "Insights", href: "/market-insights" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isMarathi = pathname.startsWith("/mr");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-[1000] transition-all duration-500",
        isScrolled ? "py-2 px-4" : "py-0 px-4 pt-4"
      )}
    >
      <div 
        className={cn(
          "container mx-auto max-w-7xl flex justify-between items-center px-4 py-2 rounded-full transition-all duration-500 border",
          isScrolled 
            ? "bg-primary/85 backdrop-blur-2xl border-accent/20 shadow-2xl translate-y-1" 
            : "bg-white/70 backdrop-blur-xl border-white/30 shadow-lg"
        )}
      >
        {/* Logo */}
        <Link href={isMarathi ? "/mr" : "/"} className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#F3E5AB] to-accent text-primary flex items-center justify-center font-bold text-lg rounded-tl-xl rounded-br-xl rotate-0 hover:rotate-6 transition-transform border border-white/50">
            K
          </div>
          <div className="flex flex-col leading-none">
            <span className={cn(
              "font-heading font-bold text-xl tracking-tight transition-colors",
              isScrolled ? "text-white" : "text-primary"
            )}>
              Kumar MagnaCity
            </span>
            <span className="text-[7px] text-accent/50 font-bold uppercase tracking-widest -mt-0.5 block">
              Build v7.0.0 (PropSmart Secure)
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={isMarathi ? `/mr${link.href}` : link.href}
              className={cn(
                "text-[12px] font-bold uppercase tracking-wider transition-colors relative group py-2",
                isScrolled ? "text-white/80 hover:text-accent" : "text-dark/80 hover:text-primary",
                pathname === link.href && "text-accent font-black"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-current transition-all group-hover:w-full",
                pathname === link.href && "w-full"
              )} />
            </Link>
          ))}
          
          <Link 
            href="#contact" 
            className="bg-primary text-white text-[12px] font-bold uppercase tracking-wider px-6 py-2 rounded-full hover:bg-primary-light transition-all hover:scale-105"
          >
            Enquire Now
          </Link>

          {/* Lang Switch */}
          <div className="flex items-center gap-2 border-l border-current/10 ml-2 pl-4">
            <Link href={pathname.replace("/mr", "") || "/"} className={cn("text-[10px] font-bold", !isMarathi ? "text-accent" : "text-current/50")}>EN</Link>
            <span className="opacity-20 text-[10px]">|</span>
            <Link href={isMarathi ? pathname : `/mr${pathname === "/" ? "" : pathname}`} className={cn("text-[10px] font-bold", isMarathi ? "text-accent" : "text-current/50")}>मराठी</Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-primary/5 border border-primary/10 text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden fixed inset-0 top-[72px] bg-white z-[999] p-6 transition-transform border-t",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={isMarathi ? `/mr${link.href}` : link.href}
              className="text-lg font-bold border-b pb-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact" 
            className="bg-primary text-white text-center font-bold py-4 rounded-xl mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Enquire Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
