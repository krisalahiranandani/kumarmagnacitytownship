#!/usr/bin/env node

/**
 * Enterprise Multi-Search-Engine Indexing Pipeline
 * 
 * Supports:
 * - Google Indexing API (Batch JWT Submission for Real-Time Googlebot Crawling)
 * - Microsoft Bing & Yahoo (via IndexNow Protocol)
 * - Yandex, Seznam, Naver (via IndexNow Protocol)
 * - Global Sitemap Pings
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { google } from 'googleapis';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Load environment variables from .env.local and .env
if (fs.existsSync(path.join(rootDir, '.env.local'))) {
  dotenv.config({ path: path.join(rootDir, '.env.local') });
} else {
  dotenv.config({ path: path.join(rootDir, '.env') });
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kumarmagnacitytownship.com';
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || '9c1a5f6e8b4d2a1c7e9f3b5d';
const INDEXNOW_KEY_LOCATION = `${BASE_URL}/${INDEXNOW_KEY}.txt`;

// Core Priority URLs to submit
const CORE_ROUTES = [
  "",
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
  "/nri-investment"
];

// Helper to build list of full URLs (English + Marathi)
function buildUrlList() {
  const urls = new Set();

  CORE_ROUTES.forEach(route => {
    urls.add(`${BASE_URL}${route}`);
    urls.add(`${BASE_URL}/mr${route}`);
  });

  // Load insight articles dynamically
  const insightsDir = path.join(rootDir, 'content', 'insights');
  if (fs.existsSync(insightsDir)) {
    try {
      const files = fs.readdirSync(insightsDir);
      files.filter(f => f.endsWith('.md')).forEach(file => {
        const slug = file.replace(/\.md$/, '');
        urls.add(`${BASE_URL}/insights/${slug}`);
        urls.add(`${BASE_URL}/mr/insights/${slug}`);
      });
    } catch (e) {
      console.warn("Could not read insights dir:", e.message);
    }
  }

  // Load priority URLs from SEO registry if available
  const registryPath = path.join(rootDir, 'data', 'seo-registry.json');
  if (fs.existsSync(registryPath)) {
    try {
      const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
      const topKeys = Object.keys(registry).slice(0, 50); // top 50 programmatic routes
      topKeys.forEach(key => {
        urls.add(`${BASE_URL}/${key}`);
        urls.add(`${BASE_URL}/mr/${key}`);
      });
    } catch (e) {
      console.warn("Could not parse seo-registry.json:", e.message);
    }
  }

  return Array.from(urls);
}

// -------------------------------------------------------------
// 1. INDEXNOW PROTOCOL (Bing, Yandex, Seznam, Naver)
// -------------------------------------------------------------
async function submitToIndexNow(urlList) {
  console.log(`\n📡 Submitting ${urlList.length} URLs to IndexNow (Bing, Yandex, Seznam)...`);

  const payload = JSON.stringify({
    host: new URL(BASE_URL).hostname,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: urlList
  });

  const endpoints = [
    { name: 'IndexNow Global Hub', host: 'api.indexnow.org', path: '/indexnow' },
    { name: 'Microsoft Bing', host: 'www.bing.com', path: '/indexnow' },
    { name: 'Yandex', host: 'yandex.com', path: '/indexnow' }
  ];

  const results = [];

  for (const endpoint of endpoints) {
    try {
      const res = await new Promise((resolve, reject) => {
        const req = https.request({
          hostname: endpoint.host,
          port: 443,
          path: endpoint.path,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Content-Length': Buffer.byteLength(payload)
          },
          timeout: 10000
        }, (response) => {
          let data = '';
          response.on('data', chunk => data += chunk);
          response.on('end', () => resolve({ statusCode: response.statusCode, data }));
        });

        req.on('error', reject);
        req.on('timeout', () => {
          req.destroy();
          reject(new Error('Request timed out'));
        });

        req.write(payload);
        req.end();
      });

      if (res.statusCode === 200 || res.statusCode === 202) {
        console.log(`  ✅ ${endpoint.name}: Accepted (${res.statusCode})`);
        results.push({ name: endpoint.name, status: 'Success', code: res.statusCode });
      } else {
        console.log(`  ⚠️ ${endpoint.name}: Returned status ${res.statusCode} (${res.data || 'No response body'})`);
        results.push({ name: endpoint.name, status: 'Warning', code: res.statusCode });
      }
    } catch (err) {
      console.error(`  ❌ ${endpoint.name}: Error: ${err.message}`);
      results.push({ name: endpoint.name, status: 'Failed', error: err.message });
    }
  }

  return results;
}

// -------------------------------------------------------------
// 2. GOOGLE INDEXING API (Direct JWT Crawl Notification)
// -------------------------------------------------------------
async function submitToGoogleIndexing(urlList) {
  console.log(`\n🔍 Connecting to Google Indexing API...`);

  let clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;

  // Check for local service account JSON file if env vars are missing
  if (!clientEmail || !privateKey) {
    const serviceAccountPaths = [
      path.join(rootDir, 'scripts', 'google-service-account.json'),
      path.join(rootDir, 'google-service-account.json'),
    ];

    for (const saPath of serviceAccountPaths) {
      if (fs.existsSync(saPath)) {
        try {
          const saData = JSON.parse(fs.readFileSync(saPath, 'utf8'));
          clientEmail = saData.client_email;
          privateKey = saData.private_key;
          console.log(`  🔑 Loaded Google Service Account credentials from ${path.basename(saPath)}`);
          break;
        } catch (e) {
          console.warn(`  ⚠️ Failed to parse ${saPath}`);
        }
      }
    }
  }

  if (!clientEmail || !privateKey) {
    console.log('  ℹ️ Google Cloud service credentials not configured. Skipping Google Indexing API.');
    return { status: 'Skipped', message: 'No Google Service Account credentials configured.' };
  }

  try {
    const jwtClient = new google.auth.JWT({
      email: clientEmail,
      key: privateKey.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/indexing']
    });

    await jwtClient.authorize();
    console.log(`  ✅ Google JWT Authorized as: ${clientEmail}`);

    // Google Indexing API daily quota is typically 200 URLs/day per project
    const targetUrls = urlList.slice(0, 15);
    let successCount = 0;

    for (const url of targetUrls) {
      try {
        const response = await google.indexing('v3').urlNotifications.publish({
          auth: jwtClient,
          requestBody: {
            url: url,
            type: 'URL_UPDATED'
          }
        });

        if (response.status === 200) {
          console.log(`    ✅ Google Indexed: ${url}`);
          successCount++;
        }
      } catch (err) {
        console.warn(`    ⚠️ Google Indexing warning for ${url}: ${err.message}`);
      }
    }

    return { status: 'Success', submitted: successCount, total: targetUrls.length };
  } catch (error) {
    console.error('  ❌ Google Indexing Error:', error.message);
    return { status: 'Failed', error: error.message };
  }
}

// -------------------------------------------------------------
// 3. SITEMAP PINGS (Global Crawlers)
// -------------------------------------------------------------
async function pingSitemaps() {
  console.log(`\n🗺️ Pinging Global Search Engine Sitemap Endpoints...`);
  const sitemapUrl = `${BASE_URL}/sitemap.xml`;

  const pingTargets = [
    { name: 'Google Ping', url: `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}` },
    { name: 'Bing Ping', url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}` }
  ];

  for (const target of pingTargets) {
    try {
      await new Promise((resolve) => {
        https.get(target.url, (res) => {
          console.log(`  📡 ${target.name}: HTTP ${res.statusCode}`);
          resolve(res.statusCode);
        }).on('error', (e) => {
          console.log(`  ℹ️ ${target.name}: ${e.message}`);
          resolve(null);
        });
      });
    } catch {
      // Non-fatal
    }
  }
}

// -------------------------------------------------------------
// MAIN EXECUTION
// -------------------------------------------------------------
async function main() {
  console.log("==================================================");
  console.log(" 🚀 OMNI SEARCH ENGINE INDEXING PIPELINE");
  console.log(` Target Site: ${BASE_URL}`);
  console.log(` Timestamp:   ${new Date().toISOString()}`);
  console.log("==================================================");

  const urls = buildUrlList();
  console.log(`📊 Discovered ${urls.length} candidate URLs for search indexing.`);

  // 1. Submit to IndexNow
  const indexNowResults = await submitToIndexNow(urls);

  // 2. Submit to Google Indexing API
  const googleResults = await submitToGoogleIndexing(urls);

  // 3. Ping global sitemaps
  await pingSitemaps();

  // Write GitHub Actions Summary if running inside CI
  if (process.env.GITHUB_STEP_SUMMARY) {
    const summaryMd = `
### 🚀 Multi-Search Engine Indexing Report
- **Site URL**: \`${BASE_URL}\`
- **Total URLs Processed**: \`${urls.length}\`
- **IndexNow Verification Key**: \`${INDEXNOW_KEY}\`

#### IndexNow Submission Status (Bing, Yandex, Seznam, Naver):
| Search Engine Endpoint | Status | HTTP Code |
| :--- | :--- | :--- |
${indexNowResults.map(r => `| ${r.name} | ${r.status} | ${r.code || r.error || 'N/A'} |`).join('\n')}

#### Google Indexing API:
- **Status**: ${googleResults.status}
- **Submitted**: ${googleResults.submitted || 0} / ${googleResults.total || 0} priority URLs
    `;
    try {
      fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summaryMd);
    } catch (e) {
      console.warn("Could not write to GITHUB_STEP_SUMMARY:", e.message);
    }
  }

  console.log("\n==================================================");
  console.log(" ✨ Search Engine Indexing Workflow Complete!");
  console.log("==================================================\n");
}

main().catch(err => {
  console.error("Fatal indexing error:", err);
  process.exit(0); // Exit cleanly so CI does not break
});
