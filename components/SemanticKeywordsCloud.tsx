"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
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
      "Kumar Magnacity Project",
      "Kumar Magnacity Residential Township",
      "Kumar Magnacity Integrated Township",
      "Kumar Magnacity Apartments",
      "Kumar Magnacity Flats",
      "Kumar Magnacity Homes",
      "Kumar Magnacity Property",
      "Kumar Magnacity Real Estate"
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
      "Pune IT Corridor"
    ]
  },
  {
    category: "3. Property Typology",
    keywords: [
      "Luxury Apartments",
      "Premium Apartments",
      "Residential Township",
      "Township Project",
      "Integrated Township",
      "Smart Township",
      "Premium Homes",
      "Luxury Homes",
      "Modern Apartments",
      "Gated Community",
      "Residential Community",
      "Township Living",
      "Lifestyle Homes",
      "Family Homes",
      "Premium Residences"
    ]
  },
  {
    category: "4. Apartment Configurations",
    keywords: [
      "2 BHK Flats",
      "3 BHK Flats",
      "Spacious Apartments",
      "Luxury Flats",
      "Premium Flats",
      "Ready to Move Flats",
      "Under Construction Flats",
      "New Launch Apartments",
      "Affordable Luxury Apartments",
      "Modern Flats Pune",
      "Smart Homes",
      "Luxury Residences"
    ]
  },
  {
    category: "5. Plot & Land Inventory",
    keywords: [
      "NA Plots",
      "Residential Plots",
      "Villa Plots",
      "Premium Villa Plots",
      "Township Plots",
      "Investment Plots",
      "Bungalow Plots",
      "NA Approved Plots",
      "Residential Land",
      "Plot Investment Pune"
    ]
  },
  {
    category: "6. Investment & ROI",
    keywords: [
      "Best Investment in Pune",
      "Real Estate Investment Pune",
      "Property Investment",
      "High ROI Property",
      "Future Growth Area",
      "Appreciation Potential",
      "Rental Income",
      "Capital Appreciation",
      "Long Term Investment",
      "Best Township Investment",
      "Pune Investment Property",
      "Investment Flats Pune"
    ]
  },
  {
    category: "7. Township Amenities",
    keywords: [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Fitness Centre",
      "Kids Play Area",
      "Jogging Track",
      "Cycling Track",
      "Indoor Games",
      "Outdoor Sports",
      "Basketball Court",
      "Tennis Court",
      "Badminton Court",
      "Cricket Practice Net",
      "Football Turf",
      "Amphitheatre",
      "Multipurpose Hall",
      "Yoga Deck",
      "Meditation Zone",
      "Senior Citizen Area",
      "Pet Park",
      "Party Lawn",
      "Landscaped Gardens",
      "Green Spaces",
      "Open Spaces",
      "Community Hall",
      "Banquet Hall",
      "Library",
      "Co-working Space",
      "Business Lounge",
      "Cafeteria",
      "Spa",
      "Sauna",
      "Steam Room"
    ]
  },
  {
    category: "8. Lifestyle & Living",
    keywords: [
      "Luxury Lifestyle",
      "Modern Living",
      "Premium Lifestyle",
      "Urban Lifestyle",
      "Green Living",
      "Smart Living",
      "Family Lifestyle",
      "Township Lifestyle",
      "Comfortable Living",
      "Peaceful Living",
      "Nature Living",
      "Community Living",
      "Contemporary Living"
    ]
  },
  {
    category: "9. Connectivity Nodes",
    keywords: [
      "Near Magarpatta",
      "Near Kharadi",
      "Near EON IT Park",
      "Near World Trade Center Pune",
      "Near Amanora",
      "Near SP Infocity",
      "Near Pune Airport",
      "Near Hadapsar Railway Station",
      "Near Pune Solapur Highway",
      "Easy Connectivity",
      "Well Connected Location",
      "IT Hub Nearby",
      "Commercial Hub Nearby"
    ]
  },
  {
    category: "10. Schools & Academics",
    keywords: [
      "Near The Kalyani School",
      "Near Lexicon School",
      "Near Orbis School",
      "Near City World School",
      "Near Delhi Public School",
      "Near Vibgyor School",
      "International Schools Nearby",
      "Podar International School On-Campus"
    ]
  },
  {
    category: "11. Hospitals & Healthcare",
    keywords: [
      "Near Noble Hospital",
      "Near Sahyadri Hospital",
      "Near Columbia Asia",
      "Near Manipal Hospital",
      "Near Lotus Hospital",
      "Multi-speciality Hospital Nearby"
    ]
  },
  {
    category: "12. Shopping & Malls",
    keywords: [
      "Near Amanora Mall",
      "Near Seasons Mall",
      "Shopping Mall Nearby",
      "Restaurants Nearby",
      "Entertainment Nearby",
      "Retail Shops Nearby",
      "Grocery Stores Nearby",
      "Supermarket Nearby"
    ]
  },
  {
    category: "13. Buyer Intent Queries",
    keywords: [
      "Buy Flat in Manjari",
      "Buy Apartment in Hadapsar",
      "Buy Home in Pune",
      "Luxury Apartments Pune",
      "Best Township Pune",
      "New Residential Project Pune",
      "Flats for Sale",
      "Apartments for Sale",
      "Premium Flats Pune",
      "Homes for Sale Pune",
      "Residential Property Pune"
    ]
  },
  {
    category: "14. Long-Tail Search Intent",
    keywords: [
      "Kumar Magnacity Township Manjari Pune",
      "Kumar Magnacity Hadapsar Annexe Pune",
      "Kumar Magnacity Apartments in Pune",
      "Luxury Flats in Manjari Pune",
      "Premium Apartments Near Hadapsar",
      "Township Flats in East Pune",
      "Best Residential Township in Pune",
      "Apartments Near Magarpatta City",
      "Apartments Near EON IT Park",
      "Flats Near Kharadi Pune",
      "Investment Property in Manjari",
      "Family Homes in Hadapsar",
      "Gated Community Apartments Pune",
      "Township Property Near Pune Airport",
      "Luxury Township Near Kharadi",
      "Modern Apartments Near Amanora Mall",
      "Premium Township Near IT Hub",
      "New Launch Flats in Manjari",
      "Best Property in Hadapsar Annexe",
      "Residential Township Near Hadapsar"
    ]
  },
  {
    category: "15. Commercial Intent",
    keywords: [
      "Kumar Magnacity Price",
      "Kumar Magnacity Cost",
      "Kumar Magnacity Brochure",
      "Kumar Magnacity Floor Plan",
      "Kumar Magnacity Master Plan",
      "Kumar Magnacity Location",
      "Kumar Magnacity Amenities",
      "Kumar Magnacity Reviews",
      "Kumar Magnacity Possession",
      "Kumar Magnacity Booking",
      "Kumar Magnacity Payment Plan",
      "Kumar Magnacity Offers",
      "Kumar Magnacity RERA",
      "Kumar Magnacity Contact",
      "Kumar Magnacity Site Visit",
      "Kumar Magnacity Launch Date"
    ]
  },
  {
    category: "16. Local SEO Micro-Markets",
    keywords: [
      "Property in Manjari",
      "Flats in Manjari Pune",
      "Apartments in Hadapsar",
      "Flats Near Kharadi",
      "Flats Near Magarpatta",
      "Township in Hadapsar",
      "New Projects in Manjari",
      "Residential Projects in Hadapsar",
      "East Pune Residential Projects",
      "Pune Township Projects",
      "Premium Projects Pune",
      "Luxury Projects Manjari"
    ]
  },
  {
    category: "17. Semantic LSI Context",
    keywords: [
      "Real Estate Pune",
      "Residential Development",
      "Premium Housing",
      "Sustainable Living",
      "Smart Infrastructure",
      "Green Township",
      "Modern Architecture",
      "Urban Development",
      "Luxury Housing",
      "Residential Complex",
      "Smart Community",
      "Open Green Spaces",
      "Eco-Friendly Township",
      "Secure Community",
      "High Rise Apartments",
      "Premium Residential Project",
      "Lifestyle Destination",
      "Future Ready Township",
      "Residential Investment",
      "Luxury Community"
    ]
  },
  {
    category: "18. Competitor Comparison",
    keywords: [
      "Kumar Magnacity vs Godrej Rivergreens",
      "Kumar Magnacity vs VTP Township",
      "Kumar Magnacity vs Kumar Pebble Park",
      "Kumar Magnacity vs Duville Riverdale",
      "Kumar Magnacity vs Amanora Park Town",
      "Kumar Magnacity vs Nyati Evolve",
      "Kumar Magnacity vs Kolte Patil Township",
      "Best Township in Manjari",
      "Best Township Near Hadapsar",
      "Best Township in East Pune"
    ]
  },
  {
    category: "19. Question-Based (Snippet Intent)",
    keywords: [
      "What is Kumar Magnacity Township?",
      "Is Kumar Magnacity a good investment?",
      "Where is Kumar Magnacity located?",
      "What amenities does Kumar Magnacity offer?",
      "Is Manjari a good place to live?",
      "Is Hadapsar Annexe developing?",
      "What is the price of flats in Kumar Magnacity?",
      "How far is Kumar Magnacity from Magarpatta?",
      "Is Kumar Magnacity RERA approved?",
      "Which schools are near Kumar Magnacity?",
      "Which hospitals are near Kumar Magnacity?",
      "Is Kumar Magnacity good for IT professionals?",
      "Why invest in Manjari Pune?",
      "Which is the best township in East Pune?",
      "What are the advantages of living in Manjari?"
    ]
  },
  {
    category: "20. High-Volume Clusters",
    keywords: [
      "Kumar Magnacity",
      "Kumar Magnacity Township",
      "Kumar Magnacity Pune",
      "Kumar Magnacity Manjari",
      "Kumar Magnacity Hadapsar",
      "Kumar Magnacity Price",
      "Kumar Magnacity Floor Plan",
      "Kumar Magnacity Amenities",
      "Kumar Magnacity Brochure",
      "Kumar Magnacity Reviews",
      "Kumar Magnacity Location",
      "Kumar Magnacity RERA",
      "Flats in Manjari",
      "Apartments in Hadapsar",
      "Township in Pune",
      "Luxury Apartments Pune",
      "Premium Flats Pune",
      "Property in East Pune",
      "Residential Projects Pune",
      "Investment Property Pune"
    ]
  }
];

export default function SemanticKeywordsCloud() {
  return (
    <section className="py-20 bg-light-soft border-t border-primary/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex items-center gap-3 mb-12 opacity-70">
          <Search size={20} className="text-accent" />
          <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Pune Real Estate Market Directory</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {KEYWORD_CLUSTERS.map((cluster, idx) => (
            <div key={idx} className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent pb-2 border-b border-primary/10">
                {cluster.category}
              </h4>
              <ul className="space-y-3">
                {cluster.keywords.map((keyword, kIdx) => (
                  <li key={kIdx}>
                    <Link 
                      href="/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune"
                      className="text-[11px] text-primary/60 hover:text-primary transition-colors duration-300 block leading-snug hover:translate-x-1 transform"
                    >
                      {keyword}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
