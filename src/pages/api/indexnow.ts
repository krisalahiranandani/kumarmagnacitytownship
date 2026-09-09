import type { APIRoute } from "astro";

const INDEXNOW_KEY = "f8a3b8d91c7e462a8019cf3994a5e2f1";
const HOST = "kumarmagnacitytownship.com";

const PRIORITY_URLS = [
  "https://kumarmagnacitytownship.com/",
  "https://kumarmagnacitytownship.com/kumar-magnacity-hadapsar",
  "https://kumarmagnacitytownship.com/kumar-magnacity-price",
  "https://kumarmagnacitytownship.com/kumar-magnacity-rera",
  "https://kumarmagnacitytownship.com/kumar-magnacity-2bhk-flats-hadapsar-pune-price",
  "https://kumarmagnacitytownship.com/kumar-magnacity-3bhk-apartments-manjari-pune-price",
  "https://kumarmagnacitytownship.com/kumar-magnacity-na-bungalow-plots-concept",
  "https://kumarmagnacitytownship.com/kumar-magnacity-na-bungalow-plots-availability",
  "https://kumarmagnacitytownship.com/kumar-magnacity-floor-plan-2bhk-3bhk",
  "https://kumarmagnacitytownship.com/kumar-magnacity-na-bungalow-plots-master-plan",
  "https://kumarmagnacitytownship.com/kumar-magnacity-location-advantages-hadapsar-manjari",
  "https://kumarmagnacitytownship.com/kumar-magnacity-market-data-pune-east",
  "https://kumarmagnacitytownship.com/nri-investment",
  "https://kumarmagnacitytownship.com/compare/kumar-magnacity-vs-godrej-rivergreens-manjari",
  "https://kumarmagnacitytownship.com/compare/kumar-magnacity-vs-amanora-park-town-hadapsar",
  "https://kumarmagnacitytownship.com/compare/kumar-magnacity-vs-shapoorji-joyville-hadapsar",
  "https://kumarmagnacitytownship.com/compare/kumar-magnacity-vs-vtp-pegasus-kharadi",
  "https://kumarmagnacitytownship.com/insights/kumar-magnacity-hadapsar-township-complete-buyer-guide",
  "https://kumarmagnacitytownship.com/insights/2bhk-3bhk-4bhk-flats-hadapsar-vs-kharadi-comparison",
  "https://kumarmagnacitytownship.com/insights/pune-ring-road-impact",
  "https://kumarmagnacitytownship.com/insights/sky-duplex-penthouses-luxury-residences-pune"
];

export const POST: APIRoute = async () => {
  try {
    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: PRIORITY_URLS,
    };

    const endpoints = [
      "https://api.indexnow.org/indexnow",
      "https://www.bing.com/indexnow"
    ];

    const results = await Promise.allSettled(
      endpoints.map(async (endpoint) => {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(payload),
        });
        return { endpoint, status: res.status };
      })
    );

    return new Response(JSON.stringify({
      success: true,
      submittedUrls: PRIORITY_URLS.length,
      results,
      timestamp: new Date().toISOString(),
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({
    status: "IndexNow Automation Ready",
    host: HOST,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    urlsMonitored: PRIORITY_URLS.length,
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};
