import React from "react";

export default function HowToBookingSchema() {
  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Book a Luxury Apartment or NA Villa Plot in Kumar Magnacity Hadapsar",
    "description": "Step-by-step verified reservation process for acquiring a 2 BHK, 3 BHK residence or NA Villa Plot in Kumar Magnacity, Manjari, Pune.",
    "totalTime": "P3D",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": "100000"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Submit Priority Online Enquiry & Select Configuration",
        "text": "Choose your preferred layout (2 BHK Smart 757 sq.ft, 3 BHK Grand 1053 sq.ft, or NA Villa Plot 1700+ sq.ft) via the official website or direct WhatsApp desk at +91 77440 09295.",
        "url": "https://kumarmagnacitytownship.com/#contact"
      },
      {
        "@type": "HowToStep",
        "name": "Schedule an Experience Centre Walkthrough",
        "text": "Visit the Magnacity Experience Centre on Manjari Road, Hadapsar Annexe to inspect the 150-acre master plan, sample apartments, and the on-campus Podar International School.",
        "url": "https://kumarmagnacitytownship.com/#google-maps-hub"
      },
      {
        "@type": "HowToStep",
        "name": "Unit Block & Token Confirmation",
        "text": "Select your specific tower, floor, and unit orientation. Block your allotment with a fully refundable priority expression of interest (EOI) token.",
        "url": "https://kumarmagnacitytownship.com/kumar-magnacity-floor-plan-2bhk-3bhk"
      },
      {
        "@type": "HowToStep",
        "name": "Home Loan Approval & Allotment Letter",
        "text": "Benefit from pre-approved banking consortiums (SBI, HDFC, ICICI, Axis Bank) at competitive interest rates and receive your official MahaRERA registered allotment letter.",
        "url": "https://kumarmagnacitytownship.com/roi-calculator"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(howToData) }}
    />
  );
}
