import os
import re

BASE_DIR = "/Users/vikasyewle/Desktop/kumarmagnacity"

STICKY_BAR_EN = """
    <!-- Lead Machine: Sticky Mobile Concierge Bar -->
    <div class="mobile-sticky-bar">
        <a href="tel:+912067082828" class="sticky-bar-btn sticky-call">
            <i class="fas fa-phone-alt"></i> Call Now
        </a>
        <a href="#contact" class="sticky-bar-btn sticky-enquire luxury-pulse">
            <i class="fas fa-calendar-check"></i> VIP Tour
        </a>
    </div>
"""

STICKY_BAR_MR = """
    <!-- Lead Machine: Sticky Mobile Concierge Bar (Marathi) -->
    <div class="mobile-sticky-bar">
        <a href="tel:+912067082828" class="sticky-bar-btn sticky-call">
            <i class="fas fa-phone-alt"></i> आत्ताच कॉल करा
        </a>
        <a href="#contact" class="sticky-bar-btn sticky-enquire luxury-pulse">
            <i class="fas fa-calendar-check"></i> VIP भेट बुक करा
        </a>
    </div>
"""

MODAL_EN = """
    <!-- Lead Machine: Exit-Intent Recovery Modal -->
    <div class="modal-overlay" id="exit-modal">
        <div class="modal-content">
            <button class="modal-close" id="close-modal">&times;</button>
            <i class="fas fa-chart-line modal-icon"></i>
            <h2 class="fw-bold mb-3">Download ROI Report</h2>
            <p class="mb-4">Get our exclusive 2026 price projection report for Manjari NA plots before you leave!</p>
            <form action="https://formspree.io/f/propsmartrealty@gmail.com" method="POST" class="text-start">
                <div class="mb-3">
                    <input type="text" name="name" class="form-control" placeholder="Full Name" required>
                </div>
                <div class="mb-3">
                    <input type="tel" name="phone" class="form-control" placeholder="Phone Number" required>
                </div>
                <button type="submit" class="btn-primary w-100">Download Now <i class="fas fa-download mx-2"></i></button>
            </form>
        </div>
    </div>
"""

MODAL_MR = """
    <!-- Lead Machine: Exit-Intent Recovery Modal (Marathi) -->
    <div class="modal-overlay" id="exit-modal">
        <div class="modal-content">
            <button class="modal-close" id="close-modal">&times;</button>
            <i class="fas fa-chart-line modal-icon"></i>
            <h2 class="fw-bold mb-3">ROI रिपोर्ट डाऊनलोड करा</h2>
            <p class="mb-4">जाण्यापूर्वी मांजरी NA प्लॉट्ससाठी आमचा विशेष २०२६ किमतींचा अंदाज रिपोर्ट मिळवा!</p>
            <form action="https://formspree.io/f/propsmartrealty@gmail.com" method="POST" class="text-start">
                <div class="mb-3">
                    <input type="text" name="name" class="form-control" placeholder="पूर्ण नाव" required>
                </div>
                <div class="mb-3">
                    <input type="tel" name="phone" class="form-control" placeholder="फोन नंबर" required>
                </div>
                <button type="submit" class="btn-primary w-100">आत्ताच डाऊनलोड करा <i class="fas fa-download mx-2"></i></button>
            </form>
        </div>
    </div>
"""

def refine_page(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    original = content
    is_mr = "/mr/" in file_path or file_path.endswith("mr.html")
    
    # 1. Update form actions globally
    content = re.sub(r'action="https://formspree.io/f/[^"]+"', 'action="https://formspree.io/f/propsmartrealty@gmail.com"', content)
    content = re.sub(r'action="mailto:[^"]+"', 'action="mailto:propsmartrealty@gmail.com?subject=Enquiry from Kumar Magnacity"', content)
    
    # 2. Inject Lead Machine UI if missing
    if "mobile-sticky-bar" not in content:
        bar = STICKY_BAR_MR if is_mr else STICKY_BAR_EN
        content = content.replace("</body>", bar + "\n</body>")
        
    if "exit-modal" not in content:
        modal = MODAL_MR if is_mr else MODAL_EN
        content = content.replace("</body>", modal + "\n</body>")
        
    # 3. Ensure scripts are updated
    content = content.replace('src="/js/scripts.js?v=20260312"', 'src="/js/scripts.js?v=20260408"')
    
    if content != original:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

# Run globally
for root, dirs, files in os.walk(BASE_DIR):
    if "node_modules" in root or ".git" in root or "scratch" in root:
        continue
    for file in files:
        if file == "index.html" or file.endswith(".html"):
            p = os.path.join(root, file)
            refine_page(p)

print("Global Lead Machine Refinement Complete.")
