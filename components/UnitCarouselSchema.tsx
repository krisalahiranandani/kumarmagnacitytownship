import React from "react";

export default function UnitCarouselSchema() {
  const carouselSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Kumar Magnacity Available Residences & Land Inventory",
    "description": "Featured 2 BHK, 3 BHK luxury apartments and NA Villa Bungalow plots in Kumar Magnacity, Hadapsar Annexe, Manjari, Pune.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Accommodation",
          "name": "Kumar Magnacity 2 BHK Smart Luxury Residence",
          "description": "757 Sq.Ft carpet luxury 2 BHK apartment with sundeck balcony, Vastu compliance, and access to ~1 Lakh sq.ft clubhouse.",
          "image": "https://kumarmagnacitytownship.com/assets/hero-bg.jpg",
          "url": "https://kumarmagnacitytownship.com/kumar-magnacity-2bhk-flats-hadapsar-pune-price",
          "offers": {
            "@type": "Offer",
            "price": "7299000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "validFrom": "2026-08-01",
            "priceValidUntil": "2027-12-31"
          },
          "numberOfRooms": "2",
          "floorSize": {
            "@type": "QuantitativeValue",
            "value": 757,
            "unitCode": "FTK"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Accommodation",
          "name": "Kumar Magnacity 3 BHK Grand Family Suite",
          "description": "1053 Sq.Ft carpet spacious 3 BHK apartment with dual balconies, master suite with pooja alcove, and skyline views.",
          "image": "https://kumarmagnacitytownship.com/assets/elevation.jpg",
          "url": "https://kumarmagnacitytownship.com/kumar-magnacity-3bhk-apartments-manjari-pune-price",
          "offers": {
            "@type": "Offer",
            "price": "10500000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "validFrom": "2026-08-01",
            "priceValidUntil": "2027-12-31"
          },
          "numberOfRooms": "3",
          "floorSize": {
            "@type": "QuantitativeValue",
            "value": 1053,
            "unitCode": "FTK"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Place",
          "name": "Kumar Magnacity Sovereign NA Villa Bungalow Plots",
          "description": "1,700 to 3,500+ Sq.Ft clear title NA bungalow land with individual 7/12 extract and G+2 villa sanction.",
          "image": "https://kumarmagnacitytownship.com/assets/masterplan.jpg",
          "url": "https://kumarmagnacitytownship.com/kumar-magnacity-na-bungalow-plots-concept",
          "offers": {
            "@type": "Offer",
            "price": "14900000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "validFrom": "2026-08-01",
            "priceValidUntil": "2027-12-31"
          }
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(carouselSchema) }}
    />
  );
}
