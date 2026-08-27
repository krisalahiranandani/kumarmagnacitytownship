import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdvancedEnquiryForm from "@/components/AdvancedEnquiryForm";
import SovereignBar from "@/components/SovereignBar";
import BreadcrumbsNavigation from "@/components/BreadcrumbsNavigation";
import { Check, X, Building2, MapPin, Award, ShieldCheck, ArrowRight, Star, Phone } from "lucide-react";

export const runtime = "nodejs";

interface ComparisonItem {
  slug: string;
  competitorName: string;
  competitorLocation: string;
  competitorSize: string;
  competitorPrice: string;
  magnacityEdge: string[];
  competitorLimitations: string[];
  verdict: string;
}

const COMPARISONS: ComparisonItem[] = [
  {
    slug: "kumar-magnacity-vs-godrej-rivergreens-manjari",
    competitorName: "Godrej Rivergreens Manjari",
    competitorLocation: "Manjari Khurd, Pune",
    competitorSize: "99 Acres",
    competitorPrice: "₹76 Lakhs*",
    magnacityEdge: [
      "150-Acre Integrated Township (50+ Acres larger scale)",
      "On-Campus Operational Podar International School (0-minute commute)",
      "~1 Lakh Sq.Ft Mega Social & Sports Clubhouse",
      "Prime Hadapsar Annexe proximity with direct 4-lane access",
      "Sovereign NA Villa Plots (7/12 extract) available in same township"
    ],
    competitorLimitations: [
      "Smaller overall township footprint (99 Acres)",
      "No direct on-campus international school operational",
      "Higher starting entry price point for comparable carpet area",
      "Strict apartment-only inventory with no NA villa bungalow land"
    ],
    verdict: "Kumar Magnacity delivers significantly greater township scale (150 Acres), an on-campus Podar International School, and competitive ₹72.99L* pricing vs Godrej Rivergreens."
  },
  {
    slug: "kumar-magnacity-vs-amanora-park-town-hadapsar",
    competitorName: "Amanora Park Town Hadapsar",
    competitorLocation: "Hadapsar, Pune",
    competitorSize: "400 Acres (Mature)",
    competitorPrice: "₹1.15 Crore*",
    magnacityEdge: [
      "Ultra-competitive fresh launch entry pricing (from ₹72.99 Lakhs*)",
      "Brand new 2026-2030 modern architectural infrastructure",
      "Direct frontage on upcoming 30m DP Manjari connectivity corridor",
      "Modern low-density tower planning with maximum cross-ventilation"
    ],
    competitorLimitations: [
      "Significantly higher resale & premium entry pricing (>₹1.15 Cr+)",
      "High density with heavy internal township traffic congestion",
      "Older construction phases with legacy maintenance costs"
    ],
    verdict: "For homebuyers and investors seeking high capital appreciation and fresh modern construction at 40% lower entry prices, Kumar Magnacity offers vastly superior ROI."
  },
  {
    slug: "kumar-magnacity-vs-shapoorji-joyville-hadapsar",
    competitorName: "Joyville Hadapsar Annexe",
    competitorLocation: "Shewalewadi, Hadapsar Annexe, Pune",
    competitorSize: "21 Acres",
    competitorPrice: "₹68 Lakhs*",
    magnacityEdge: [
      "True 150-Acre Integrated Township vs 21-Acre stand-alone cluster",
      "Podar International School on-campus (Zero bus travel)",
      "Over 25+ Acres of continuous green lungs and central civic zone",
      "Options for both Luxury High-Rise Residences and NA Bungalow Plots"
    ],
    competitorLimitations: [
      "Limited 21-acre land parcel with high tower clustering",
      "No internal CBSE school campus on-site",
      "No clear-title NA bungalow plot options"
    ],
    verdict: "Kumar Magnacity provides a true self-sustaining 150-acre mega township ecosystem compared to Joyville's smaller 21-acre standalone residential cluster."
  },
  {
    slug: "kumar-magnacity-vs-vtp-pegasus-kharadi",
    competitorName: "VTP Pegasus Kharadi South",
    competitorLocation: "New Kharadi / Manjari, Pune",
    competitorSize: "100+ Acres",
    competitorPrice: "₹82 Lakhs*",
    magnacityEdge: [
      "60-Year Legacy & Construction Trust of Kumar Properties (Since 1966)",
      "More competitive entry pricing (₹72.99L* vs ₹82L*)",
      "Podar International School directly within the township perimeter",
      "Closer 10-minute access to Magarpatta Cybercity and SP Infocity"
    ],
    competitorLimitations: [
      "Higher density tower footprint and delayed phase handovers",
      "Higher entry pricing for 2 BHK configurations",
      "School requires off-site transit across busy arterial roads"
    ],
    verdict: "Kumar Magnacity wins on builder execution credibility (60-Year Kumar Properties track record), in-campus school convenience, and superior pricing."
  }
];

export async function generateStaticParams() {
  return COMPARISONS.map((comp) => ({
    competitor: comp.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ competitor: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const comp = COMPARISONS.find((c) => c.slug === resolvedParams.competitor);

  if (!comp) return { title: "Comparison Not Found" };

  return {
    title: `Kumar Magnacity vs ${comp.competitorName} | 2026 Head-to-Head Real Estate Comparison`,
    description: `Detailed comparison between Kumar Magnacity Hadapsar Annexe and ${comp.competitorName}. Compare prices, township size, school infrastructure, amenities, and investment ROI.`,
    alternates: {
      canonical: `https://kumarmagnacitytownship.com/compare/${resolvedParams.competitor}`,
      languages: {
        "x-default": `https://kumarmagnacitytownship.com/compare/${resolvedParams.competitor}`,
        "en-IN": `https://kumarmagnacitytownship.com/compare/${resolvedParams.competitor}`,
        "mr-IN": `https://kumarmagnacitytownship.com/mr/compare/${resolvedParams.competitor}`,
      }
    },
    openGraph: {
      title: `Kumar Magnacity vs ${comp.competitorName} | Head-to-Head Comparison`,
      description: `Comprehensive comparison of pricing, township scale, and amenities between Kumar Magnacity and ${comp.competitorName}.`,
      url: `https://kumarmagnacitytownship.com/compare/${resolvedParams.competitor}`,
      images: ["/assets/hero-bg.jpg"],
    }
  };
}

export default async function ComparisonPage({ params }: { params: Promise<{ competitor: string }> }) {
  const resolvedParams = await params;
  const comp = COMPARISONS.find((c) => c.slug === resolvedParams.competitor) || COMPARISONS[0];

  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Kumar Magnacity Hadapsar Township",
    "description": `Comprehensive comparison between Kumar Magnacity and ${comp.competitorName}.`,
    "brand": { "@type": "Brand", "name": "Kumar Properties" },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "7299000",
      "highPrice": "22500000",
      "priceCurrency": "INR",
      "offerCount": "380"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kumarmagnacitytownship.com" },
      { "@type": "ListItem", "position": 2, "name": "Project Comparisons", "item": "https://kumarmagnacitytownship.com/compare" },
      { "@type": "ListItem", "position": 3, "name": `Kumar Magnacity vs ${comp.competitorName}`, "item": `https://kumarmagnacitytownship.com/compare/${comp.slug}` }
    ]
  };

  return (
    <main className="min-h-screen bg-warm-bg text-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SovereignBar />
      <Header />

      {/* Hero Header */}
      <section className="relative py-16 md:py-24 bg-[#0D0B08] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10 text-center space-y-6">
          <div className="badge-gold mx-auto">
            <Award size={13} className="text-amber-400" />
            <span>2026 Head-to-Head Project Evaluation</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight">
            Kumar Magnacity <span className="text-stone-400 font-normal">vs</span> <span className="text-gradient-gold">{comp.competitorName}</span>
          </h1>

          <p className="text-sm md:text-base text-stone-300 font-sans max-w-3xl mx-auto leading-relaxed">
            An objective, data-backed analysis comparing township scale, in-campus education, carpet area efficiency, MahaRERA compliance, and 5-year investment ROI in Pune East.
          </p>
        </div>
      </section>

      {/* Comparison Scorecard Grid */}
      <section className="py-6 container mx-auto px-4 md:px-8 max-w-5xl">
        <BreadcrumbsNavigation className="px-0 mb-6" />
      </section>

      {/* Comparison Scorecard Grid */}
      <section className="py-8 md:py-12 container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Kumar Magnacity Card */}
          <div className="p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-500/50 shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-500 text-stone-950 text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-xl">
              Recommended Choice
            </div>
            
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-amber-600 font-bold">150-Acre Master Township</span>
              <h3 className="text-2xl font-heading font-bold text-primary">Kumar Magnacity</h3>
              <p className="text-xs text-stone-500">Hadapsar Annexe, Manjari, Pune East</p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center">
              <span className="text-[10px] uppercase font-bold text-stone-600 block">Starting Price</span>
              <span className="text-2xl font-bold font-mono text-amber-700">₹72.99 Lakhs*</span>
              <span className="text-[10px] text-stone-500 block">2 BHK, 3 BHK &amp; NA Plots</span>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                <Check size={16} /> Key Advantages:
              </h4>
              <ul className="space-y-2">
                {comp.magnacityEdge.map((edge, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                    <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{edge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Competitor Card */}
          <div className="p-6 md:p-8 rounded-3xl bg-stone-50 border border-stone-200 shadow-md space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-stone-500 font-bold">{comp.competitorSize}</span>
              <h3 className="text-2xl font-heading font-bold text-stone-700">{comp.competitorName}</h3>
              <p className="text-xs text-stone-500">{comp.competitorLocation}</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-stone-200 text-center">
              <span className="text-[10px] uppercase font-bold text-stone-500 block">Typical Starting Price</span>
              <span className="text-2xl font-bold font-mono text-stone-800">{comp.competitorPrice}</span>
              <span className="text-[10px] text-stone-400 block">Market Benchmark</span>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600 flex items-center gap-1.5">
                <X size={16} /> Project Limitations:
              </h4>
              <ul className="space-y-2">
                {comp.competitorLimitations.map((lim, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                    <X size={14} className="text-rose-500 shrink-0 mt-0.5" />
                    <span>{lim}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Executive Verdict Box */}
        <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-stone-900 to-stone-950 text-white border border-amber-500/30 shadow-2xl space-y-4">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Award size={16} />
            <span>Analyst Verdict &amp; Recommendation</span>
          </div>
          <p className="text-sm md:text-base text-stone-200 leading-relaxed font-sans">
            {comp.verdict}
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="tel:+917744009295"
              className="btn-gold py-3 px-6 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
            >
              <Phone size={14} />
              <span>Talk to Investment Specialist</span>
            </a>
            <Link
              href="/kumar-magnacity-2bhk-flats-hadapsar-pune-price"
              className="py-3 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 border border-white/20 transition-all"
            >
              <span>Explore Floor Plans &amp; Pricing &rarr;</span>
            </Link>
          </div>
        </div>

        {/* Other Comparisons Grid */}
        <div className="mt-16 space-y-6">
          <h3 className="text-xl font-heading font-bold text-primary text-center">
            Compare Kumar Magnacity with Other Pune East Developments
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMPARISONS.filter((c) => c.slug !== comp.slug).map((c, idx) => (
              <Link
                key={idx}
                href={`/compare/${c.slug}`}
                className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-500/50 hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-600 block">Comparison</span>
                  <h5 className="font-heading font-bold text-xs text-primary group-hover:text-amber-700 transition-colors">
                    vs {c.competitorName}
                  </h5>
                </div>
                <ArrowRight size={14} className="text-stone-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>

        {/* Lead Capture Section */}
        <div className="mt-16">
          <AdvancedEnquiryForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
