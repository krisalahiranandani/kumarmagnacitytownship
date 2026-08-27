/* eslint-disable @typescript-eslint/no-require-imports */
require('dotenv').config({ path: '.env.local' });
const { google } = require('googleapis');
const https = require('https');

const sitemapUrl = 'https://kumarmagnacitytownship.com/sitemap.xml';

// Fallback traditional pinging
const searchEngines = [
  { name: 'Google', url: `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}` },
  { name: 'Bing', url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}` },
];

console.log('🚀 Triggering automated search engine pings...');
searchEngines.forEach(({ name, url }) => {
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      console.log(`✅ Successfully pinged ${name} with updated sitemap.`);
    } else {
      console.log(`⚠️ Failed to ping ${name}. Status: ${res.statusCode}`);
    }
  }).on('error', (e) => {
    console.error(`❌ Error pinging ${name}: ${e.message}`);
  });
});

// Advanced Google Indexing API Integration
async function notifyGoogleIndexingApi() {
  if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
    console.log('⚠️ Google Cloud credentials not found in .env.local. Skipping Indexing API.');
    return;
  }

  console.log('🔗 Authenticating with Google Indexing API...');
  try {
    const jwtClient = new google.auth.JWT(
      process.env.GOOGLE_CLIENT_EMAIL,
      null,
      process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      ['https://www.googleapis.com/auth/indexing'],
      null
    );

    await jwtClient.authorize();
    
    // Hardcoded high-priority URLs to index immediately, ideally we would parse the sitemap
    // but for now, we hit the absolute priority pages.
    const priorityUrls = [
      'https://kumarmagnacitytownship.com/',
      'https://kumarmagnacitytownship.com/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune',
      'https://kumarmagnacitytownship.com/kumar-magnacity-2bhk-flats-hadapsar-pune-price',
      'https://kumarmagnacitytownship.com/kumar-magnacity-3bhk-apartments-manjari-pune-price',
      'https://kumarmagnacitytownship.com/kumar-magnacity-na-bungalow-plots-concept',
      'https://kumarmagnacitytownship.com/kumar-magnacity-na-bungalow-plots-availability',
      'https://kumarmagnacitytownship.com/kumar-magnacity-location-advantages-hadapsar-manjari',
      'https://kumarmagnacitytownship.com/compare/kumar-magnacity-vs-godrej-rivergreens-manjari',
      'https://kumarmagnacitytownship.com/compare/kumar-magnacity-vs-amanora-park-town-hadapsar',
      'https://kumarmagnacitytownship.com/compare/kumar-magnacity-vs-shapoorji-joyville-hadapsar',
      'https://kumarmagnacitytownship.com/compare/kumar-magnacity-vs-vtp-pegasus-kharadi'
    ];

    for (const url of priorityUrls) {
      const options = {
        url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        auth: jwtClient,
        data: {
          url: url,
          type: 'URL_UPDATED',
        },
      };

      const response = await google.indexing('v3').urlNotifications.publish(options);
      console.log(`✅ Indexing API Success for ${url}:`, response.data);
    }
  } catch (error) {
    console.error('❌ Google Indexing API Error:', error.message);
  }
}

notifyGoogleIndexingApi();
