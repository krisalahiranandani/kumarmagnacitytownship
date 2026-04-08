import os
import shutil

BASE_DIR = "/Users/vikasyewle/Desktop/kumarmagnacity"
MR_ROOT = os.path.join(BASE_DIR, "mr")

LEGACY_FILES = [
    ("investor-guide-pune-real-estate-2026.html", "investor-guide-pune-real-estate-2026"),
    ("plots-vs-apartments-comparison-pune.html", "plots-vs-apartments-comparison-pune"),
    ("plots-vs-apartments-comparison-pune-mr.html", "mr/plots-vs-apartments-comparison-pune")
]

for src, slug in LEGACY_FILES:
    src_path = os.path.join(BASE_DIR, src)
    if os.path.exists(src_path):
        target_dir = os.path.join(BASE_DIR, slug)
        os.makedirs(target_dir, exist_ok=True)
        shutil.copy2(src_path, os.path.join(target_dir, "index.html"))
        print(f"Migrated Legacy: {src} -> {slug}/index.html")

print("Legacy Root Migration Complete.")
