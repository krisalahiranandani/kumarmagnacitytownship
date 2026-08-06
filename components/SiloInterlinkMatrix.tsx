"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Network } from "lucide-react";

// The Matrix: Defines which URLs belong to which Silo
// The 6 Master Programmatic Silos centered on Kumar Magnacity Township
const SILO_MAP = {
  township_brand: {
    hub: { title: "Kumar Magnacity Master Township", url: "/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune" },
    spokes: [
      { title: "Project Overview & Overview", url: "/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune" },
      { title: "Specifications & Fittings", url: "/kumar-magnacity-specifications-apartments" },
      { title: "Floor Plans (2BHK & 3BHK)", url: "/kumar-magnacity-floor-plan-2bhk-3bhk" },
      { title: "Location Advantages", url: "/kumar-magnacity-location-advantages-hadapsar-manjari" },
      { title: "NRI Investment Guide", url: "/nri-investment" }
    ],
    triggers: ["magnacity", "township", "kumar", "project", "brand", "overview", "residential", "sovereign"]
  },
  location_corridor: {
    hub: { title: "Hadapsar Annexe & Location Hub", url: "/kumar-magnacity-location-advantages-hadapsar-manjari" },
    spokes: [
      { title: "Manjari Location Map", url: "/kumar-magnacity-manjari-location-map" },
      { title: "Magarpatta City", url: "/flats-near-magarpatta-city" },
      { title: "Kharadi IT Park", url: "/flats-near-kharadi-it-park" },
      { title: "EON IT Park Phase 2", url: "/flats-near-eon-it-park-phase-2" },
      { title: "World Trade Center Pune", url: "/flats-near-world-trade-center-pune" },
      { title: "SP Infocity", url: "/flats-near-sp-infocity" },
      { title: "Hadapsar Industrial Estate", url: "/flats-near-hadapsar-industrial-estate" },
      { title: "Amanora Town Centre", url: "/flats-near-amanora-town-centre" },
      { title: "Viman Nagar", url: "/flats-near-viman-nagar" },
      { title: "Koregaon Park", url: "/flats-near-koregaon-park" },
      { title: "Keshav Nagar", url: "/flats-near-keshav-nagar" },
      { title: "Solapur Highway", url: "/flats-near-solapur-highway" },
      { title: "Hadapsar Railway Station", url: "/flats-near-hadapsar-railway-station" },
      { title: "Pune Airport", url: "/flats-near-pune-airport" },
      { title: "Pune Station", url: "/flats-near-pune-station" },
      { title: "Loni Kalbhor", url: "/flats-near-loni-kalbhor" },
      { title: "Hadapsar Gadital", url: "/flats-near-hadapsar-gadital" },
      { title: "Phursungi IT Park", url: "/flats-near-phursungi-it-park" },
      { title: "Shewalewadi", url: "/flats-near-shewalewadi" },
      { title: "Uruli Kanchan", url: "/flats-near-uruli-kanchan" },
      { title: "Saswad Road", url: "/flats-near-saswad-road" },
      { title: "Mundhwa", url: "/flats-near-mundhwa" },
      { title: "Fatima Nagar", url: "/flats-near-fatima-nagar" },
      { title: "Ramtekdi Industrial Area", url: "/flats-near-ramtekdi-industrial-area" },
      { title: "Solapur Toll Plaza", url: "/flats-near-solapur-toll-plaza" },
      { title: "Manjari Railway Station", url: "/flats-near-manjari-railway-station" }
    ],
    triggers: ["near", "location", "map", "hadapsar", "annexe", "manjari", "kharadi", "magarpatta", "eon", "wtc", "corridor", "amanora", "infocity", "viman-nagar", "koregaon", "keshav", "solapur", "airport", "loni", "phursungi", "shewalewadi", "uruli", "saswad", "mundhwa", "fatima", "ramtekdi"]
  },
  residences_floorplan: {
    hub: { title: "High-Rise Residences & Floor Plans", url: "/kumar-magnacity-floor-plan-2bhk-3bhk" },
    spokes: [
      { title: "2 BHK Price & Layout (757 sq.ft)", url: "/kumar-magnacity-2bhk-flats-hadapsar-pune-price" },
      { title: "3 BHK Price & Layout (1053 sq.ft)", url: "/kumar-magnacity-3bhk-apartments-manjari-pune-price" },
      { title: "Luxury Apartments Hub", url: "/luxury-apartments-pune" },
      { title: "Apartment Specifications", url: "/kumar-magnacity-specifications-apartments" }
    ],
    triggers: ["2bhk", "3bhk", "floor-plan", "flats", "apartments", "homes", "g+30", "carpet", "price"]
  },
  plots_land: {
    hub: { title: "NA Villa Bungalow Plots", url: "/kumar-magnacity-na-bungalow-plots-concept" },
    spokes: [
      { title: "NA Plots Master Layout", url: "/kumar-magnacity-na-bungalow-plots-master-plan" },
      { title: "NA Plot Availability", url: "/kumar-magnacity-na-bungalow-plots-availability" },
      { title: "NA Plot Amenities", url: "/kumar-magnacity-na-bungalow-plots-amenities" },
      { title: "NA Plots FAQ", url: "/kumar-magnacity-na-bungalow-plots-faq" }
    ],
    triggers: ["plots", "bungalow", "land", "villa-plots", "concept", "availability", "master-plan"]
  },
  investment_roi: {
    hub: { title: "Investment, Price & Market Data", url: "/kumar-magnacity-market-data-pune-east" },
    spokes: [
      { title: "Investment Strategy & ROI", url: "/kumar-magnacity-investment-plan-pune-east" },
      { title: "Pune East Investment Hub", url: "/investment-pune-east" },
      { title: "Interactive ROI Calculator", url: "/roi-calculator" },
      { title: "Ring Road Growth Impact", url: "/insights/pune-ring-road-impact" },
      { title: "NRI Investment Guide", url: "/insights/nri-investment-manjari" }
    ],
    triggers: ["investment", "market-data", "roi", "calculator", "cost", "appreciation", "rental", "ring-road", "insights"]
  },
  lifestyle_amenities: {
    hub: { title: "Township Lifestyle & Podar School", url: "/kumar-magnacity-na-bungalow-plots-amenities" },
    spokes: [
      { title: "Podar International School Campus", url: "/kumar-magnacity-location-advantages-hadapsar-manjari" },
      { title: "1 Lakh Sq.Ft Clubhouse", url: "/kumar-magnacity-na-bungalow-plots-amenities" },
      { title: "Competitor Comparison Guide", url: "/kumar-magnacity-market-data-pune-east" }
    ],
    triggers: ["amenities", "clubhouse", "podar", "school", "lifestyle", "hospitals", "malls", "vs", "godrej", "vtp", "amanora"]
  }
};

export default function SiloInterlinkMatrix() {
  const pathname = usePathname();
  
  // Determine which silo we are in based on URL triggers
  let activeSilo = null;
  for (const [key, siloData] of Object.entries(SILO_MAP)) {
    if (siloData.triggers.some(trigger => pathname.includes(trigger))) {
      activeSilo = siloData;
      break;
    }
  }

  // If page doesn't belong to a specific silo, render the generic hub links (Homepage behavior)
  if (!activeSilo) {
    return (
      <div className="w-full py-12 border-t border-primary/10 bg-light-soft" aria-label="Explore Topic Clusters">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center gap-3 mb-6 opacity-50">
             <Network size={16} className="text-accent" />
             <span className="text-[10px] uppercase font-bold tracking-widest text-primary">Explore Real Estate Hubs</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {Object.values(SILO_MAP).map((silo, idx) => (
               <Link key={idx} href={silo.hub.url} className="group flex items-center justify-between p-4 rounded-2xl bg-white border border-primary/10 hover:border-accent/50 transition-colors">
                 <span className="text-xs font-bold text-primary group-hover:text-accent transition-colors">{silo.hub.title}</span>
                 <ArrowRight size={14} className="text-primary/20 group-hover:text-accent group-hover:translate-x-1 transition-all" />
               </Link>
             ))}
          </div>
        </div>
      </div>
    );
  }

  // Render Silo-Specific Interlinks (Trapping the crawler in the topic cluster)
  return (
    <div className="w-full py-12 border-t border-primary/10 bg-light-soft" aria-label="Related Topics in this Cluster">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
           <div className="flex items-center gap-3 opacity-50">
              <Network size={16} className="text-accent" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-primary">Related in: {activeSilo.hub.title}</span>
           </div>
           <Link href={activeSilo.hub.url} className="text-[10px] uppercase font-bold tracking-widest text-accent hover:text-primary transition-colors">
              View Master Hub &rarr;
           </Link>
        </div>
        
        <div className="flex flex-wrap gap-3">
           {activeSilo.spokes.map((spoke, idx) => {
             if (spoke.url === pathname) return null; // Don't link to self
             return (
               <Link 
                 key={idx} 
                 href={spoke.url} 
                 className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 hover:border-accent/50 transition-colors"
               >
                 <span className="text-[11px] font-medium text-primary/70 group-hover:text-primary transition-colors">{spoke.title}</span>
               </Link>
             );
           })}
        </div>
      </div>
      
      {/* Dynamic JSON-LD Breadcrumb Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://kumarmagnacitytownship.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": activeSilo.hub.title,
                "item": `https://kumarmagnacitytownship.com${activeSilo.hub.url}`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Current Page",
                "item": `https://kumarmagnacitytownship.com${pathname}`
              }
            ]
          })
        }}
      />
    </div>
  );
}
