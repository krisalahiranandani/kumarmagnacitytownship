import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

export async function GET() {
  const baseUrl = "https://kumarmagnacitytownship.com";

  const videoEntries = [
    {
      pageUrl: `${baseUrl}/kumar-magnacity-hadapsar`,
      videoUrl: `${baseUrl}/assets/hero-bg.jpg`,
      thumbnailUrl: `${baseUrl}/assets/hero-bg.jpg`,
      title: "Kumar Magnacity Hadapsar - 150-Acre Master Township 3D Drone Tour",
      description: "Aerial 3D drone tour and master plan walkthrough of Kumar Magnacity Township, Hadapsar Annexe, Manjari, Pune East featuring 2 & 3 BHK luxury residences and NA bungalow plots.",
      duration: 270, // 4m 30s
      publicationDate: "2026-08-01T08:00:00+05:30",
      familyFriendly: "yes",
      category: "Real Estate & Architecture",
      tags: ["Kumar Magnacity", "Hadapsar Annexe", "Manjari Pune", "Township 3D Tour", "2 BHK", "3 BHK", "NA Plots"]
    },
    {
      pageUrl: `${baseUrl}/kumar-magnacity-floor-plan-2bhk-3bhk`,
      videoUrl: `${baseUrl}/assets/elevation.jpg`,
      thumbnailUrl: `${baseUrl}/assets/elevation.jpg`,
      title: "Kumar Magnacity 2 BHK & 3 BHK Luxury Sample Flat Walkthrough",
      description: "Step inside the designer sample apartments at Kumar Magnacity Hadapsar. Inspect the 757 sq.ft 2 BHK smart layout and 1053 sq.ft 3 BHK grand suite with dual sundeck balconies.",
      duration: 180, // 3m 00s
      publicationDate: "2026-08-05T10:00:00+05:30",
      familyFriendly: "yes",
      category: "Home & Real Estate",
      tags: ["Sample Flat", "Floor Plans", "2 BHK", "3 BHK", "Kumar Properties"]
    },
    {
      pageUrl: `${baseUrl}/kumar-magnacity-na-bungalow-plots-concept`,
      videoUrl: `${baseUrl}/assets/masterplan.jpg`,
      thumbnailUrl: `${baseUrl}/assets/masterplan.jpg`,
      title: "Kumar Magnacity Phase 2 Sovereign NA Villa Plots Land Tour",
      description: "Walkthrough of Phase 2 NA Villa Bungalow plots (1,700 to 3,500+ sq.ft) with clear 7/12 extract and G+2 custom villa sanction in Hadapsar Annexe, Pune.",
      duration: 210, // 3m 30s
      publicationDate: "2026-08-10T12:00:00+05:30",
      familyFriendly: "yes",
      category: "Land & Plots",
      tags: ["NA Plots", "Villa Land", "7/12 Extract", "Pune Land Investment"]
    }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${videoEntries.map(v => `
  <url>
    <loc>${v.pageUrl}</loc>
    <video:video>
      <video:thumbnail_loc>${v.thumbnailUrl}</video:thumbnail_loc>
      <video:title><![CDATA[${v.title}]]></video:title>
      <video:description><![CDATA[${v.description}]]></video:description>
      <video:content_loc>${v.videoUrl}</video:content_loc>
      <video:player_loc allow_embed="yes" autoplay="ap=1">${v.pageUrl}</video:player_loc>
      <video:duration>${v.duration}</video:duration>
      <video:publication_date>${v.publicationDate}</video:publication_date>
      <video:family_friendly>${v.familyFriendly}</video:family_friendly>
      <video:category><![CDATA[${v.category}]]></video:category>
      ${v.tags.map(t => `<video:tag><![CDATA[${t}]]></video:tag>`).join('')}
      <video:uploader info="https://kumarmagnacitytownship.com">Kumar Properties</video:uploader>
      <video:platform relationship="allow">web mobile</video:platform>
    </video:video>
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
