import os
import re

def clean_js(base_dir):
    js_files = [
        os.path.join(base_dir, 'js', 'scripts.js'),
        os.path.join(base_dir, 'js', 'scripts.min.js')
    ]
    
    # Pattern to match the whatsappBtn logic block
    pattern = re.compile(
        r'const\s+whatsappBtn\s*=\s*document\.querySelector\([\'"]\.floating-whatsapp[\'"]\);\s*'
        r'if\s*\(whatsappBtn\)\s*\{\s*'
        r'whatsappBtn\.addEventListener\([\'"]click[\'"],\s*\(\)\s*=>\s*\{\s*'
        r'if\s*\(typeof\s+fbq\s*===\s*[\'"]function[\'"]\)\s*\{\s*'
        r'fbq\([\'"]trackCustom[\'"],\s*[\'"]WhatsApp_Chat_Initiated[\'"]\);\s*'
        r'\}\s*'
        r'if\s*\(typeof\s+gtag\s*===\s*[\'"]function[\'"]\)\s*\{\s*'
        r'gtag\([\'"]event[\'"],\s*[\'"]whatsapp_click[\'"]\);\s*'
        r'\}\s*'
        r'\}\);\s*'
        r'\}', re.DOTALL
    )
    
    # Minified pattern
    min_pattern = re.compile(
        r'const\s+whatsappBtn\s*=\s*document\.querySelector\([\'"]\.floating-whatsapp[\'"]\);whatsappBtn\s*&&\s*whatsappBtn\.addEventListener\([\'"]click[\'"],\s*\(\)\s*=>\s*\{[\'"]function[\'"]\s*==\s*typeof\s*fbq\s*&&\s*fbq\([\'"]trackCustom[\'"],[\'"]WhatsApp_Chat_Initiated[\'"]\),[\'"]function[\'"]\s*==\s*typeof\s*gtag\s*&&\s*gtag\([\'"]event[\'"],[\'"]whatsapp_click[\'"]\)\}\);?', re.DOTALL
    )

    for filepath in js_files:
        if not os.path.exists(filepath):
            continue
            
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        original_content = content
        
        content = pattern.sub('', content)
        content = min_pattern.sub('', content)

        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Cleaned JS in {filepath}")

if __name__ == '__main__':
    clean_js('.')
