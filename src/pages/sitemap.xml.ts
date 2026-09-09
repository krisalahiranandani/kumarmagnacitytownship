import type { APIRoute } from "astro";
import registry from "@/data/seo-registry.json";
import { getInsightSlugs } from "@/lib/markdown";

export const prerender = true;

export const GET: APIRoute = async () => {
  const baseUrl = "https://kumarmagnacitytownship.com";
  const lastModified = new Date().toISOString();

  const corePages = [
    { route: "", priority: "1.0", freq: "always" },
    { route: "/kumar-magnacity-hadapsar", priority: "1.0", freq: "daily" },
    { route: "/kumar-magnacity-price", priority: "1.0", freq: "daily" },
    { route: "/kumar-magnacity-rera", priority: "0.95", freq: "daily" },
    { route: "/kumar-magnacity-2bhk-flats-hadapsar-pune-price", priority: "0.95", freq: "daily" },
    { route: "/kumar-magnacity-3bhk-apartments-manjari-pune-price", priority: "0.95", freq: "daily" },
    { route: "/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune", priority: "0.95", freq: "daily" },
    { route: "/kumar-magnacity-na-bungalow-plots-concept", priority: "0.95", freq: "daily" },
    { route: "/kumar-magnacity-na-bungalow-plots-availability", priority: "0.95", freq: "daily" },
    { route: "/kumar-magnacity-floor-plan-2bhk-3bhk", priority: "0.95", freq: "daily" },
    { route: "/kumar-magnacity-location-advantages-hadapsar-manjari", priority: "0.95", freq: "daily" },
    { route: "/kumar-magnacity-na-bungalow-plots-master-plan", priority: "0.90", freq: "daily" },
    { route: "/kumar-magnacity-market-data-pune-east", priority: "0.90", freq: "daily" },
    { route: "/nri-investment", priority: "0.90", freq: "daily" },
    { route: "/compare/kumar-magnacity-vs-godrej-rivergreens-manjari", priority: "0.90", freq: "weekly" },
    { route: "/compare/kumar-magnacity-vs-amanora-park-town-hadapsar", priority: "0.90", freq: "weekly" },
    { route: "/compare/kumar-magnacity-vs-shapoorji-joyville-hadapsar", priority: "0.90", freq: "weekly" },
    { route: "/compare/kumar-magnacity-vs-vtp-pegasus-kharadi", priority: "0.90", freq: "weekly" },
    { route: "/kumar-magnacity-manjari-location-map", priority: "0.90", freq: "daily" },
    { route: "/kumar-magnacity-na-bungalow-plots-amenities", priority: "0.90", freq: "daily" },
    { route: "/kumar-magnacity-investment-plan-pune-east", priority: "0.90", freq: "daily" },
    { route: "/kumar-magnacity-na-bungalow-plots-faq", priority: "0.90", freq: "daily" },
    { route: "/kumar-magnacity-specifications-apartments", priority: "0.85", freq: "daily" },
    { route: "/roi-calculator", priority: "0.85", freq: "monthly" },
    { route: "/flats-in-pune-east", priority: "0.85", freq: "weekly" },
    { route: "/investment-pune-east", priority: "0.85", freq: "weekly" },
    { route: "/luxury-apartments-pune", priority: "0.85", freq: "weekly" },
    { route: "/insights", priority: "0.85", freq: "daily" },
    { route: "/mr", priority: "1.0", freq: "always" },
    { route: "/mr/kumar-magnacity-hadapsar", priority: "1.0", freq: "daily" },
    { route: "/mr/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune", priority: "0.95", freq: "daily" },
    { route: "/mr/kumar-magnacity-2bhk-flats-hadapsar-pune-price", priority: "0.95", freq: "daily" },
    { route: "/mr/kumar-magnacity-3bhk-apartments-manjari-pune-price", priority: "0.95", freq: "daily" },
    { route: "/mr/kumar-magnacity-floor-plan-2bhk-3bhk", priority: "0.95", freq: "daily" },
    { route: "/mr/kumar-magnacity-investment-plan-pune-east", priority: "0.90", freq: "daily" },
    { route: "/mr/kumar-magnacity-location-advantages-hadapsar-manjari", priority: "0.90", freq: "daily" },
    { route: "/mr/kumar-magnacity-manjari-location-map", priority: "0.90", freq: "daily" },
    { route: "/mr/kumar-magnacity-market-data-pune-east", priority: "0.90", freq: "daily" },
    { route: "/mr/kumar-magnacity-na-bungalow-plots-amenities", priority: "0.90", freq: "daily" },
    { route: "/mr/kumar-magnacity-na-bungalow-plots-availability", priority: "0.90", freq: "daily" },
    { route: "/mr/kumar-magnacity-na-bungalow-plots-concept", priority: "0.90", freq: "daily" },
    { route: "/mr/kumar-magnacity-na-bungalow-plots-faq", priority: "0.90", freq: "daily" },
    { route: "/mr/kumar-magnacity-na-bungalow-plots-master-plan", priority: "0.90", freq: "daily" },
    { route: "/mr/kumar-magnacity-specifications-apartments", priority: "0.85", freq: "daily" }
  ];

  const pSEOLocations = [
    "magarpatta-city", "kharadi-it-park", "eon-it-park-phase-2", "world-trade-center-pune",
    "sp-infocity", "hadapsar-industrial-estate", "amanora-town-centre", "viman-nagar",
    "koregaon-park", "keshav-nagar", "solapur-highway", "hadapsar-railway-station",
    "pune-airport", "pune-station", "loni-kalbhor", "hadapsar-gadital", "phursungi-it-park",
    "shewalewadi", "uruli-kanchan", "saswad-road", "mundhwa", "fatima-nagar",
    "ramtekdi-industrial-area", "solapur-toll-plaza", "manjari-railway-station",
    "kumar-park-infinia-phursungi", "amanora-park-town", "magarpatta-road",
    "hadapsar-annexe-manjari", "pune-solapur-expressway"
  ];

  const insightSlugs = getInsightSlugs().map(s => s.replace(/\.md$/, ""));
  const registryKeys = Object.keys(registry);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${corePages.map(p => `
  <url>
    <loc>${baseUrl}${p.route}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${p.freq}</changefreq>
    <priority>${p.priority}</priority>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${p.route}" />
    <xhtml:link rel="alternate" hreflang="en-IN" href="${baseUrl}${p.route}" />
    <xhtml:link rel="alternate" hreflang="mr-IN" href="${baseUrl}/mr${p.route}" />
  </url>`).join("")}

  ${pSEOLocations.map(slug => `
  <url>
    <loc>${baseUrl}/flats-near-${slug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/flats-near-${slug}" />
    <xhtml:link rel="alternate" hreflang="en-IN" href="${baseUrl}/flats-near-${slug}" />
    <xhtml:link rel="alternate" hreflang="mr-IN" href="${baseUrl}/mr/flats-near-${slug}" />
  </url>`).join("")}

  ${insightSlugs.map(slug => `
  <url>
    <loc>${baseUrl}/insights/${slug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/insights/${slug}" />
    <xhtml:link rel="alternate" hreflang="en-IN" href="${baseUrl}/insights/${slug}" />
    <xhtml:link rel="alternate" hreflang="mr-IN" href="${baseUrl}/mr/insights/${slug}" />
  </url>`).join("")}

  ${registryKeys.map(key => `
  <url>
    <loc>${baseUrl}/${key}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/${key}" />
    <xhtml:link rel="alternate" hreflang="en-IN" href="${baseUrl}/${key}" />
    <xhtml:link rel="alternate" hreflang="mr-IN" href="${baseUrl}/mr/${key}" />
  </url>`).join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate",
    },
  });
};
