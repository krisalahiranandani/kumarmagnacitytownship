#!/usr/bin/env node

/**
 * Enterprise Edge Cache Warmer
 * Concurrently requests all core routes, sitemaps, and feeds to pre-warm global Edge CDN caches.
 */

import https from 'https';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kumarmagnacitytownship.com';

const ROUTES_TO_WARM = [
  "/",
  "/kumar-magnacity-hadapsar",
  "/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune",
  "/kumar-magnacity-2bhk-flats-hadapsar-pune-price",
  "/kumar-magnacity-3bhk-apartments-manjari-pune-price",
  "/kumar-magnacity-floor-plan-2bhk-3bhk",
  "/kumar-magnacity-location-advantages-hadapsar-manjari",
  "/kumar-magnacity-na-bungalow-plots-concept",
  "/kumar-magnacity-na-bungalow-plots-availability",
  "/kumar-magnacity-na-bungalow-plots-amenities",
  "/kumar-magnacity-investment-plan-pune-east",
  "/kumar-magnacity-na-bungalow-plots-master-plan",
  "/kumar-magnacity-market-data-pune-east",
  "/kumar-magnacity-na-bungalow-plots-faq",
  "/kumar-magnacity-specifications-apartments",
  "/roi-calculator",
  "/insights",
  "/nri-investment",
  "/sitemap.xml",
  "/image-sitemap.xml",
  "/video-sitemap.xml",
  "/news-sitemap.xml",
  "/google-product-feed.xml",
  "/api/health"
];

function warmUrl(path) {
  return new Promise((resolve) => {
    const url = `${BASE_URL}${path}`;
    const start = Date.now();
    https.get(url, { headers: { 'User-Agent': 'KumarMagnacity-Enterprise-Cache-Warmer/2.0' } }, (res) => {
      const duration = Date.now() - start;
      console.log(`[Edge Warmed] ${res.statusCode} | ${duration}ms | ${path}`);
      resolve({ path, statusCode: res.statusCode, duration });
    }).on('error', (err) => {
      console.warn(`[Warm Warning] ${path}: ${err.message}`);
      resolve({ path, error: err.message });
    });
  });
}

async function warmAll() {
  console.log(`🚀 Starting Enterprise Edge Cache Warming on: ${BASE_URL}`);
  const results = await Promise.all(ROUTES_TO_WARM.map(warmUrl));
  const successCount = results.filter(r => r.statusCode === 200).length;
  console.log(`✅ Cache Warming Complete: ${successCount}/${ROUTES_TO_WARM.length} routes primed at edge.`);
}

warmAll();
