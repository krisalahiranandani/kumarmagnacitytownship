"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

// Route Label Resolver Map
const ROUTE_LABELS: Record<string, string> = {
  "mr": "मुख्यपृष्ठ",
  "kumar-magnacity-na-bungalow-plots-concept": "Township Concept",
  "kumar-magnacity-2bhk-3bhk-apartments-manjari-pune": "Residences & Towers",
  "kumar-magnacity-na-bungalow-plots-availability": "Sovereign NA Plots",
  "kumar-magnacity-location-advantages-hadapsar-manjari": "Location & Podar School",
  "kumar-magnacity-investment-plan-pune-east": "Investment ROI Matrix",
  "kumar-magnacity-2bhk-flats-hadapsar-pune-price": "2 BHK Smart Luxury",
  "kumar-magnacity-3bhk-apartments-manjari-pune-price": "3 BHK Grand Suites",
  "compare": "Project Comparisons",
  "insights": "Market Insights",
  "floor-plans": "Floor Plans",
  "budget": "Budget Slabs"
};

export default function BreadcrumbsNavigation({ className }: { className?: string }) {
  const pathname = usePathname();

  // Do not render breadcrumbs on homepage
  if (!pathname || pathname === "/" || pathname === "/mr") {
    return null;
  }

  const rawSegments = pathname.split("/").filter(Boolean);
  const isMarathi = rawSegments[0] === "mr";
  const homeHref = isMarathi ? "/mr" : "/";
  const homeLabel = isMarathi ? "मुख्यपृष्ठ" : "Home";

  // Build breadcrumb items
  const items = rawSegments.map((segment, index) => {
    // If it's the 'mr' prefix, we handle it as part of home
    if (segment === "mr") return null;

    const href = "/" + rawSegments.slice(0, index + 1).join("/");
    let label = ROUTE_LABELS[segment];

    if (!label) {
      // Format kebab-case (e.g. flats-near-magarpatta -> Flats Near Magarpatta)
      label = segment
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
    }

    const isLast = index === rawSegments.length - 1;

    return {
      name: label,
      href,
      isLast
    };
  }).filter(Boolean) as { name: string; href: string; isLast: boolean }[];

  // JSON-LD BreadcrumbList Schema
  const schemaList = [
    {
      "@type": "ListItem",
      position: 1,
      name: homeLabel,
      item: `https://kumarmagnacitytownship.com${homeHref}`
    },
    ...items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 2,
      name: it.name,
      item: `https://kumarmagnacitytownship.com${it.href}`
    }))
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: schemaList
  };

  return (
    <>
      {/* Schema.org BreadcrumbList Microdata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Semantic Visual Breadcrumb Bar */}
      <nav 
        aria-label="Breadcrumb" 
        className={cn("py-3 px-4 md:px-6 w-full max-w-7xl mx-auto z-20 relative", className)}
      >
        <ol className="inline-flex items-center flex-wrap gap-1.5 md:gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-stone-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-xs font-sans text-stone-600">
          
          {/* Home Link */}
          <li className="inline-flex items-center">
            <Link 
              href={homeHref} 
              className="inline-flex items-center gap-1.5 text-stone-500 hover:text-accent font-medium transition-colors"
            >
              <Home size={13} className="text-accent shrink-0" />
              <span>{homeLabel}</span>
            </Link>
          </li>

          {/* Breadcrumb Traversal Items */}
          {items.map((item, idx) => (
            <li key={idx} className="inline-flex items-center gap-1.5 md:gap-2">
              <ChevronRight size={12} className="text-stone-300 shrink-0" />
              {item.isLast ? (
                <span 
                  aria-current="page" 
                  className="font-semibold text-primary max-w-[200px] md:max-w-none truncate"
                >
                  {item.name}
                </span>
              ) : (
                <Link 
                  href={item.href} 
                  className="text-stone-500 hover:text-accent font-medium transition-colors max-w-[160px] md:max-w-none truncate"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}

        </ol>
      </nav>
    </>
  );
}
