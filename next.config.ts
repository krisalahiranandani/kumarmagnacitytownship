import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  trailingSlash: false,
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      config.cache = false;
    }
    return config;
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Robots-Tag',
            value: 'all, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://formsubmit.co https://www.google-analytics.com https://region1.google-analytics.com https://pubsubhubbub.appspot.com; object-src 'none'; frame-ancestors 'none'; upgrade-insecure-requests;"
          }
        ],
      },
      {
        source: '/assets/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    const seoMappings = [
      { old: '/availability', new: '/kumar-magnacity-na-bungalow-plots-availability' },
      { old: '/market-insights', new: '/kumar-magnacity-market-data-pune-east' },
      { old: '/concept', new: '/kumar-magnacity-na-bungalow-plots-concept' },
      { old: '/location', new: '/kumar-magnacity-manjari-location-map' },
      { old: '/investment', new: '/kumar-magnacity-investment-plan-pune-east' },
      { old: '/amenities', new: '/kumar-magnacity-na-bungalow-plots-amenities' },
      { old: '/master-plan', new: '/kumar-magnacity-na-bungalow-plots-master-plan' },
      { old: '/privacy-policy', new: '/kumar-magnacity-na-bungalow-plots-privacy-policy' },
      { old: '/thank-you', new: '/kumar-magnacity-na-bungalow-plots-thank-you' },
      { old: '/faq', new: '/kumar-magnacity-na-bungalow-plots-faq' },
      { old: '/kumar-magnacity', new: '/kumar-magnacity-hadapsar' },
      { old: '/kumar-magnacity-plots', new: '/kumar-magnacity-na-bungalow-plots-concept' },
      { old: '/kumar-magnacity-2-bhk', new: '/kumar-magnacity-2bhk-flats-hadapsar-pune-price' },
      { old: '/kumar-magnacity-3-bhk', new: '/kumar-magnacity-3bhk-apartments-manjari-pune-price' },
      { old: '/kumar-magnacity-master-plan', new: '/kumar-magnacity-na-bungalow-plots-master-plan' },
      { old: '/kumar-magnacity-amenities', new: '/kumar-magnacity-na-bungalow-plots-amenities' },
      { old: '/kumar-magnacity-floor-plans', new: '/kumar-magnacity-floor-plan-2bhk-3bhk' },
      { old: '/kumar-magnacity-location', new: '/kumar-magnacity-location-advantages-hadapsar-manjari' },
      { old: '/kumar-magnacity-plots-price', new: '/kumar-magnacity-price' },
      { old: '/kumar-magnacity-plots-sizes', new: '/kumar-magnacity-na-bungalow-plots-concept' },
      { old: '/kumar-magnacity-buyer-guide', new: '/insights/kumar-magnacity-hadapsar-township-complete-buyer-guide' },
      { old: '/manjari-real-estate', new: '/kumar-magnacity-location-advantages-hadapsar-manjari' },
      { old: '/manjari-property-prices', new: '/kumar-magnacity-price' },
      { old: '/manjari-2-bhk', new: '/kumar-magnacity-2bhk-flats-hadapsar-pune-price' },
      { old: '/manjari-3-bhk', new: '/kumar-magnacity-3bhk-apartments-manjari-pune-price' },
      { old: '/manjari-plots', new: '/kumar-magnacity-na-bungalow-plots-concept' },
      { old: '/manjari-na-plots', new: '/kumar-magnacity-na-bungalow-plots-concept' },
      { old: '/pune-east-real-estate', new: '/kumar-magnacity-market-data-pune-east' },
      { old: '/kharadi-vs-manjari', new: '/insights/2bhk-3bhk-4bhk-flats-hadapsar-vs-kharadi-comparison' },
      { old: '/hadapsar-vs-manjari', new: '/compare/kumar-magnacity-vs-godrej-rivergreens-manjari' },
    ];

    let redirectsList: Array<{ source: string; destination: string; permanent: boolean }> = [
      {
        source: '/sitemap.xml',
        destination: '/sitemap/0.xml',
        permanent: true,
      },
      {
        source: '/project-overview/:slug*',
        destination: '/kumar-magnacity-na-bungalow-plots-concept',
        permanent: true,
      },
      {
        source: '/hadapsar-annexe/:slug*',
        destination: '/kumar-magnacity-location-advantages-hadapsar-manjari',
        permanent: true,
      },
    ];

    // English Redirects
    seoMappings.forEach(mapping => {
      redirectsList.push({
        source: mapping.old,
        destination: mapping.new,
        permanent: true,
      });
    });

    // Marathi Redirects
    seoMappings.forEach(mapping => {
      redirectsList.push({
        source: `/mr${mapping.old}`,
        destination: `/mr${mapping.new}`,
        permanent: true,
      });
    });

    return redirectsList;
  },
};

export default nextConfig;
