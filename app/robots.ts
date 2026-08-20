import { MetadataRoute } from 'next';
import { generateSitemaps } from './sitemap';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const sitemaps = await generateSitemaps();
  const sitemapUrls = sitemaps.map((s) => `https://kumarmagnacitytownship.com/sitemap/${s.id}.xml`);
  
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/', '/*.js', '/*.css', '/*.jpg', '/*.jpeg', '/*.png', '/*.webp', '/*.avif', '/*.svg'],
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/*.jpg', '/*.jpeg', '/*.png', '/*.webp', '/*.avif', '/*.svg', '/assets/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
        crawlDelay: 2,
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      }
    ],
    sitemap: [
      ...sitemapUrls,
      'https://kumarmagnacitytownship.com/image-sitemap.xml'
    ],
    host: 'https://kumarmagnacitytownship.com',
  };
}
