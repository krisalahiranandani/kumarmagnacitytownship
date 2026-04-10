import os
import shutil
import re

# Paths
BASE_DIR = "/Users/vikasyewle/Desktop/kumarmagnacity"
PAGES_DIR = os.path.join(BASE_DIR, "pages")
BLOG_DIR = os.path.join(BASE_DIR, "blog")

# New Root Directories
HADAPSAR_DIR = os.path.join(BASE_DIR, "hadapsar-annexe")
INSIGHTS_DIR = os.path.join(BASE_DIR, "market-insights")
MR_ROOT = os.path.join(BASE_DIR, "mr")

# Ensure roots exist
os.makedirs(HADAPSAR_DIR, exist_ok=True)
os.makedirs(INSIGHTS_DIR, exist_ok=True)
os.makedirs(MR_ROOT, exist_ok=True)
os.makedirs(os.path.join(MR_ROOT, "hadapsar-annexe"), exist_ok=True)
os.makedirs(os.path.join(MR_ROOT, "market-insights"), exist_ok=True)

PREFIX = "kumar-magnacity-na-bungalow-plots-hadapsar-annexe-"

def migrate_files(source_dir, target_category):
    for filename in os.listdir(source_dir):
        if not filename.endswith(".html"):
            continue
            
        full_path = os.path.join(source_dir, filename)
        is_mr = "-mr.html" in filename
        
        # Extract slug
        slug = filename.replace(PREFIX, "").replace("-mr.html", "").replace(".html", "")
        
        # Determine target path
        if is_mr:
            target_dir = os.path.join(MR_ROOT, target_category, slug)
        else:
            if target_category == "hadapsar-annexe":
                target_dir = os.path.join(HADAPSAR_DIR, slug)
            else:
                target_dir = os.path.join(INSIGHTS_DIR, slug)
                
        os.makedirs(target_dir, exist_ok=True)
        target_file = os.path.join(target_dir, "index.html")
        
        print(f"Migrating: {filename} -> {target_file}")
        shutil.copy2(full_path, target_file)

# Run migration
migrate_files(PAGES_DIR, "hadapsar-annexe")
migrate_files(BLOG_DIR, "market-insights")

# also migrate indices
# index.html stays in root
# mr.html -> mr/index.html
shutil.copy2(os.path.join(BASE_DIR, "mr.html"), os.path.join(MR_ROOT, "index.html"))

# Hub Pages migration
HUBS = [
    "concept", "location", "amenities", "availability", "investment", "master-plan"
]

for hub in HUBS:
    # EN
    hub_file = f"kumar-magnacity-na-plots-hadapsar-annexe-{hub}.html"
    if os.path.exists(os.path.join(BASE_DIR, hub_file)):
        t_dir = os.path.join(BASE_DIR, hub)
        os.makedirs(t_dir, exist_ok=True)
        shutil.copy2(os.path.join(BASE_DIR, hub_file), os.path.join(t_dir, "index.html"))
    
    # MR
    hub_file_mr = f"kumar-magnacity-na-plots-hadapsar-annexe-{hub}-mr.html"
    if os.path.exists(os.path.join(BASE_DIR, hub_file_mr)):
        t_dir_mr = os.path.join(MR_ROOT, hub)
        os.makedirs(t_dir_mr, exist_ok=True)
        shutil.copy2(os.path.join(BASE_DIR, hub_file_mr), os.path.join(t_dir_mr, "index.html"))

print("Migration Complete.")
