import type { Metadata } from 'next';
import Link from 'next/link';
import PillarTemplate from '@/components/PillarTemplate';
import ApartmentShowcase from '@/components/ApartmentShowcase';
import SpecificationGrid from '@/components/SpecificationGrid';
import LocationAdvantageMap from '@/components/LocationAdvantageMap';
import ApartmentPriceMatrix from '@/components/ApartmentPriceMatrix';
import AdvancedEnquiryForm from '@/components/AdvancedEnquiryForm';
import CommuteTimeMatrix from '@/components/CommuteTimeMatrix';
import NearbyMarkets from '@/components/NearbyMarkets';
import MasterplanSectorInspector from '@/components/MasterplanSectorInspector';
import UnitComparisonMatrix from '@/components/UnitComparisonMatrix';
import WhatsAppCostSheetGenerator from '@/components/WhatsAppCostSheetGenerator';

export const metadata: Metadata = {
  title: 'Kumar Magnacity Hadapsar | 2 & 3 BHK Flats, Plots, Price & Location Pune',
  description: 'Official Kumar Magnacity Hadapsar Portal (Hadapsar Annexe, Manjari). 150-Acre mega township featuring 2 & 3 BHK flats from ₹72.99L* and NA plots from ₹1.49Cr*. Podar School on campus, ~1 Lakh sq.ft clubhouse.',
  keywords: [
    'Kumar Magnacity Hadapsar',
    'Kumar Magnacity Hadapsar Pune',
    'Kumar Magnacity Hadapsar Annexe',
    'Kumar Magnacity Hadapsar price',
    '2 BHK flats Kumar Magnacity Hadapsar',
    '3 BHK apartments Hadapsar Pune',
    'Kumar Magnacity Manjari Hadapsar'
  ],
  alternates: {
    canonical: 'https://kumarmagnacitytownship.com/kumar-magnacity-hadapsar',
    languages: {
      'en-IN': 'https://kumarmagnacitytownship.com/kumar-magnacity-hadapsar',
      'mr-IN': 'https://kumarmagnacitytownship.com/mr/kumar-magnacity-hadapsar',
    },
  },
  openGraph: {
    title: 'Kumar Magnacity Hadapsar | 150-Acre Luxury Township Pune',
    description: 'Explore luxury 2 BHK & 3 BHK apartments and NA plots in Kumar Magnacity Hadapsar. 10 mins from Magarpatta & Kharadi.',
    url: 'https://kumarmagnacitytownship.com/kumar-magnacity-hadapsar',
    siteName: 'Kumar Magnacity Hadapsar',
    images: [
      {
        url: 'https://kumarmagnacitytownship.com/assets/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Kumar Magnacity Hadapsar Township Masterplan',
      },
    ],
  },
};

export default function KumarMagnacityHadapsarPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['RealEstateListing', 'Product'],
    name: 'Kumar Magnacity Hadapsar',
    alternateName: [
      'Kumar Magnacity Hadapsar Pune',
      'Kumar Magnacity Hadapsar Annexe',
      'Kumar Magnacity Manjari Hadapsar'
    ],
    url: 'https://kumarmagnacitytownship.com/kumar-magnacity-hadapsar',
    description: '150-Acre Integrated Mega Township in Hadapsar Annexe, Manjari, Pune East by Kumar Properties.',
    image: 'https://kumarmagnacitytownship.com/assets/hero-bg.jpg',
    offers: [
      {
        '@type': 'Offer',
        name: '2 BHK Luxury High-Rise Apartment',
        priceCurrency: 'INR',
        price: '7299000',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: '3 BHK Luxury High-Rise Apartment',
        priceCurrency: 'INR',
        price: '10500000',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'NA Villa Bungalow Plot',
        priceCurrency: 'INR',
        price: '14900000',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kumar Magnacity, Manjari Road, Hadapsar Annexe',
      addressLocality: 'Hadapsar',
      addressRegion: 'Maharashtra',
      postalCode: '412307',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '18.5204',
      longitude: '73.9667',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is Kumar Magnacity Hadapsar located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kumar Magnacity Hadapsar is situated in Hadapsar Annexe, Manjari, Pune East. It is 10 minutes from Magarpatta City, 5 minutes from Pune-Solapur Highway, and 12-15 minutes from Kharadi IT Park.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the starting price for flats in Kumar Magnacity Hadapsar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Luxury 2 BHK flats at Kumar Magnacity Hadapsar start at ₹72.99 Lakhs* (757 sq.ft carpet), and 3 BHK flats start at ₹1.05 Cr.* (1,053 sq.ft carpet).',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Kumar Magnacity in Hadapsar or Manjari?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kumar Magnacity is located in the high-growth Hadapsar Annexe corridor in Manjari, providing direct connectivity to both Hadapsar IT hubs and Kharadi via the new Manjari bridge corridor.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the MahaRERA numbers for Kumar Magnacity Hadapsar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The MahaRERA registration numbers for Kumar Magnacity are P52100052096 and P52100054476.',
        },
      },
    ],
  };

  return (
    <PillarTemplate
      badge="HADAPSAR ANNEXE MASTER TOWNSHIP"
      title="Kumar Magnacity Hadapsar"
      subtitle="Experience Pune East's premier 150-acre integrated mega-township. Luxury 2 & 3 BHK high-rise residences and NA bungalow plots by Kumar Properties."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Strategic Hadapsar Overview */}
      <section className="mb-20">
        <div className="bg-gradient-to-br from-white via-white to-warm-bg/40 p-8 md:p-12 rounded-[2.5rem] border border-primary/10 shadow-xl space-y-6">
          <span className="text-accent text-xs font-bold tracking-widest uppercase">The Hadapsar Annexe Advantage</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary">
            Why Kumar Magnacity Hadapsar is Pune East&apos;s #1 Choice
          </h2>
          <p className="text-primary/70 text-lg leading-relaxed">
            Positioned in Pune East&apos;s fastest growing micro-market, <strong>Kumar Magnacity Hadapsar</strong> bridges the gap between urban convenience and sovereign luxury living. Spanning 150 acres, the township combines world-class residential towers, private NA bungalow plots, an on-campus Podar International School, and a ~1 Lakh sq.ft clubhouse.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-primary/10">
            <div>
              <div className="text-2xl md:text-3xl font-heading font-bold text-accent">150 Acres</div>
              <div className="text-xs text-primary/60 uppercase tracking-wider mt-1">Township Scale</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-heading font-bold text-accent">₹72.99L*</div>
              <div className="text-xs text-primary/60 uppercase tracking-wider mt-1">2 BHK Starting</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-heading font-bold text-accent">10 Mins</div>
              <div className="text-xs text-primary/60 uppercase tracking-wider mt-1">To Magarpatta</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-heading font-bold text-accent">Dec 2027</div>
              <div className="text-xs text-primary/60 uppercase tracking-wider mt-1">Possession Target</div>
            </div>
          </div>
        </div>
      </section>

      {/* Apartment Showcase */}
      <ApartmentShowcase />

      {/* Commute Time Matrix */}
      <CommuteTimeMatrix />

      {/* Pricing Matrix */}
      <div id="pricing" className="my-20">
        <ApartmentPriceMatrix />
      </div>

      {/* Location Advantage Map */}
      <LocationAdvantageMap />

      {/* Masterplan Sector Inspector */}
      <MasterplanSectorInspector />

      {/* Unit Comparison Matrix */}
      <UnitComparisonMatrix />

      {/* WhatsApp Cost Sheet Generator */}
      <WhatsAppCostSheetGenerator />

      {/* Specifications */}
      <SpecificationGrid />

      {/* Nearby Micro-Markets */}
      <NearbyMarkets />

      {/* Enquiry Form */}
      <section className="mt-20">
        <div className="bg-white/[0.03] border border-primary/10 rounded-[3rem] p-8 md:p-12">
          <AdvancedEnquiryForm 
            formId="Hadapsar_Pillar_Form"
            title="Book Your VIP Tour at Kumar Magnacity Hadapsar"
            subtitle="Get exclusive access to the Hadapsar Annexe price list, floor plans, and festive launch allocations."
            buttonText="CLAIM HADAPSAR PRICING"
          />
        </div>
      </section>
    </PillarTemplate>
  );
}
