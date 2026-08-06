import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
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
      'https://kumarmagnacitytownship.com/sitemap.xml',
      'https://kumarmagnacitytownship.com/image-sitemap.xml'
    ],
    host: 'https://kumarmagnacitytownship.com',
  };
}
