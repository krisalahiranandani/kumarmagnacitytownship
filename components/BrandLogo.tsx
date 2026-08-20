"use client";

import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  height?: number;
  showBg?: boolean;
}

export default function BrandLogo({ className, height = 36, showBg = true }: BrandLogoProps) {
  return (
    <div className={cn("inline-flex items-center select-none group shrink-0", className)}>
      <div
        className={cn(
          "relative transition-all duration-300 flex items-center justify-center",
          showBg ? "bg-white/95 backdrop-blur-md rounded-full px-3 py-1 shadow-sm border border-white/60 group-hover:border-accent/50 group-hover:shadow-md" : ""
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
