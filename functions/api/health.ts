export const onRequestGet: PagesFunction = async (context) => {
  const { request } = context;
  const cf = (request as any).cf || {};

  return new Response(JSON.stringify({
    status: "ok",
    tier: "Cloudflare Enterprise Pages Functions",
    edge_node: cf.colo || "BOM",
    country: cf.country || "IN",
    city: cf.city || "Pune",
    timezone: cf.timezone || "Asia/Kolkata",
    protocol: request.headers.get("cf-visitor") || "https",
    timestamp: new Date().toISOString(),
    google_ecosystem_status: "Active & Synchronized"
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*"
    }
  });
};
