export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateListing",
        "@id": "https://kumarmagnacitytownship.com/#listing",
        "name": "Kumar Magnacity Township Hadapsar Annexe, Manjari",
        "description": "150-Acre Master Planned Mega Township in Manjari, Hadapsar Annexe, Pune East. Luxury 2BHK & 3BHK Apartments and NA Villa Bungalow Plots.",
        "url": "https://kumarmagnacitytownship.com",
        "image": "https://kumarmagnacitytownship.com/assets/hero-bg.jpg",
        "offers": [
          {
            "@type": "Offer",
            "name": "2 BHK Luxury Apartment",
            "priceCurrency": "INR",
            "price": "7299000",
            "priceValidUntil": "2026-12-31",
            "availability": "https://schema.org/InStock",
            "itemOffered": {
              "@type": "Accommodation",
              "name": "2 BHK Apartment (757 Sq.Ft Carpet)",
              "numberOfRooms": 2
            }
          },
          {
            "@type": "Offer",
            "name": "3 BHK Luxury Apartment",
            "priceCurrency": "INR",
            "price": "10500000",
            "priceValidUntil": "2026-12-31",
            "availability": "https://schema.org/InStock",
            "itemOffered": {
              "@type": "Accommodation",
              "name": "3 BHK Apartment (1053 Sq.Ft Carpet)",
              "numberOfRooms": 3
            }
          },
          {
            "@type": "Offer",
            "name": "NA Villa Bungalow Plot",
            "priceCurrency": "INR",
            "price": "14900000",
            "priceValidUntil": "2026-12-31",
            "availability": "https://schema.org/InStock",
            "itemOffered": {
              "@type": "Landform",
              "name": "NA Plot (1700+ Sq.Ft)"
            }
          }
        ],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.5204",
          "longitude": "73.9667"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kumar Magnacity Township, Manjari Road",
          "addressLocality": "Hadapsar Annexe, Manjari",
          "addressRegion": "Maharashtra",
          "postalCode": "412307",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "RealEstateAgent",
        "@id": "https://kumarmagnacitytownship.com/#agent",
        "name": "Kumar Properties Partner Desk",
        "email": "propsmartrealty@gmail.com",
        "url": "https://kumarmagnacitytownship.com",
        "telephone": "+919225512120",
        "parentOrganization": {
          "@type": "Organization",
          "name": "Kumar Properties",
          "foundingDate": "1966"
        }
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://kumarmagnacitytownship.com/#school",
        "name": "Podar International School Campus",
        "description": "On-Campus K-12 CBSE International School inside Kumar Magnacity Township Manjari.",
        "location": {
          "@type": "Place",
          "name": "Kumar Magnacity Township Campus"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
