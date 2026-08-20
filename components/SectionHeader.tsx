"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  badge,
  align = "center",
  className,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "space-y-4 md:space-y-6 max-w-4xl relative",
      align === "center" && "mx-auto text-center flex flex-col items-center",
      className
    )}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="badge-gold"
        >
          <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
          {badge}
        </motion.div>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.15] tracking-tight",
          dark ? "text-white" : "text-primary"
        )}
      >
        {title.split("<br/>").map((t, i) => (
          <span key={i}>
            {t}
            {i < title.split("<br/>").length - 1 && <br />}
          </span>
        ))}
      </motion.h2>

      {/* Modern Animated Borderline Accents */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "80px", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className={cn(
          "h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent rounded-full",
          align === "left" && "mr-auto"
        )}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "text-base md:text-lg font-sans font-normal leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            dark ? "text-stone-300" : "text-primary/70"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
