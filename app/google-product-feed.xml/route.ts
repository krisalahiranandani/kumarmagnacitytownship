import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

export async function GET() {
  const feedXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>Kumar Magnacity Hadapsar Township - Google Merchant &amp; Real Estate Product Feed</title>
    <link>https://kumarmagnacitytownship.com</link>
    <description>Official Real Estate Inventory &amp; Product Feed for Kumar Magnacity Township, Hadapsar Annexe, Manjari, Pune East by Kumar Properties.</description>
    
    <!-- Item 1: 2 BHK Smart Luxury Apartment -->
    <item>
      <g:id>KM-2BHK-757</g:id>
      <g:title>Kumar Magnacity 2 BHK Luxury Apartment (757 Sq.Ft Carpet)</g:title>
      <g:description>150-Acre Master Township by Kumar Properties at Hadapsar Annexe, Manjari. Vastu-compliant 2BHK with sundeck balcony, Podar International School on campus, ~1 Lakh sq.ft clubhouse.</g:description>
      <g:link>https://kumarmagnacitytownship.com/kumar-magnacity-2bhk-flats-hadapsar-pune-price</g:link>
      <g:image_link>https://kumarmagnacitytownship.com/assets/hero-bg.jpg</g:image_link>
      <g:additional_image_link>https://kumarmagnacitytownship.com/assets/elevation.jpg</g:additional_image_link>
      <g:availability>in_stock</g:availability>
      <g:price>7299000 INR</g:price>
      <g:brand>Kumar Properties</g:brand>
      <g:condition>new</g:condition>
      <g:google_product_category>Real Estate &gt; Residential Buildings &gt; Apartments</g:google_product_category>
      <g:mpn>P52100052096</g:mpn>
      <g:identifier_exists>false</g:identifier_exists>
      <g:product_type>Apartments &gt; 2 BHK &gt; Luxury</g:product_type>
      <g:product_highlight>On-Campus Podar International School (Walk-to-School)</g:product_highlight>
      <g:product_highlight>~1 Lakh Sq.Ft Mega Social &amp; Olympic Sports Clubhouse</g:product_highlight>
      <g:product_highlight>10 Mins from Magarpatta Cybercity &amp; 15 Mins from Kharadi EON IT Park</g:product_highlight>
      <g:installment>
        <g:months>240</g:months>
        <g:amount>54000 INR</g:amount>
      </g:installment>
      <g:shipping>
        <g:country>IN</g:country>
        <g:service>On-Site Handover &amp; Possession</g:service>
        <g:price>0 INR</g:price>
      </g:shipping>
      <g:custom_label_0>MahaRERA: P52100052096</g:custom_label_0>
      <g:custom_label_1>Location: Hadapsar Annexe Manjari Pune</g:custom_label_1>
      <g:custom_label_2>Contact: +91 77440 09295</g:custom_label_2>
    </item>

    <!-- Item 2: 3 BHK Grand Family Suite -->
    <item>
      <g:id>KM-3BHK-1053</g:id>
      <g:title>Kumar Magnacity 3 BHK Grand Family Suite (1053 Sq.Ft Carpet)</g:title>
      <g:description>Spacious 3 BHK luxury apartment with dual balconies, master suite with pooja alcove, and 270-degree panoramic views in Kumar Magnacity, Hadapsar Annexe, Pune.</g:description>
      <g:link>https://kumarmagnacitytownship.com/kumar-magnacity-3bhk-apartments-manjari-pune-price</g:link>
      <g:image_link>https://kumarmagnacitytownship.com/assets/elevation.jpg</g:image_link>
      <g:additional_image_link>https://kumarmagnacitytownship.com/assets/hero-bg.jpg</g:additional_image_link>
      <g:availability>in_stock</g:availability>
      <g:price>10500000 INR</g:price>
      <g:brand>Kumar Properties</g:brand>
      <g:condition>new</g:condition>
      <g:google_product_category>Real Estate &gt; Residential Buildings &gt; Apartments</g:google_product_category>
      <g:mpn>P52100052096</g:mpn>
      <g:identifier_exists>false</g:identifier_exists>
      <g:product_type>Apartments &gt; 3 BHK &gt; Luxury</g:product_type>
      <g:product_highlight>Dual Extended Sundeck Balconies &amp; Master Suite with Pooja Alcove</g:product_highlight>
      <g:product_highlight>25+ Acres Continuous Green Lungs &amp; Miyawaki Forests</g:product_highlight>
      <g:installment>
        <g:months>240</g:months>
        <g:amount>78000 INR</g:amount>
      </g:installment>
      <g:shipping>
        <g:country>IN</g:country>
        <g:service>On-Site Handover &amp; Possession</g:service>
        <g:price>0 INR</g:price>
      </g:shipping>
      <g:custom_label_0>MahaRERA: P52100052096</g:custom_label_0>
      <g:custom_label_1>Location: Hadapsar Annexe Manjari Pune</g:custom_label_1>
      <g:custom_label_2>Contact: +91 77440 09295</g:custom_label_2>
    </item>

    <!-- Item 3: Sovereign NA Villa Bungalow Plot -->
    <item>
      <g:id>KM-PLOT-1700</g:id>
      <g:title>Kumar Magnacity NA Villa Bungalow Plot (1700+ Sq.Ft)</g:title>
      <g:description>Clear Title Land Plot with individual 7/12 extract and G+2 custom villa sanction inside Kumar Magnacity Phase 2, Hadapsar Annexe, Manjari Pune.</g:description>
      <g:link>https://kumarmagnacitytownship.com/kumar-magnacity-na-bungalow-plots-concept</g:link>
      <g:image_link>https://kumarmagnacitytownship.com/assets/masterplan.jpg</g:image_link>
      <g:availability>in_stock</g:availability>
      <g:price>14900000 INR</g:price>
      <g:brand>Kumar Properties</g:brand>
      <g:condition>new</g:condition>
      <g:google_product_category>Real Estate &gt; Land Lots</g:google_product_category>
      <g:mpn>P52100054476</g:mpn>
      <g:identifier_exists>false</g:identifier_exists>
      <g:product_type>Land &gt; Residential Plots &gt; NA Villa Plots</g:product_type>
      <g:product_highlight>Individual 7/12 Extract (७/१२ उतारा) &amp; TP Sanctioned</g:product_highlight>
      <g:product_highlight>G+2 Custom Villa Construction Sanction</g:product_highlight>
      <g:shipping>
        <g:country>IN</g:country>
        <g:service>Immediate Registry &amp; Land Handover</g:service>
        <g:price>0 INR</g:price>
      </g:shipping>
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
