const fs = require('fs');
const path = require('path');

const registryPath = path.join(__dirname, '../data/seo-registry.json');

const currentRegistry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));

const newRoutes = {};

// 1. Core Config Routes
const configs = [
  { size: "757 sq ft", type: "2 BHK", price: "₹72.99L*" },
  { size: "1,053 sq ft", type: "3 BHK", price: "₹1.05Cr*" },
  { size: "554 sq ft", type: "1 BHK", price: "₹49.99L*" }
];
const locations = ["Hadapsar", "Manjri", "Pune East", "Pune Solapur Highway", "Near Magarpatta", "Near Kharadi"];

configs.forEach(cfg => {
  locations.forEach(loc => {
    const slug = `property/${cfg.type.toLowerCase().replace(' ', '-')}-${cfg.size.replace(/[^0-9]/g, '')}-sqft-flats-in-${loc.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
    newRoutes[slug] = {
      title: `Kumar Magnacity ${cfg.type} ${cfg.size} in ${loc} | Price ${cfg.price}`,
      description: `Explore premium ${cfg.type} apartments (${cfg.size} carpet area) in Kumar Magnacity, ${loc}. Launching at ${cfg.price} with world-class township amenities.`,
      hero_title: `Premium ${cfg.type} Residences in ${loc}`,
      hero_subtitle: `Spacious ${cfg.size} carpet area homes designed for luxury living in Pune's most integrated mega-township.`,
      hero_badge: `Starting at ${cfg.price}`
    };
  });
});

// 2. NA / Villa Plot Routes
const plotLocs = ["Hadapsar", "Manjri", "Pune", "Pune Solapur Highway", "Pune East"];
const plotTypes = ["NA Plots", "Villa Plots", "Bungalow Plots", "Residential Plots"];

plotTypes.forEach(pt => {
  plotLocs.forEach(loc => {
    const slug = `land/kumar-magnacity-${pt.toLowerCase().replace(' ', '-')}-in-${loc.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
    newRoutes[slug] = {
      title: `Kumar Magnacity ${pt} in ${loc} | Secure Land Investment Pune`,
      description: `Invest in highly appreciating ${pt} at Kumar Magnacity ${loc}. Custom-build your dream home in a 150-acre gated ecosystem.`,
      hero_title: `${pt} in ${loc}`,
      hero_subtitle: `The ultimate generational wealth asset. Secure your piece of earth in East Pune's most advanced residential township.`,
      hero_badge: `Premium Land Investment`
    };
  });
});

// 3. Investment / ROI Routes
const investLocs = ["Pune", "Hadapsar", "Manjri"];
investLocs.forEach(loc => {
  const slug = `investment/kumar-magnacity-roi-appreciation-${loc.toLowerCase()}`;
  newRoutes[slug] = {
    title: `Kumar Magnacity Investment & ROI in ${loc} | Real Estate Pune`,
    description: `Analyze the investment potential, rental yields, and capital appreciation for Kumar Magnacity in ${loc}. Pune's best real estate opportunity.`,
    hero_title: `Investment Potential in ${loc}`,
    hero_subtitle: `Why Kumar Magnacity is the #1 wealth-building asset in East Pune, offering massive ROI and rental yields.`,
    hero_badge: `High Appreciation Asset`
  };
});

// 4. Misspelling / Typo Safety Routes (Exact Match landing pages)
const typos = ["Magncity", "Magnaciti", "Magnacitty", "MagnaCity", "Magna City"];
typos.forEach(typo => {
  const slug = `brand/kumar-${typo.toLowerCase().replace(' ', '-')}-hadapsar-pune`;
  newRoutes[slug] = {
    title: `Kumar Magnacity (often searched as Kumar ${typo}) Pune`,
    description: `Welcome to Kumar Magnacity in Hadapsar Annexe, Pune. Find 2BHK, 3BHK, and NA Bungalow plots in the 150-acre integrated township.`,
    hero_title: `Welcome to Kumar Magnacity`,
    hero_subtitle: `The official destination for Kumar Properties' masterpiece 150-acre township in Pune East.`,
    hero_badge: `Official Project Site`
  };
});

// 5. Questions / FAQ Routes
const questions = [
  { q: "possession-date", title: "Possession Date & Construction Status" },
  { q: "rera-registration-number", title: "MahaRERA Registration Details" },
  { q: "brochure-floor-plan-pdf", title: "Download Brochure & Floor Plan PDFs" },
  { q: "latest-price-list", title: "Current Price List & Payment Plans" },
  { q: "township-amenities", title: "1 Lakh Sq.Ft Clubhouse & Amenities" }
];

questions.forEach(q => {
  const slug = `faq/kumar-magnacity-${q.q}`;
  newRoutes[slug] = {
    title: `Kumar Magnacity ${q.title} | Official Information`,
    description: `Get the official ${q.title.toLowerCase()} for Kumar Magnacity, Hadapsar Annexe. Verified township details by Kumar Properties.`,
    hero_title: q.title,
    hero_subtitle: `Everything you need to know about Kumar Magnacity's ${q.title.toLowerCase()} before you invest.`,
    hero_badge: `Verified Information`
  };
});

Object.assign(currentRegistry, newRoutes);
fs.writeFileSync(registryPath, JSON.stringify(currentRegistry, null, 2));

console.log(`Successfully injected ${Object.keys(newRoutes).length} new ultra-advanced keyword clusters into the SEO routing registry.`);
