import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ipMap = new Map<string, { count: number, timestamp: number }>();
const RATE_LIMIT = 15; 
const WINDOW_MS = 60 * 1000; 

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // 1. Cloudflare Edge Geolocation (NRI & India Personalization)
  const cfCountry = request.headers.get('cf-ipcountry') || request.headers.get('x-vercel-ip-country') || 'IN';
  const cfRay = request.headers.get('cf-ray') || 'direct';
  response.headers.set('x-user-geo', cfCountry);
  response.headers.set('x-edge-pop', cfRay);

  // 2. Cloudflare Advanced Edge HTML Acceleration for all Web Pages
  const isApi = request.nextUrl.pathname.startsWith('/api/');
  const isStatic = request.nextUrl.pathname.startsWith('/_next/') || request.nextUrl.pathname.startsWith('/assets/');

  if (!isApi && !isStatic) {
    // Cloudflare Edge Cache Tags & Tiered Caching
    response.headers.set('CDN-Cache-Control', 'public, max-age=31536000, s-maxage=31536000, stale-while-revalidate=86400, stale-if-error=604800');
    response.headers.set('Cloudflare-CDN-Cache-Control', 'public, max-age=31536000, s-maxage=31536000, stale-while-revalidate=86400, stale-if-error=604800');
    response.headers.set('Surrogate-Control', 'max-age=31536000');
    response.headers.set('Cache-Tag', 'kumar-magnacity-edge,kumar-magnacity-html,kumar-properties,pune-realestate');
    
    // Cloudflare Early Hints & Resource Preloading
    response.headers.set('Link', '</assets/hero-bg.webp>; rel=preload; as=image; fetchpriority=high, </assets/elevation.jpg>; rel=preload; as=image, <https://fonts.googleapis.com>; rel=preconnect; crossorigin, <https://fonts.gstatic.com>; rel=preconnect; crossorigin');

    // Search Engine Optimization & Instant Indexing Tag
    response.headers.set('X-Robots-Tag', 'all, max-image-preview:large, max-snippet:-1, max-video-preview:-1, index, follow');
  }

  // 3. Protect API routes
  if (isApi) {
    
    // Strict Origin / Referer Validation
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    const isLocal = origin?.includes('localhost') || origin?.includes('127.0.0.1');
    const isAllowedDomain = origin?.includes('kumarmagnacity') || referer?.includes('kumarmagnacity');

    if (request.method === 'POST') {
      if (!isLocal && !isAllowedDomain) {
        return new NextResponse(
          JSON.stringify({ error: 'Forbidden: Invalid Origin' }),
          { status: 403, headers: { 'content-type': 'application/json' } }
        );
      }
    }

    // IP Rate Limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '127.0.0.1';
    const now = Date.now();
    
    const record = ipMap.get(ip);
    if (!record) {
      ipMap.set(ip, { count: 1, timestamp: now });
    } else {
      if (now - record.timestamp > WINDOW_MS) {
        ipMap.set(ip, { count: 1, timestamp: now });
      } else {
        record.count++;
        if (record.count > RATE_LIMIT) {
          return new NextResponse(
            JSON.stringify({ error: 'Too Many Requests' }),
            { status: 429, headers: { 'content-type': 'application/json' } }
          );
        }
      }
    }
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|assets|sw.js|workbox-.*).*)',
  ],
};
