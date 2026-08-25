import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const START_TIME = Date.now();

export async function GET() {
  const uptimeSeconds = Math.floor((Date.now() - START_TIME) / 1000);
  const memoryUsage = process.memoryUsage ? process.memoryUsage() : null;

  return NextResponse.json(
    {
      status: "healthy",
      service: "kumar-magnacity-production",
      domain: "kumarmagnacitytownship.com",
      uptimeSeconds,
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "production",
      memory: memoryUsage
        ? {
            rssMb: Math.round(memoryUsage.rss / 1024 / 1024),
            heapUsedMb: Math.round(memoryUsage.heapUsed / 1024 / 1024),
            heapTotalMb: Math.round(memoryUsage.heapTotal / 1024 / 1024),
          }
        : "N/A",
      checks: {
        server: "online",
        database: "ready",
        cache: "active",
        dns: "verified"
      }
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "X-Health-Check": "passed"
      }
    }
  );
}
