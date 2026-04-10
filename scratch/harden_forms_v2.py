import os
import re

def fix_html_file(file_path):
    # print(f"Checking: {file_path}")
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = False

    # 1. STANDARDIZE MODAL IDs
    # Many files use id="exit-modal" or id="modal-overlay", scripts.js expects id="enquiry-modal"
    if 'id="exit-modal"' in content:
        content = content.replace('id="exit-modal"', 'id="enquiry-modal"')
        modified = True
    
    # 2. FIX BROKEN MAIN FORMS (Missing opening tag)
    # If there is a </form> but missing <form id="enquiryForm">
    if '</form>' in content and 'id="enquiryForm"' not in content:
        # Try to find the common insertion point for main forms
        # Usually inside a div with class "contact-form-container" or similar
        main_form_fix_pattern = r'(<div class="contact-form-container">.*?<p.*?>.*?</p>)\s+(<div class="form-group">)'
        if re.search(main_form_fix_pattern, content, re.DOTALL):
            content = re.sub(main_form_fix_pattern, r'\1\n                    <form id="enquiryForm" class="enquiry-form">\n                        \2', content, flags=re.DOTALL)
            modified = True

    # 3. FIX BROKEN POPUP FORMS (Missing opening tag)
    # If popup form has inputs but no <form> tag
    if 'id="popupEnquiryForm"' not in content:
        # Match the start of the modal body
        popup_fix_pattern = r'(<div class="modal-body">)\s+(<div class="form-group">)'
        if re.search(popup_fix_pattern, content):
            content = re.sub(popup_fix_pattern, r'\1\n                    <form id="popupEnquiryForm" class="enquiry-form-modal">\n                        \2', content)
            modified = True
        elif 'class="enquiry-form-modal"' in content and 'id="popupEnquiryForm"' not in content:
            content = content.replace('class="enquiry-form-modal"', 'id="popupEnquiryForm" class="enquiry-form-modal"')
            modified = True

    # 4. REMOVE DUPLICATE SOVEREIGN BARS
    # Keep only the last one
    bars = list(re.finditer(r'(<!-- Premium Sovereign Conversion Bar .*? -->)?\s*<div class="sovereign-conversion-bar">.*?</div>', content, re.DOTALL))
    if len(bars) > 1:
        # Keep the last one, remove others
        for match in reversed(bars[:-1]):
            start, end = match.span()
            content = content[:start] + content[end:]
        modified = True

    # 5. FIX WRONG CLOSE BUTTON IDs
    if 'id="close-modal"' in content:
        content = content.replace('id="close-modal"', 'id="close-enquiry"')
        modified = True

    if modified:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    dirs_to_harden = [
        'hadapsar-annexe', 
        'mr/hadapsar-annexe',
        'market-insights',
        'mr/market-insights'
    ]
    total_patched = 0
    for base in dirs_to_harden:
        if not os.path.exists(base): continue
        for root, dirs, files in os.walk(base):
            for file in files:
                if file == 'index.html':
                    if fix_html_file(os.path.join(root, file)):
                        total_patched += 1
                        print(f"Hardened: {os.path.join(root, file)}")
    
    print(f"\n--- HARDENING SUMMARY ---")
    print(f"Total pages unified: {total_patched}")

if __name__ == "__main__":
    main()
