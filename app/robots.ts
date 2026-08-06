import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: [
      'https://kumarmagnacitytownship.com/sitemap.xml',
      'https://kumarmagnacitytownship.com/image-sitemap.xml'
    ],
  };
}
