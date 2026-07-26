import { NextRequest, NextResponse } from "next/server";
import { EnquirySchema } from "@/types/enquiry";

export const runtime = "nodejs";

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string, limit = 5, windowMs = 60 * 1000): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }
  if (record.count >= limit) {
    return true;
  }
  record.count += 1;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || request.headers.get("x-real-ip") || "127.0.0.1";
    if (checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot check
    if (body._honey || body.website || body.honeypot) {
      return NextResponse.json({ success: true, vault: "secured" });
    }

    // 0. Hardened Cross-Origin Spam Protection
    const origin = request.headers.get("origin") || "";
    const referer = request.headers.get("referer") || "";
    const isLocalhost = origin.includes("localhost") || referer.includes("localhost");
    const isDomain = origin.includes("kumarmagnacitytownship.com") || referer.includes("kumarmagnacitytownship.com");
    
    if (process.env.NODE_ENV === "production" && !isDomain && !isLocalhost) {
      console.warn("Blocked potential spam bot from origin:", origin);
      return NextResponse.json(
        { success: false, error: "Unauthorized cross-origin request" },
        { status: 403 }
      );
    }

    // 1. Validate Schema with Zod
    const validation = EnquirySchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { success: false, error: "Validation failed", details: validation.error.format() },
        { status: 400 }
      );
    }

    const data = validation.data;
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const leadEntry = {
      ...data,
      timestamp,
      source_url: data.source_url || request.headers.get("referer") || "Direct Portal",
    };

    // FormSubmit AJAX relay to propsmartrealty@gmail.com
    const relayResponse = await fetch(
      "https://formsubmit.co/ajax/propsmartrealty@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: leadEntry.name,
          Phone: leadEntry.phone,
          Email: leadEntry.email || "N/A",
          "Visit Timing": leadEntry.timing,
          "Investment Goal": leadEntry.intent,
          "Source Page": leadEntry.source_url,
          Timestamp: leadEntry.timestamp,
          _subject: `🚨 NEW LEAD: ${leadEntry.name} | ${leadEntry.phone}`,
          _captcha: "false",
          _template: "table",
        }),
      }
    );

    const responseText = await relayResponse.text();
    let responseJson: any = {};
    try {
      responseJson = JSON.parse(responseText);
    } catch {
      responseJson = { raw: responseText };
    }

    if (relayResponse.ok && responseJson.success !== "false") {
      return NextResponse.json({
        success: true,
        vault: "secured",
        detail: responseJson,
      });
    } else {
      return NextResponse.json(
        { success: false, error: "FormSubmit relay failed", detail: responseJson },
        { status: 502 }
      );
    }
  } catch (error: any) {
    console.error("Critical API error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
