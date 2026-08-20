import { MetadataRoute } from 'next';
import registry from "@/data/seo-registry.json";
import { SEORegistry } from "@/types/seo";
import { getInsightSlugs } from '@/lib/markdown';

const baseUrl = "https://kumarmagnacitytownship.com";
const ITEMS_PER_SITEMAP = 5000;

export async function generateSitemaps() {
  const dynamicKeys = Object.keys(registry as SEORegistry);
  const numSitemaps = Math.ceil(dynamicKeys.length / ITEMS_PER_SITEMAP);
  const sitemaps = [{ id: 0 }];
  for (let i = 1; i < numSitemaps; i++) {
    sitemaps.push({ id: i });
  }
  return sitemaps;
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // ---------------------------------------------------------
  // CORE AUTHORITY ROUTES (Injected into sitemap ID 0)
  // ---------------------------------------------------------
  if (id === 0) {
    const corePages = [
      { route: "", priority: 1.0, freq: 'always' as const },
      { route: "/kumar-magnacity-hadapsar", priority: 1.0, freq: 'daily' as const },
      { route: "/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune", priority: 1.0, freq: 'daily' as const },
      { route: "/kumar-magnacity-2bhk-flats-hadapsar-pune-price", priority: 0.95, freq: 'daily' as const },
      { route: "/kumar-magnacity-3bhk-apartments-manjari-pune-price", priority: 0.95, freq: 'daily' as const },
      { route: "/kumar-magnacity-na-bungalow-plots-concept", priority: 0.95, freq: 'daily' as const },
      { route: "/kumar-magnacity-na-bungalow-plots-availability", priority: 0.95, freq: 'daily' as const },
      { route: "/kumar-magnacity-floor-plan-2bhk-3bhk", priority: 0.95, freq: 'daily' as const },
      { route: "/kumar-magnacity-manjari-location-map", priority: 0.9, freq: 'daily' as const },
      { route: "/kumar-magnacity-na-bungalow-plots-amenities", priority: 0.9, freq: 'daily' as const },
      { route: "/kumar-magnacity-investment-plan-pune-east", priority: 0.9, freq: 'daily' as const },
      { route: "/kumar-magnacity-na-bungalow-plots-master-plan", priority: 0.9, freq: 'daily' as const },
      { route: "/kumar-magnacity-market-data-pune-east", priority: 0.9, freq: 'daily' as const },
      { route: "/kumar-magnacity-na-bungalow-plots-faq", priority: 0.9, freq: 'daily' as const },
      { route: "/kumar-magnacity-specifications-apartments", priority: 0.85, freq: 'daily' as const },
      { route: "/kumar-magnacity-location-advantages-hadapsar-manjari", priority: 0.9, freq: 'daily' as const },
      { route: "/roi-calculator", priority: 0.85, freq: 'monthly' as const },
    ];

    corePages.forEach(({ route, priority, freq }) => {
      sitemapEntries.push({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: freq,
        priority: priority,
        alternates: {
          languages: {
            'mr-IN': `${baseUrl}/mr${route}`,
          },
        },
      });
    });

    // Programmatic Local SEO Keywords Cluster
    const pSEOLocations = [
      'magarpatta-city', 'kharadi-it-park', 'eon-it-park-phase-2', 'world-trade-center-pune',
      'sp-infocity', 'hadapsar-industrial-estate', 'amanora-town-centre', 'viman-nagar',
      'koregaon-park', 'keshav-nagar', 'solapur-highway', 'hadapsar-railway-station',
      'pune-airport', 'pune-station', 'loni-kalbhor', 'hadapsar-gadital', 'phursungi-it-park',
      'shewalewadi', 'uruli-kanchan', 'saswad-road', 'mundhwa', 'fatima-nagar',
      'ramtekdi-industrial-area', 'solapur-toll-plaza', 'manjari-railway-station',
      'kumar-park-infinia-phursungi', 'amanora-park-town', 'magarpatta-road',
      'hadapsar-annexe-manjari', 'pune-solapur-expressway'
    ];
    
    pSEOLocations.forEach((slug) => {
      sitemapEntries.push({
        url: `${baseUrl}/flats-near-${slug}`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.8,
        alternates: {
          languages: {
            'mr-IN': `${baseUrl}/mr/flats-near-${slug}`,
          },
        },
      });
    });

    // Insights & Articles
    const insightSlugs = getInsightSlugs();
    insightSlugs.forEach((slug) => {
      const cleanSlug = slug.replace(/\.md$/, '');
      sitemapEntries.push({
        url: `${baseUrl}/insights/${cleanSlug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.75,
        alternates: {
          languages: {
            'mr-IN': `${baseUrl}/mr/insights/${cleanSlug}`,
          },
        },
      });
    });
    
    sitemapEntries.push({
      url: `${baseUrl}/insights`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.85,
      alternates: {
        languages: {
          'mr-IN': `${baseUrl}/mr/insights`,
        },
      },
    });
  }

  // ---------------------------------------------------------
  // DYNAMIC SEO REGISTRY ROUTES (Chunked by ID)
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
      priority: 0.8,
      alternates: {
        languages: {
          'mr-IN': `${baseUrl}/mr/${key}`,
        },
      },
    });
  });

  return sitemapEntries;
}
