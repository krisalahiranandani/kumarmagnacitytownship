import { MetadataRoute } from 'next';
import { generateSitemaps } from './sitemap';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const sitemaps = await generateSitemaps();
  const sitemapUrls = sitemaps.map((s) => `https://kumarmagnacitytownship.com/sitemap/${s.id}.xml`);
  
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/', '/*.js', '/*.css', '/*.jpg', '/*.jpeg', '/*.png', '/*.webp', '/*.avif', '/*.svg', '/assets/'],
        disallow: ['/api/', '/admin/', '/_next/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/*.jpg', '/*.jpeg', '/*.png', '/*.webp', '/*.avif', '/*.svg', '/assets/'],
      },
      {
        userAgent: 'Googlebot-Mobile',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Applebot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'YandexBot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      }
    ],
    sitemap: [
      'https://kumarmagnacitytownship.com/sitemap.xml',
      ...sitemapUrls,
      'https://kumarmagnacitytownship.com/image-sitemap.xml',
      'https://kumarmagnacitytownship.com/google-product-feed.xml'
    ],
    host: 'https://kumarmagnacitytownship.com',
  };
}
