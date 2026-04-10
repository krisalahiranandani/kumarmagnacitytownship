import os
import re

pages_dir = 'pages'
files = [f for f in os.listdir(pages_dir) if f.endswith('.html')]

# Sovereign Conversion Bar Snippets
conv_bar_en = """    <!-- Premium Sovereign Conversion Bar -->
    <div class="sovereign-conversion-bar">
        <a href="tel:+917744009295" class="conv-item conv-call shine-effect">
            <i class="fas fa-phone-alt"></i> Call Sales
        </a>
        <a href="https://wa.me/917744009295?text=Hi!%20I'm%20interested%20in%20Kumar%20Magnacity%20NA%20Plots" target="_blank" class="conv-item conv-whatsapp">
            <i class="fab fa-whatsapp"></i> WhatsApp
        </a>
    </div>"""

conv_bar_mr = """    <!-- Premium Sovereign Conversion Bar (Marathi) -->
    <div class="sovereign-conversion-bar">
        <a href="tel:+917744009295" class="conv-item conv-call shine-effect">
            <i class="fas fa-phone-alt"></i> कॉल सेल्स
        </a>
        <a href="https://wa.me/917744009295?text=नमस्कार! मला कुमार मॅग्नासिटी NA प्लॉट्समध्ये रस आहे." target="_blank" class="conv-item conv-whatsapp">
            <i class="fab fa-whatsapp"></i> व्हॉट्सॲप
        </a>
    </div>"""

toast_container = '<div id="toast-container" class="toast-container"></div>'

# 7/12 Magnet Snippets
magnet_en = """            <!-- Plot Documents Magnet -->
            <div class="glass-card mt-4 mb-5 p-4 reveal-up" style="background: rgba(10, 77, 60, 0.05); border: 1px solid rgba(197, 160, 89, 0.2); max-width: 800px; margin-left: auto; margin-right: auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                <div class="text-left" style="text-align: left; flex: 1; min-width: 300px;">
                    <h4 style="color: var(--color-primary); margin-bottom: 5px;"><i class="fas fa-file-contract"></i> Sample 7/12 & Master Plan</h4>
                    <p style="font-size: 0.9rem; margin: 0;">Get the sample 7/12 extract and high-resolution layout plan directly on your WhatsApp.</p>
                </div>
                <a href="#contact" class="btn-primary brochure-dl" style="padding: 10px 25px;">Get Copies Now</a>
            </div>"""

magnet_mr = """            <!-- Plot Documents Magnet -->
            <div class="glass-card mt-4 mb-5 p-4 reveal-up" style="background: rgba(10, 77, 60, 0.05); border: 1px solid rgba(197, 160, 89, 0.2); max-width: 800px; margin-left: auto; margin-right: auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                <div class="text-left" style="text-align: left; flex: 1; min-width: 300px;">
                    <h4 style="color: var(--color-primary); margin-bottom: 5px;"><i class="fas fa-file-contract"></i> नमुना ७/१२ आणि मास्टर प्लॅन</h4>
                    <p style="font-size: 0.9rem; margin: 0;">नमुना ७/१२ उतारा आणि हाय-रेझोल्यूशन लेआउट प्लॅन थेट तुमच्या व्हॉट्सॲपवर मिळवा.</p>
                </div>
                <a href="#contact" class="btn-primary brochure-dl" style="padding: 10px 25px;">प्रती मिळवा</a>
            </div>"""

for filename in files:
    path = os.path.join(pages_dir, filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    is_mr = filename.endswith('-mr.html')
    
    # 0. Ensure toast-container is present
    if 'id="toast-container"' not in content:
        content = content.replace('</body>', toast_container + '\n\n</body>')

    # 1. Replace/Insert Sovereign Conversion Bar
    new_conv = conv_bar_mr if is_mr else conv_bar_en
    legacy_cta_pattern = r'<!-- Sticky Mobile CTA -->.*?</div>'
    sovereign_pattern = r'<div class="sovereign-conversion-bar">.*?</div>'
    
    if re.search(sovereign_pattern, content, re.DOTALL):
        content = re.sub(sovereign_pattern, new_conv, content, flags=re.DOTALL)
    elif re.search(legacy_cta_pattern, content, re.DOTALL):
        content = re.sub(legacy_cta_pattern, new_conv, content, flags=re.DOTALL)
    else:
        # Avoid duplicate insertion if already present (though handled above)
        if 'class="sovereign-conversion-bar"' not in content:
            content = content.replace('</body>', new_conv + '\n</body>')

    # 2. Inject 7/12 Lead Magnet in Plots section
    subtitle_pattern = r'<p class="section-subtitle" data-i18n="inventory-subtitle">.*?</p>'
    if re.search(subtitle_pattern, content) and 'class="fas fa-file-contract"' not in content:
        new_magnet = magnet_mr if is_mr else magnet_en
        content = re.sub(subtitle_pattern, lambda m: m.group(0) + '\n\n' + new_magnet, content)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Processed {len(files)} files.")
