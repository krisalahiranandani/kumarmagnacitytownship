import os
import re

def fix_site(base_dir):
    # Regex to match the actual anchor tags by class name, handling attributes and inner content
    wa_pattern = re.compile(r'<a\s+[^>]*class="whatsapp-float"[^>]*>.*?</a>', re.DOTALL)
    call_pattern = re.compile(r'<a\s+[^>]*class="mobile-call-btn"[^>]*>.*?</a>', re.DOTALL)
    vr_pattern = re.compile(r'<a\s+[^>]*class="vr-float"[^>]*>.*?</a>', re.DOTALL) # Also remove VR float if it exists to be clean
    
    for root, dirs, files in os.walk(base_dir):
        if '/.' in root or 'node_modules' in root:
            continue
        for file in files:
            if file.endswith('.html'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                original_content = content
                
                # Remove redundant Mobile CTAs absolutely
                content = wa_pattern.sub('', content)
                content = call_pattern.sub('', content)
                content = vr_pattern.sub('', content) # Removing VR float as well to ensure no mobile clutter
                
                if content != original_content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"Fixed stubborn CTAs in {filepath}")

if __name__ == '__main__':
    fix_site('.')
