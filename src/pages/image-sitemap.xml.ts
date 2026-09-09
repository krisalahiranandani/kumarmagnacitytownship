import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = async () => {
  const baseUrl = "https://kumarmagnacitytownship.com";
  const images = [
    {
      url: `${baseUrl}/assets/official-logo.png`,
      title: "Kumar Properties | Magnacity Official Logo",
      caption: "Official logo of Kumar Magnacity Township by Kumar Properties in Manjari, Hadapsar Annexe, Pune.",
      geo_location: "Pune, Maharashtra, India"
    },
    {
      url: `${baseUrl}/assets/hero-bg.jpg`,
      title: "Kumar Magnacity G+30 High-Rise Luxury Towers",
      caption: "Exterior view of G+30 high-rise luxury towers at Kumar Magnacity 150-acre township.",
      geo_location: "Pune, Maharashtra, India"
    },
    {
      url: `${baseUrl}/assets/master-layout.jpg`,
      title: "Kumar Magnacity 150 Acre Master Plan",
      caption: "The official master layout showing the 150-acre township, residential towers, and NA bungalow plots in Manjari, Pune East.",
      geo_location: "Pune, Maharashtra, India"
    },
    {
      url: `${baseUrl}/assets/2bhk-floor-plan.jpg`,
      title: "Kumar Magnacity 2BHK Premium Floor Plan",
      caption: "Detailed 2BHK floor plan layout starting at 757 sq.ft carpet area at Kumar Magnacity.",
      geo_location: "Pune, Maharashtra, India"
    },
    {
      url: `${baseUrl}/assets/3bhk-floor-plan.jpg`,
      title: "Kumar Magnacity 3BHK Luxury Floor Plan",
      caption: "Detailed 3BHK floor plan layout starting at 1053 sq.ft carpet area at Kumar Magnacity.",
      geo_location: "Pune, Maharashtra, India"
    },
    {
      url: `${baseUrl}/assets/township-layout.jpg`,
      title: "Kumar Magnacity NA Bungalow Plots Layout",
      caption: "Sanctioned NA Bungalow Plots layout within the Kumar Magnacity 150-Acre Township in Pune East.",
      geo_location: "Pune, Maharashtra, India"
    }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${images.map(img => `
  <url>
    <loc>${baseUrl}</loc>
    <image:image>
      <image:loc>${img.url}</image:loc>
      <image:title><![CDATA[${img.title}]]></image:title>
      <image:caption><![CDATA[${img.caption}]]></image:caption>
      <image:geo_location>${img.geo_location}</image:geo_location>
    </image:image>
  </url>
  `).join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate",
    },
  });
};
