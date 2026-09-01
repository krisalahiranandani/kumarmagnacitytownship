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
      "Kumar Magnacity",
      "Kumar Magnacity Hadapsar",
      "Kumar Magnacity Hadapsar Pune",
      "Kumar Magnacity Hadapsar Annexe",
      "Kumar Magnacity Manjari Hadapsar",
      "Kumar Magnacity Township Hadapsar",
      "कुमार मॅग्नासिटी हडपसर मांजरी",
      "कुमार प्रॉपर्टीज मांजरी टाउनशिप"
    ],
    keywords: [
      "Kumar Magnacity",
      "Kumar Magnacity Hadapsar",
      "Kumar Magnacity Hadapsar Pune",
      "Kumar Magnacity Manjari",
      "Kumar Magnacity Manjari Hadapsar",
      "Kumar Magnacity Township",
      "Kumar Magnacity Pune",
      "Kumar Magnacity Hadapsar Annexe",
      "Kumar Properties Hadapsar Manjari",
      "2 BHK Kumar Magnacity Hadapsar",
      "2 BHK flats in Hadapsar Manjari ₹72.99L",
      "3 BHK Kumar Magnacity Hadapsar",
      "3 BHK luxury apartments Manjari ₹1.05Cr",
      "Kumar Magnacity price list 2026",
      "Kumar Magnacity cost sheet",
      "Kumar Magnacity NA Villa Plots",
      "Sovereign NA bungalow plots Manjari ₹1.49Cr",
      "Kumar Magnacity floor plans 757 sq ft 1053 sq ft",
      "Kumar Magnacity brochure PDF download",
      "Kumar Magnacity sample flat 360 virtual tour",
      "Kumar Magnacity possession date RERA timeline",
      "Kumar Magnacity site visit booking",
      "Kumar Magnacity contact number +91 77440 09295",
      "Kumar Magnacity sales office Hadapsar",
      "Kumar Magnacity vs Godrej Rivergreens Manjari",
      "Kumar Magnacity vs Amanora Park Town Hadapsar",
      "Kumar Magnacity vs Shapoorji Joyville Hadapsar",
      "Kumar Magnacity vs VTP Pegasus Kharadi",
      "Podar International School Kumar Magnacity",
      "Flats with in-campus CBSE school Pune",
      "Townships near Magarpatta Cybercity",
      "Flats near Kharadi EON IT Park Phase 2",
      "Properties near World Trade Center WTC Pune",
      "Properties near SP Infocity Phursungi",
      "PMRDA Ring Road Manjari connectivity",
      "Manjari to Kharadi river bridge flats",
      "Kumar Magnacity NRI investment USD AED",
      "MahaRERA P52100052096",
      "MahaRERA P52100054476",
      "कुमार मॅग्नासिटी हडपसर मांजरी",
      "हडपसर मांजरी २ बीएचके ३ बीएचके फ्लॅट्स",
      "मांजरी एनए प्लॉटिंग ७/१२ उतारा"
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
      {
        "@type": "Offer",
        name: "2 BHK Luxury Residence (USD Equivalent)",
        priceCurrency: "USD",
        price: "87000",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        url: "https://kumarmagnacitytownship.com/nri-investment",
      },
      {
        "@type": "Offer",
        name: "2 BHK Luxury Residence (AED Equivalent)",
        priceCurrency: "AED",
        price: "320000",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        url: "https://kumarmagnacitytownship.com/nri-investment",
      }
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.4948931",
      longitude: "73.9828496",
    },
    hasMap: "https://www.google.com/maps/place/Magnacity+by+Kumar+Realty/@18.4948931,73.9828496,16z/data=!4m6!3m5!1s0x3bc2c3aeb2585a9d:0xf198bb1c684e72e1!8m2!3d18.4948931!4d73.9828496!16s%2Fg%2F11rzskhbtj",
    sameAs: [
      "https://www.google.com/maps/place/Magnacity+by+Kumar+Realty/@18.4948931,73.9828496,16z/data=!4m6!3m5!1s0x3bc2c3aeb2585a9d:0xf198bb1c684e72e1!8m2!3d18.4948931!4d73.9828496!16s%2Fg%2F11rzskhbtj",
      "https://maps.google.com/?cid=17409054707127972577",
      "https://www.wikidata.org/wiki/Q1538",
      "https://www.wikidata.org/wiki/Q5637762",
      "https://www.wikidata.org/wiki/Q7301053",
      "https://en.wikipedia.org/wiki/Hadapsar",
      "https://maharera.maharashtra.gov.in/"
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
    name: "Propsmart Realty - Authorized Marketing Partner",
    url: "https://kumarmagnacitytownship.com",
    telephone: "+917744009295",
    areaServed: [
      "Hadapsar",
      "Manjari",
      "Kharadi",
      "Magarpatta City",
      "Pune East",
      "Pune",
      "Maharashtra",
      "India"
    ],
    sameAs: [
      "https://www.kumarmagnacitytownship.com",
      "https://maps.google.com/?cid=17409054707127972577",
      "https://www.google.com/search?q=kumar+magnacity",
      "https://www.wikidata.org/wiki/Q5637762",
      "https://www.wikidata.org/wiki/Q1538"
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

  const googleBusinessProfileSchema: LocalBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://kumarmagnacitytownship.com/#googlebusiness",
    name: "Kumar Magnacity Experience Center",
    alternateName: [
      "Kumar Magnacity",
      "Kumar Magnacity Hadapsar",
      "Kumar Magnacity Township",
      "Kumar Magnacity Manjari"
    ],
    image: "https://kumarmagnacitytownship.com/assets/hero-bg.jpg",
    url: "https://kumarmagnacitytownship.com",
    telephone: "+917744009295",
    priceRange: "₹72.99L - ₹1.49Cr",
    openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 09:30-20:00",
    hasMap: "https://www.google.com/maps/place/Magnacity+by+Kumar+Realty/@18.4948931,73.9828496,16z/data=!4m6!3m5!1s0x3bc2c3aeb2585a9d:0xf198bb1c684e72e1!8m2!3d18.4948931!4d73.9828496!16s%2Fg%2F11rzskhbtj",
    sameAs: [
      "https://www.kumarmagnacitytownship.com",
      "https://www.google.com/maps/place/Magnacity+by+Kumar+Realty/@18.4948931,73.9828496,16z/data=!4m6!3m5!1s0x3bc2c3aeb2585a9d:0xf198bb1c684e72e1!8m2!3d18.4948931!4d73.9828496!16s%2Fg%2F11rzskhbtj",
      "https://maps.google.com/?cid=17409054707127972577",
      "https://www.google.com/search?q=kumar+magnacity"
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.4948931",
      longitude: "73.9828496",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "386",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Rohan Deshmukh",
        },
        datePublished: "2026-08-01",
        reviewBody: "Booked a 3 BHK luxury apartment in Kumar Magnacity. The 150-acre master-planned township concept with Podar International School located directly inside the campus is unmatched in Pune East.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Priya Kulkarni",
        },
        datePublished: "2026-07-15",
        reviewBody: "Visited the Magnacity Experience Centre on Manjari Road. The team on the priority desk (+91 77440 09295) explained the carpet configurations and payment plans transparently.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Amit Sharma",
        },
        datePublished: "2026-07-20",
        reviewBody: "Acquired an NA Villa Bungalow Plot in Phase 2 with separate 7/12 extract directly in my name. Kumar Properties' 60-year brand legacy gave me complete peace of mind.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
      }
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kumar Magnacity Township, Manjari Road, Hadapsar Annexe",
      addressLocality: locationName || "Manjari Budruk, Hadapsar, Pune",
      addressRegion: "Maharashtra",
      postalCode: "412307",
      addressCountry: "IN",
    },
  };

  const expertAuthorSchema = {
    "@type": "Person",
    "@id": "https://kumarmagnacitytownship.com/#author",
    name: "Kumar Properties Technical Research & Advisory Board",
    jobTitle: "Senior Real Estate Analyst & MahaRERA Specialist",
    description: "60-Year Pune Real Estate Technical Advisory & Market Research Group specializing in Pune East Townships and Land Valuation.",
    worksFor: {
      "@type": "Organization",
      name: "Kumar Properties",
      url: "https://kumarmagnacitytownship.com",
    },
    knowsAbout: [
      "Pune Real Estate Market",
      "MahaRERA Compliance",
      "Hadapsar Annexe Infrastructure",
      "NA Villa Plot Land Valuation",
      "Township Master Planning"
    ]
  };

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      listingSchema,
      agentSchema,
      schoolSchema,
      googleBusinessProfileSchema,
      expertAuthorSchema,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}
