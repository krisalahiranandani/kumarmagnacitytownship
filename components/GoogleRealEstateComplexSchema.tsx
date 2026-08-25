import React from "react";

export default function GoogleRealEstateComplexSchema() {
  const complexSchema = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    "@id": "https://kumarmagnacitytownship.com/#apartmentcomplex",
    "name": "Kumar Magnacity Integrated Residential Township",
    "description": "150-Acre Master Planned Integrated Township at Hadapsar Annexe, Manjari, Pune East by Kumar Properties. Featuring G+30 luxury residential towers and NA bungalow plots.",
    "url": "https://kumarmagnacitytownship.com",
    "telephone": "+917744009295",
    "image": [
      "https://kumarmagnacitytownship.com/assets/hero-bg.jpg",
      "https://kumarmagnacitytownship.com/assets/elevation.jpg",
      "https://kumarmagnacitytownship.com/assets/masterplan.jpg"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kumar Magnacity Township, Manjari Road, Hadapsar Annexe",
      "addressLocality": "Manjari Budruk, Hadapsar, Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "412307",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.4948931,
      "longitude": 73.9828496
    },
    "geoContains": {
      "@type": "GeoShape",
      "box": "18.491000,73.978000 18.498000,73.987000",
      "description": "150-Acre Kumar Magnacity Township Geographic Footprint"
    },
    "numberOfBedrooms": [2, 3, 4],
    "numberOfFullBathrooms": [2, 3, 4],
    "petsAllowed": "Yes",
    "wheelchairAccessible": "Yes",
    "smokingAllowed": "No",
    "tourBookingPage": "https://kumarmagnacitytownship.com/#contact",
    "containedInPlace": {
      "@type": "Place",
      "name": "Hadapsar Annexe Manjari Pune East Corridor"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Podar International School Campus",
        "value": true,
        "description": "Operational K-12 CBSE International School within the township perimeter"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Mega Social & Olympic Sports Clubhouse (~1 Lakh Sq.Ft)",
        "value": true,
        "description": "Multi-tier clubhouse with temperature-controlled swimming pool, gym, squash and badminton courts"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "25+ Acres Continuous Green Lungs & Miyawaki Forest",
        "value": true,
        "description": "Oxygen-rich central civic green park with over 5,000+ native trees"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "EV Fast Charging Station Grid",
        "value": true,
        "description": "Township-wide electric vehicle charging infrastructure"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "4-Tier 24/7 Smart Security & AI Surveillance",
        "value": true,
        "description": "Gated access control, boom barriers, and round-the-clock CCTV monitoring"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "MNGL Piped Natural Gas & 24/7 Water Treatment Plant",
        "value": true,
        "description": "Direct piped gas and sustainable STP water recycling system"
      }
    ],
    "hasFloorPlan": [
      {
        "@type": "FloorPlan",
        "name": "Kumar Magnacity 2 BHK Smart Luxury Suite",
        "numberOfBedrooms": 2,
        "numberOfBathroomsTotal": 2,
        "floorSize": {
          "@type": "QuantitativeValue",
          "value": 757,
          "unitCode": "FTK"
        },
        "image": "https://kumarmagnacitytownship.com/assets/floor_plan_2bhk.jpg",
        "amenityFeature": ["Balcony Sundeck", "Vastu Compliant", "Video Door Phone", "Modular Kitchen Provision"],
        "isPlanForApartment": {
          "@type": "Accommodation",
          "name": "2 BHK Luxury Flat"
        }
      },
      {
        "@type": "FloorPlan",
        "name": "Kumar Magnacity 3 BHK Grand Family Suite",
        "numberOfBedrooms": 3,
        "numberOfBathroomsTotal": 3,
        "floorSize": {
          "@type": "QuantitativeValue",
          "value": 1053,
          "unitCode": "FTK"
        },
        "image": "https://kumarmagnacitytownship.com/assets/floor_plan_3bhk.jpg",
        "amenityFeature": ["Dual Sundeck Balconies", "Pooja Space", "Master Bedroom Walk-in Closet", "Panoramic Skyline Views"],
        "isPlanForApartment": {
          "@type": "Accommodation",
          "name": "3 BHK Luxury Flat"
        }
      },
      {
        "@type": "FloorPlan",
        "name": "Kumar Magnacity Sovereign NA Villa Bungalow Plot",
        "floorSize": {
          "@type": "QuantitativeValue",
          "value": 1700,
          "unitCode": "FTK"
        },
        "image": "https://kumarmagnacitytownship.com/assets/masterplan.jpg",
        "amenityFeature": ["Individual 7/12 Extract", "G+2 Villa Sanction", "Private Garden Boundary", "Township Club Access"],
        "isPlanForApartment": {
          "@type": "Landform",
          "name": "NA Villa Plot"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(complexSchema) }}
    />
  );
}
