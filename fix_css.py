import os
import re

def clean_css(base_dir):
    # Regex patterns for the CSS blocks we want to remove
    # We look for the class name and everything up to the closing brace '}'
    patterns = [
        re.compile(r'\.whatsapp-float\s*\{[^}]*\}', re.DOTALL),
        re.compile(r'\.mobile-call-btn\s*\{[^}]*\}', re.DOTALL),
        re.compile(r'\.vr-float\s*\{[^}]*\}', re.DOTALL),
        re.compile(r'\.whatsapp-float:hover\s*\{[^}]*\}', re.DOTALL),
        re.compile(r'\.vr-float:hover\s*\{[^}]*\}', re.DOTALL),
        re.compile(r'@keyframes\s+whatsapp-pulse\s*\{[^}]*\}\s*\}?', re.DOTALL), # this one is a bit tricky, but mostly safe to just blanket replace
    ]
    
    css_files = []
    for root, dirs, files in os.walk(os.path.join(base_dir, 'css')):
        for file in files:
            if file.endswith('.css'):
                css_files.append(os.path.join(root, file))

    for filepath in css_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        original_content = content
        
        # We also need to remove them from combined declarations like `.whatsapp-float, .mobile-call-btn, .vr-float { ... }`
        content = re.sub(r'\.mobile-call-btn,\s*\.vr-float,\s*\.whatsapp-float\s*\{[^}]*\}', '', content, flags=re.DOTALL)
        
        for p in patterns:
             content = p.sub('', content)

        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Cleaned CSS in {filepath}")

if __name__ == '__main__':
    clean_css('.')
