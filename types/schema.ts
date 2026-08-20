/**
 * Advanced Schema.org & Google Search Rich Results TypeScript Definitions
 * Compliant with Google Search Central Structured Data guidelines.
 */

export interface GeoCoordinatesSchema {
  "@type": "GeoCoordinates";
  latitude: string | number;
  longitude: string | number;
}

export interface PostalAddressSchema {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface AggregateRatingSchema {
  "@type": "AggregateRating";
  ratingValue: string | number;
  reviewCount: string | number;
  bestRating?: string | number;
  worstRating?: string | number;
}

export interface AccommodationSchema {
  "@type": "Accommodation" | "Apartment" | "SingleFamilyResidence" | "Landform";
  name: string;
  numberOfRooms?: number;
  floorSize?: {
    "@type": "QuantitativeValue";
    value: number;
    unitCode: string;
  };
  description?: string;
}

export interface OfferSchema {
  "@type": "Offer";
  name: string;
  priceCurrency: "INR" | string;
  price: string | number;
  priceValidUntil?: string;
  availability: string;
  url?: string;
  itemOffered?: AccommodationSchema;
}

export interface RealEstateListingSchema {
  "@type": ("RealEstateListing" | "Product")[];
  "@id": string;
  name: string;
  alternateName?: string[];
  keywords?: string[];
  description: string;
  url: string;
  image: string | string[];
  offers: OfferSchema[];
  geo: GeoCoordinatesSchema;
  hasMap?: string;
  sameAs?: string[];
  aggregateRating?: AggregateRatingSchema;
  address: PostalAddressSchema;
}

export interface OrganizationSchema {
  "@type": "Organization" | "RealEstateAgent" | "EducationalOrganization";
  "@id"?: string;
  name: string;
  url?: string;
  logo?: string | { "@type": "ImageObject"; url: string };
  telephone?: string;
  email?: string;
  foundingDate?: string;
  parentOrganization?: OrganizationSchema;
  description?: string;
  location?: {
    "@type": "Place";
    name: string;
  };
  sameAs?: string[];
}

export interface LocalBusinessSchema {
  "@type": "LocalBusiness";
  "@id": string;
  name: string;
  image: string;
  url: string;
  telephone: string;
  priceRange: string;
  address: PostalAddressSchema;
}

export interface QuestionSchema {
  "@type": "Question";
  name: string;
  acceptedAnswer: {
    "@type": "Answer";
    text: string;
  };
}

export interface SpeakableSpecificationSchema {
  "@type": "SpeakableSpecification";
  cssSelector?: string[];
  xpath?: string[];
}

export interface FAQPageSchema {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: QuestionSchema[];
  speakable?: SpeakableSpecificationSchema;
}

export interface BreadcrumbItemSchema {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

export interface BreadcrumbListSchema {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: BreadcrumbItemSchema[];
}

export interface WebSiteSchema {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  potentialAction: {
    "@type": "SearchAction";
    target: string;
    "query-input": string;
  };
}

export interface SiteNavigationElementSchema {
  "@context": "https://schema.org";
  "@type": "ItemList";
  itemListElement: {
    "@type": "SiteNavigationElement";
    position: number;
    name: string;
    description?: string;
    url: string;
  }[];
}

export interface ArticleSchemaType {
  "@context": "https://schema.org";
  "@type": "Article" | "BlogPosting";
  headline: string;
  image: string[];
  datePublished: string;
  dateModified: string;
  author: OrganizationSchema[];
  publisher: OrganizationSchema;
  description: string;
  mainEntityOfPage?: string;
}
