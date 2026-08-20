import { FAQPageSchema } from "@/types/schema";

export default function FeaturedSnippetsSchema() {
  const faqSchema: FAQPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".faq-question", ".faq-answer", "h1", "h2"]
    },
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is Kumar Magnacity Hadapsar located in Pune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kumar Magnacity Hadapsar is located in Hadapsar Annexe, Manjari, Pune East. It is situated just 10 minutes from Magarpatta City, 5 minutes from Solapur Highway (NH-65), and 12-15 minutes from Kharadi EON IT Park."
        }
      },
      {
        "@type": "Question",
        "name": "What is the price of 2 BHK and 3 BHK in Kumar Magnacity Hadapsar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At Kumar Magnacity Hadapsar, luxury 2 BHK apartments (757 sq.ft carpet) start at ₹72.99 Lakhs*, 3 BHK residences (1,053 sq.ft carpet) start at ₹1.05 Cr.*, and NA Villa Bungalow plots start from ₹1.49 Cr.*."
        }
      },
      {
        "@type": "Question",
        "name": "What is the price of 2 BHK in Kumar Magnacity Township Hadapsar Annexe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The price for a luxury 2 BHK apartment (757 sq.ft carpet area) at Kumar Magnacity Township, Hadapsar Annexe, Manjari, Pune starts at ₹72.99 Lakhs* (all-inclusive launch offer price)."
        }
      },
      {
        "@type": "Question",
        "name": "What is the price of 3 BHK in Kumar Magnacity Township Manjari Pune?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The price for a premium 3 BHK high-rise residence (1,053 sq.ft carpet area) at Kumar Magnacity Township, Manjari, Pune starts at ₹1.05 Cr.* with panoramic skyline views."
        }
      },
      {
        "@type": "Question",
        "name": "Is Podar International School located inside Kumar Magnacity Township?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Podar International School is located directly on-campus inside the 150-acre Kumar Magnacity Township in Hadapsar Annexe, Manjari."
        }
      },
      {
        "@type": "Question",
        "name": "What are the MahaRERA numbers for Kumar Magnacity Township?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The official MahaRERA Registration numbers for Kumar Magnacity Township are P52100052096 and P52100054476."
        }
      },
      {
        "@type": "Question",
        "name": "What is the possession date for Kumar Magnacity 2 BHK & 3 BHK flats?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The possession date for G+30 high-rise towers (Tower A, B, C) at Kumar Magnacity Township is scheduled for December 2027."
        }
      },
      {
        "@type": "Question",
        "name": "How far is Kumar Magnacity Township from Magarpatta City and Kharadi IT Park?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kumar Magnacity Township is located just 10 minutes from Magarpatta City and 12-15 minutes from Kharadi EON IT Park via the new Manjari bridge connectivity corridor."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
