"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark" | "full";
  height?: number;
}

export default function BrandLogo({ className, variant = "full", height = 48 }: BrandLogoProps) {
  return (
    <div className={cn("inline-flex items-center gap-3 select-none", className)}>
      <div className="relative bg-white/95 rounded-xl px-3 py-1.5 shadow-xl border border-accent/30 flex items-center justify-center transition-transform hover:scale-105">
        <img
          src="/assets/official-logo.png"
          alt="Kumar Realty | Magnacity Official Logo"
          className="h-10 md:h-12 w-auto object-contain"
          style={{ maxHeight: `${height}px` }}
        />
      </div>
    </div>
  );
}
