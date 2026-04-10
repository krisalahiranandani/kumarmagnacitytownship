import json
import os
import random

# Source Registry Path
REGISTRY_PATH = "data/seo-registry.json"

# Landmarks List (English -> Marathi)
LANDMARKS = {
    "Magarpatta City": "मगरपट्टा सिटी",
    "EON IT Park": "ईओएन आयटी पार्क",
    "SP Infocity": "एसपी इन्फोसिटी",
    "World Trade Center Kharadi": "वर्ल्ड ट्रेड सेंटर खराडी",
    "The Kalyani School": "द कल्याणी स्कूल",
    "Billabong High International School": "बिलाबोंग हाय इंटरनॅशनल स्कूल",
    "Podar International School": "पोदार इंटरनॅशनल स्कूल",
    "Noble Hospital": "नोबल हॉस्पिटल",
    "Sahyadri Super Speciality Hospital": "सह्याद्री सुपर स्पेशालिटी हॉस्पिटल",
    "Pune Outer Ring Road": "पुणे आउटर रिंग रोड",
    "Solapur Highway NH-65": "सोलापूर हायवे NH-65",
    "Amanora Mall": "अमनोरा मॉल",
    "Seasons Mall": "सिझन्स मॉल",
    "Manjri Railway Station": "मांजरी रेल्वे स्टेशन",
    "Pune Metro Phase 2": "पुणे मेट्रो फेज २",
    "Kharadi IT Hub": "खराडी आयटी हब",
    "Phursungi IT Zone": "फुरसुंगी आयटी झोन",
    "Hadapsar Annexe": "हडपसर ॲनेक्स",
    "Shewalewadi": "शेवाळवाडी",
    "Manjari Budruk": "मांजरी बुद्रुक",
    "Loni Kalbhor": "लोणी काळभोर",
    "The Lexicon International School": "द लेक्सिकॉन इंटरनॅशनल स्कूल",
    "Pawar Public School": "पवार पब्लिक स्कूल",
    "Vibgyor High School": "विब्योर हायस्कूल",
    "Manipal Hospital Kharadi": "मणिपाल हॉस्पिटल खराडी"
}

# Themes (EN Templates)
THEMES = [
    {
        "id": "proximity",
        "title": "NA Plots near {landmark} | Luxury Living 2026",
        "description": "Premium NA bungalow plots near {landmark}. Secure your future at Kumar Magnacity, the safest 150-acre township in Pune East.",
        "hero_title": "NA Bungalow Plots near {landmark}",
        "hero_subtitle": "Experience the perfect balance of work and wellness. Just minutes from {landmark}, built by Kumar Properties with 59 years of trust.",
        "badge": "Prime Connectivity"
    },
    {
        "id": "investment",
        "title": "Investment Plots near {landmark} | 12.5% CAGR Potential",
        "description": "High ROI NA plots near {landmark}. Invest in Pune's fastest-growing corridor with Kumar Magnacity's RERA-approved gated community.",
        "hero_title": "Smart Land Investment near {landmark}",
        "hero_subtitle": "Capitalize on urban expansion. Secure clear-title land near {landmark} with direct access to Pune's upcoming infrastructure.",
        "badge": "High ROI Corridor"
    },
    {
        "id": "lifestyle",
        "title": "Luxury Bungalow Plots near {landmark} | Sustainable Township",
        "description": "Build your dream home near {landmark}. Kumar Magnacity offers NA plots with global-standard amenities and elite neighborhood.",
        "hero_title": "Your Private Sanctuary near {landmark}",
        "hero_subtitle": "Escape the congestion without leaving the city. Exclusive plot collection near {landmark} for those who demand excellence.",
        "badge": "Gated Community"
    }
]

# Themes (MR Templates)
THEMES_MR = [
    {
        "id": "proximity",
        "title": "{landmark} जवळ NA प्लॉट्स | लक्झरी लिव्हिंग २०२६",
        "description": "{landmark} जवळ प्रीमियम NA बंगलो प्लॉट्स. पुण्यातील सर्वात सुरक्षित १५०-एकर टाऊनशिप कुमार मॅग्नासिटीमध्ये तुमचे भविष्य सुरक्षित करा.",
        "hero_title": "{landmark} जवळ NA बंगलो प्लॉट्स",
        "hero_subtitle": "काम आणि आरोग्य यांचा परिपूर्ण समतोल अनुभवा. {landmark} पासून अवघ्या काही मिनिटांवर, ५९ वर्षांच्या विश्वासासह कुमार प्रॉपर्टीजद्वारे निर्मित.",
        "badge": "सर्वोत्तम कनेक्टिव्हिटी"
    },
    {
        "id": "investment",
        "title": "{landmark} जवळ गुंतवणुकीसाठी प्लॉट्स | १२.५% CAGR परतावा",
        "description": "{landmark} जवळ उच्च परतावा देणारे NA प्लॉट्स. कुमार मॅग्नासिटीच्या महारेरा नोंदणीकृत गेटेड कम्युनिटीमध्ये गुंतवणूक करा.",
        "hero_title": "{landmark} जवळ स्मार्ट लँड इन्व्हेस्टमेंट",
        "hero_subtitle": "शहरी विस्ताराचा फायदा घ्या. पुण्यातील आगामी पायाभूत सुविधांच्या जवळ, स्पष्ट शीर्षक (Clear Title) असलेले प्लॉट्स सुरक्षित करा.",
        "badge": "उच्च परतावा कॉरिडॉर"
    },
    {
        "id": "lifestyle",
        "title": "{landmark} जवळ लक्झरी बंगलो प्लॉट्स | शाश्वत टाऊनशिप",
        "description": "{landmark} जवळ तुमचे स्वप्नातील घर बांधा. कुमार मॅग्नासिटी जागतिक दर्जाच्या सुविधा आणि उच्चभ्रू शेजार असलेले NA प्लॉट्स ऑफर करते.",
        "hero_title": "{landmark} जवळ तुमचे खास ठिकाण",
        "hero_subtitle": "शहरात राहूनही गर्दीपासून दूर राहा. {landmark} जवळ खास प्लॉट्सचे कलेक्शन, जे उत्कृष्टतेची मागणी करतात त्यांच्यासाठी.",
        "badge": "गेटेड कम्युनिटी"
    }
]

def generate_entry(landmark_en, landmark_mr, theme_en, theme_mr, category, slug):
    en_entry = {
        "title": theme_en["title"].format(landmark=landmark_en),
        "description": theme_en["description"].format(landmark=landmark_en),
        "hero_title": theme_en["hero_title"].format(landmark=landmark_en),
        "hero_subtitle": theme_en["hero_subtitle"].format(landmark=landmark_en),
        "hero_badge": theme_en["badge"],
        "faq_json": {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": f"How far is the project from {landmark_en}?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": f"Kumar Magnacity is strategically located within a 5-15 minute drive from {landmark_en}, depending on traffic, making it ideal for daily commuters."
                    }
                },
                {
                    "@type": "Question",
                    "name": f"Is this a secure investment near {landmark_en}?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": f"Absolutely. Being a RERA-registered (P52100052096) 150-acre township with individual 7/12 extracts, it is the safest land investment option near {landmark_en}."
                    }
                }
            ]
        }
    }
    
    mr_entry = {
        "title": theme_mr["title"].format(landmark=landmark_mr),
        "description": theme_mr["description"].format(landmark=landmark_mr),
        "hero_title": theme_mr["hero_title"].format(landmark=landmark_mr),
        "hero_subtitle": theme_mr["hero_subtitle"].format(landmark=landmark_mr),
        "hero_badge": theme_mr["badge"],
        "faq_json": {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": f"प्रकल्प {landmark_mr} पासून किती दूर आहे?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": f"कुमार मॅग्नासिटी धोरणात्मकदृष्ट्या {landmark_mr} पासून ५-१५ मिनिटांच्या ड्रायव्हिंग अंतरावर आहे, ज्यामुळे ते दैनंदिन प्रवासासाठी आदर्श आहे."
                    }
                },
                {
                    "@type": "Question",
                    "name": f"{landmark_mr} जवळ ही सुरक्षित गुंतवणूक आहे का?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": f"नक्कीच. महारेरा नोंदणीकृत (P52100052096) आणि स्वतंत्र ७/१२ उतारा असलेली ही १५०-एकर टाऊनशिप {landmark_mr} जवळील सर्वात सुरक्षित गुंतवणूक आहे."
                    }
                }
            ]
        }
    }
    
    return {
        f"{category}/{slug}": en_entry,
        f"mr/{category}/{slug}": mr_entry
    }

def main():
    if not os.path.exists(REGISTRY_PATH):
        print("Error: Registry not found.")
        return
        
    with open(REGISTRY_PATH, "r", encoding="utf-8") as f:
        registry = json.load(f)
        
    print(f"Current Registry Size: {len(registry)}")
    
    # Existing articles are ~33 (66 unique keys)
    # Target Unique Topics: 233
    # Needed Unique Topics: 200 more
    
    categories = ["hadapsar-annexe", "market-insights"]
    new_count = 0
    
    for landmark_en, landmark_mr in LANDMARKS.items():
        base_slug = landmark_en.lower().replace(" ", "-").replace(".", "")
        
        for i, theme in enumerate(THEMES):
            theme_mr = THEMES_MR[i]
            
            # Category selection
            cat = categories[i % 2]
            
            # Slug variation
            slug_variants = [
                f"na-plots-near-{base_slug}",
                f"investment-land-near-{base_slug}",
                f"bungalow-plots-{base_slug}"
            ]
            
            # Generate 3 topics per landmark
            for variant in slug_variants:
                if len(registry) >= 466: # 233 articles * 2
                    break
                    
                full_slug = variant
                
                # Check for existing
                if f"{cat}/{full_slug}" in registry:
                    continue
                    
                entries = generate_entry(landmark_en, landmark_mr, theme, theme_mr, cat, full_slug)
                registry.update(entries)
                new_count += 2
                
    # Final check: reach 466 keys (233 articles)
    # If still missing, we add general themes
    if len(registry) < 466:
        print("Adding general themes to reach 233 articles...")
        general_locations = ["pune-east", "manjari-manjri-bk", "hadapsar", "magarpatta-neighbor"]
        general_locations_mr = ["पुणे पूर्व", "मांजरी बुद्रुक", "हडपसर", "मगरपट्टा परिसर"]
        
        for j, gl_en in enumerate(general_locations):
            gl_mr = general_locations_mr[j]
            for t_idx in range(10): # 10 topics per location
                if len(registry) >= 466: break
                cat = categories[t_idx % 2]
                slug = f"luxury-na-land-{gl_en}-{t_idx}"
                entries = generate_entry(gl_en, gl_mr, THEMES[0], THEMES_MR[0], cat, slug)
                registry.update(entries)
                new_count += 2

    # Write back
    with open(REGISTRY_PATH, "w", encoding="utf-8") as f:
        json.dump(registry, f, indent=2, ensure_ascii=False)
        
    print(f"Update Complete. New Registry Size: {len(registry)} ({len(registry)//2} Unique Topics)")
    print(f"Added {new_count} new localized entries.")

if __name__ == "__main__":
    main()
