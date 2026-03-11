import os
import re

def fix_html_paths(base_dir):
    # Regex patterns for various attribute types
    patterns = [
        (r'src="assets/', 'src="/assets/'),
        (r'src="js/', 'src="/js/'),
        (r'href="css/', 'href="/css/'),
        (r'href="assets/', 'href="/assets/'),
        (r'href="favicon', 'href="/favicon'),
        (r'href="apple-touch-icon', 'href="/apple-touch-icon'),
        (r'content="assets/', 'content="/assets/'),
        (r'url\(\'assets/', "url('/assets/"),
        (r'url\("assets/', 'url("/assets/'),
    ]

    for root, dirs, files in os.walk(base_dir):
        # Skip hidden directories
        if '/.' in root:
            continue
        
        # Skip specific asset directories
        if any(x in root.split(os.sep) for x in ['node_modules', 'css', 'js', 'assets', '.git', '.gemini']):
            continue

        for file in files:
            if file.endswith('.html'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()

                original_content = content
                for pattern, replacement in patterns:
                    content = re.sub(pattern, replacement, content)

                if content != original_content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"Fixed paths in {filepath}")

if __name__ == "__main__":
    fix_html_paths(".")
