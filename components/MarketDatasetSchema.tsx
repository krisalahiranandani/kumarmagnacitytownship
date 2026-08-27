import React from "react";

export default function MarketDatasetSchema() {
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Pune East Real Estate Market Intelligence & Infrastructure Trends Dataset (2026-2030)",
    "description": "Comprehensive market research dataset analyzing residential capital appreciation, rental yield economics, and PMRDA infrastructure growth in Hadapsar Annexe, Manjari, and East Pune corridor around Kumar Magnacity Township.",
    "url": "https://kumarmagnacitytownship.com/kumar-magnacity-market-data-pune-east",
    "sameAs": [
      "https://www.wikidata.org/wiki/Q1538",
      "https://www.wikidata.org/wiki/Q5637762"
    ],
    "keywords": [
      "Pune Real Estate Appreciation 2026",
      "Hadapsar Rental Yields",
      "Manjari Land Price Trends",
      "Kumar Magnacity ROI Forecast",
      "PMRDA Ring Road Impact",
      "East Pune IT Corridor Housing Demand"
    ],
    "creator": {
      "@type": "Organization",
      "name": "Kumar Magnacity Market Research & Analytics Desk",
      "url": "https://kumarmagnacitytownship.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+917744009295",
        "contactType": "sales",
        "areaServed": "IN"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kumar Properties",
      "url": "https://kumarmagnacitytownship.com"
    },
    "spatialCoverage": {
      "@type": "Place",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 18.4948931,
        "longitude": 73.9828496
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hadapsar Annexe, Manjari",
        "addressRegion": "Pune, Maharashtra",
        "postalCode": "412307",
        "addressCountry": "IN"
      }
    },
    "temporalCoverage": "2026-01-01/2030-12-31",
    "distribution": [
      {
        "@type": "DataDownload",
        "encodingFormat": "application/json",
        "contentUrl": "https://kumarmagnacitytownship.com/api/search"
      }
    ],
    "variableMeasured": [
      { "@type": "PropertyValue", "name": "Average 2 BHK Capital Rate", "unitText": "INR/Sq.Ft", "value": "₹5,800 - ₹6,800" },
      { "@type": "PropertyValue", "name": "Average Gross Rental Yield", "unitText": "% Annual", "value": "4.2% - 4.8%" },
      { "@type": "PropertyValue", "name": "5-Year Capital Appreciation Projection", "unitText": "%", "value": "52% - 68%" },
      { "@type": "PropertyValue", "name": "IT Workforce Radius Density", "unitText": "Workforce", "value": "260,000+ Professionals" }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
    />
  );
}
