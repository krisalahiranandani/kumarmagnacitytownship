/* eslint-disable @typescript-eslint/no-require-imports */
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, '../data/seo-master-database.xlsx');
const registryPath = path.join(__dirname, '../data/seo-registry.json');

const createWorkbook = () => {
    const wb = xlsx.utils.book_new();

    // ---------------------------------------------------------
    // MASTER CLUSTER 1: Kumar Magnacity (Aiming for 3,000+)
    // ---------------------------------------------------------
    const magnacityKeywords = [];
    const brand = [
        "Kumar Magnacity", "Kumar Magna City", "Kumar Magnacity Pune", "Kumar Magnacity Manjri",
        "Kumar Magnacity Hadapsar", "Kumar Magnacity East Pune", "Kumar Magnacity Township",
        "Kumar Magnacity Residential Township", "Kumar Magnacity Smart Township", "Kumar Magnacity New Launch",
        "Kumar Magnacity Upcoming Project", "Kumar Magnacity Luxury Township", "Kumar Magnacity Integrated Township",
        "Kumar Magnacity Gated Community", "Kumar Magnacity Premium Homes", "Kumar Magnacity Residential Project",
        "Kumar Magnacity Investment Property"
    ];
    
    const baseMods = [
        "price", "price list", "latest price", "price per sq ft", "launch price",
        "pre launch price", "cost", "cost sheet", "all inclusive price", "booking amount",
        "EOI", "special offer", "festive offer", "early bird offer", "payment plan",
        "construction linked plan", "down payment plan", "no EMI till possession",
        "possession", "possession date", "possession status", "OC", "handover",
        "ready possession", "possession update", "completion date",
        "brochure", "PDF", "brochure download", "floor plan PDF", "master plan PDF",
        "RERA", "MahaRERA", "RERA number", "legal approval", "approved project",
        "investment", "appreciation", "future appreciation", "rental income", "ROI",
        "resale", "investment opportunity"
    ];

    const configs = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "Penthouse", "Duplex", "Studio", "Villas", "Plots"];
    const configMods = ["", " price", " floor plan", " layout", " carpet area", " premium", " luxury apartment", " reviews", " for sale"];
    const locMods = ["", " in Manjri", " in Hadapsar", " near Magarpatta", " in East Pune", " near Kharadi"];

    brand.forEach(kw => {
        magnacityKeywords.push({ Keyword: kw, Category: 'Brand' });
        baseMods.forEach(mod => {
            magnacityKeywords.push({ Keyword: `${kw} ${mod}`, Category: 'Brand Modifiers' });
        });
        configs.forEach(cfg => {
            configMods.forEach(cmod => {
                locMods.forEach(lmod => {
                    magnacityKeywords.push({ Keyword: `${kw} ${cfg}${cmod}${lmod}`, Category: 'Configuration & Location' });
                });
            });
        });
    });

    const comparisons = ["Godrej Park World", "VTP Bellissimo", "Mahindra Citadel", "Kohinoor Central Park", "Lodha", "Kolte Patil", "Shapoorji Pallonji"];
    brand.forEach(kw => {
        comparisons.forEach(comp => {
            magnacityKeywords.push({ Keyword: `${kw} vs ${comp}`, Category: 'Comparison' });
            magnacityKeywords.push({ Keyword: `${comp} or ${kw}`, Category: 'Comparison' });
        });
    });

    const ws1 = xlsx.utils.json_to_sheet(magnacityKeywords);
    xlsx.utils.book_append_sheet(wb, ws1, "1. Kumar Magnacity");

    // ---------------------------------------------------------
    // MASTER CLUSTER 2: Kumar Properties (Aiming for 20,000+)
    // ---------------------------------------------------------
    const builderKeywords = [];
    const baseBuilder = [
        "Kumar Properties Pune", "Kumar Properties India", "Kumar Properties projects",
        "Kumar Properties township", "Kumar Properties luxury homes", "Kumar Properties apartments",
        "Kumar Properties premium apartments", "Kumar Properties villas", "Kumar Properties plots",
        "Kumar Properties commercial", "Kumar Properties office spaces", "Kumar Properties new launch",
        "Kumar Properties ready possession", "Kumar Properties ongoing projects"
    ];
    
    const allPuneAreas = [
        "Hadapsar", "Kharadi", "Wagholi", "Manjri", "Baner", "Hinjewadi", "Kalyani Nagar",
        "Viman Nagar", "Koregaon Park", "Aundh", "Balewadi", "Wakad", "Pimple Saudagar",
        "Bavdhan", "Kothrud", "Karve Nagar", "Sinhagad Road", "Dhankawadi", "Katraj",
        "Kondhwa", "Undri", "NIBM", "Camp", "Magarpatta", "Keshavnagar", "Mundhwa",
        "Lohegaon", "Dhanori", "Vishrantwadi", "Yerawada", "Phursungi", "Shivajinagar", 
        "Pashan", "Sus", "Mahalunge", "Pirangut", "Bhugaon", "Punawale", "Ravet", "Moshi", "Chikhali",
        "Talegaon", "Chinchwad", "Nigdi", "Akurdi"
    ];

    const propertyTypes = ["apartments", "flats", "villas", "plots", "commercial", "shops", "office space", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "luxury projects", "townships", "residential projects"];
    const actions = ["buy", "book", "invest in", "price of", "reviews of", "contact", "enquiry", "floor plan of", "best", "top", "upcoming"];

    baseBuilder.forEach(kw => {
        allPuneAreas.forEach(area => {
            builderKeywords.push({ Keyword: `${kw} in ${area}`, Category: 'Locality Expansion' });
            builderKeywords.push({ Keyword: `${kw} near ${area}`, Category: 'Locality Expansion' });
        });
    });

    allPuneAreas.forEach(area => {
        propertyTypes.forEach(pt => {
            actions.forEach(act => {
                builderKeywords.push({ Keyword: `${act} Kumar Properties ${pt} in ${area}`, Category: 'Deep Locality & Action' });
                builderKeywords.push({ Keyword: `Kumar Properties ${pt} near ${area}`, Category: 'Deep Locality & Action' });
            });
        });
    });

    const ws2 = xlsx.utils.json_to_sheet(builderKeywords);
    xlsx.utils.book_append_sheet(wb, ws2, "2. Kumar Properties");

    // ---------------------------------------------------------
    // MASTER CLUSTER 3: Every Kumar Project (Aiming for 10,000+)
    // ---------------------------------------------------------
    const projects = [
        "Kumar Parc Residences", "Kumar Prospera", "Kumar Prakruti", "Kumar Princeville",
        "Kumar Primavera", "Kumar Megapolis", "Kumar Peninsula", "Kumar Palmspring",
        "Kumar Picasso", "Kumar Puram", "Kumar Sophronia", "Kumar Padmalaya",
        "Kumar Codename Lighthouse", "Kumar Codename Goldmine", "Kumar Codename Future",
        "Kumar Codename Happy Streets", "Kumar Pebble Park", "Kumar Palmgrove", "Kumar Princetown", "Kumar Surabhi"
    ];
    
    const projModifiers = [
        "", " Pune", " apartments", " flats", " township", " luxury homes",
        " price", " cost", " brochure", " floor plan", " master plan", " payment plan", " EOI", " offers",
        " reviews", " possession", " amenities", " location", " investment", " resale", " booking",
        " 1 BHK", " 2 BHK", " 3 BHK", " 4 BHK", " 1 BHK price", " 2 BHK price", " 3 BHK price", " 4 BHK price",
        " RERA", " site visit", " construction status", " contact number", " latest photos", " layout"
    ];

    projects.forEach(project => {
        const projKeywords = [];
        projModifiers.forEach(mod => {
            projKeywords.push({ Keyword: `${project}${mod}`, Category: 'Project Modifiers' });
            // add combinations of config + modifiers
            ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "Penthouse"].forEach(bhk => {
                ["price", "floor plan", "rent", "resale", "carpet area", "availability", "reviews", "booking"].forEach(bhkmod => {
                    projKeywords.push({ Keyword: `${project} ${bhk} ${bhkmod}`, Category: 'Config Modifiers' });
                });
            });
        });
        const safeTabName = project.substring(0, 31).replace(/[\*\?\:\[\]\/]/g, '');
        xlsx.utils.book_append_sheet(wb, xlsx.utils.json_to_sheet(projKeywords), safeTabName);
    });

    // ---------------------------------------------------------
    // MASTER CLUSTER 4: East Pune Micro-Markets (Aiming for 20,000+) & JSON INJECTION
    // ---------------------------------------------------------
    const microMarkets = [];
    const eastPuneLocalities = [
        "Kharadi", "Wagholi", "Hadapsar", "Manjri", "Keshavnagar", "Mundhwa", "Magarpatta",
        "Amanora", "Viman Nagar", "Kalyani Nagar", "Koregaon Park", "Lohegaon", "Dhanori",
        "Vishrantwadi", "Yerawada", "Ramwadi", "Kharadi Annex", "Upper Kharadi", "Charholi",
        "Phursungi", "Shewalewadi", "Fursungi", "Wadgaon Sheri", "Chandan Nagar", "Fatima Nagar", "Wanowrie",
        "NIBM", "Kondhwa", "Undri", "Pisoli"
    ];
    const locModifiers = [
        "apartments", "flats", "luxury apartments", "premium apartments", "gated community",
        "township", "ready possession", "under construction", "new launch", "commercial property",
        "office space", "rental investment", "investment", "resale", "luxury homes", "projects",
        "1 BHK", "2 BHK", "3 BHK", "4 BHK", "plots", "villas", "penthouses", "NA plots", "residential projects"
    ];
    
    const intentPrefixes = ["buy ", "best ", "upcoming ", "new ", "affordable ", "premium ", "luxury ", "RERA approved ", "ready to move ", "under construction ", "top 10 "];
    const intentSuffixes = [" for sale", " price", " near me", " reviews", " investment", " ROI", " builders", " floor plan", " brochure", " possession"];

    // Initialize Programmatic SEO Registry Nodes Object
    const generatedRegistryNodes = {};

    eastPuneLocalities.forEach(loc => {
        // Generate high-intent programmatic URLs based on localities
        const slugBase = `flats-near-${loc.toLowerCase().replace(/\s+/g, '-')}`;
        const key = `${slugBase}/kumar-magnacity`;
        
        generatedRegistryNodes[key] = {
            "title": `2BHK & 3BHK Flats near ${loc} Pune | Kumar Magnacity Township`,
            "description": `Looking for premium flats near ${loc}? Kumar Magnacity offers luxury 2BHK and 3BHK apartments with 50+ amenities inside a 150-acre gated township in Pune East.`,
            "hero_title": `Luxury Flats Near ${loc}`,
            "hero_subtitle": `Perfect for families seeking a premium township lifestyle with rapid connectivity to ${loc} and surrounding IT hubs.`,
            "hero_badge": `Strategic Connectivity to ${loc}`,
            "faq_json": {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": `Why should I buy a flat near ${loc} in Pune?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `${loc} is rapidly expanding with massive infrastructure growth. Buying a flat at Kumar Magnacity near ${loc} ensures high rental yields and excellent capital appreciation.`
                        }
                    },
                    {
                        "@type": "Question",
                        "name": `What is the price of 2BHK and 3BHK flats near ${loc}?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `Premium 2BHK and 3BHK flats near ${loc} at Kumar Magnacity start from ₹72.99 Lakhs onwards.`
                        }
                    }
                ]
            }
        };

        // Standard spreadsheet generation
        locModifiers.forEach(mod => {
            microMarkets.push({ Keyword: `${loc} ${mod}`, Locality: loc });
            intentPrefixes.forEach(pre => {
                microMarkets.push({ Keyword: `${pre}${mod} in ${loc}`, Locality: loc });
            });
            intentSuffixes.forEach(suf => {
                microMarkets.push({ Keyword: `${loc} ${mod}${suf}`, Locality: loc });
            });
        });
    });

    const ws4 = xlsx.utils.json_to_sheet(microMarkets);
    xlsx.utils.book_append_sheet(wb, ws4, "4. East Pune Markets");

    // ---------------------------------------------------------
    // MASTER CLUSTER 5 & 6 & 7: Buyer Intent, Landmarks & AI Search (Aiming for 10,000+)
    // ---------------------------------------------------------
    const intentKeywords = [];
    const landmarks = [
        "Magarpatta", "EON IT Park", "World Trade Center Pune", "Hadapsar railway station",
        "SP Infocity", "Ring Road", "Pune Solapur Highway", "Amanora Mall", "Seasons Mall",
        "Ramwadi Metro Station", "Kharadi Metro", "Pune Airport", "MIT Pune", "Symbiosis",
        "Phoenix Mall Viman Nagar", "Koregaon Park Plaza", "Cerebrum IT Park"
    ];
    const itemToBuy = ["flat", "apartment", "luxury apartment", "township", "investment", "homes", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "commercial space", "plots"];
    const extraIntents = ["buy ", "best ", "affordable ", "premium ", "new projects ", "under construction ", "ready possession "];
    
    landmarks.forEach(lm => {
        // Generate Landmark SEO Registry Nodes
        const slugBase = `apartments-near-${lm.toLowerCase().replace(/\s+/g, '-')}`;
        const key = `${slugBase}/kumar-magnacity`;

        generatedRegistryNodes[key] = {
            "title": `Apartments near ${lm} Pune | Kumar Magnacity Township`,
            "description": `Premium 2BHK and 3BHK apartments near ${lm}. Explore Kumar Magnacity, a 150-acre township offering zero-commute luxury lifestyle.`,
            "hero_title": `Apartments Near ${lm}`,
            "hero_subtitle": `Live closer to work and leisure. Enjoy seamless connectivity to ${lm} while living in Pune's finest mega-township.`,
            "hero_badge": `Seamless Access to ${lm}`,
        };

        itemToBuy.forEach(item => {
            intentKeywords.push({ Keyword: `${item} near ${lm}`, Type: 'Landmark Intent' });
            extraIntents.forEach(ei => {
                intentKeywords.push({ Keyword: `${ei}${item} near ${lm}`, Type: 'Landmark Intent' });
            });
        });
    });

    const aiQueries = [
        "Which is better Kumar Magnacity or Godrej Park World?", "Is Kumar Magnacity a good investment?",
        "Should I buy in Manjri?", "Which township is best in East Pune?", "Best builder in East Pune",
        "Kumar Properties vs Kolte Patil", "Kumar Properties vs VTP", "Best township near Hadapsar",
        "Best project near Kharadi"
    ];
    
    const builders = ["Godrej", "VTP", "Kolte Patil", "Mahindra", "Shapoorji", "Lodha", "Gera", "Panchshil", "Marvel", "Pride Group", "Nyati", "Mantra", "Rohan", "Kalpataru"];
    builders.forEach(b1 => {
        builders.forEach(b2 => {
            if(b1 !== b2) {
                intentKeywords.push({ Keyword: `${b1} vs ${b2} Pune`, Type: 'AI Search Comparison' });
                intentKeywords.push({ Keyword: `Which is better ${b1} or ${b2} in Pune`, Type: 'AI Search Comparison' });
            }
        });
        intentKeywords.push({ Keyword: `Kumar Properties vs ${b1}`, Type: 'AI Search Comparison' });
        intentKeywords.push({ Keyword: `Is ${b1} better than Kumar Properties`, Type: 'AI Search Comparison' });
    });

    aiQueries.forEach(q => intentKeywords.push({ Keyword: q, Type: 'AI Search' }));

    const ws5 = xlsx.utils.json_to_sheet(intentKeywords);
    xlsx.utils.book_append_sheet(wb, ws5, "5-7. Intent & AI");

    const dataDir = path.dirname(outputPath);
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }

    // Write Excel Sheet
    xlsx.writeFile(wb, outputPath);
    console.log(`Successfully generated master database at: ${outputPath}`);
    
    // Inject Registry Nodes
    if (fs.existsSync(registryPath)) {
        const currentRegistry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
        Object.assign(currentRegistry, generatedRegistryNodes);
        fs.writeFileSync(registryPath, JSON.stringify(currentRegistry, null, 2));
        console.log(`Successfully injected ${Object.keys(generatedRegistryNodes).length} dynamic programmatic nodes into seo-registry.json.`);
    }
    
    let total = 0;
    wb.SheetNames.forEach(name => {
        const sheet = wb.Sheets[name];
        const range = xlsx.utils.decode_range(sheet['!ref']);
        total += range.e.r; 
    });
    console.log(`Total generated keywords: ${total.toLocaleString()}`);
};

createWorkbook();
