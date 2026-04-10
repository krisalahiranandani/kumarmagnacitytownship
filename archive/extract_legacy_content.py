import os
import json
import re
from html.parser import HTMLParser

class ContentExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.data = {
            "title": "",
            "description": "",
            "hero_title": "",
            "hero_subtitle": "",
            "hero_badge": "",
            "faq_json": None
        }
        self.current_tag = ""
        self.in_hero_title = False
        self.in_hero_subtitle = False
        self.in_hero_badge = False
        self.in_script = False
        self.script_content = ""

    def handle_starttag(self, tag, attrs):
        self.current_tag = tag
        attrs_dict = dict(attrs)
        
        if tag == "meta" and attrs_dict.get("name") == "description":
            self.data["description"] = attrs_dict.get("content", "")
        
        if tag == "h1" and "hero-title" in attrs_dict.get("class", ""):
            self.in_hero_title = True
        
        if tag == "p" and "hero-subtitle" in attrs_dict.get("class", ""):
            self.in_hero_subtitle = True
            
        if tag == "span" and "badge" in attrs_dict.get("class", ""):
            self.in_hero_badge = True

        if tag == "script" and attrs_dict.get("type") == "application/ld+json":
            self.in_script = True
            self.script_content = ""

    def handle_data(self, data):
        if self.current_tag == "title":
            self.data["title"] += data.strip()
        if self.in_hero_title:
            self.data["hero_title"] += data.strip()
        if self.in_hero_subtitle:
            self.data["hero_subtitle"] += data.strip()
        if self.in_hero_badge:
            self.data["hero_badge"] += data.strip()
        if self.in_script:
            self.script_content += data

    def handle_endtag(self, tag):
        if tag == "h1": self.in_hero_title = False
        if tag == "p": self.in_hero_subtitle = False
        if tag == "span": self.in_hero_badge = False
        if tag == "script" and self.in_script:
            self.in_script = False
            try:
                js_data = json.loads(self.script_content)
                if js_data.get("@type") == "FAQPage":
                    self.data["faq_json"] = js_data
            except:
                pass
        self.current_tag = ""

def process_directory(base_path, registry):
    for root, dirs, files in os.walk(base_path):
        if "index.html" in files:
            file_path = os.path.join(root, "index.html")
            rel_path = os.path.relpath(root, "legacy").replace("\\", "/")
            
            # Clean up rel_path if it's the root hadapsar-annexe etc.
            if rel_path == ".": continue
                
            print(f"Processing: {rel_path}")
            
            with open(file_path, "r", encoding="utf-8") as f:
                html_content = f.read()
                
            parser = ContentExtractor()
            parser.feed(html_content)
            registry[rel_path] = parser.data

if __name__ == "__main__":
    registry = {}
    
    # Process EN
    process_directory("legacy/hadapsar-annexe", registry)
    process_directory("legacy/market-insights", registry)
    
    # Process MR
    process_directory("legacy/mr/hadapsar-annexe", registry)
    process_directory("legacy/mr/market-insights", registry)
    
    with open("data/seo-registry.json", "w", encoding="utf-8") as f:
        json.dump(registry, f, indent=2, ensure_ascii=False)
    
    print(f"\nMigration Complete. {len(registry)} pages indexed in data/seo-registry.json")
