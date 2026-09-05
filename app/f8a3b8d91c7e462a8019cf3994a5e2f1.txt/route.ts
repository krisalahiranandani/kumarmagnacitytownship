import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-static';

export async function GET() {
  return new NextResponse('f8a3b8d91c7e462a8019cf3994a5e2f1', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
