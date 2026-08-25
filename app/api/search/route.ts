import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const SEARCH_INDEX = [
  { title: "2 BHK Luxury Apartments (757 Sq.Ft)", url: "/kumar-magnacity-2bhk-flats-hadapsar-pune-price", price: "₹72.99 Lakhs*", tags: ["2bhk", "flats", "price", "apartments"] },
  { title: "3 BHK Grand Family Suites (1053 Sq.Ft)", url: "/kumar-magnacity-3bhk-apartments-manjari-pune-price", price: "₹1.05 Crore*", tags: ["3bhk", "flats", "luxury", "apartments"] },
  { title: "Sovereign NA Villa Bungalow Plots", url: "/kumar-magnacity-na-bungalow-plots-concept", price: "₹1.49 Crore*", tags: ["plots", "land", "villa", "bungalow", "7/12"] },
  { title: "Floor Plans (2 BHK & 3 BHK Layouts)", url: "/kumar-magnacity-floor-plan-2bhk-3bhk", price: "Master Layouts", tags: ["floor-plan", "layout", "carpet", "dimension"] },
  { title: "Location & Connectivity Advantages", url: "/kumar-magnacity-location-advantages-hadapsar-manjari", price: "Manjari Hadapsar", tags: ["location", "map", "distance", "magarpatta", "kharadi"] },
  { title: "Podar International School Campus", url: "/insights/podar-school-township-hadapsar-family-living", price: "In-Township CBSE", tags: ["school", "podar", "education", "cbse"] },
  { title: "Interactive Real Estate ROI Calculator", url: "/roi-calculator", price: "Financial Model", tags: ["roi", "calculator", "emi", "rental", "yield"] },
  { title: "NRI Investment Advisory & Repatriation", url: "/nri-investment", price: "USD / AED Pricing", tags: ["nri", "fema", "dollar", "investment"] }
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.toLowerCase().trim() || "";

  if (!query) {
    return NextResponse.json({ results: SEARCH_INDEX });
  }

  const results = SEARCH_INDEX.filter((item) => 
    item.title.toLowerCase().includes(query) ||
    item.tags.some((tag) => tag.includes(query)) ||
    item.price.toLowerCase().includes(query)
  );

  return NextResponse.json({
    query,
    count: results.length,
    results: results.length > 0 ? results : SEARCH_INDEX.slice(0, 4)
  });
}
