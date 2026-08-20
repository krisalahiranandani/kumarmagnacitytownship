"use client";

import { useState } from "react";
import { Check, X, ShieldCheck, Sparkles, Building2, Landmark, Download, ArrowRight, HelpCircle } from "lucide-react";
import { useModal } from "@/lib/modal-context";
import { cn } from "@/lib/utils";

interface ComparisonRow {
  label: string;
  tooltip?: string;
  twoBhk: string;
  threeBhk: string;
  plot: string;
  isHighlight?: boolean;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    label: "Launch Starting Price",
    twoBhk: "₹72.99 Lakhs*",
    threeBhk: "₹1.05 Crore*",
    plot: "₹1.49 Crore*",
    isHighlight: true
  },
  {
    label: "Carpet / Plot Area",
    twoBhk: "757 sq.ft Carpet",
    threeBhk: "1,053 sq.ft Carpet",
    plot: "1,700+ sq.ft Land",
    isHighlight: true
  },
  {
    label: "Structure & Floors",
    twoBhk: "G+30 High-Rise Tower",
    threeBhk: "G+30 High-Rise Tower",
    plot: "G+2 Custom Villa Permitted"
  },
  {
    label: "Outdoor Private Space",
    twoBhk: "Private Deck Balcony",
    threeBhk: "Expansive Double Balconies",
    plot: "100% Private Lawn & Terrace"
  },
  {
    label: "Dedicated Car Parking",
    twoBhk: "1 Covered Space",
    threeBhk: "1 Covered Space (Option for 2)",
    plot: "Private Driveway (2+ Cars)"
  },
  {
    label: "Clubhouse & Sports Arena",
    twoBhk: "Full 1-Lakh Sq.Ft Access",
    threeBhk: "Full 1-Lakh Sq.Ft Access",
    plot: "Full 1-Lakh Sq.Ft Access"
  },
  {
    label: "Podar School Proximity",
    twoBhk: "2 Mins Walk (On-Campus)",
    threeBhk: "2 Mins Walk (On-Campus)",
    plot: "3 Mins Walk (On-Campus)"
  },
  {
    label: "Estimated Rental Yield",
    twoBhk: "4.8% - 5.5% p.a.",
    threeBhk: "4.5% - 5.2% p.a.",
    plot: "High Capital Land Growth",
    isHighlight: true
  },
  {
    label: "Target Completion Date",
    twoBhk: "December 2027",
    threeBhk: "December 2027",
    plot: "Ready for Registration"
  },
  {
    label: "MahaRERA Registration",
    twoBhk: "P52100052096",
    threeBhk: "P52100052096",
    plot: "P52100054476"
  }
];

export default function UnitComparisonMatrix() {
  const { openModal } = useModal();
  const [highlightOnly, setHighlightOnly] = useState<boolean>(false);

  const displayedRows = highlightOnly 
    ? COMPARISON_DATA.filter(row => row.isHighlight)
    : COMPARISON_DATA;

  return (
    <section className="py-24 bg-warm-bg text-primary relative overflow-hidden" id="unit-comparison">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="badge-gold">
            <Sparkles size={12} className="text-accent" />
            <span>Decision Intelligence</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary tracking-tight">
            Side-by-Side <span className="text-gradient-gold">Unit Comparison Matrix</span>
          </h2>
          <p className="text-sm md:text-base text-primary/70 max-w-2xl mx-auto">
            Evaluate configurations across carpet areas, price points, rental yield projections, and land sovereign ownership to choose the perfect match for your family.
          </p>

          {/* Toggle Key Highlights */}
          <div className="flex justify-center pt-2">
            <button
              onClick={() => setHighlightOnly(!highlightOnly)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-sans font-medium transition-all border cursor-pointer",
                highlightOnly
                  ? "bg-[#0D0B08] text-accent border-accent/50 shadow-md font-semibold"
                  : "bg-white text-stone-600 border-stone-200 hover:border-stone-300"
              )}
            >
              {highlightOnly ? "Show All 10 Parameters" : "Show Key Decision Highlights Only"}
            </button>
          </div>
        </div>

        {/* Comparison Table Container */}
        <div className="bg-white border border-stone-200/90 rounded-[2.5rem] shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              
              {/* Header Columns */}
              <thead>
                <tr className="border-b border-stone-200 bg-[#FAF9F5]">
                  <th className="p-6 text-xs uppercase font-bold text-stone-500 w-[28%]">
                    Parameters & Features
                  </th>
                  
                  {/* 2 BHK Column */}
                  <th className="p-6 text-left w-[24%] border-l border-stone-200">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase text-accent tracking-wider block">Starter Luxury</span>
                      <h3 className="text-base md:text-lg font-heading font-bold text-primary">2 BHK Flat</h3>
                      <p className="text-xs text-accent font-bold">₹72.99 Lakhs*</p>
                    </div>
                  </th>

                  {/* 3 BHK Column (Highlighted) */}
                  <th className="p-6 text-left w-[24%] border-l border-stone-200 bg-accent/5 relative">
                    <div className="absolute top-2 right-4 text-[9px] font-bold uppercase bg-accent text-[#0D0B08] px-2.5 py-0.5 rounded-full shadow-sm">
                      Most Popular
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase text-accent-dark tracking-wider block">Family Grand</span>
                      <h3 className="text-base md:text-lg font-heading font-bold text-primary">3 BHK Flat</h3>
                      <p className="text-xs text-accent font-bold">₹1.05 Crore*</p>
                    </div>
                  </th>

                  {/* NA Plot Column */}
                  <th className="p-6 text-left w-[24%] border-l border-stone-200">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase text-accent tracking-wider block">Sovereign Land</span>
                      <h3 className="text-base md:text-lg font-heading font-bold text-primary">NA Villa Plot</h3>
                      <p className="text-xs text-accent font-bold">₹1.49 Crore*</p>
                    </div>
                  </th>
                </tr>
              </thead>

              {/* Rows Body */}
              <tbody className="divide-y divide-stone-100 text-xs">
                {displayedRows.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className={cn(
                      "hover:bg-stone-50/80 transition-colors",
                      row.isHighlight && "bg-amber-50/20 font-medium"
                    )}
                  >
                    <td className="p-5 font-semibold text-primary/80">
                      {row.label}
                    </td>
                    <td className="p-5 border-l border-stone-200 text-stone-700 font-sans">
                      {row.twoBhk}
                    </td>
                    <td className="p-5 border-l border-stone-200 bg-accent/5 text-stone-900 font-semibold font-sans">
                      {row.threeBhk}
                    </td>
                    <td className="p-5 border-l border-stone-200 text-stone-700 font-sans">
                      {row.plot}
                    </td>
                  </tr>
                ))}

                {/* Footer Action Buttons Row */}
                <tr className="border-t-2 border-stone-200 bg-[#FAF9F5]">
                  <td className="p-6 font-bold text-xs uppercase tracking-wider text-stone-500">
                    Next Action
                  </td>
                  
                  {/* 2 BHK CTA */}
                  <td className="p-6 border-l border-stone-200">
                    <button
                      onClick={() => openModal({
                        title: "2 BHK Luxury Price Sheet",
                        subtitle: "Get floor plans and pricing schedule for 2 BHK flats.",
                        source: "Comparison Table: 2 BHK"
                      })}
                      className="w-full py-2.5 px-3 rounded-full bg-white hover:bg-accent hover:text-primary text-primary font-sans font-bold text-xs border border-stone-300 transition-all shadow-sm cursor-pointer text-center"
                    >
                      Book 2 BHK
                    </button>
                  </td>

                  {/* 3 BHK CTA */}
                  <td className="p-6 border-l border-stone-200 bg-accent/5">
                    <button
                      onClick={() => openModal({
                        title: "3 BHK Grand Luxury Price Sheet",
                        subtitle: "Get floor plans and pricing schedule for 3 BHK high-rise residences.",
                        source: "Comparison Table: 3 BHK"
                      })}
                      className="w-full btn-gold py-2.5 px-3 rounded-full font-sans font-bold text-xs transition-all shadow-md cursor-pointer text-center"
                    >
                      Book 3 BHK
                    </button>
                  </td>

                  {/* NA Plot CTA */}
                  <td className="p-6 border-l border-stone-200">
                    <button
                      onClick={() => openModal({
                        title: "NA Villa Bungalow Plot Layout",
                        subtitle: "Get master plot availability and 7/12 verification documents.",
                        source: "Comparison Table: NA Plot"
                      })}
                      className="w-full py-2.5 px-3 rounded-full bg-white hover:bg-accent hover:text-primary text-primary font-sans font-bold text-xs border border-stone-300 transition-all shadow-sm cursor-pointer text-center"
                    >
                      Book NA Plot
                    </button>
                  </td>
                </tr>

              </tbody>

            </table>
          </div>
        </div>

        {/* Footnote */}
        <div className="text-center pt-6 text-[11px] text-stone-500 font-sans">
          * Prices are indicative launch offers and subject to government taxes, registration, and floor stack adjustments. MahaRERA P52100052096 & P52100054476.
        </div>

      </div>
    </section>
  );
}
