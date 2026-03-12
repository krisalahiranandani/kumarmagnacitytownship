document.addEventListener('DOMContentLoaded', () => {
    /* ==========================================================================
       Header Scroll Effect
       ========================================================================== */
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* ==========================================================================
       FAQ Accordion
       ========================================================================== */
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const isOpen = btn.getAttribute('aria-expanded') === 'true';
            // Close all
            document.querySelectorAll('.faq-question').forEach(b => {
                b.setAttribute('aria-expanded', 'false');
                b.nextElementSibling.classList.remove('open');
            });
            // Open clicked (if it was closed)
            if (!isOpen) {
                btn.setAttribute('aria-expanded', 'true');
                btn.nextElementSibling.classList.add('open');
            }
        });
    });

    /* ==========================================================================
       Mobile Menu Toggle
       ========================================================================== */
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    mobileMenuBtn.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinksContainer.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    /* ==========================================================================
       ScrollSpy: Highlight Active Link
       ========================================================================== */
    const sections = document.querySelectorAll('section[id]');

    function scrollSpy() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const langPrefix = document.documentElement.lang === 'mr' ? '/mr' : '';
            const cleanPath = langPrefix + (sectionId === 'hero' ? '/' : '/' + sectionId);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(a => {
                    const href = a.getAttribute('href');
                    if (href === cleanPath || (sectionId === 'about' && href === '/about') || (sectionId === 'about' && href === '/mr/about')) {
                        a.classList.add('active');
                    } else {
                        a.classList.remove('active');
                    }
                });
            }
        });
    }
    window.addEventListener('scroll', scrollSpy);

    // Enhanced Navigation Interceptor (Handles hashes and cross-page section links)
    document.querySelectorAll('a[href^="/"]').forEach(anchor => {
        const href = anchor.getAttribute('href');
        // Filter out actual page links and language switches
        if (['/', '/mr', '/index.html'].includes(href) || 
            href.startsWith('/pages') || 
            href.includes('investor-guide') || 
            href.includes('.html') || 
            href.includes('blog/')) return;

        anchor.addEventListener('click', function (e) {
            let sectionId = href.includes('#') ? href.split('#').pop() : href.split('/').pop();
            if (!sectionId) return;

            const targetElement = document.getElementById(sectionId);

            if (targetElement) {
                e.preventDefault();
                const headerOffset = 90;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // Update URL to clean path without hash
                if (history.pushState) {
                    const cleanPath = href.replace('#', '');
                    history.pushState(null, null, cleanPath);
                }
            } else {
                // If target not found and it's a section link, it must be on the homepage
                // Redirect to homepage with hash
                if (!href.includes('.html') && !href.startsWith('/pages')) {
                    e.preventDefault();
                    window.location.href = '/#' + sectionId;
                }
            }
        });
    });

    // Handle initial hash on page load for smooth entry
    if (window.location.hash) {
        setTimeout(() => {
            const hash = window.location.hash.substring(1);
            const targetElement = document.getElementById(hash);
            if (targetElement) {
                const headerOffset = 90;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }, 300);
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    /* ==========================================================================
       GSAP & ScrollTrigger Animations
       ========================================================================== */
    gsap.registerPlugin(ScrollTrigger);

    // Hero Sequence Animation
    const tl = gsap.timeline();
    tl.fromTo('.gsap-fade', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out", delay: 0.3 })
        .fromTo('.hero-title', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.4")
        .fromTo('.hero-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.6")
        .fromTo('.hero-cta a', { opacity: 0, scale: 0.95, y: 10 }, { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.15, ease: "back.out(1.5)" }, "-=0.2");

    // Hero Background Parallax
    gsap.to('.hero-bg', {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // Reveal Up Logic
    gsap.utils.toArray('.reveal-up').forEach(elem => {
        gsap.fromTo(elem, { opacity: 0, y: 60 }, {
            opacity: 1, y: 0, duration: 1, ease: "power3.out",
            scrollTrigger: {
                trigger: elem,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });
    });

    // Reveal Sides
    gsap.utils.toArray('.reveal-left').forEach(elem => {
        gsap.fromTo(elem, { opacity: 0, x: -60 }, {
            opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: {
                trigger: elem,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });

    gsap.utils.toArray('.reveal-right').forEach(elem => {
        gsap.fromTo(elem, { opacity: 0, x: 60 }, {
            opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: {
                trigger: elem,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });

    // Plots Grid Stagger
    gsap.fromTo('.plot-card', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out",
        scrollTrigger: {
            trigger: ".plots-grid",
            start: "top 85%"
        }
    });

    // Invest Points Stagger
    gsap.fromTo('.invest-point', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out",
        scrollTrigger: {
            trigger: ".investment-grid",
            start: "top 85%"
        }
    });

    /* ==========================================================================
       Counter Animation Code
       ========================================================================== */
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const suffix = counter.getAttribute('data-suffix') || '';

        ScrollTrigger.create({
            trigger: counter,
            start: "top 90%",
            onEnter: () => {
                gsap.to(counter, {
                    innerHTML: target,
                    duration: 2,
                    snap: { innerHTML: target % 1 !== 0 ? 0.1 : 1 },
                    onUpdate: function () {
                        const val = Number(this.targets()[0].innerHTML);
                        counter.innerHTML = (target % 1 !== 0 ? val.toFixed(1) : Math.round(val)) + suffix;
                    },
                    ease: "power2.out"
                });
            },
            once: true
        });
    });

    /* ==========================================================================
       Swiper.js Initialization
       ========================================================================== */
    const swiper = new Swiper('.amenities-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    });

    // Initialize Swiper for Masterplan Gallery
    const gallerySwiper = new Swiper('.gallery-swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: true,
        }
    });

    // Initialize Swiper for Testimonials
    const testimonialsSwiper = new Swiper('.testimonials-swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 24,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.testimonials-pagination',
            clickable: true,
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 }
        }
    });

    /* ==========================================================================
       Form Submission Simulation
       ========================================================================== */
    const enquiryForm = document.getElementById('enquiryForm');
    const formMessage = document.getElementById('formMessage');

    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // 10-digit Phone Validation
            const phoneInput = this.querySelector('input[type="tel"]');
            const phoneValue = phoneInput.value.trim();
            const phoneRegex = /^[6-9]\d{9}$/;

            if (!phoneRegex.test(phoneValue)) {
                formMessage.style.display = 'block';
                formMessage.style.backgroundColor = '#f8d7da';
                formMessage.style.color = '#721c24';
                formMessage.style.border = '1px solid #f5c6cb';
                formMessage.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please enter a valid 10-digit Indian mobile number.';
                return;
            }

            // Honeypot check
            const honeypot = this.querySelector('input[name="honeypot"]').value;
            if (honeypot) {
                console.log("Spam detected!");
                return;
            }

            // Perform Actual Submission to FormSubmit
            const formData = new FormData(this);
            // Convert FormData to JSON for AJAX
            const data = {};
            formData.forEach((value, key) => { data[key] = value });

            fetch("https://formsubmit.co/ajax/propsmartrealty@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    // Success message in form
                    formMessage.style.display = 'block';
                    formMessage.style.backgroundColor = '#d4edda';
                    formMessage.style.color = '#155724';
                    formMessage.style.border = '1px solid #c3e6cb';
                    formMessage.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! Your exclusive layout tour request has been received.';

                    // Trigger Marketing Intelligence Events
                    if (typeof fbq === 'function') {
                        fbq('track', 'Lead');
                    }
                    if (typeof gtag === 'function') {
                        gtag('event', 'generate_lead', {
                            'event_category': 'engagement',
                            'event_label': 'form_submission'
                        });
                    }

                    // Show global thank you modal
                    const thankyouModal = document.getElementById('thankyou-modal');
                    if (thankyouModal) thankyouModal.classList.add('active');

                    // Redirect to thank-you page after 2 seconds
                    setTimeout(() => {
                        window.location.href = '/thank-you';
                    }, 2000);

                    // Reset form
                    enquiryForm.reset();
                })
                .catch(error => {
                    console.error('Error:', error);
                    formMessage.style.display = 'block';
                    formMessage.style.backgroundColor = '#f8d7da';
                    formMessage.style.color = '#721c24';
                    formMessage.innerHTML = '<i class="fas fa-exclamation-circle"></i> There was an error. Please try again or contact us via WhatsApp.';
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                });
        });
    }

    // Thank You Modal Close Logic
    const thankyouModal = document.getElementById('thankyou-modal');
    const closeThankyou = document.getElementById('close-thankyou');
    if (thankyouModal && closeThankyou) {
        closeThankyou.addEventListener('click', () => thankyouModal.classList.remove('active'));
        thankyouModal.addEventListener('click', (e) => {
            if (e.target === thankyouModal) thankyouModal.classList.remove('active');
        });
    }

    /* ==========================================================================
       Phased Enquiry Popup Controller
       ========================================================================== */
    const enquiryModal = document.getElementById('enquiry-modal');
    const closeEnquiry = document.getElementById('close-enquiry');
    const popupForm = document.getElementById('popupEnquiryForm');
    const popupFormMessage = document.getElementById('popupFormMessage');

    function showEnquiryModal() {
        if (!sessionStorage.getItem('enquiryModalShown') && enquiryModal) {
            enquiryModal.classList.add('active');
            sessionStorage.setItem('enquiryModalShown', 'true');
        }
    }

    // 1. Timed Trigger (15 Seconds)
    setTimeout(() => {
        showEnquiryModal();
    }, 15000);

    // 2. Exit Intent Trigger (Desktop focus only)
    document.addEventListener('mouseleave', (e) => {
        if (e.clientY < 0) {
            showEnquiryModal();
        }
    });

    // 3. Modal Close Logic
    if (enquiryModal && closeEnquiry) {
        closeEnquiry.addEventListener('click', () => enquiryModal.classList.remove('active'));
        enquiryModal.addEventListener('click', (e) => {
            if (e.target === enquiryModal) enquiryModal.classList.remove('active');
        });
    }

    // 4. Popup Form Submission
    if (popupForm) {
        popupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => { data[key] = value });

            fetch("https://formsubmit.co/ajax/propsmartrealty@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => {
                    if (popupFormMessage) {
                        popupFormMessage.style.display = 'block';
                        popupFormMessage.style.backgroundColor = '#d4edda';
                        popupFormMessage.style.color = '#155724';
                        popupFormMessage.style.border = '1px solid #c3e6cb';
                        popupFormMessage.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! Your enquiry has been sent.';
                    }

                    // Track events
                    if (typeof fbq === 'function') fbq('track', 'Lead');
                    if (typeof gtag === 'function') gtag('event', 'generate_lead', { 'event_category': 'engagement', 'event_label': 'popup_form' });

                    setTimeout(() => {
                        if (enquiryModal) enquiryModal.classList.remove('active');
                        popupForm.reset();
                        if (popupFormMessage) popupFormMessage.style.display = 'none';
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;

                        // Show global thank you modal and then redirect
                        const thankyouModal = document.getElementById('thankyou-modal');
                        if (thankyouModal) thankyouModal.classList.add('active');
                        
                        setTimeout(() => {
                            window.location.href = '/thank-you';
                        }, 2000);
                    }, 2000);
                })
                .catch(error => {
                    console.error('Error:', error);
                    if (popupFormMessage) {
                        popupFormMessage.style.display = 'block';
                        popupFormMessage.style.backgroundColor = '#f8d7da';
                        popupFormMessage.style.color = '#721c24';
                        popupFormMessage.style.border = '1px solid #f5c6cb';
                        popupFormMessage.innerHTML = '<i class="fas fa-exclamation-circle"></i> Error. Please try again or use WhatsApp.';
                    }
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                });
        });
    }

    /* ==========================================================================
       Plot Price & EMI Calculator
       ========================================================================== */
    const plotSizeInput = document.getElementById('plotSize');
    const baseRateInput = document.getElementById('baseRate');
    const totalPriceDisplay = document.getElementById('totalPrice');

    const loanAmountInput = document.getElementById('loanAmount');
    const interestRateInput = document.getElementById('interestRate');
    const interestValueDisplay = document.getElementById('interestValue');
    const tenureInput = document.getElementById('tenure');
    const tenureValueDisplay = document.getElementById('tenureValue');
    const monthlyEMIDisplay = document.getElementById('monthlyEMI');

    function formatCurrency(amount) {
        if (amount >= 10000000) {
            return '₹ ' + (amount / 10000000).toFixed(2) + ' Cr*';
        } else if (amount >= 100000) {
            return '₹ ' + (amount / 100000).toFixed(1) + ' L*';
        } else {
            return '₹ ' + Math.round(amount).toLocaleString('en-IN') + '*';
        }
    }

    function calculatePlotPrice() {
        const size = parseFloat(plotSizeInput.value) || 0;
        const rate = parseFloat(baseRateInput.value) || 0;
        const total = size * rate;
        totalPriceDisplay.textContent = formatCurrency(total);

        // Auto-update loan amount suggestion (70% of total)
        loanAmountInput.value = Math.round(total * 0.7);
        calculateEMI();
    }

    function calculateEMI() {
        const principal = parseFloat(loanAmountInput.value) || 0;
        const annualRate = parseFloat(interestRateInput.value) || 8.5;
        const monthlyRate = annualRate / 12 / 100;
        const years = parseFloat(tenureInput.value) || 20;
        const months = years * 12;

        interestValueDisplay.textContent = annualRate.toFixed(1) + '%';
        tenureValueDisplay.textContent = years + ' Years';

        if (principal > 0 && monthlyRate > 0 && months > 0) {
            const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
            monthlyEMIDisplay.textContent = '₹ ' + Math.round(emi).toLocaleString('en-IN') + '*';
        } else {
            monthlyEMIDisplay.textContent = '₹ 0*';
        }
    }

    if (plotSizeInput) {
        plotSizeInput.addEventListener('input', calculatePlotPrice);
        interestRateInput.addEventListener('input', calculateEMI);
        tenureInput.addEventListener('input', calculateEMI);
        loanAmountInput.addEventListener('input', calculateEMI);

        // Initial calculation
        calculatePlotPrice();
    }

    /* ==========================================================================
       Marathi Localization System
       ========================================================================== */
    const translations = {
        mr: {
            "nav-concept": "संकल्पना",
            "nav-neighborhood": "परिसर",
            "nav-plots": "प्लॉट्स आणि किंमत",
            "nav-investment": "गुंतवणूक",
            "nav-contact": "आताच चौकशी करा",
            "inventory-title": "प्लॉट्सची उपलब्धता",
            "inventory-subtitle": "प्लॉट्सचा आकार आणि सद्य स्थिती पाहण्यासाठी खालील नकाशावर माउस फिरवा.",
            "legend-available": "उपलब्ध",
            "legend-sold": "बुक केलेले",
            "legend-fast": "वेगाने विक्री",
            "hero-title": "भव्य आणि प्रीमियम जीवनशैली",
            "hero-subtitle": "पुण्यातील सर्वात प्रतिष्ठित विकासकाकडून प्रीमियम NA प्लॉट्स. हडपसर, मगरपट्टा आणि खराडी जवळ स्वप्नवत घर उभारा.",
            "about-title": "भव्यतेचे स्वप्न",
            "about-lead": "कुमार मॅग्नासिटी मांजरी बीके मध्ये आपले स्वागत आहे, जिथे निसर्गाची शांतता आणि आधुनिक शहरी जीवनाची सोय एकत्र येते.",
            "about-p1": "हडपसर आणि आसपासच्या परिसरातील NA बंगला प्लॉट्ससाठी सर्वात जास्त मागणी असलेले ठिकाण म्हणून, ही १५० एकरची टाउनशिप विशेषत्वाचे नवीन मानक ठरवते. आपण मगरपट्टा मधील प्लॉट्स, खराडी मधील प्रीमियम जमीन किंवा सोलापूर हायवे आणि शेवाळेवाडी जवळील विशाल प्लॉट्स शोधत असाल, कुमार मॅग्नासिटी सर्वोत्तम कनेक्टिव्हिटी आणि जीवनशैली प्रदान करते.",
            "about-f1": "एकात्मिक 'मिनी-सिटी' इकोसिस्टम",
            "about-f2": "मगरपट्टा आणि खराडी आयटी पार्क्सशी अखंड कनेक्टिव्हिटी",
            "about-f3": "प्रीमियम अंडरग्राउंड युटिलिटीज इन्फ्रास्ट्रक्चर",
            "about-f4": "मांजरी आणि शेवाळेवाडी जवळील सर्वोत्तम NA प्लॉट्स",
            "about-badge": "एकर एकात्मिक टाउनशिप",
            "test-title": "आमचे ग्राहक काय म्हणतात",
            "test-subtitle": "५००+ कुटुंबांनी कुमार मॅग्नासिटीला आपला घराचा पत्ता बनवले आहे.",
            "test-p1": "\"आम्ही २ वर्षांहून अधिक काळ मगरपट्टा जवळ NA प्लॉट्स शोधत होतो. कुमार मॅग्नासिटीने प्रत्येक गरज पूर्ण केली — प्रीमियम सोयीसुविधा, विश्वासार्ह विकासक आणि योग्य आकाराचे प्लॉट्स. आमच्या आयुष्यातील सर्वोत्तम गुंतवणूक!\"",
            "test-n1": "राजेश आणि प्रिया शर्मा",
            "test-l1": "आयटी प्रोफेशनल, खराडी",
            "test-p2": "\"हडपसरमध्ये अनेक वर्षे भाड्याने राहिल्यानंतर, शेवटी एका ब्रँडेड टाउनशिपमध्ये आमची स्वतःची जमीन आहे. NA क्लिअरन्स पूर्णपणे त्रासरहित होता. खरेदी प्रक्रिया सुलभ आणि पारदर्शक होती.\"",
            "test-n2": "संदीप कुलकर्णी",
            "test-l2": "सीनियर मॅनेजर, मगरपट्टा सिटी",
            "test-p3": "\"लोकेशन अविश्वसनीय आहे. ईऑन आयटी पार्क १० मिनिटांत, फुरसुंगी १५ मिनिटांत. आणि सोयीसुविधा — नुसते क्लबहाऊस पाहूनच पैसे वसूल होतात. मी माझ्या तीन मित्रांनाही सुचवले आणि त्यांनीही बुकिंग केले!\"",
            "test-n3": "अनन्या आणि विक्रम देसाई",
            "test-l3": "सॉफ्टवेअर इंजिनियर्स, खराडी",
            "test-p4": "\"माझे वडील नेहमी म्हणायचे: जमीन खरेदी करा, फ्लॅट नको. कुमार मॅग्नासिटी हा वारसा आणि आधुनिक जीवनशैलीचा परिपूर्ण मिलाफ आहे. कुमारचा ५६ वर्षांचा विश्वास — आमच्यासाठी तेच पुरेसे होते.\"",
            "test-n4": "पूजा मेहता",
            "test-l4": "उद्योजक, हडपसर",
            "test-p5": "\"सोलापूर हायवे जवळ या किमतीत प्लॉट मिळणे दुर्मिळ आहे. ५ वर्षात या जमिनीची किंमत ३ पटीने वाढेल. कुमार मॅग्नासिटी ही सध्या पुणे रिअल इस्टेटमधील सर्वात स्मार्ट खरेदी आहे.\"",
            "test-n5": "अरुण पाटील",
            "test-l5": "रिअल इस्टेट गुंतवणूकदार, वानवडी",
            "bank-headline": "सोप्या गृहकर्ज मंजुरीसाठी आमचे बँकिंग पार्टनर्स",
            "neigh-title": "पुणे इस्टचे हृदय",
            "neigh-subtitle": "पुण्यातील सर्वात मोठी आयटी हब, शाळा आणि जीवनशैलीच्या ठिकाणांशी अखंड कनेक्टिव्हिटीचा अनुभव घ्या.",
            "conn-matrix": "कनेक्टिव्हिटी मॅट्रिक्स",
            "loc-highway": "सोलापूर हायवे (NH-65)",
            "loc-station": "मांजरी रेल्वे स्टेशन",
            "loc-hadapsar": "हडपसर / मगरपट्टा सिटी",
            "loc-sp": "एसपी इन्फोसिटी (फुरसुंगी)",
            "loc-eon": "ईऑन आयटी पार्क (खराडी)",
            "loc-airport": "पुणे विमानतळ",
            "time-2m": "०२ मिनिटे",
            "time-5m": "०५ मिनिटे",
            "time-10m": "१० मिनिटे",
            "time-12m": "१२ मिनिटे",
            "time-15m": "१५ मिनिटे",
            "time-25m": "२५ मिनिटे",
            "roi-title": "पुणे इस्ट इन्व्हेस्टमेंट ROI डॅशबोर्ड",
            "roi-subtitle": "मांजरी-हडपसर पट्ट्यातील जमिनीच्या वाढत्या किमती आणि संपत्ती निर्मितीच्या क्षमतेचे विश्लेषण.",
            "app-trend": "किंमत वाढीचा कल (प्रति चौ. फूट)",
            "roi-growth": "१२.५% CAGR",
            "roi-growth-desc": "गेल्या ५ वर्षात मांजरी बीके जमिनीच्या मूल्यात सातत्यपूर्ण वार्षिक वाढ.",
            "rental-yield": "उच्च रेंटल उत्पन्न",
            "yield-desc": "या पट्ट्यातील स्वतंत्र बंगल्यांना अपार्टमेंट्सपेक्षा ३०% जास्त भाडे मिळते.",
            "asset-safety": "सर्वात सुरक्षित मालमत्ता",
            "safety-desc": "स्वतंत्र ७/१२ उतारे असलेले NA प्लॉट्स शून्य जोखीम आणि जास्तीत जास्त तरलता सुनिश्चित करतात.",
            "magnet-title": "२०२६ पुणे इस्ट ROI रिपोर्ट डाऊनलोड करा",
            "magnet-desc": "भविष्यातील विकास, आगामी रिंग रोडचा प्रभाव आणि किमतींच्या अंदाजावरील संपूर्ण रिपोर्ट मिळवा.",
            "magnet-btn": "PDF रिपोर्ट डाऊनलोड करा",
            "progress-title": "ऑन-ग्राउंड विकास टप्पे",
            "progress-subtitle": "तुमच्या गुंतवणुकीला आकार घेताना पहा. प्रत्येक चौरस फूटमध्ये पारदर्शकता.",
            "prog-roads": "अंतर्गत रस्ते आणि पायाभूत सुविधा",
            "prog-plots": "प्लॉट्सची सीमांकन",
            "prog-clubhouse": "भव्य क्लबहाऊसचे बांधकाम",
            "prog-landscape": "लँडस्केप आणि स्ट्रीटलाइट्स",
            "faq-q1": "NA प्लॉट म्हणजे काय आणि ते महत्त्वाचे का आहे?",
            "faq-a1": "NA (नॉन-ॲग्रिकल्चरल) प्लॉट्स हे शेतीसाठी वापरल्या जाणाऱ्या जमिनीचे निवासी/बिगरशेती वापरासाठी कायदेशीररित्या रूपांतरित केलेले प्लॉट्स असतात. NA प्लॉट खरेदी केल्यामुळे आपण कायदेशीररित्या बंगला बांधू शकता. कुमार मॅग्नासिटी मधील सर्व प्लॉट्स पूर्णपणे NA-मान्यताप्राप्त आहेत, जे तुम्हाला कायदेशीर सुरक्षितता देतात.",
            "faq-q2": "कुमार मॅग्नासिटी रेरा (RERA) नोंदणीकृत आहे का?",
            "faq-a2": "होय. कुमार मॅग्नासिटी हा पूर्णपणे रेरा-नोंदणीकृत प्रकल्प आहे. महा-रेरा नोंदणी क्रमांक <strong>P52100052096</strong> आहे, जो maharera.mahaonline.gov.in वर तपासला जाऊ शकतो. हे कायदेशीर पालन आणि प्रकल्प वेळेवर पूर्ण होण्याची खात्री देते.",
            "faq-q3": "प्लॉटचा आकार आणि सुरुवातीची किंमत काय आहे?",
            "faq-a3": "प्लॉट्सची सुरुवात <strong>१७००+ चौ. फूट</strong> पासून होते आणि सुरुवातीची किंमत <strong>₹१.४९ कोटी*</strong> आहे. मोकळ्या प्लॉटचा आकार तुम्हाला तुमच्या स्वप्नातील बंगला, गार्डन आणि पार्किंगसह डिझाइन करण्याचे पूर्ण स्वातंत्र्य देतो.",
            "faq-q4": "कुमार मॅग्नासिटी मगरपट्टा आणि खराडी आयटी पार्क्सपासून किती दूर आहे?",
            "faq-a4": "मांजरी येथील कुमार मॅग्नासिटी रणनीतीकदृष्ट्या <strong>मगरपट्टा सिटी आयटी पार्क</strong> (~३ किमी) आणि <strong>खराडी आयटी पार्क (ईऑन फ्री झोन)</strong> (~६ किमी) पासून काही मिनिटांच्या अंतरावर आहे, ज्यामुळे हे पूर्व पुण्यातील आयटी प्रोफेशनल्ससाठी एक आदर्श ठिकाण आहे.",
            "faq-q5": "टाउनशिपमध्ये कोणत्या सोयीसुविधा आहेत?",
            "faq-a5": "कुमार मॅग्नासिटीमध्ये <strong>५०+ जागतिक दर्जाच्या सोयीसुविधा</strong> आहेत, ज्यामध्ये ऑलिम्पिक आकाराचा स्विमिंग पूल, अत्याधुनिक क्लबहाऊस, लँडस्केप गार्डन्स, जॉगिंग ट्रॅक, मुलांसाठी खेळण्याची जागा, २४/७ सुरक्षा आणि बरेच काही समाविष्ट आहे.",
            "faq-q6": "मी बुकिंग करण्यापूर्वी साईट व्हिजिट करू शकतो का?",
            "faq-a6": "नक्कीच. आम्ही सर्व संभाव्य खरेदीदारांना विनंती करतो की त्यांनी प्रत्यक्ष टाउनशिपचा अनुभव घ्यावा. फक्त <a href='#contact'>चौकशी फॉर्म</a> भरा किंवा आम्हाला <a href='https://wa.me/917744009295?text=Hi!%20I'm%20interested%20in%20a%20site%20visit%20to%20Kumar%20Magnacity%20NA%20Plots' target='_blank'>व्हॉट्सॲपवर मेसेज करा</a> आणि आमची टीम आपल्या सोयीनुसार खाजगी सहल आयोजित करेल.",
            "modal-title": "थांबा! २०२६ ROI संधी मुकू नका",
            "modal-desc": "तुम्ही जाण्यापूर्वी, आमचा <strong>एक्सक्लुझिव्ह २०२६ पुणे इस्ट इन्व्हेस्टमेंट रिपोर्ट</strong> मिळवा. हडपसरमधील जमीन या दशकातील सर्वात सुरक्षित संपत्ती निर्माता का आहे ते जाणून घ्या.",
            "modal-btn": "मला PDF रिपोर्ट पाठवा",
            "banner-text": "⚠️ <strong>किंमत लवकरच वाढणार!</strong> पुढील टप्पा गाठण्यासाठी शिल्लक वेळ:",
            "banner-btn": "चालू किंमत लॉक करा",
            "thankyou-title": "तुमची चौकशी प्राप्त झाली!",
            "thankyou-desc": "<strong>कुमार मॅग्नासिटी</strong> मध्ये स्वारस्य दाखवल्याबद्दल धन्यवाद. आमचे विक्री तज्ज्ञ २४ तासांच्या आत तुमच्याशी संपर्क साधतील.",
            "enquiry-modal-title": "मोठ्या संधीची चौकशी करा!",
            "enquiry-modal-desc": "तुमच्या स्वप्नातील बंगल्याच्या प्लॉटसाठी आजच आमचा संपर्क साधा.",
            "form-name-label": "पूर्ण नाव",
            "form-phone-label": "मोबाईल नंबर",
            "form-email-label": "ईमेल पत्ता",
            "form-interest-label": "तुमची आवड",
            "form-submit-btn": "सबमिट करा"
        },
        en: {
            "nav-concept": "The Concept",
            "nav-neighborhood": "Neighborhood",
            "nav-plots": "Our Plots",
            "nav-investment": "Investment",
            "nav-contact": "Enquire Now",
            "inventory-title": "Real-Time Plot Availability",
            "inventory-subtitle": "Hover over the plots below to check dimensions and current booking status.",
            "legend-available": "Available",
            "legend-sold": "Sold out",
            "legend-fast": "Fast Selling",
            "hero-title": "Absolute Premium Living",
            "hero-subtitle": "Discover genuine Branded NA Bungalow Plots by Pune's most reputed developer. The ultimate destination for plots for sale in Pune East.",
            "about-title": "A Vision of Grandeur",
            "about-lead": "Welcome to Kumar Magnacity in Manjri BK, where the serenity of nature meets the convenience of modern urban living.",
            "about-p1": "As the most sought-after destination for NA Bungalow Plots in Hadapsar and the surrounding areas, this 150-acre township redefines exclusivity. Whether you are looking for plots in Magarpatta, premium land in Kharadi, or expansive plots on Solapur Highway Pune and Shewalewadi, Kumar Magnacity offers the ultimate connectivity and lifestyle.",
            "about-f1": "Integrated \"Mini-City\" Ecosystem",
            "about-f2": "Seamless Connectivity to Magarpatta & Kharadi IT Parks",
            "about-f3": "Premium Underground Utilities Infrastructure",
            "about-f4": "The Best NA Plots near Manjari and Shewalewadi",
            "about-badge": "Acre Integrated Township",
            "test-title": "What Our Buyers Say",
            "test-subtitle": "500+ families have made Kumar Magnacity their home address.",
            "test-p1": "\"We were looking for NA plots near Magarpatta for over 2 years. Kumar Magnacity ticked every box — premium amenities, trusted developer, and perfectly sized plots. Best investment of our lives!\"",
            "test-n1": "Rajesh & Priya Sharma",
            "test-l1": "IT Couple, Kharadi",
            "test-p2": "\"After years of renting in Hadapsar, we finally own land in a branded township. The NA clearance was completely hassle-free. The purchase process was smooth and transparent.\"",
            "test-n2": "Sandeep Kulkarni",
            "test-l2": "Senior Manager, Magarpatta City",
            "test-p3": "\"The location is unbelievable. 10 minutes to EON IT Park, 15 minutes to Phursungi. And the amenities — the clubhouse alone is worth it. I recommended three friends who all booked too!\"",
            "test-n3": "Ananya & Vikram Desai",
            "test-l3": "Software Engineers, Kharadi",
            "test-p4": "\"My father always said: buy land, never apartments. Kumar Magnacity is the perfect blend of legacy and modern lifestyle. 56 years of Kumar's trust — that itself said enough for us.\"",
            "test-n4": "Pooja Mehta",
            "test-l4": "Entrepreneur, Hadapsar",
            "test-p5": "\"Investing in a plot near Solapur Highway at this price point is rare. In 5 years, this land will be worth 3X. Kumar Magnacity is the smartest buy in Pune real estate right now.\"",
            "test-n5": "Arun Patil",
            "test-l5": "Real Estate Investor, Wanowrie",
            "bank-headline": "Easy Home Loan Approvals From",
            "neigh-title": "The Heart of Pune East",
            "neigh-subtitle": "Experience unmatched connectivity to Pune's biggest IT hubs, schools, and lifestyle destinations.",
            "conn-matrix": "Connectivity Matrix",
            "loc-highway": "Solapur Highway (NH-65)",
            "loc-station": "Manjri Railway Station",
            "loc-hadapsar": "Hadapsar / Magarpatta City",
            "loc-sp": "SP Infocity (Phursungi)",
            "loc-eon": "EON IT Park (Kharadi)",
            "loc-airport": "Pune Airport",
            "time-2m": "02 Mins",
            "time-5m": "05 Mins",
            "time-10m": "10 Mins",
            "time-12m": "12 Mins",
            "time-15m": "15 Mins",
            "time-25m": "25 Mins",
            "roi-title": "Pune East Investment ROI Dashboard",
            "roi-subtitle": "Data-driven insights into land appreciation and wealth creation potential in the Manjri-Hadapsar corridor.",
            "app-trend": "Price Appreciation Trend (Per Sq. Ft.)",
            "roi-growth": "12.5% CAGR",
            "roi-growth-desc": "Consistent annual growth in Manjri Bk land values over the last 5 years.",
            "rental-yield": "High Rental Yield",
            "yield-desc": "Independent bungalows in this belt command 30% higher rentals than typical apartments.",
            "asset-safety": "Safest Asset Class",
            "safety-desc": "NA plots with individual 7/12 extracts ensure zero risk and maximum liquidity.",
            "magnet-title": "Download 2026 Pune East ROI Report",
            "magnet-desc": "Get the complete whitepaper on future development, upcoming Ring Road impact, and price forecasts.",
            "magnet-btn": "Download PDF Report",
            "progress-title": "On-Ground Development Milestone",
            "progress-subtitle": "Watch your investment take shape. Transparency in every square foot.",
            "prog-roads": "Internal Roads & Infrastructure",
            "prog-plots": "Individual Plot Demarcation",
            "prog-clubhouse": "Grand Clubhouse Construction",
            "prog-landscape": "Landscape & Streetlights",
            "faq-q1": "What is an NA plot and why is it important?",
            "faq-a1": "NA (Non-Agricultural) plots are legally converted from agricultural land to residential/non-agricultural use. Purchasing an NA plot ensures you can legally construct a bungalow. All plots at Kumar Magnacity are fully NA-approved, giving you absolute peace of mind and clear title ownership.",
            "faq-q2": "Is Kumar Magnacity RERA registered?",
            "faq-a2": "Yes. Kumar Magnacity is a fully RERA-registered project. The MahaRERA registration number is <strong>P52100052096</strong>, verifiable at maharera.mahaonline.gov.in. This guarantees legal compliance and project delivery timelines.",
            "faq-q3": "What is the plot size and starting price?",
            "faq-a3": "Plots start from <strong>1700+ sq.ft.</strong> with a starting price of <strong>₹1.49 Cr*</strong>. The spacious plot sizes ensure you have complete freedom to design your dream bungalow with garden, parking, and personalized architecture.",
            "faq-q4": "How far is Kumar Magnacity from Magarpatta and Kharadi IT Parks?",
            "faq-a4": "Kumar Magnacity at Manjari is strategically located within minutes of <strong>Magarpatta City IT Park</strong> (~3 km) and <strong>Kharadi IT Park (EON Free Zone)</strong> (~6 km), making it the ideal home address for IT professionals working in East Pune.",
            "faq-q5": "What amenities does the township offer?",
            "faq-a5": "Kumar Magnacity offers <strong>50+ world-class amenities</strong> including an Olympic-sized swimming pool, a state-of-the-art clubhouse, landscaped gardens, a jogging track, children's play areas, 24/7 security, underground utilities, and much more — all within a self-sustaining 150-acre township.",
            "faq-q6": "Can I visit the site before booking?",
            "faq-a6": "Absolutely. We encourage all prospective buyers to visit and experience the township in person. Simply fill out the <a href='#contact'>enquiry form</a> or <a href='https://wa.me/917744009295?text=Hi!%20I'm%20interested%20in%20a%20site%20visit%20to%20Kumar%20Magnacity%20NA%20Plots' target='_blank'>message us on WhatsApp</a> and our team will arrange an exclusive private tour at your convenience.",
            "modal-title": "Wait! Don't Miss the 2026 ROI Boom",
            "modal-desc": "Before you go, secure our <strong>Exclusive 2026 Pune East Investment Whitepaper</strong>. Discover why land in Hadapsar is the safest wealth creator this decade.",
            "modal-btn": "Send Me the PDF Report",
            "banner-text": "⚠️ <strong>Price Revision Incoming!</strong> Next appreciation milestone in:",
            "banner-btn": "Lock Current Price",
            "thankyou-title": "Enquiry Received!",
            "thankyou-desc": "Thank you for your interest in <strong>Kumar Magnacity</strong>. Our dedicated sales expert will contact you within 24 hours to schedule your exclusive site tour.",
            "enquiry-modal-title": "Secure Your Future Today!",
            "enquiry-modal-desc": "Get exclusive details on premium NA Bungalow Plots at Kumar Magnacity.",
            "form-name-label": "Full Name",
            "form-phone-label": "Phone Number",
            "form-email-label": "Email Address",
            "form-interest-label": "Interested In",
            "form-submit-btn": "Submit Enquiry"
        }
    };

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update active class on buttons
        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.getElementById(`lang-${lang}`);
        if (activeBtn) activeBtn.classList.add('active');
    }

    document.getElementById('lang-en').addEventListener('click', () => updateLanguage('en'));
    document.getElementById('lang-mr').addEventListener('click', () => updateLanguage('mr'));

    // Mobile Instruction Update
    if ('ontouchstart' in window) {
        const subtitle = document.querySelector('.inventory-subtitle');
        if (subtitle) {
            subtitle.setAttribute('data-i18n', 'inventory-subtitle-mobile');
            if (document.documentElement.lang === 'mr') {
                subtitle.innerHTML = 'प्लॉट्सचा आकार पाहण्यासाठी खालील नकाशावर टॅप करा.';
            } else {
                subtitle.innerHTML = 'Tap on the plots below to check dimensions and status.';
            }
        }
    }


    /* ==========================================================================
       Dynamic Inventory Controller
       ========================================================================== */
    async function loadInventory() {
        try {
            const response = await fetch('inventory.json');
            const data = await response.json();

            data.plots.forEach(plotData => {
                const plotEl = document.querySelector(`.plot[data-plot="${plotData.id}"]`);
                if (plotEl) {
                    // Reset classes but keep 'plot'
                    plotEl.className.baseVal = 'plot';
                    plotEl.classList.add(plotData.status);
                    plotEl.setAttribute('data-size', plotData.size);
                    plotEl.setAttribute('data-status', plotData.status);
                }
            });
            console.log('Inventory Sync Complete:', data.lastUpdated);
        } catch (err) {
            console.warn('Inventory sync failed, using static fallback.', err);
        }
    }

    // Initial Load
    loadInventory();

    /* ==========================================================================
       Interactive Plot Map UI
       ========================================================================== */
    const tooltip = document.getElementById('plot-tooltip');
    document.querySelectorAll('.plot').forEach(plot => {
        plot.addEventListener('mouseenter', () => {
            const num = plot.getAttribute('data-plot') || 'N/A';
            const size = plot.getAttribute('data-size') || 'Consult Sales';
            let status = plot.getAttribute('data-status') || 'Available';

            if (status === 'sold') status = 'Sold Out';
            if (status === 'fast-selling') status = 'Fast Selling';
            if (status === 'available') status = 'Available';

            tooltip.innerHTML = `<strong>Plot: ${num}</strong><br>Size: ${size}<br>Status: ${status}`;
            tooltip.style.opacity = '1';
        });

        plot.addEventListener('mousemove', (e) => {
            const wrapper = document.querySelector('.svg-map-wrapper').getBoundingClientRect();
            tooltip.style.left = (e.clientX - wrapper.left + 20) + 'px';
            tooltip.style.top = (e.clientY - wrapper.top + 20) + 'px';
        });

        plot.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
        });

        // Admin Mode Toggle (Click in Admin Mode)
        plot.addEventListener('click', function () {
            if (document.body.classList.contains('admin-mode')) {
                const currentStatus = this.getAttribute('data-status');
                const statuses = ['available', 'sold', 'fast-selling'];
                const nextStatus = statuses[(statuses.indexOf(currentStatus) + 1) % statuses.length];

                this.className.baseVal = 'plot ' + nextStatus;
                this.setAttribute('data-status', nextStatus);
                console.log(`Plot ${this.getAttribute('data-plot')} updated to ${nextStatus}. Remember to save inventory.json!`);
            }
        });
    });

    /* ==========================================================================
       Secret Admin Mode Access
       ========================================================================== */
    let adminKeys = "";
    let logoClicks = 0;

    // Key sequence trigger (e.g. 'kumaradmin')
    window.addEventListener('keydown', (e) => {
        adminKeys += e.key.toLowerCase();
        if (adminKeys.includes('kumaradmin')) {
            enableAdminMode();
        }
        if (adminKeys.length > 20) adminKeys = "";
    });

    // Secret Click trigger (5 clicks on logo)
    const logoEmblem = document.querySelector('.logo-emblem');
    if (logoEmblem) {
        logoEmblem.addEventListener('click', (e) => {
            if (document.body.classList.contains('admin-mode')) return;
            logoClicks++;
            if (logoClicks >= 5) {
                enableAdminMode();
            }
            // Reset after 3 seconds of inactivity
            setTimeout(() => { logoClicks = 0; }, 3000);
        });
    }

    function enableAdminMode() {
        document.body.classList.add('admin-mode');
        alert('MASTERPIECE ADMIN MODE ON\n\nClick any plot to cycle through [Available -> Sold -> Fast Selling].');
        console.warn('ADMIN: Dynamic status updates are for preview only. Sync with inventory.json for persistence.');
        adminKeys = "";
    }



    /* ==========================================================================
       PHASE 17: CONVERSION PSYCHOLOGY & SCARCITY TRIGGERS
       ========================================================================== */


    // 2. Social Proof Toast Notifications
    const toastContainer = document.getElementById('toast-container');
    const toastMessages = [
        { name: "Rahul S. (Kharadi IT)", action: "downloaded the ROI Report" },
        { name: "Priya V. (Amanora)", action: "booked a site visit for P-104" },
        { name: "Sanjay M. (Magarpatta)", action: "enquired about 3 BHK plots" },
        { name: "Amit K. (EON IT Park)", action: "locked current price" },
        { name: "Deepa R. (Hadapsar)", action: "requested a personalized quote" }
    ];

    function showToast() {
        if (!toastContainer) return;
        const msg = toastMessages[Math.floor(Math.random() * toastMessages.length)];
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <div class="toast-icon"><i class="fas fa-check-circle"></i></div>
            <div class="toast-content">
                <strong>${msg.name}</strong>
                <p>just ${msg.action} • 1m ago</p>
            </div>
        `;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('fade-out');
            setTimeout(() => toast.remove(), 500);
        }, 6000);
    }

    // Start toasting after 20 seconds, repeat every 30
    setTimeout(showToast, 12000);
    setInterval(showToast, 25000);

    // 3. Exit Intent Popup Logic
    const exitModal = document.getElementById('exit-modal');
    const closeModal = document.getElementById('close-modal');
    let modalShown = false;

    document.addEventListener('mouseleave', (e) => {
        // Trigger only when mouse moves out of top viewport
        if (e.clientY < 0 && !modalShown) {
            triggerExitModal();
        }
    });

    // Fallback/Reinforcement: Track proximity to top edge
    document.addEventListener('mousemove', (e) => {
        if (e.clientY < 15 && !modalShown) {
            triggerExitModal();
        }
    });

    function triggerExitModal() {
        if (modalShown) return;
        if (exitModal) {
            exitModal.classList.add('active');
            modalShown = true;
            sessionStorage.setItem('exitModalShown', 'true');
        }
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => exitModal.classList.remove('active'));
    }

    // Also close on overlay click
    if (exitModal) {
        exitModal.addEventListener('click', (e) => {
            if (e.target === exitModal) exitModal.classList.remove('active');
        });
    }

    // Check session storage
    if (sessionStorage.getItem('exitModalShown')) modalShown = true;

    // 4. Progress Bar Scroll Animation Re-trigger (GSAP)
    gsap.utils.toArray('.progress-bar').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%'; // Reset for animation
        ScrollTrigger.create({
            trigger: bar,
            start: "top 90%",
            onEnter: () => {
                gsap.to(bar, { width: width, duration: 2, ease: "power2.out" });
            },
            once: true
        });
    });

    // 5. Interactive Brochure Download with Marketing Tracking
    const brochureBtns = document.querySelectorAll('.brochure-dl');
    if (brochureBtns.length > 0 && toastContainer) {
        brochureBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();

                // Track Marketing Event
                if (typeof fbq === 'function') {
                    fbq('trackCustom', 'download_brochure');
                    console.log(`Marketing Event Fired: fbq(download_brochure)`);
                }
                if (typeof gtag === 'function') {
                    gtag('event', 'download_brochure', {
                        'event_category': 'engagement',
                        'event_label': 'button_click'
                    });
                    console.log(`Marketing Event Fired: gtag(download_brochure)`);
                }

                const toast = document.createElement('div');
                toast.className = 'toast';
                // Show immediately
                toast.innerHTML = `
                    <div class="toast-icon"><i class="fas fa-spinner fa-spin"></i></div>
                    <div class="toast-content">
                        <strong>Preparing 3D Brochure...</strong>
                        <p>Optimizing heavy assets for your device.</p>
                    </div>
                `;
                toastContainer.appendChild(toast);

                setTimeout(() => {
                    toast.innerHTML = `
                        <div class="toast-icon icon-success" style="background: var(--color-gold-dark); color: white;"><i class="fas fa-check"></i></div>
                        <div class="toast-content">
                            <strong>Ready to Explore</strong>
                            <p>Opening 3D Experience now.</p>
                        </div>
                    `;
                    setTimeout(() => {
                        toast.classList.add('fade-out');
                        setTimeout(() => toast.remove(), 500);
                        window.open('https://kumarworld.com/brochure/magnacity-3d.pdf', '_blank');
                    }, 1500);
                }, 2500);
            });
        });
    }
});



