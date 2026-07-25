"use client";

import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  height?: number;
  showBg?: boolean;
}

export default function BrandLogo({ className, height = 48, showBg = true }: BrandLogoProps) {
  return (
    <div className={cn("inline-flex items-center select-none group", className)}>
      <div
        className={cn(
          "relative transition-all duration-300 flex items-center justify-center",
          showBg ? "bg-white rounded-xl px-3 py-1.5 shadow-xl border border-accent/40 hover:scale-105" : ""
        )}
      >
        <img
          src="/assets/official-logo.png"
          alt="Kumar Realty | Magnacity Official Logo"
          className="w-auto object-contain transition-all"
          style={{ height: `${height}px`, maxHeight: `${height}px` }}
        />
      </div>
    </div>
  );
}
