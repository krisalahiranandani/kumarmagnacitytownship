import os
import re

BASE_DIR = "/Users/vikasyewle/Desktop/kumarmagnacity"
DOMAIN = "https://kumarmagnacitytownship.com"

# Regex for replacing legacy links
# 1. /pages/K-na-bungalow-plots-hadapsar-annexe-[slug].html -> /hadapsar-annexe/[slug]/
# 2. /pages/K-na-bungalow-plots-hadapsar-annexe-[slug]-mr.html -> /mr/hadapsar-annexe/[slug]/
# 3. /blog/K-na-bungalow-plots-hadapsar-annexe-[slug].html -> /market-insights/[slug]/

PREFIX = "kumar-magnacity-na-bungalow-plots-hadapsar-annexe-"
HUB_PREFIX = "kumar-magnacity-na-plots-hadapsar-annexe-"

def update_html_metadata(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    
    # 1. Update internal links in href="..."
    # Hubs e.g. /kumar-magnacity-na-plots-hadapsar-annexe-concept.html -> /concept/
    content = re.sub(r'href="/' + HUB_PREFIX + r'([a-z-]+)\.html"', r'href="/\1/"', content)
    # Hubs MR e.g. /kumar-magnacity-na-plots-hadapsar-annexe-concept-mr.html -> /mr/\1/
    content = re.sub(r'href="/' + HUB_PREFIX + r'([a-z-]+)-mr\.html"', r'href="/mr/\1/"', content)
    
    # Pages EN
    content = re.sub(r'href="/pages/' + PREFIX + r'([a-z0-9-]+)\.html"', r'href="/hadapsar-annexe/\1/"', content)
    # Pages MR
    content = re.sub(r'href="/pages/' + PREFIX + r'([a-z0-9-]+)-mr\.html"', r'href="/mr/hadapsar-annexe/\1/"', content)
    
    # Blog EN
    content = re.sub(r'href="/blog/' + PREFIX + r'([a-z0-9-]+)\.html"', r'href="/market-insights/\1/"', content)
    # Blog MR
    content = re.sub(r'href="/blog/' + PREFIX + r'([a-z0-9-]+)-mr\.html"', r'href="/mr/market-insights/\1/"', content)
    
    # Simple home/mr links
    content = content.replace('href="/index.html"', 'href="/"')
    content = content.replace('href="/mr.html"', 'href="/mr/"')

    # 2. Derive current relative path for Canonicals
    rel_path = os.path.relpath(file_path, BASE_DIR)
    # hadapsar-annexe/slug/index.html -> hadapsar-annexe/slug/
    canonical_rel = rel_path.replace("index.html", "")
    if canonical_rel == ".":
        canonical_rel = ""
    
    full_canonical = f"{DOMAIN}/{canonical_rel}"
    
    # Update <link rel="canonical" ...>
    content = re.sub(r'<link rel="canonical" href="[^"]+"', f'<link rel="canonical" href="{full_canonical}"', content)
    
    # Update og:url
    content = re.sub(r'<meta property="og:url" content="[^"]+"', f'<meta property="og:url" content="{full_canonical}"', content)
    
    # Update JSON-LD "url":
    content = re.sub(r'"url": "https://kumarmagnacitytownship.com/[^"]*"', f'"url": "{full_canonical}"', content)

    # 3. Hreflang logic (bidirectional)
    # If path starts with mr/, the alternate is without mr/.
    # If not, the alternate is with mr/.
    if rel_path.startswith("mr/"):
        en_rel = rel_path.replace("mr/", "", 1).replace("index.html", "")
        mr_rel = rel_path.replace("index.html", "")
        en_full = f"{DOMAIN}/{en_rel}"
        mr_full = f"{DOMAIN}/{mr_rel}"
    else:
        en_rel = rel_path.replace("index.html", "")
        mr_rel = "mr/" + en_rel
        en_full = f"{DOMAIN}/{en_rel}"
        mr_full = f"{DOMAIN}/{mr_rel}"

    # Replace hreflang="en-IN" href="..."
    content = re.sub(r'hreflang="en-IN" href="[^"]+"', f'hreflang="en-IN" href="{en_full}"', content)
    content = re.sub(r'hreflang="mr-IN" href="[^"]+"', f'hreflang="mr-IN" href="{mr_full}"', content)

    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

# Recursively target all index.html files
for root, dirs, files in os.walk(BASE_DIR):
    if "node_modules" in root or ".git" in root:
        continue
    for file in files:
        if file == "index.html" or file.endswith(".html"):
            full_p = os.path.join(root, file)
            updated = update_html_metadata(full_p)
            if updated:
                print(f"Updated: {full_p}")

print("SEO Propagation Engine Complete.")
