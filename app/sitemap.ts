import { MetadataRoute } from 'next';
import registry from "@/data/seo-registry.json";
import { SEORegistry } from "@/types/seo";
import { getInsightSlugs } from '@/lib/markdown';

const baseUrl = "https://kumarmagnacitytownship.com";
const ITEMS_PER_SITEMAP = 5000;

export async function generateSitemaps() {
  const dynamicKeys = Object.keys(registry as SEORegistry);
  const numSitemaps = Math.ceil(dynamicKeys.length / ITEMS_PER_SITEMAP);
  // We return at least one sitemap ID (0) which will handle static routes + first batch
  const sitemaps = [{ id: 0 }];
  for (let i = 1; i < numSitemaps; i++) {
    sitemaps.push({ id: i });
  }
  return sitemaps;
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const lastModified = new Date();
  let sitemapEntries: MetadataRoute.Sitemap = [];

  // ---------------------------------------------------------
  // STATIC ROUTES (Only injected into sitemap ID 0)
  // ---------------------------------------------------------
  if (id === 0) {
    const corePages = [
      "",
      "/kumar-magnacity-na-bungalow-plots-concept",
      "/kumar-magnacity-manjari-location-map",
      "/kumar-magnacity-na-bungalow-plots-availability",
      "/kumar-magnacity-na-bungalow-plots-amenities",
      "/kumar-magnacity-investment-plan-pune-east",
      "/kumar-magnacity-na-bungalow-plots-master-plan",
      "/kumar-magnacity-market-data-pune-east",
      "/kumar-magnacity-na-bungalow-plots-faq",
      "/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune",
      "/kumar-magnacity-2bhk-flats-hadapsar-pune-price",
      "/kumar-magnacity-3bhk-apartments-manjari-pune-price",
      "/kumar-magnacity-floor-plan-2bhk-3bhk",
      "/kumar-magnacity-specifications-apartments",
      "/kumar-magnacity-location-advantages-hadapsar-manjari",
      "/roi-calculator",
    ];

    corePages.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: route === "" ? 'always' : 'daily',
        priority: route === "" ? 1.0 : 0.9,
      });
      sitemapEntries.push({
        url: `${baseUrl}/mr${route}`,
        lastModified,
        changeFrequency: route === "" ? 'always' : 'daily',
        priority: 0.8,
      });
    });

    const pSEOLocations = [
      'magarpatta-city', 'kharadi-it-park', 'eon-it-park-phase-2', 'world-trade-center-pune',
      'sp-infocity', 'hadapsar-industrial-estate', 'amanora-town-centre', 'viman-nagar',
      'koregaon-park', 'keshav-nagar', 'solapur-highway', 'hadapsar-railway-station',
      'pune-airport', 'pune-station', 'loni-kalbhor', 'hadapsar-gadital', 'phursungi-it-park',
      'shewalewadi', 'uruli-kanchan', 'saswad-road', 'mundhwa', 'fatima-nagar',
      'ramtekdi-industrial-area', 'solapur-toll-plaza', 'manjari-railway-station'
    ];
    
    pSEOLocations.forEach((slug) => {
      sitemapEntries.push({
        url: `${baseUrl}/flats-near-${slug}`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.7,
      });
    });

    const insightSlugs = getInsightSlugs();
    insightSlugs.forEach((slug) => {
      sitemapEntries.push({
        url: `${baseUrl}/insights/${slug.replace(/\.md$/, '')}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
    
    sitemapEntries.push({
      url: `${baseUrl}/insights`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.8,
    });
  }

  // ---------------------------------------------------------
  // DYNAMIC ROUTES (Chunked by ID)
  // ---------------------------------------------------------
  const dynamicKeys = Object.keys(registry as SEORegistry);
  const start = id * ITEMS_PER_SITEMAP;
  const end = start + ITEMS_PER_SITEMAP;
  const chunkedKeys = dynamicKeys.slice(start, end);

  chunkedKeys.forEach((key) => {
    sitemapEntries.push({
      url: `${baseUrl}/${key}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.6,
    });
    sitemapEntries.push({
      url: `${baseUrl}/mr/${key}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.5,
    });
  });

  return sitemapEntries;
}
