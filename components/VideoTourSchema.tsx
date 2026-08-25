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
        "url": "https://kumarmagnacitytownship.com/assets/logo.png"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
    />
  );
}
