import { MetadataRoute } from 'next';
import { generateSitemaps } from './sitemap';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const sitemaps = await generateSitemaps();
  const sitemapUrls = sitemaps.map((s) => `https://kumarmagnacitytownship.com/sitemap/${s.id}.xml`);
  
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/', '/*.js', '/*.css', '/*.jpg', '/*.png', '/*.webp'],
        disallow: ['/api/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/*.jpg', '/*.jpeg', '/*.png', '/*.webp', '/*.avif'],
      },
      {
        userAgent: 'bingbot',
        allow: '/',
        disallow: ['/api/'],
        crawlDelay: 5,
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
        crawlDelay: 10,
      }
    ],
    sitemap: [
      ...sitemapUrls,
      'https://kumarmagnacitytownship.com/image-sitemap.xml'
    ],
    host: 'https://kumarmagnacitytownship.com',
  };
}
