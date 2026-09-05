/* eslint-disable @typescript-eslint/no-require-imports */
const https = require('https');

const INDEXNOW_KEY = 'f8a3b8d91c7e462a8019cf3994a5e2f1';
const HOST = 'kumarmagnacitytownship.com';

const URL_LIST = [
  'https://kumarmagnacitytownship.com/',
  'https://kumarmagnacitytownship.com/kumar-magnacity-hadapsar',
  'https://kumarmagnacitytownship.com/kumar-magnacity-price',
  'https://kumarmagnacitytownship.com/kumar-magnacity-rera',
  'https://kumarmagnacitytownship.com/kumar-magnacity-2bhk-flats-hadapsar-pune-price',
  'https://kumarmagnacitytownship.com/kumar-magnacity-3bhk-apartments-manjari-pune-price',
  'https://kumarmagnacitytownship.com/kumar-magnacity-na-bungalow-plots-concept',
  'https://kumarmagnacitytownship.com/kumar-magnacity-na-bungalow-plots-availability',
  'https://kumarmagnacitytownship.com/kumar-magnacity-floor-plan-2bhk-3bhk',
  'https://kumarmagnacitytownship.com/kumar-magnacity-na-bungalow-plots-master-plan',
  'https://kumarmagnacitytownship.com/kumar-magnacity-location-advantages-hadapsar-manjari',
  'https://kumarmagnacitytownship.com/kumar-magnacity-market-data-pune-east',
  'https://kumarmagnacitytownship.com/nri-investment',
  'https://kumarmagnacitytownship.com/compare/kumar-magnacity-vs-godrej-rivergreens-manjari',
  'https://kumarmagnacitytownship.com/compare/kumar-magnacity-vs-amanora-park-town-hadapsar',
  'https://kumarmagnacitytownship.com/compare/kumar-magnacity-vs-shapoorji-joyville-hadapsar',
  'https://kumarmagnacitytownship.com/compare/kumar-magnacity-vs-vtp-pegasus-kharadi',
  'https://kumarmagnacitytownship.com/insights/kumar-magnacity-hadapsar-township-complete-buyer-guide',
  'https://kumarmagnacitytownship.com/insights/2bhk-3bhk-4bhk-flats-hadapsar-vs-kharadi-comparison',
  'https://kumarmagnacitytownship.com/insights/pune-ring-road-impact',
];

const payload = JSON.stringify({
  host: HOST,
  key: INDEXNOW_KEY,
  keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
  urlList: URL_LIST,
});

const endpoints = [
  'api.indexnow.org',
  'www.bing.com',
  'yandex.com',
];

console.log(`⚡ Dispatching IndexNow notification for ${URL_LIST.length} URLs...`);

endpoints.forEach((hostname) => {
  const req = https.request(
    {
      hostname: hostname,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload),
      },
    },
    (res) => {
      console.log(`✅ IndexNow sent to ${hostname} — HTTP Status: ${res.statusCode}`);
    }
  );

  req.on('error', (err) => {
    console.error(`❌ IndexNow error for ${hostname}:`, err.message);
  });

  req.write(payload);
  req.end();
});
