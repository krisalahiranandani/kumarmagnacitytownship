import json
import os
import re

REGISTRY_PATH = "data/seo-registry.json"
REDIRECTS_PATH = "_redirects"
OPTIMIZED_PREFIX = "kumar-magnacity-na-bungalow-plots-near-hadapsar-"

def optimize_slugs():
    if not os.path.exists(REGISTRY_PATH):
        print("Error: Registry not found.")
        return

    with open(REGISTRY_PATH, "r", encoding="utf-8") as f:
        registry = json.load(f)

    new_registry = {}
    mapping = {} # Old slug -> New slug (for redirects)

    for key, data in registry.items():
        # Handle MR prefix
        is_mr = key.startswith("mr/")
        path_parts = key.split("/")
        
        # We expect [cat, slug] or [mr, cat, slug]
        if is_mr:
            if len(path_parts) < 3: 
                # e.g. mr/market-insights
                new_key = key
            else:
                cat = path_parts[1]
                slug = path_parts[2]
                new_slug = OPTIMIZED_PREFIX + slug
                new_key = f"mr/{cat}/{new_slug}"
        else:
            if len(path_parts) < 2:
                # e.g. market-insights (core hub?)
                new_key = key
            else:
                cat = path_parts[0]
                slug = path_parts[1]
                new_slug = OPTIMIZED_PREFIX + slug
                new_key = f"{cat}/{new_slug}"
        
        new_registry[new_key] = data
        mapping[key] = new_key

    # Save Optimized Registry
    with open(REGISTRY_PATH, "w", encoding="utf-8") as f:
        json.dump(new_registry, f, indent=2, ensure_ascii=False)
    
    print(f"Optimized {len(new_registry)} registry keys.")
    return mapping

def update_redirects(mapping):
    if not os.path.exists(REDIRECTS_PATH):
        print("Warning: _redirects not found.")
        return

    with open(REDIRECTS_PATH, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    headers = []
    
    # Preserve the first line (www to non-www)
    if lines and "https://www.kumarmagnacitytownship.com/" in lines[0]:
        new_lines.append(lines[0])
        lines = lines[1:]

    for line in lines:
        if not line.strip(): continue
        parts = line.split()
        if len(parts) >= 2:
            legacy_path = parts[0]
            new_path = parts[1]
            status = parts[2] if len(parts) > 2 else "301"
            
            # Remove leading/trailing slashes for matching
            tidy_path = new_path.strip("/")
            
            if tidy_path in mapping:
                target_path = "/" + mapping[tidy_path] + "/"
                new_lines.append(f"{legacy_path} {target_path} {status}\n")
            else:
                new_lines.append(line)
        else:
            new_lines.append(line)

    with open(REDIRECTS_PATH, "w", encoding="utf-8") as f:
        f.writelines(new_lines)
    
    print(f"Updated {REDIRECTS_PATH} with optimized slugs.")

if __name__ == "__main__":
    slug_mapping = optimize_slugs()
    if slug_mapping:
        update_redirects(slug_mapping)
    print("SEO URL Optimization Complete.")
