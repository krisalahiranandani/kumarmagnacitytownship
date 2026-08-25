import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

export async function GET() {
  const feedXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>Kumar Magnacity Hadapsar Township - Verified Real Estate Inventory</title>
    <link>https://kumarmagnacitytownship.com</link>
    <description>Official Real Estate & Property Product Feed for Kumar Magnacity Township, Hadapsar Annexe, Manjari, Pune East.</description>
    
    <!-- Item 1: 2 BHK Luxury Apartment -->
    <item>
      <g:id>KM-2BHK-757</g:id>
      <g:title>Kumar Magnacity 2 BHK Luxury Apartment (757 Sq.Ft Carpet)</g:title>
      <g:description>150-Acre Master Township by Kumar Properties at Hadapsar Annexe, Manjari. Vastu-compliant 2BHK with sundeck balcony, Podar School on campus, ~1 Lakh sq.ft clubhouse.</g:description>
      <g:link>https://kumarmagnacitytownship.com/kumar-magnacity-2bhk-flats-hadapsar-pune-price</g:link>
      <g:image_link>https://kumarmagnacitytownship.com/assets/hero-bg.jpg</g:image_link>
      <g:availability>in_stock</g:availability>
      <g:price>7299000 INR</g:price>
      <g:brand>Kumar Properties</g:brand>
      <g:condition>new</g:condition>
      <g:google_product_category>Real Estate &gt; Residential Buildings &gt; Apartments</g:google_product_category>
      <g:custom_label_0>MahaRERA: P52100052096</g:custom_label_0>
      <g:custom_label_1>Location: Hadapsar Annexe Manjari Pune</g:custom_label_1>
      <g:custom_label_2>Contact: +91 77440 09295</g:custom_label_2>
    </item>

    <!-- Item 2: 3 BHK Grand Luxury Apartment -->
    <item>
      <g:id>KM-3BHK-1053</g:id>
      <g:title>Kumar Magnacity 3 BHK Grand Family Suite (1053 Sq.Ft Carpet)</g:title>
      <g:description>Spacious 3 BHK apartment with dual balconies, master suite with pooja space, 270-degree panoramic views in Kumar Magnacity, Hadapsar Annexe, Pune.</g:description>
      <g:link>https://kumarmagnacitytownship.com/kumar-magnacity-3bhk-apartments-manjari-pune-price</g:link>
      <g:image_link>https://kumarmagnacitytownship.com/assets/elevation.jpg</g:image_link>
      <g:availability>in_stock</g:availability>
      <g:price>10500000 INR</g:price>
      <g:brand>Kumar Properties</g:brand>
      <g:condition>new</g:condition>
      <g:google_product_category>Real Estate &gt; Residential Buildings &gt; Apartments</g:google_product_category>
      <g:custom_label_0>MahaRERA: P52100052096</g:custom_label_0>
      <g:custom_label_1>Location: Hadapsar Annexe Manjari Pune</g:custom_label_1>
      <g:custom_label_2>Contact: +91 77440 09295</g:custom_label_2>
    </item>

    <!-- Item 3: Sovereign NA Villa Bungalow Plot -->
    <item>
      <g:id>KM-PLOT-1700</g:id>
      <g:title>Kumar Magnacity NA Villa Bungalow Plot (1700+ Sq.Ft)</g:title>
      <g:description>Clear Title Land Plot with individual 7/12 extract and G+2 villa sanction inside Kumar Magnacity Phase 2, Hadapsar Annexe, Pune.</g:description>
      <g:link>https://kumarmagnacitytownship.com/kumar-magnacity-na-bungalow-plots-concept</g:link>
      <g:image_link>https://kumarmagnacitytownship.com/assets/masterplan.jpg</g:image_link>
      <g:availability>in_stock</g:availability>
      <g:price>14900000 INR</g:price>
      <g:brand>Kumar Properties</g:brand>
      <g:condition>new</g:condition>
      <g:google_product_category>Real Estate &gt; Land Lots</g:google_product_category>
      <g:custom_label_0>MahaRERA: P52100054476</g:custom_label_0>
      <g:custom_label_1>Location: Hadapsar Annexe Manjari Pune</g:custom_label_1>
      <g:custom_label_2>Contact: +91 77440 09295</g:custom_label_2>
    </item>
  </channel>
</rss>`;

  return new NextResponse(feedXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
