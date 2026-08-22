import { 
  RealEstateListingSchema, 
  OrganizationSchema, 
  LocalBusinessSchema 
} from "@/types/schema";

interface StructuredDataProps {
  locationName?: string;
  isMicroMarket?: boolean;
}

export default function StructuredData({
  locationName = "Hadapsar Annexe, Manjari",
  isMicroMarket = false,
}: StructuredDataProps) {
  const listingSchema: RealEstateListingSchema = {
    "@type": ["RealEstateListing", "Product"],
    "@id": `https://kumarmagnacitytownship.com/#listing${
      isMicroMarket ? `-${locationName.replace(/\s+/g, "-").toLowerCase()}` : ""
    }`,
    name: `Kumar Magnacity Hadapsar - ${locationName}`,
    alternateName: [
      "Kumar Magnacity Hadapsar",
      "Kumar Magnacity Hadapsar Pune",
      "Kumar Magnacity Hadapsar Annexe",
      "Kumar Magnacity Manjari Hadapsar",
      "Kumar Magnacity Township Hadapsar"
    ],
    keywords: [
      "Kumar Magnacity Hadapsar",
      "Kumar Magnacity Hadapsar Pune",
      "2 BHK Kumar Magnacity Hadapsar",
      "3 BHK Kumar Magnacity Hadapsar",
      "Kumar Magnacity Hadapsar price",
      "Kumar Magnacity Manjari Hadapsar"
    ],
    description: `150-Acre Master Planned Mega Township in Hadapsar Annexe, Manjari, Pune East. Luxury 2BHK & 3BHK Apartments and NA Villa Bungalow Plots by Kumar Properties.`,
    url: "https://kumarmagnacitytownship.com",
    image: "https://kumarmagnacitytownship.com/assets/hero-bg.jpg",
    offers: [
      {
        "@type": "Offer",
        name: "2 BHK Luxury Apartment",
        priceCurrency: "INR",
        price: "7299000",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        url: "https://kumarmagnacitytownship.com/kumar-magnacity-2bhk-flats-hadapsar-pune-price",
        itemOffered: {
          "@type": "Accommodation",
          name: "2 BHK Apartment (757 Sq.Ft Carpet)",
          numberOfRooms: 2,
          floorSize: {
            "@type": "QuantitativeValue",
            value: 757,
            unitCode: "FTK",
          },
        },
      },
      {
        "@type": "Offer",
        name: "3 BHK Luxury Apartment",
        priceCurrency: "INR",
        price: "10500000",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        url: "https://kumarmagnacitytownship.com/kumar-magnacity-3bhk-apartments-manjari-pune-price",
        itemOffered: {
          "@type": "Accommodation",
          name: "3 BHK Apartment (1053 Sq.Ft Carpet)",
          numberOfRooms: 3,
          floorSize: {
            "@type": "QuantitativeValue",
            value: 1053,
            unitCode: "FTK",
          },
        },
      },
      {
        "@type": "Offer",
        name: "NA Villa Bungalow Plot",
        priceCurrency: "INR",
        price: "14900000",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        url: "https://kumarmagnacitytownship.com/kumar-magnacity-na-bungalow-plots-concept",
        itemOffered: {
          "@type": "Landform",
          name: "NA Plot (1700+ Sq.Ft)",
        },
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.4948931",
      longitude: "73.9828496",
    },
    hasMap: "https://www.google.com/maps/place/Magnacity+by+Kumar+Realty/@18.4948931,73.9828496,16z/data=!4m6!3m5!1s0x3bc2c3aeb2585a9d:0xf198bb1c684e72e1!8m2!3d18.4948931!4d73.9828496!16s%2Fg%2F11rzskhbtj",
    sameAs: [
      "https://www.google.com/maps/place/Magnacity+by+Kumar+Realty/@18.4948931,73.9828496,16z/data=!4m6!3m5!1s0x3bc2c3aeb2585a9d:0xf198bb1c684e72e1!8m2!3d18.4948931!4d73.9828496!16s%2Fg%2F11rzskhbtj",
      "https://maps.google.com/?cid=17409054707127972577"
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "386",
      bestRating: "5",
      worstRating: "1",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kumar Magnacity Township, Manjari Road, Hadapsar Annexe",
      addressLocality: "Manjari Budruk, Hadapsar, Pune",
      addressRegion: "Maharashtra",
      postalCode: "412307",
      addressCountry: "IN",
    },
  };

  const agentSchema: OrganizationSchema = {
    "@type": "RealEstateAgent",
    "@id": "https://kumarmagnacitytownship.com/#agent",
    name: "Kumar Properties Partner Desk",
    email: "propsmartrealty@gmail.com",
    url: "https://kumarmagnacitytownship.com",
    telephone: "+919225512120",
    sameAs: [
      "https://www.google.com/maps/place/Magnacity+by+Kumar+Realty/@18.4948931,73.9828496,16z/data=!4m6!3m5!1s0x3bc2c3aeb2585a9d:0xf198bb1c684e72e1!8m2!3d18.4948931!4d73.9828496!16s%2Fg%2F11rzskhbtj",
      "https://maps.google.com/?cid=17409054707127972577",
      "https://www.google.com/search?q=kumar+magnacity"
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "Kumar Properties",
      foundingDate: "1966",
      url: "https://kumarmagnacitytownship.com",
    },
  };

  const schoolSchema: OrganizationSchema = {
    "@type": "EducationalOrganization",
    "@id": "https://kumarmagnacitytownship.com/#school",
    name: "Podar International School Campus",
    description: "On-Campus K-12 CBSE International School inside Kumar Magnacity Township Manjari.",
    location: {
      "@type": "Place",
      name: "Kumar Magnacity Township Campus",
    },
  };

  const localBusinessSchema: LocalBusinessSchema | null = isMicroMarket
    ? {
        "@type": "LocalBusiness",
        "@id": `https://kumarmagnacitytownship.com/#localbusiness-${locationName.replace(/\s+/g, "-").toLowerCase()}`,
        name: `Properties near ${locationName}`,
        image: "https://kumarmagnacitytownship.com/assets/hero-bg.jpg",
        url: "https://kumarmagnacitytownship.com",
        telephone: "+919225512120",
        priceRange: "₹72.99L - ₹1.49Cr",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kumar Magnacity Township, Manjari Road",
          addressLocality: locationName,
          addressRegion: "Maharashtra",
          postalCode: "412307",
          addressCountry: "IN",
        },
      }
    : null;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      listingSchema,
      agentSchema,
      schoolSchema,
      ...(localBusinessSchema ? [localBusinessSchema] : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}
