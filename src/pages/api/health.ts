import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({
    status: "ok",
    timestamp: new Date().toISOString(),
    architecture: "Cloudflare Pages + Astro 5 Zero-JS Static & Edge Islands",
    cdn: "Cloudflare Global Edge",
    region: "IN-MH Pune"
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};
