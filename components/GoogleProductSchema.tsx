import React from "react";

export default function GoogleProductSchema() {
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Kumar Magnacity 2 BHK Luxury Residence",
    "description": "150-Acre Master Planned Integrated Township at Hadapsar Annexe, Manjari, Pune East featuring 2 BHK luxury residences with Podar International School on campus.",
    "image": [
      "https://kumarmagnacitytownship.com/assets/hero-bg.jpg",
      "https://kumarmagnacitytownship.com/assets/elevation.jpg"
    ],
    "brand": {
      "@type": "Brand",
      "name": "Kumar Properties"
    },
    "sku": "KM-2BHK-757",
    "mpn": "P52100052096",
    "category": "Real Estate > Residential Buildings > Apartments",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "386",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://kumarmagnacitytownship.com/kumar-magnacity-2bhk-flats-hadapsar-pune-price",
      "priceCurrency": "INR",
      "price": "7299000",
      "priceValidUntil": "2027-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Kumar Properties Partner Sales Desk",
        "telephone": "+917744009295"
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "IN",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 30,
        "returnMethod": "https://schema.org/ReturnInStore",
        "returnFees": "https://schema.org/FreeReturn",
        "name": "100% Fully Refundable EOI Booking Token within Window"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "INR"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "IN"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 1,
            "unitCode": "DAY"
          }
        }
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
    />
  );
}
