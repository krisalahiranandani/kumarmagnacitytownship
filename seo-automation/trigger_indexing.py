"""
Kumar Magnacity - Google Indexing Domination Pipeline
Usage: python3 trigger_indexing.py [--dry-run]
"""

import os
import sys
import argparse
import xml.etree.ElementTree as ET
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

# Configuration
SITEMAP_PATH = "../sitemap.xml"
KEY_FILE = "service_account.json"
SCOPES = ["https://www.googleapis.com/auth/indexing"]
ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish"

def get_urls_from_sitemap(path):
    """Parses sitemap.xml and returns a list of <loc> URLs."""
    if not os.path.exists(path):
        print(f"Error: Sitemap not found at {path}")
        return []
    
    try:
        tree = ET.parse(path)
        root = tree.getroot()
        # Handle namespaces in sitemap
        ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
        urls = [url.find('s:loc', ns).text for url in root.findall('s:url', ns)]
        return urls
    except Exception as e:
        print(f"Error parsing sitemap: {e}")
        return []

def trigger_indexing(urls, dry_run=False):
    """Sends URLs to Google Indexing API."""
    if not os.path.exists(KEY_FILE) and not dry_run:
        print(f"Error: {KEY_FILE} not found. Please follow setup instructions.")
        return

    print(f"Starting indexing for {len(urls)} URLs...")
    
    if dry_run:
        print("--- DRY RUN MODE ---")
        for url in urls:
            print(f"[WILL UPDATE]: {url}")
        print("--- DRY RUN COMPLETE ---")
        return

    try:
        credentials = service_account.Credentials.from_service_account_file(KEY_FILE, scopes=SCOPES)
        service = build('indexing', 'v3', credentials=credentials)

        for url in urls:
            body = {
                "url": url,
                "type": "URL_UPDATED"
            }
            try:
                result = service.urlNotifications().publish(body=body).execute()
                print(f"Successfully notified: {url}")
            except HttpError as e:
                print(f"Failed to notify {url}: {e.content.decode()}")
                
    except Exception as e:
        print(f"Critical Error during API execution: {e}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Google Indexing API Trigger")
    parser.add_argument("--dry-run", action="store_true", help="Perform a dry run without calling the API")
    args = parser.parse_args()

    urls_to_index = get_urls_from_sitemap(SITEMAP_PATH)
    
    if not urls_to_index:
        print("No URLs found to index.")
        sys.exit(1)
        
    trigger_indexing(urls_to_index, dry_run=args.dry_run)
