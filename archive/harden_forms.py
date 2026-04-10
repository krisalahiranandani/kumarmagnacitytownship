import os
import re

def fix_html_file(file_path):
    print(f"Relaying lead capture for: {file_path}")
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = False

    # 1. Fix missing/broken main enquiry form
    # Look for the pattern after Schedule a Site Visit p tag
    main_form_pattern = r'(<p class="mb-4 text-muted" style="font-size: 0.95rem;">Register for an exclusive plot availability\s+update and private tour of our 150-acre township.</p>)\s+(<div class="form-group">)'
    if re.search(main_form_pattern, content):
        content = re.sub(main_form_pattern, r'\1\n                    <form id="enquiryForm" class="enquiry-form">\n                        \2', content)
        modified = True
    
    # 2. Fix missing/broken popup enquiry form
    popup_form_pattern = r'(<div class="modal-body">\s+)\s+(<div class="form-group">)'
    if re.search(popup_form_pattern, content) and 'id="popupEnquiryForm"' not in content:
        content = re.sub(popup_form_pattern, r'\1<form id="popupEnquiryForm" class="enquiry-form-modal">\n                        \2', content)
        modified = True

    # 3. Remove duplicate Sovereign Conversion Bars
    # Find all instances and keep only the last one (usually before mobile-sticky-bar)
    bars = list(re.finditer(r'<!-- Premium Sovereign Conversion Bar .*? -->\s*<div class="sovereign-conversion-bar">.*?</div>', content, re.DOTALL))
    if not bars: # Try without comments
        bars = list(re.finditer(r'<div class="sovereign-conversion-bar">.*?</div>', content, re.DOTALL))
    
    if len(bars) > 1:
        # Remove all but the LAST one
        for match in reversed(bars[:-1]):
            start, end = match.span()
            content = content[:start] + content[end:]
        modified = True

    if modified:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    base_dirs = ['hadapsar-annexe', 'mr/hadapsar-annexe']
    count = 0
    for base in base_dirs:
        if not os.path.exists(base):
            continue
        for root, dirs, files in os.walk(base):
            for file in files:
                if file == 'index.html':
                    if fix_html_file(os.path.join(root, file)):
                        count += 1
    
    print(f"Hardening complete. Total files patched: {count}")

if __name__ == "__main__":
    main()
