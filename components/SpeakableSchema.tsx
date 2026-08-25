import React from "react";

export default function SpeakableSchema() {
  const speakableData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Kumar Magnacity Hadapsar Township Pune",
    "url": "https://kumarmagnacitytownship.com",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        "#speakable-headline",
        "#speakable-summary",
        "#speakable-pricing",
        "#google-maps-hub"
      ]
    },
    "mainEntity": {
      "@type": "RealEstateListing",
      "name": "Kumar Magnacity Hadapsar",
      "description": "Kumar Magnacity is a 150-acre integrated mega township in Hadapsar Annexe, Manjari, Pune East featuring 2 and 3 BHK luxury apartments from 72.99 Lakhs and NA bungalow plots from 1.49 Crores by Kumar Properties.",
      "telephone": "+917744009295",
      "url": "https://kumarmagnacitytownship.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableData) }}
    />
  );
}
