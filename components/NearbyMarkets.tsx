import Link from "next/link";
import { ArrowRight } from "lucide-react";

const MARKETS = [
  {
    name: "Hadapsar Real Estate",
    href: "/apartments-in-hadapsar-pune/kumar-magnacity"
  },
  {
    name: "Kharadi IT Park Flats",
    href: "/flats-near-kharadi-it-park-pune/kumar-magnacity"
  },
  {
    name: "Manjari Growth Corridor",
    href: "/manjari-real-estate-market/kumar-magnacity-apartments"
  },
  {
    name: "Fursungi SP Infocity",
    href: "/apartments-near-fursungi-sp-infocity/kumar-magnacity"
  },
  {
    name: "Pune East Market Insights",
    href: "/pune-east-real-estate-market/2bhk-3bhk-flats-kumar-magnacity"
  }
];

export default function NearbyMarkets() {
  return (
    <section className="py-16 bg-warm-bg border-t border-primary/5" aria-label="Explore Nearby Pune Markets">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
            Explore Pune East Markets
          </h2>
          <p className="text-primary/60">Discover premium real estate opportunities across key IT corridors.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {MARKETS.map((market, idx) => (
            <Link 
              key={idx} 
              href={market.href}
              className="group flex items-center gap-3 px-6 py-4 rounded-full bg-light border border-primary/10 hover:border-accent hover:bg-accent/5 transition-all shadow-sm hover:shadow-md"
            >
              <span className="text-sm font-bold text-primary/80 group-hover:text-primary transition-colors">
                {market.name}
              </span>
              <ArrowRight size={14} className="text-primary/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
