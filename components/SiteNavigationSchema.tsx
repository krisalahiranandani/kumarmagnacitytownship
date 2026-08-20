import { SiteNavigationElementSchema } from "@/types/schema";

export default function SiteNavigationSchema() {
  const navigationSchema: SiteNavigationElementSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Kumar Magnacity Hadapsar",
        "description": "150-Acre Master Planned Township in Hadapsar Annexe, Manjari, Pune East.",
        "url": "https://kumarmagnacitytownship.com/kumar-magnacity-hadapsar"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "2 BHK & 3 BHK Apartments",
        "description": "Floor plans, pricing, and configurations for luxury apartments in Kumar Magnacity.",
        "url": "https://kumarmagnacitytownship.com/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "2 BHK Flats Price & Inventory",
        "description": "757 sq.ft carpet 2 BHK apartments starting from ₹72.99 Lakhs.",
        "url": "https://kumarmagnacitytownship.com/kumar-magnacity-2bhk-flats-hadapsar-pune-price"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "3 BHK Flats Price & Inventory",
        "description": "1053 sq.ft carpet 3 BHK apartments starting from ₹1.05 Cr.",
        "url": "https://kumarmagnacitytownship.com/kumar-magnacity-3bhk-apartments-manjari-pune-price"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Floor Plans",
        "description": "Detailed 2D & 3D floor plans and carpet area layouts.",
        "url": "https://kumarmagnacitytownship.com/kumar-magnacity-floor-plan-2bhk-3bhk"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "NA Villa Bungalow Plots",
        "description": "150-acre township NA bungalow plots starting from ₹1.49 Cr.",
        "url": "https://kumarmagnacitytownship.com/kumar-magnacity-na-bungalow-plots-concept"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 6,
        "name": "Location & Connectivity",
        "description": "Strategic Manjari Hadapsar Annexe location, 10 mins from Magarpatta & Kharadi.",
        "url": "https://kumarmagnacitytownship.com/kumar-magnacity-location-advantages-hadapsar-manjari"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 7,
        "name": "Real Estate Insights & Market Analysis",
        "description": "Pune East infrastructure analysis, appreciation trends, and investment reports.",
        "url": "https://kumarmagnacitytownship.com/insights"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 8,
        "name": "ROI & Mortgage Calculator",
        "description": "Interactive real estate ROI, rental yield, and EMI calculator.",
        "url": "https://kumarmagnacitytownship.com/roi-calculator"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }}
    />
  );
}
