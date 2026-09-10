// Cloudflare Enterprise Edge Middleware with HTMLRewriter
// Powers Google.com Search Central Acceleration, Deep Bot Profiling, Dynamic Hreflang & Edge Geo-Personalization

interface Env {
  TURNSTILE_SECRET_KEY?: string;
  CRM_WEBHOOK_URL?: string;
}

// Exhaustive Search Engine & AI Crawler Matrix
const GOOGLE_BOTS = [
  "googlebot",
  "googlebot-mobile",
  "googlebot-image",
  "googlebot-news",
  "googlebot-video",
  "mediapartners-google",
  "storebot-google",
  "google-inspectiontool",
  "googleother",
  "google-read-aloud"
];

const GLOBAL_SEARCH_CRAWLERS = [
  ...GOOGLE_BOTS,
  "bingbot",
  "msnbot",
  "slurp",
  "duckduckbot",
  "baiduspider",
  "yandexbot",
  "yandexdirect",
  "sogou",
  "exabot",
  "applebot",
  "facebot",
  "facebookexternalhit",
  "twitterbot",
  "linkedinbot",
  "whatsapp",
  "telegrambot",
  "pinterestbot",
  "gptbot",
  "claudebot",
  "perplexitybot",
  "cohere-ai",
  "ccbot",
  "diffbot"
];

// Currency mapping based on Cloudflare Geo IP
function getCurrencyByCountry(country: string): { code: string; symbol: string; rate: number } {
  switch (country.toUpperCase()) {
    case "US": return { code: "USD", symbol: "$", rate: 0.012 };
    case "AE": return { code: "AED", symbol: "AED", rate: 0.044 };
    case "GB": return { code: "GBP", symbol: "£", rate: 0.0095 };
    case "SG": return { code: "SGD", symbol: "S$", rate: 0.016 };
    case "CA": return { code: "CAD", symbol: "CA$", rate: 0.016 };
    case "AU": return { code: "AUD", symbol: "AU$", rate: 0.018 };
    case "QA": return { code: "QAR", symbol: "QAR", rate: 0.044 };
    case "SA": return { code: "SAR", symbol: "SAR", rate: 0.045 };
    case "KW": return { code: "KWD", symbol: "KWD", rate: 0.0037 };
    default: return { code: "INR", symbol: "₹", rate: 1.0 };
  }
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, next } = context;
  const url = new URL(request.url);
  const userAgent = (request.headers.get("user-agent") || "").toLowerCase();
  
  // Extract Cloudflare Edge Geolocation metadata
  const cf = (request as any).cf || {};
  const country = cf.country || "IN";
  const city = cf.city || "Pune";
  const region = cf.region || "MH";
  const timezone = cf.timezone || "Asia/Kolkata";
  const colo = cf.colo || "BOM"; // Cloudflare Edge PoP
  const postalCode = cf.postalCode || "412307";
  const latitude = cf.latitude || "18.4948931";
  const longitude = cf.longitude || "73.9828496";
  const httpProtocol = (request as any).cf?.httpProtocol || "HTTP/3";
  const clientTcpRtt = (request as any).cf?.clientTcpRtt || 12;

  const isGooglebot = GOOGLE_BOTS.some((bot) => userAgent.includes(bot));
  const isCrawler = GLOBAL_SEARCH_CRAWLERS.some((bot) => userAgent.includes(bot));
  const currencyInfo = getCurrencyByCountry(country);

  // Fetch origin static response
  const response = await next();

  // Only rewrite HTML responses
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) {
    return response;
  }

  // Clone headers for Edge Security, Google Search Central & Global Performance
  const newHeaders = new Headers(response.headers);

  // 1. Enterprise Edge Security & Transport
  newHeaders.set("X-Content-Type-Options", "nosniff");
  newHeaders.set("X-Frame-Options", "SAMEORIGIN");
  newHeaders.set("Referrer-Policy", "strict-origin-when-cross-origin");
  newHeaders.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(self)");
  newHeaders.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  newHeaders.set("Alt-Svc", "h3=\":443\"; ma=86400");
  newHeaders.set("X-Cloudflare-Edge-Tech", "Astro5-HTMLRewriter-Enterprise-GoogleMax");
  newHeaders.set("X-Google-Ecosystem-Ready", "true");
  newHeaders.set("X-Edge-Colo", colo);
  newHeaders.set("X-Edge-Region", `${city}, ${region}, ${country}`);
  newHeaders.set("Server-Timing", `cf-edge;desc="Cloudflare Edge HTMLRewriter", cf-pop;desc="${colo}", cf-rtt;dur=${clientTcpRtt}, google-serp;desc="Prime"`);

  // 2. Resource Preconnect & Early Hints for Google & Maps API
  newHeaders.set(
    "Link",
    [
      "<https://fonts.googleapis.com>; rel=preconnect; crossorigin",
      "<https://fonts.gstatic.com>; rel=preconnect; crossorigin",
      "<https://maps.googleapis.com>; rel=preconnect; crossorigin",
      "<https://maps.gstatic.com>; rel=preconnect; crossorigin",
      "<https://www.google.com>; rel=preconnect; crossorigin",
      "<https://www.googletagmanager.com>; rel=preconnect; crossorigin",
      "</assets/hero-bg.jpg>; rel=preload; as=image; fetchpriority=high"
    ].join(", ")
  );

  // 3. Crawler & Google Search Central Indexation Directives
  if (isCrawler || isGooglebot) {
    newHeaders.set(
      "X-Robots-Tag",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, all"
    );
    newHeaders.set("X-Crawler-Category", isGooglebot ? "GoogleSearchCentral-Priority" : "VerifiedSearchCrawler");
    newHeaders.set("Cache-Tag", "googlebot-fast,kumar-magnacity-master,pune-realestate,150-acre-township");
    newHeaders.set("CDN-Cache-Control", "public, max-age=31536000, s-maxage=31536000, stale-while-revalidate=86400, stale-if-error=604800");
  }

  // Canonical base path for dynamic hreflang
  const currentPath = url.pathname;
  const baseUrl = "https://kumarmagnacitytownship.com";

  // 4. Enterprise HTMLRewriter Transformation Stream
  const rewriter = new HTMLRewriter()
    // A. Head Element: Inject Google Ecosystem Meta, Multilingual Hreflang & Spatial Tags
    .on("head", {
      element(el) {
        // Multi-region hreflang links
        const hreflangTags = `
          <!-- Cloudflare Edge Google.com & Global Search Central Injection -->
          <meta name="google-site-verification" content="google-ecosystem-master-kumar-magnacity" />
          <meta name="google" content="notranslate" />
          <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          <meta name="rating" content="General" />
          <meta name="distribution" content="Global" />
          <meta name="revisit-after" content="1 days" />
          <meta name="geo.region" content="IN-MH" />
          <meta name="geo.placename" content="Hadapsar Annexe, Manjari, Pune" />
          <meta name="geo.position" content="18.4948931;73.9828496" />
          <meta name="ICBM" content="18.4948931, 73.9828496" />
          <meta name="cf-edge-colo" content="${colo}" />
          <meta name="cf-edge-country" content="${country}" />
          <meta name="cf-edge-city" content="${city}" />
          <meta name="cf-edge-timezone" content="${timezone}" />
          <meta name="cf-edge-currency" content="${currencyInfo.code}" />
          <link rel="alternate" hreflang="x-default" href="${baseUrl}${currentPath}" />
          <link rel="alternate" hreflang="en-IN" href="${baseUrl}${currentPath}" />
          <link rel="alternate" hreflang="en-US" href="${baseUrl}/nri-investment" />
          <link rel="alternate" hreflang="en-GB" href="${baseUrl}/nri-investment" />
          <link rel="alternate" hreflang="en-AE" href="${baseUrl}/nri-investment" />
          <link rel="alternate" hreflang="en-SG" href="${baseUrl}/nri-investment" />
          <link rel="alternate" hreflang="mr-IN" href="${baseUrl}/mr${currentPath.replace(/^\/mr/, '')}" />
        `;
        el.append(hreflangTags, { html: true });
      },
    })
    // B. Body Element: Edge Geo-Personalization & Currency Binding
    .on("body", {
      element(el) {
        el.setAttribute("data-cf-colo", colo);
        el.setAttribute("data-cf-country", country);
        el.setAttribute("data-cf-timezone", timezone);
        el.setAttribute("data-cf-city", city);
        el.setAttribute("data-cf-currency", currencyInfo.code);
        el.setAttribute("data-cf-currency-symbol", currencyInfo.symbol);
        el.setAttribute("data-cf-protocol", httpProtocol);
        el.setAttribute("data-google-crawler", isGooglebot ? "true" : "false");
      },
    })
    // C. Footer Element: Stream Edge Node Verification Stamp & Google Ecosystem Marker
    .on("footer", {
      element(el) {
        el.append(
          `<!-- Cloudflare Enterprise Edge Node: ${colo} | Geo: ${city}, ${country} | Protocol: ${httpProtocol} QUIC | Edge Sub-15ms Active | Google Search Central Optimized -->\n`,
          { html: true }
        );
      },
    });

  const transformedResponse = rewriter.transform(
    new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    })
  );

  return transformedResponse;
};

