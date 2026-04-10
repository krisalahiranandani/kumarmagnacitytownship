import json
import os
from datetime import datetime

# High-End Sitemap Generator with Hreflang support for 466 URLs
def generate_sitemap():
    registry_path = "data/seo-registry.json"
    sitemap_path = "sitemap.xml"
    base_url = "https://kumarmagnacitytownship.com"
    
    if not os.path.exists(registry_path):
        print(f"Error: {registry_path} not found.")
        return

    with open(registry_path, "r", encoding="utf-8") as f:
        registry = json.load(f)

    # 1. CORE HUBS (Fixed slug mapping)
    HUBS = [
        "concept", "location", "amenities", "availability", 
        "investment", "master-plan", "market-insights"
    ]
    
    sitemap_entries = []
    today = datetime.now().strftime("%Y-%m-%d")

    # Helper to create xhtml links
    def get_xhtml_links(en_rel, mr_rel):
        en_full = f"{base_url}/{en_rel}"
        mr_full = f"{base_url}/{mr_rel}"
        return f'    <xhtml:link rel="alternate" hreflang="en-IN" href="{en_full}"/>\n    <xhtml:link rel="alternate" hreflang="mr-IN" href="{mr_full}"/>'

    # A. ROOT
    sitemap_entries.append(f"""  <url>
    <loc>{base_url}/</loc>
    <lastmod>{today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
{get_xhtml_links("", "mr/")}
  </url>""")
    sitemap_entries.append(f"""  <url>
    <loc>{base_url}/mr/</loc>
    <lastmod>{today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
{get_xhtml_links("", "mr/")}
  </url>""")

    # B. HUBS
    for hub in HUBS:
        priority = "0.9"
        sitemap_entries.append(f"""  <url>
    <loc>{base_url}/{hub}/</loc>
    <lastmod>{today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>{priority}</priority>
{get_xhtml_links(hub + "/", "mr/" + hub + "/")}
  </url>""")
        sitemap_entries.append(f"""  <url>
    <loc>{base_url}/mr/{hub}/</loc>
    <lastmod>{today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>{priority}</priority>
{get_xhtml_links(hub + "/", "mr/" + hub + "/")}
  </url>""")

    # C. PROGRAMMATIC PAGES
    # Each programmatic page has an EN key and an MR key (starting with mr/)
    # We find pairs to generate bidirectional xhtml:links
    unique_topics = set()
    for key in registry.keys():
        if key.startswith("mr/"):
            topic = key[3:] # Remove mr/
        else:
            topic = key
        unique_topics.add(topic)

    print(f"Detected {len(unique_topics)} unique programmatic topics.")

    for topic in sorted(unique_topics):
        en_rel = f"{topic}/"
        mr_rel = f"mr/{topic}/"
        
        # Check if actually in registry
        has_en = topic in registry
        has_mr = f"mr/{topic}" in registry
        
        if not has_en or not has_mr:
            print(f"Warning: Incomplete parity for {topic}")
            continue

        priority = "0.8"
        if "market-insights" in topic:
            priority = "0.7"

        # EN Entry
        sitemap_entries.append(f"""  <url>
    <loc>{base_url}/{en_rel}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>{priority}</priority>
{get_xhtml_links(en_rel, mr_rel)}
  </url>""")
        # MR Entry
        sitemap_entries.append(f"""  <url>
    <loc>{base_url}/{mr_rel}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>{priority}</priority>
{get_xhtml_links(en_rel, mr_rel)}
  </url>""")

    # Combine
    header = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xhtml="http://www.w3.org/1999/xhtml" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.w3.org/1999/xhtml http://www.sitemaps.org/schemas/sitemap/0.9/xhtml.xsd">
"""
    footer = "</urlset>"
    content = header + "\n".join(sitemap_entries) + "\n" + footer

    with open(sitemap_path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Sync Complete: Final Sitemap contains {len(sitemap_entries)} URLs.")
    print(f"Total Unique Articles Represented: {len(unique_topics) + 8}") # 225 + 8 = 233

if __name__ == "__main__":
    generate_sitemap()
