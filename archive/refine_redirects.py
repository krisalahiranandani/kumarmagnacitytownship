import os

BASE_DIR = "/Users/vikasyewle/Desktop/kumarmagnacity"

REDIRECTS_HEADER = "https://www.kumarmagnacitytownship.com/* https://kumarmagnacitytownship.com/:splat 301\n"

# Hub redirects
HUBS = ["concept", "location", "amenities", "availability", "investment", "master-plan"]
hub_redirects = ""
for hub in HUBS:
    hub_redirects += f"/kumar-magnacity-na-plots-hadapsar-annexe-{hub}.html /{hub}/ 301\n"
    hub_redirects += f"/kumar-magnacity-na-plots-hadapsar-annexe-{hub}-mr.html /mr/{hub}/ 301\n"

# Specific Legacy
hub_redirects += "/mr.html /mr/ 301\n"
hub_redirects += "/investor-guide-pune-real-estate-2026.html /investor-guide-pune-real-estate-2026/ 301\n"
hub_redirects += "/plots-vs-apartments-comparison-pune.html /plots-vs-apartments-comparison-pune/ 301\n"
hub_redirects += "/plots-vs-apartments-comparison-pune-mr.html /mr/plots-vs-apartments-comparison-pune/ 301\n"

# Directory patterns
# Note: Since I deleted the pages/ and blog/ folders, I'll list the targets and work backwards to old URLs.
cat_redirects = ""
PREFIX = "kumar-magnacity-na-bungalow-plots-hadapsar-annexe-"

# Pages -> hadapsar-annexe
cat_dir = os.path.join(BASE_DIR, "hadapsar-annexe")
for slug in os.listdir(cat_dir):
    if os.path.isdir(os.path.join(cat_dir, slug)):
        cat_redirects += f"/pages/{PREFIX}{slug}.html /hadapsar-annexe/{slug}/ 301\n"
        cat_redirects += f"/pages/{PREFIX}{slug}-mr.html /mr/hadapsar-annexe/{slug}/ 301\n"

# Blogs -> market-insights
blog_dir = os.path.join(BASE_DIR, "market-insights")
for slug in os.listdir(blog_dir):
    if os.path.isdir(os.path.join(blog_dir, slug)):
        # Special case: manual blogs I just created don't have legacy counterparts, 
        # but the migration script extracted old ones too.
        cat_redirects += f"/blog/{PREFIX}{slug}.html /market-insights/{slug}/ 301\n"
        cat_redirects += f"/blog/{PREFIX}{slug}-mr.html /mr/market-insights/{slug}/ 301\n"

with open(os.path.join(BASE_DIR, "_redirects"), 'w', encoding='utf-8') as f:
    f.write(REDIRECTS_HEADER + hub_redirects + cat_redirects)

print("Redirects File Refined.")
