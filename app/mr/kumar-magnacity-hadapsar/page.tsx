import type { Metadata } from 'next';
import PillarTemplate from '@/components/PillarTemplate';
import ApartmentShowcase from '@/components/ApartmentShowcase';
import SpecificationGrid from '@/components/SpecificationGrid';
import LocationAdvantageMap from '@/components/LocationAdvantageMap';
import ApartmentPriceMatrix from '@/components/ApartmentPriceMatrix';
import AdvancedEnquiryForm from '@/components/AdvancedEnquiryForm';
import CommuteTimeMatrix from '@/components/CommuteTimeMatrix';
import NearbyMarkets from '@/components/NearbyMarkets';

export const metadata: Metadata = {
  title: 'कुमार मॅग्नासिटी हडपसर | २ आणि ३ बीएचके फ्लॅट्स, प्लॉट्स आणि किंमत',
  description: 'कुमार मॅग्नासिटी हडपसर ॲनेक्स (मांजरी, पुणे) अधिकृत पोर्टल. १५०-एकर भव्य टाउनशिप, २ बीएचके (₹७२.९९ लाख*) आणि ३ बीएचके (₹१.०५ कोटी*), एनए बंगलो प्लॉट्स.',
  keywords: [
    'कुमार मॅग्नासिटी हडपसर',
    'Kumar Magnacity Hadapsar Marathi',
    'हडपसर मधील फ्लॅट्स',
    '2 BHK flats Hadapsar Pune',
    'मांजरी हडपसर प्रॉपर्टी'
  ],
  alternates: {
    canonical: 'https://kumarmagnacitytownship.com/mr/kumar-magnacity-hadapsar',
    languages: {
      'en-IN': 'https://kumarmagnacitytownship.com/kumar-magnacity-hadapsar',
      'mr-IN': 'https://kumarmagnacitytownship.com/mr/kumar-magnacity-hadapsar',
    },
  },
};

export default function KumarMagnacityHadapsarMarathiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['RealEstateListing', 'Product'],
    name: 'कुमार मॅग्नासिटी हडपसर',
    url: 'https://kumarmagnacitytownship.com/mr/kumar-magnacity-hadapsar',
    description: 'हडपसर ॲनेक्स, मांजरी, पुणे येथील १५० एकर भव्य टाउनशिप.',
    image: 'https://kumarmagnacitytownship.com/assets/hero-bg.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'मांजरी रोड, हडपसर ॲनेक्स',
      addressLocality: 'हडपसर, पुणे',
      addressRegion: 'महाराष्ट्र',
      postalCode: '412307',
      addressCountry: 'IN',
    },
  };

  return (
    <PillarTemplate
      badge="हडपसर ॲनेक्स मास्टर टाउनशिप"
      title="कुमार मॅग्नासिटी हडपसर"
      subtitle="पुणे पूर्वमधील अग्रगण्य १५०-एकर इंटिग्रेटेड मेगा-टाउनशिप. आलिशान २ आणि ३ बीएचके अपार्टमेंट्स व एनए बंगलो प्लॉट्स."
      isMarathi={true}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="mb-20">
        <div className="bg-gradient-to-br from-white via-white to-warm-bg/40 p-8 md:p-12 rounded-[2.5rem] border border-primary/10 shadow-xl space-y-6">
          <span className="text-accent text-xs font-bold tracking-widest uppercase">हडपसर ॲनेक्स वैशिष्ट्ये</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary">
            कुमार मॅग्नासिटी हडपसर — पुणे पूर्वची सर्वोत्तम निवड
          </h2>
          <p className="text-primary/70 text-lg leading-relaxed">
            मगरपट्टा सिटीपासून अवघ्या १० मिनिटांवर आणि खराडी आयटी पार्कपासून १२-१५ मिनिटांवर वसलेली <strong>कुमार मॅग्नासिटी हडपसर</strong> ही भव्य १५०-एकर टाउनशिप आहे. कॅम्पसमध्ये पोदार इंटरनॅशनल स्कूल आणि १ लाख चौ.फू. चे क्लबहाऊस उपलब्ध आहे.
          </p>
        </div>
      </section>

      <ApartmentShowcase />
      <CommuteTimeMatrix />
      
      <div id="pricing" className="my-20">
        <ApartmentPriceMatrix />
      </div>

      <LocationAdvantageMap />
      <SpecificationGrid />
      <NearbyMarkets />

      <section className="mt-20">
        <div className="bg-white/[0.03] border border-primary/10 rounded-[3rem] p-8 md:p-12">
          <AdvancedEnquiryForm 
            formId="Hadapsar_Marathi_Form"
            title="कुमार मॅग्नासिटी हडपसर VIP बुकिंग"
            subtitle="हडपसर ॲनेक्सची अधिकृत किंमत यादी आणि विशेष ऑफर्स मिळवा."
            buttonText="किंमत यादी मिळवा"
          />
        </div>
      </section>
    </PillarTemplate>
  );
}
