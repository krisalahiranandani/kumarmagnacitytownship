import { NextResponse } from 'next/server';
import { getInsightSlugs } from '@/lib/markdown';

export const runtime = 'nodejs';
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

export async function GET() {
  const baseUrl = "https://kumarmagnacitytownship.com";
  const insightSlugs = getInsightSlugs();
  const currentDate = new Date().toISOString();

  const newsEntries = [
    {
      url: `${baseUrl}/insights/kumar-magnacity-hadapsar-township-complete-buyer-guide`,
      title: "Kumar Magnacity Hadapsar Township: The Complete 2026 Homebuyer Guide",
      publicationDate: "2026-08-20T08:00:00+05:30",
      language: "en",
      keywords: "Kumar Magnacity, Hadapsar Annexe, Manjari Pune, 2 BHK, 3 BHK, Podar International School"
    },
    {
      url: `${baseUrl}/insights/2bhk-3bhk-4bhk-flats-hadapsar-vs-kharadi-comparison`,
      title: "Hadapsar vs Kharadi Property Analysis: Pricing, Rental Yield & Infrastructure ROI",
      publicationDate: "2026-08-18T10:00:00+05:30",
      language: "en",
      keywords: "Hadapsar vs Kharadi, Real Estate Comparison, EON IT Park, Magarpatta City, Rental Yield"
    },
    {
      url: `${baseUrl}/insights/na-villa-bungalow-plots-pune-investment-guide-2027`,
      title: "NA Villa Bungalow Plots in Pune East: Clear Title Land Investment Guide 2026-2027",
      publicationDate: "2026-08-15T12:00:00+05:30",
      language: "en",
      keywords: "NA Plots Pune, Villa Bungalow Land, 7/12 Extract, Hadapsar Annexe, Land Appreciation"
    },
    {
      url: `${baseUrl}/insights/hinjewadi-to-hadapsar-pune-real-estate-corridor-guide`,
      title: "Hinjewadi to Hadapsar: Why Pune Tech Professionals are Migrating to East Pune Townships",
      publicationDate: "2026-08-12T09:30:00+05:30",
      language: "en",
      keywords: "Hinjewadi to Hadapsar, Tech Migration, East Pune Real Estate, Traffic Index, Livability"
    },
    {
      url: `${baseUrl}/insights/podar-school-township-hadapsar-family-living`,
      title: "Podar International School Inside Kumar Magnacity: Zero-Commute Campus Living",
      publicationDate: "2026-08-10T11:00:00+05:30",
      language: "en",
      keywords: "Podar International School, CBSE School Hadapsar, Family Townships, Kumar Magnacity"
    },
    {
      url: `${baseUrl}/insights/sky-duplex-penthouses-luxury-residences-pune`,
      title: "Sky Duplex Penthouses in Pune East: Redefining Ultra-Luxury High-Rise Living",
      publicationDate: "2026-08-08T14:00:00+05:30",
      language: "en",
      keywords: "Sky Duplex, Penthouses Pune, Luxury Living, Kumar Magnacity, High Rise"
    }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${newsEntries.map(n => `
  <url>
    <loc>${n.url}</loc>
    <news:news>
      <news:publication>
        <news:name>Kumar Magnacity Real Estate Intelligence</news:name>
        <news:language>${n.language}</news:language>
      </news:publication>
      <news:publication_date>${n.publicationDate}</news:publication_date>
      <news:title><![CDATA[${n.title}]]></news:title>
      <news:keywords><![CDATA[${n.keywords}]]></news:keywords>
    </news:news>
  </url>
  `).join('')}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
