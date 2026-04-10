import xml.etree.ElementTree as ET
import os

SITEMAP_PATH = "/Users/vikasyewle/Desktop/kumarmagnacity/sitemap.xml"

def test_sitemap_parse():
    if not os.path.exists(SITEMAP_PATH):
        print("Sitemap not found")
        return
        
    tree = ET.parse(SITEMAP_PATH)
    root = tree.getroot()
    ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
    
    urls = []
    for url in root.findall('s:url', ns):
        loc = url.find('s:loc', ns)
        if loc is not None:
            urls.append(loc.text)
            
    print(f"Total URLs extracted: {len(urls)}")
    print("First 5 URLs:")
    for u in urls[:5]:
        print(f" - {u}")

if __name__ == "__main__":
    test_sitemap_parse()
