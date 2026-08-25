import React from "react";

export default function OpenHouseEventSchema() {
  const openHouseSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Kumar Magnacity VIP Experience Centre Walkthrough & Open House",
    "description": "Daily guided site visits and sample apartment walkthroughs at Kumar Magnacity 150-Acre Master Township on Manjari Road, Hadapsar Annexe, Pune.",
    "image": "https://kumarmagnacitytownship.com/assets/hero-bg.jpg",
    "startDate": "2026-08-25T09:30:00+05:30",
    "endDate": "2027-12-31T20:00:00+05:30",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Magnacity by Kumar Realty - Experience Centre",
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
        "latitude": "18.4948931",
        "longitude": "73.9828496"
      }
    },
    "offers": {
      "@type": "Offer",
      "url": "https://kumarmagnacitytownship.com/#contact",
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-08-01T00:00:00+05:30"
    },
    "performer": {
      "@type": "Organization",
      "name": "Kumar Properties Partner Sales Desk",
      "telephone": "+917744009295"
    },
    "organizer": {
      "@type": "Organization",
      "name": "Kumar Properties",
      "url": "https://kumarmagnacitytownship.com",
      "telephone": "+917744009295"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(openHouseSchema) }}
    />
  );
}
