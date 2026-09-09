import React from "react";

export default function VideoTourSchema() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Kumar Magnacity Hadapsar - 150-Acre Township 3D Master Plan & Sample Flat Tour",
    "description": "Comprehensive 3D drone walkthrough and sample flat tour of Kumar Magnacity Township, Hadapsar Annexe, Manjari, Pune East by Kumar Properties.",
    "thumbnailUrl": [
      "https://kumarmagnacitytownship.com/assets/hero-bg.jpg",
      "https://kumarmagnacitytownship.com/assets/elevation.jpg"
    ],
    "uploadDate": "2026-08-01T08:00:00+05:30",
    "duration": "PT4M30S",
    "contentUrl": "https://kumarmagnacitytownship.com/assets/hero-bg.jpg",
    "embedUrl": "https://kumarmagnacitytownship.com/kumar-magnacity-hadapsar",
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": { "@type": "WatchAction" },
      "userInteractionCount": 18450
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kumar Properties",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kumarmagnacitytownship.com/assets/official-logo.png"
      }
    },
    "hasPart": [
      {
        "@type": "Clip",
        "name": "150-Acre Master Township Grand Entrance & Gate",
        "startOffset": 0,
        "endOffset": 45,
        "url": "https://kumarmagnacitytownship.com/kumar-magnacity-hadapsar#masterplan"
      },
      {
        "@type": "Clip",
        "name": "2 BHK (757 Sq.Ft) Designer Sample Flat Walkthrough",
        "startOffset": 46,
        "endOffset": 120,
        "url": "https://kumarmagnacitytownship.com/kumar-magnacity-2bhk-flats-hadapsar-pune-price"
      },
      {
        "@type": "Clip",
        "name": "3 BHK (1053 Sq.Ft) Grand Family Suite Walkthrough",
        "startOffset": 121,
        "endOffset": 195,
        "url": "https://kumarmagnacitytownship.com/kumar-magnacity-3bhk-apartments-manjari-pune-price"
      },
      {
        "@type": "Clip",
        "name": "Podar International School On-Campus Walkthrough",
        "startOffset": 196,
        "endOffset": 235,
        "url": "https://kumarmagnacitytownship.com/kumar-magnacity-location-advantages-hadapsar-manjari"
      },
      {
        "@type": "Clip",
        "name": "Sovereign NA Villa Plots & ~1 Lakh Sq.Ft Clubhouse",
        "startOffset": 236,
        "endOffset": 270,
        "url": "https://kumarmagnacitytownship.com/kumar-magnacity-na-bungalow-plots-concept"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
    />
  );
}
