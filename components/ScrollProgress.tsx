"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[99999] pointer-events-none bg-black/20">
      <div
        className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 shadow-[0_0_12px_rgba(201,162,39,0.8)] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
