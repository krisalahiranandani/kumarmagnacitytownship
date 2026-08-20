export default function GoogleSpeculationRules() {
  const speculationRules = {
    prerender: [
      {
        source: "list",
        urls: [
          "/kumar-magnacity-hadapsar",
          "/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune",
          "/kumar-magnacity-2bhk-flats-hadapsar-pune-price",
          "/kumar-magnacity-3bhk-apartments-manjari-pune-price",
          "/kumar-magnacity-floor-plan-2bhk-3bhk",
          "/kumar-magnacity-location-advantages-hadapsar-manjari",
          "/kumar-magnacity-na-bungalow-plots-concept",
          "/roi-calculator",
          "/insights"
        ],
        eagerness: "moderate"
      }
    ],
    prefetch: [
      {
        source: "document",
        where: {
          and: [
            { href_matches: "/*" },
            { not: { href_matches: "/api/*" } },
            { not: { href_matches: "/admin/*" } }
          ]
        },
        eagerness: "conservative"
      }
    ]
  };

  return (
    <script
      type="speculationrules"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(speculationRules) }}
    />
  );
}
