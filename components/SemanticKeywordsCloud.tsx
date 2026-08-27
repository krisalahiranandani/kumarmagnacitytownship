"use client";

import { motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";
import Link from "next/link";

const KEYWORD_CLUSTERS = [
  {
    category: "1. Primary Brand Intent",
    keywords: [
      "Kumar Magnacity",
      "Kumar Magnacity Township",
      "Kumar Magnacity Hadapsar",
      "Kumar Magnacity Manjari",
      "Kumar Magnacity Pune",
      "Kumar Magnacity Hadapsar Annexe",
      "Kumar Magnacity Township Pune",
      "Magnacity by Kumar Realty",
      "Kumar Magnacity Project",
      "Kumar Magnacity Residential Township",
      "Kumar Magnacity Integrated Township",
      "Kumar Magnacity Apartments",
      "Kumar Magnacity Flats",
      "Kumar Magnacity Homes",
      "Kumar Properties Hadapsar",
      "Kumar Properties Manjari",
      "Kumar Magnacity Official Website"
    ]
  },
  {
    category: "2. Location & Corridors",
    keywords: [
      "Hadapsar Annexe",
      "Manjari Pune",
      "Manjari BK Pune",
      "Manjari Budruk",
      "East Pune",
      "Hadapsar Pune",
      "Hadapsar East",
      "Kharadi Nearby",
      "Magarpatta Nearby",
      "Pune Solapur Road",
      "Manjari Road",
      "Hadapsar Manjari",
      "Manjari Hadapsar Road",
      "Pune Eastern Corridor",
      "PMRDA Ring Road Manjari",
      "Manjari Kharadi Bridge Corridor"
    ]
  },
  {
    category: "3. Buyer Intent & Cost Sheets",
    keywords: [
      "Kumar Magnacity Price List 2026",
      "Kumar Magnacity Cost Sheet 2 BHK",
      "Kumar Magnacity Cost Sheet 3 BHK",
      "Kumar Magnacity Payment Plan 20:80",
      "Kumar Magnacity Maintenance Charges",
      "Kumar Magnacity Sample Flat Video",
      "Kumar Magnacity Possession Date",
      "Kumar Magnacity Floor Rise Charges",
      "Kumar Magnacity SBI Home Loan Approval",
      "Kumar Magnacity HDFC Bank Loan Rate",
      "Kumar Magnacity Token Booking Amount",
      "Kumar Magnacity Resale & Rent 2 BHK"
    ]
  },
  {
    category: "4. Competitor Comparisons",
    keywords: [
      "Kumar Magnacity vs Godrej Rivergreens Manjari",
      "Kumar Magnacity vs Amanora Park Town Hadapsar",
      "Kumar Magnacity vs VTP Cygnus Kharadi",
      "Kumar Magnacity vs VTP Beaumonde Kharadi",
      "Kumar Magnacity vs Shapoorji Joyville Hadapsar",
      "Kumar Magnacity vs Kolte Patil Life Republic",
      "Best Township in East Pune Comparison",
      "Hadapsar vs Kharadi Property Prices"
    ]
  },
  {
    category: "5. Luxury Typologies & Configurations",
    keywords: [
      "2 BHK Smart Luxury (757 Sq.Ft)",
      "3 BHK Grand Family Suite (1053 Sq.Ft)",
      "4 BHK Luxury Residences Pune",
      "Kumar Magnacity Sky Duplex Penthouses",
      "Simplex & Sky Villas East Pune",
      "NA Villa Bungalow Plots (1700+ Sq.Ft)",
      "G+2 Custom Villa Sanction Plots",
      "Clear Title 7/12 Extract Land Pune",
      "Vastu Compliant Flats Hadapsar",
      "Double Height Living Rooms Pune"
    ]
  },
  {
    category: "6. Landmark & IT Proximity",
    keywords: [
      "Flats with Podar School on Campus Pune",
      "Townships near Magarpatta Cybercity",
      "Flats near Kharadi EON IT Park Phase 2",
      "Flats near World Trade Center WTC Pune",
      "Properties near SP Infocity Phursungi",
      "Properties near Serum Institute Hadapsar",
      "Flats near Amanora & Seasons Mall",
      "Flats near Hadapsar Gadital Junction"
    ]
  },
  {
    category: "7. MahaRERA & Developer Legacy",
    keywords: [
      "Kumar Magnacity MahaRERA P52100052096",
      "Kumar Magnacity Phase 2 RERA P52100054476",
      "Kumar Properties Legacy Since 1966",
      "60 Years of Building Trust Pune",
      "Zero Litigation Land Pune East",
      "MahaRERA Approved Townships Pune",
      "Bank Approved NA Plots Pune"
    ]
  },
  {
    category: "8. Regional & Marathi Searches (मराठी शोध)",
    keywords: [
      "कुमार मॅग्नासिटी हडपसर मांजरी",
      "कुमार मॅग्नासिटी फ्लॅट किंमत",
      "कुमार मॅग्नासिटी फ्लोअर प्लॅन",
      "कुमार प्रॉपर्टीज मांजरी टाउनशिप",
      "हडपसर मांजरी २ बीएचके ३ बीएचके फ्लॅट्स",
      "मांजरी एनए प्लॉटिंग ७/१२ उतारा",
      "पुणे पूर्व नवीन निवासी प्रकल्प",
      "पोदार इंटरनॅशनल स्कूल टाउनशिप पुणे"
    ]
  },
  {
    category: "9. NRI & Global Investor Desk",
    keywords: [
      "Kumar Magnacity NRI Booking 2026",
      "Invest in Pune Real Estate from USA",
      "Kumar Magnacity Price in Dollars USD",
      "Kumar Magnacity UAE Dubai NRI Desk",
      "NRE NRO Bank Account Property Pune",
      "FEMA Compliant NA Plots Pune",
      "Kumar Properties Overseas Investment",
      "Repatriation of Funds India Real Estate"
    ]
  },
  {
    category: "10. Mega Infrastructure & PMRDA 2026-30",
    keywords: [
      "PMRDA Ring Road Manjari Connectivity",
      "Pune Metro Line 3 Extension Hadapsar",
      "Pune-Solapur Expressway Widening",
      "Manjari Kharadi River Bridge Timeline",
      "Hadapsar Railway Station Mega Terminal",
      "Purandar Airport Highway Access",
      "PMRDA 150-Acre Township DP Sanction"
    ]
  },
  {
    category: "11. Budget Slabs & Financial ROI",
    keywords: [
      "Flats under 75 Lakhs in Hadapsar Manjari",
      "Flats under 1 Crore in Pune East",
      "Luxury Homes under 1.5 Cr Pune",
      "Kumar Magnacity Monthly EMI Calculator",
      "4.8% Rental Yield Hadapsar IT Corridor",
      "Kumar Magnacity 5-Year Capital Appreciation"
    ]
  },
  {
    category: "12. In-Campus Education & Amenities",
    keywords: [
      "Podar International School CBSE Campus Hadapsar",
      "~1 Lakh Sq.Ft Olympic Clubhouse Pune",
      "25+ Acres Central Green Lungs Miyawaki Forest",
      "Township with In-Campus School Pune East",
      "Gated Community 24/7 Security Hadapsar",
      "EV Charging Station Residential Complex Pune"
    ]
  }
];

export default function SemanticKeywordsCloud() {
  return (
    <section className="py-16 bg-[#0D0B08] text-white relative overflow-hidden border-t border-white/10" id="seo-cloud">
      {/* Background Accent */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-accent uppercase tracking-widest mb-3">
              <Search size={12} />
              <span>Crawl Index & Semantic Topic Clusters</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight">
              Kumar Magnacity <span className="text-gradient-gold">Pune Real Estate Search Directory</span>
            </h2>
          </div>

          <p className="text-xs text-stone-400 font-sans max-w-md">
            Programmatic search index covering high-intent search queries, competitor comparisons, MahaRERA registrations, and regional queries.
          </p>
        </div>

        {/* Keyword Cluster Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KEYWORD_CLUSTERS.map((cluster, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/40 transition-colors space-y-3"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-accent flex items-center gap-1.5">
                <Sparkles size={12} />
                <span>{cluster.category}</span>
              </h3>

              <div className="flex flex-wrap gap-1.5">
                {cluster.keywords.map((kw, kIdx) => (
                  <span 
                    key={kIdx}
                    className="inline-block px-2.5 py-1 rounded-lg bg-white/5 hover:bg-accent/20 hover:text-accent text-[11px] text-stone-300 font-sans transition-colors cursor-default"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Crawler Footnote */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-stone-500 font-sans">
          <span>Official Domain: https://kumarmagnacitytownship.com • Verified Contact: +91 77440 09295</span>
          <span>MahaRERA Reg. No: P52100052096 | P52100054476</span>
        </div>

      </div>
    </section>
  );
}
