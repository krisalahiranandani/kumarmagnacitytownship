import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = async () => {
  const content = `User-agent: *
Allow: /

# Direct Sitemaps & Feeds
Sitemap: https://kumarmagnacitytownship.com/sitemap.xml
Sitemap: https://kumarmagnacitytownship.com/image-sitemap.xml
Sitemap: https://kumarmagnacitytownship.com/video-sitemap.xml
Sitemap: https://kumarmagnacitytownship.com/news-sitemap.xml
Sitemap: https://kumarmagnacitytownship.com/google-product-feed.xml
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
};
