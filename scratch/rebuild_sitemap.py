import os

BASE_DIR = "/Users/vikasyewle/Desktop/kumarmagnacity"
DOMAIN = "https://kumarmagnacitytownship.com"

SITEMAP_HEADER = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xhtml="http://www.w3.org/1999/xhtml" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.w3.org/1999/xhtml http://www.sitemaps.org/schemas/sitemap/0.9/xhtml.xsd">
"""
SITEMAP_FOOTER = "</urlset>"

urls = []

# Helper to add URL pair
def add_url_pair(en_rel, mr_rel, priority="0.9"):
    # EN
    urls.append({
        "loc": f"{DOMAIN}/{en_rel}",
        "en": f"{DOMAIN}/{en_rel}",
        "mr": f"{DOMAIN}/{mr_rel}",
        "priority": priority
    })
    # MR
    urls.append({
        "loc": f"{DOMAIN}/{mr_rel}",
        "en": f"{DOMAIN}/{en_rel}",
        "mr": f"{DOMAIN}/{mr_rel}",
        "priority": priority
    })

# 1. Home
add_url_pair("", "mr/", "1.0")

# 2. Hubs
HUBS = ["concept", "location", "amenities", "availability", "investment", "master-plan", "market-insights"]
for hub in HUBS:
    add_url_pair(f"{hub}/", f"mr/{hub}/")

# 3. Dynamic Categories
CATEGORIES = ["hadapsar-annexe", "market-insights"]
for cat in CATEGORIES:
    cat_dir = os.path.join(BASE_DIR, cat)
    if os.path.exists(cat_dir):
        for slug in os.listdir(cat_dir):
            if os.path.isdir(os.path.join(cat_dir, slug)):
                # Only add if it has an index.html
                if os.path.exists(os.path.join(cat_dir, slug, "index.html")):
                    add_url_pair(f"{cat}/{slug}/", f"mr/{cat}/{slug}/")

# Generate XML
output = SITEMAP_HEADER
for u in urls:
    output += f"  <url>\n"
    output += f"    <loc>{u['loc']}</loc>\n"
    output += f"    <lastmod>2026-04-08</lastmod>\n"
    output += f"    <changefreq>weekly</changefreq>\n"
    output += f"    <priority>{u['priority']}</priority>\n"
    output += f"    <xhtml:link rel=\"alternate\" hreflang=\"en-IN\" href=\"{u['en']}\"/>\n"
    output += f"    <xhtml:link rel=\"alternate\" hreflang=\"mr-IN\" href=\"{u['mr']}\"/>\n"
    output += f"  </url>\n"

output += SITEMAP_FOOTER

with open(os.path.join(BASE_DIR, "sitemap.xml"), 'w', encoding='utf-8') as f:
    f.write(output)

print(f"Sitemap Rebuilt with {len(urls)} URLs.")
