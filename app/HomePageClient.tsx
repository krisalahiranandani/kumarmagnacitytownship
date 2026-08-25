"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import SectionHeader from "@/components/SectionHeader";
import { useModal } from "@/lib/modal-context";
import { ArrowRight, Download, MapPin, ShieldCheck, Gem, Sparkles, Building2, Landmark } from "lucide-react";

// Lazy-loaded Below-the-fold components (Reduces First-Load JS payload significantly, Skeleton loaders prevent CLS)
const AmenityGrid = dynamic(() => import("@/components/AmenityGrid"), { 
  ssr: false,
  loading: () => <div className="w-full h-[600px] bg-white/5 animate-pulse rounded-[3rem]" />
});
const InvestmentMatrix = dynamic(() => import("@/components/InvestmentMatrix"), { 
  ssr: false,
  loading: () => <div className="w-full h-[400px] bg-primary/5 animate-pulse rounded-[3rem]" />
});
const InvestmentCalculator = dynamic(() => import("@/components/InvestmentCalculator"), { 
  ssr: false,
  loading: () => <div className="w-full h-[500px] bg-primary/5 animate-pulse rounded-[3rem]" />
});
const AdvancedEnquiryForm = dynamic(() => import("@/components/AdvancedEnquiryForm"), { 
  ssr: false,
  loading: () => <div className="w-full max-w-2xl mx-auto h-[600px] bg-white/5 animate-pulse rounded-[3rem]" />
});
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });
const SovereignBar = dynamic(() => import("@/components/SovereignBar"), { 
  ssr: false,
  loading: () => <div className="w-full h-[80px] bg-primary/5 animate-pulse" />
});
const InteractiveLayoutViewer = dynamic(() => import("@/components/InteractiveLayoutViewer"), { 
  ssr: false,
  loading: () => <div className="w-full aspect-video md:aspect-[21/9] bg-white/5 animate-pulse rounded-[2rem]" />
});
const InteractiveTownshipMap = dynamic(() => import("@/components/InteractiveTownshipMap"), { ssr: false });
const MasterplanSectorInspector = dynamic(() => import("@/components/MasterplanSectorInspector"), { ssr: false });
const WhatsAppCostSheetGenerator = dynamic(() => import("@/components/WhatsAppCostSheetGenerator"), { ssr: false });
const UnitComparisonMatrix = dynamic(() => import("@/components/UnitComparisonMatrix"), { ssr: false });
const PropertyComparison = dynamic(() => import("@/components/PropertyComparison"), { ssr: false });
const NRICurrencySuite = dynamic(() => import("@/components/NRICurrencySuite"), { ssr: false });
const SiteVisitScheduler = dynamic(() => import("@/components/SiteVisitScheduler"), { ssr: false });
const Township3DVisualizer = dynamic(() => import("@/components/Township3DVisualizer"), { ssr: false });
const MortgageEligibilitySuite = dynamic(() => import("@/components/MortgageEligibilitySuite"), { ssr: false });
const VirtualVRHub = dynamic(() => import("@/components/VirtualVRHub"), { ssr: false });
const InstantTokenBooking = dynamic(() => import("@/components/InstantTokenBooking"), { ssr: false });
const SiteVisitCabTracker = dynamic(() => import("@/components/SiteVisitCabTracker"), { ssr: false });
const LiveConstructionTracker = dynamic(() => import("@/components/LiveConstructionTracker"), { ssr: false });
const AIVoiceAssistant = dynamic(() => import("@/components/AIVoiceAssistant"), { ssr: false });
const SolarSustainabilitySuite = dynamic(() => import("@/components/SolarSustainabilitySuite"), { ssr: false });
const LegalTransparencyVault = dynamic(() => import("@/components/LegalTransparencyVault"), { ssr: false });
const PriceEscalationTimer = dynamic(() => import("@/components/PriceEscalationTimer"), { ssr: false });
const PriceComparisonMatrix = dynamic(() => import("@/components/PriceComparisonMatrix"), { ssr: false });
const CommuteTimeMatrix = dynamic(() => import("@/components/CommuteTimeMatrix"), { ssr: false });
const RentalYieldCalculator = dynamic(() => import("@/components/RentalYieldCalculator"), { ssr: false });
const WhatsAppCallbackScheduler = dynamic(() => import("@/components/WhatsAppCallbackScheduler"), { ssr: false });
const GoogleMapsCommandHub = dynamic(() => import("@/components/GoogleMapsCommandHub"), { ssr: false });
const GoogleReviewsShowcase = dynamic(() => import("@/components/GoogleReviewsShowcase"), { ssr: false });
const PuneMarketIntelligenceHub = dynamic(() => import("@/components/PuneMarketIntelligenceHub"), { ssr: false });

export default function Home() {
  const { openModal } = useModal();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // AUTOMATIC SOVEREIGN POPUP (Timed Engagement)
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem("hasSeenSovereignPopup");
      if (!hasSeenPopup) {
        openModal({ 
          title: "Sovereign Invitation", 
          subtitle: "Unlock the complete inventory suite and priority pricing for Phase 1.",
          source: "Timed Auto-Popup" 
        });
        sessionStorage.setItem("hasSeenSovereignPopup", "true");
      }
    }, 15000); // 15 Seconds
    return () => clearTimeout(timer);
  }, [openModal]);

  return (
    <main ref={containerRef} className="min-h-screen bg-light selection:bg-accent/30">
      <Header />
      
      {/* 1. CINEMATIC HERO 2.0 */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-dark">
        {/* Cinematic Media Layer */}
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0 bg-dark">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/assets/hero-bg.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/40 to-dark" />
          <div className="absolute -top-1/4 -right-1/4 w-full h-full bg-accent/10 blur-[150px] rounded-full opacity-30 animate-pulse-slow" />
        </motion.div>
        
        {/* Main Hero Focus */}
        <div className="container mx-auto max-w-7xl px-6 relative z-10 text-center space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-obsidian border border-accent/40 text-accent font-bold text-[10px] md:text-[11px] uppercase tracking-[0.4em] backdrop-blur-3xl shadow-2xl mx-auto ring-1 ring-white/10">
               <Gem size={14} className="animate-pulse text-accent" />
               150-ACRE MEGA TOWNSHIP • HADAPSAR ANNEXE, MANJARI PUNE
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-heading font-bold text-white leading-[0.88] tracking-tighter">
                The Heart of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent-hover italic font-light">New Pune</span>
              </h1>
              
              <p className="max-w-3xl mx-auto text-base md:text-xl lg:text-2xl text-white/50 font-light leading-relaxed px-4">
                100+ Acres of integrated township living by <span className="text-white font-medium">Kumar Properties</span> (59 Years Trust). 
                Featuring Podar International School, G+30 High-Rise 2 & 3 BHK Luxury Apartments, and Premium NA Villa Plots.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0px 25px 80px rgba(212,175,55,0.4)" }}
                whileTap={{ scale: 0.95 }}
                animate={{ boxShadow: ["0px 10px 30px rgba(212,175,55,0.2)", "0px 20px 60px rgba(212,175,55,0.5)", "0px 10px 30px rgba(212,175,55,0.2)"] }}
                transition={{ boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
                onClick={() => openModal({ title: "Sovereign Plot Tour", source: "Hero Primary" })}
                className="w-full sm:w-auto group bg-accent text-dark px-12 py-5 rounded-full font-black uppercase tracking-[0.25em] text-[11px] transition-all flex items-center justify-center gap-3 relative overflow-hidden"
              >
                <span className="relative z-10">EXPLORE MASTERPLAN</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0px 20px 60px rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openModal({ title: "Instant Brochure Access", source: "Hero Secondary" })}
                className="w-full sm:w-auto bg-white/5 text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.25em] text-[11px] border border-white/10 backdrop-blur-xl transition-all"
              >
                REQUEST BROCHURE
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        >
          <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
          <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white">SCROLL TO DISCOVER</span>
        </motion.div>
      </section>

      {/* 2. THE VISIONARY MASTERPLAN (Comprehensive Detailing) */}
      <section className="py-24 md:py-48 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-40 items-center">
            <div className="space-y-12">
              <SectionHeader 
                align="left"
                badge="100+ Acre Master Plan"
                title="A Complete Ecosystem <br/> For Modern Life."
                subtitle="Integrated within Pune East&apos;s most successful residential ecosystem, Kumar Magnacity combines Podar International School, high-street shopping, healthcare, and 40+ lifestyle amenities under one roof."
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <motion.div 
                  initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  whileHover={{ scale: 1.05, y: -10, rotateX: 2, rotateY: -2, boxShadow: "0px 30px 100px rgba(212,175,55,0.15)" }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4 p-8 rounded-[2.5rem] bg-light-soft border border-dark/5 transition-all group cursor-pointer"
                >
                   <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                      <Building2 size={24} />
                   </div>
                   <h4 className="text-xl font-bold text-primary">Established Heritage</h4>
                   <p className="text-sm text-primary/60 leading-relaxed">Built on Kumar Props&apos; 59-year legacy of delivering high-appreciation assets.</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  whileHover={{ scale: 1.05, y: -10, rotateX: 2, rotateY: 2, boxShadow: "0px 30px 100px rgba(212,175,55,0.15)" }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4 p-8 rounded-[2.5rem] bg-light-soft border border-dark/5 transition-all group cursor-pointer"
                >
                   <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                      <ShieldCheck size={24} />
                   </div>
                   <h4 className="text-xl font-bold text-primary">Complete NA Title</h4>
                   <p className="text-sm text-primary/60 leading-relaxed">Individual 7/12 extracts and full RERA compliance for 100% legal security.</p>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="pt-8"
              >
                 <button 
                  onClick={() => openModal({ title: "Sector Wise Detailing", source: "Vision Section" })}
                  className="inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-primary/60 hover:text-accent transition-colors group"
                 >
                    INTERNAL INFRASTRUCTURE SPECS
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                 </button>
              </motion.div>
            </div>

            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                whileHover={{ scale: 1.02, rotateZ: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(212,175,55,0.15)] group"
              >
                <Image src="/assets/plot-layout.jpg" alt="Kumar Magnacity 150 Acre Master Plan Layout Hadapsar Annexe Manjari Pune" width={1200} height={800} className="w-full h-auto transition-transform duration-[3s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-dark/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="bg-white px-8 py-4 rounded-full text-[10px] font-bold tracking-widest uppercase text-dark flex items-center gap-2">
                      VIEW FULL RESOLUTION <Sparkles size={14} className="text-accent" />
                   </div>
                </div>
              </motion.div>
              {/* Floating Stat */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-10 z-20 bg-warm-bg text-primary p-10 rounded-[3rem] shadow-[0_30px_60px_rgba(255,215,0,0.15)] space-y-2 hidden md:block border border-accent/20"
              >
                 <div className="text-4xl font-heading font-bold text-accent">1700+</div>
                 <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">SQ.FT PLOTTING STARTING</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.2 INTERACTIVE 150-ACRE TOWNSHIP MASTERPLAN INSPECTOR */}
      <MasterplanSectorInspector />

      {/* 2.3 SIDE-BY-SIDE UNIT COMPARISON MATRIX */}
      <UnitComparisonMatrix />

      {/* 2.4 1-CLICK WHATSAPP COST SHEET GENERATOR */}
      <WhatsAppCostSheetGenerator />
      <section className="py-24 md:py-40 bg-warm-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(201,162,39,0.08),transparent_60%)]" />
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <SectionHeader 
            badge="Premium Residences"
            title="Elevated<br/>Township Living."
            subtitle="Beyond bungalow plots — experience world-class G+30 High-Rise 2BHK & 3BHK apartments within the same 150-acre master-planned ecosystem."
            className="mb-24"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* 2BHK Card */}
            <motion.div 
              initial={{ opacity: 0, y: 80, filter: "blur(15px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              whileHover={{ y: -10, scale: 1.02, boxShadow: "0px 30px 90px rgba(212,154,31,0.2)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white border border-stone-200/90 rounded-[3rem] p-10 md:p-14 space-y-8 hover:border-accent/60 transition-all duration-500 overflow-hidden shadow-xl cursor-pointer"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 blur-[80px] rounded-full group-hover:bg-accent/20 transition-all duration-500" />
              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="badge-gold">
                    <Building2 size={14} />
                    <span>2 BHK RESIDENCE</span>
                  </div>
                  <div className="text-[11px] text-stone-500 font-bold uppercase tracking-wider">RERA: P52100052096</div>
                </div>
                <div className="space-y-3">
                  <div className="text-5xl md:text-6xl font-heading font-bold text-primary">757 <span className="text-xl text-stone-500 font-sans font-medium">sq.ft Carpet</span></div>
                  <div className="text-sm text-stone-600 font-medium leading-relaxed">Compact yet spacious Vastu-compliant layout with private deck — perfect for young IT professionals and first-time homebuyers.</div>
                </div>
                <div className="flex items-end gap-2">
                  <div className="text-4xl font-heading font-bold text-accent">₹72.99L</div>
                  <div className="text-sm text-stone-500 pb-1 font-semibold">onwards*</div>
                </div>
                <Link 
                  href="/kumar-magnacity-2bhk-flats-hadapsar-pune-price"
                  className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent hover:text-primary transition-colors group/link"
                >
                  <span>EXPLORE 2 BHK DETAILS</span>
                  <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* 3BHK Card */}
            <motion.div 
              initial={{ opacity: 0, y: 80, filter: "blur(15px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              whileHover={{ y: -10, scale: 1.02, boxShadow: "0px 30px 90px rgba(212,154,31,0.2)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white border border-stone-200/90 rounded-[3rem] p-10 md:p-14 space-y-8 hover:border-accent/60 transition-all duration-500 overflow-hidden shadow-xl cursor-pointer"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 blur-[80px] rounded-full group-hover:bg-accent/20 transition-all duration-500" />
              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="badge-gold">
                    <Building2 size={14} />
                    <span>3 BHK GRAND RESIDENCE</span>
                  </div>
                  <div className="text-[11px] text-stone-500 font-bold uppercase tracking-wider">RERA: P52100054476</div>
                </div>
                <div className="space-y-3">
                  <div className="text-5xl md:text-6xl font-heading font-bold text-primary">1,053 <span className="text-xl text-stone-500 font-sans font-medium">sq.ft Carpet</span></div>
                  <div className="text-sm text-stone-600 font-medium leading-relaxed">Expansive 3-bedroom layout with double balconies and premium Italian-finish vitrified flooring — designed for growing families.</div>
                </div>
                <div className="flex items-end gap-2">
                  <div className="text-4xl font-heading font-bold text-accent">₹1.05Cr</div>
                  <div className="text-sm text-stone-500 pb-1 font-semibold">onwards*</div>
                </div>
                <Link 
                  href="/kumar-magnacity-3bhk-apartments-manjari-pune-price"
                  className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent hover:text-primary transition-colors group/link"
                >
                  <span>EXPLORE 3 BHK DETAILS</span>
                  <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Full Apartments CTA */}
          <div className="mt-16 text-center">
            <Link 
              href="/kumar-magnacity-2bhk-3bhk-apartments-manjari-pune"
              className="btn-gold px-12 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-xs inline-flex items-center gap-3 cursor-pointer shadow-lg"
            >
              <span>VIEW ALL APARTMENT PLANS</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. AMENITY ECOSYSTEM (Advanced Visuals) */}
      <section className="py-24 md:py-40 bg-warm-bg">
        <div className="container mx-auto max-w-7xl px-6">
          <SectionHeader 
            badge="Luxury Portfolio"
            title="The Magnum Opus <br/> Social Hub."
            subtitle="Featuring a ~1 Lakh sq.ft clubhouse and 25+ acres of peripheral greens, Kumar Magnacity redefines the lifestyle of Pune East's IT & Business elite."
            className="mb-24"
          />
          <AmenityGrid />
        </div>
      </section>

      {/* Price Escalation Urgency Alert Bar */}
      <PriceEscalationTimer />

      {/* 3.5 GLOBAL NRI SUITE, SITE VISIT SCHEDULER & INNOVATION SUITES */}
      <PriceComparisonMatrix />
      <Township3DVisualizer />
      <VirtualVRHub />
      <MortgageEligibilitySuite />
      <CommuteTimeMatrix />
      <RentalYieldCalculator />
      <InstantTokenBooking />
      <SiteVisitCabTracker />
      <LiveConstructionTracker />
      <AIVoiceAssistant />
      <SolarSustainabilitySuite />
      <LegalTransparencyVault />
      <WhatsAppCallbackScheduler />
      <NRICurrencySuite />
      <SiteVisitScheduler />

      {/* 4. INVESTMENT INTELLIGENCE (Data-Driven Detailed Section) */}
      <section className="py-24 md:py-40 bg-light">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
             <SectionHeader 
               align="left"
               badge="Market Intelligence"
               title="Capitalizing on <br/> Pune East Dominance."
               subtitle="As Kharadi and Magarpatta reach peak saturation, the Manjari-BK corridor is emerging as the chosen ROI hub for horizontal luxury."
               className="max-w-3xl"
             />
             <div className="flex flex-col items-center md:items-end gap-3 p-8 bg-white rounded-[2.5rem] border border-dark/5 shadow-xl">
                <div className="text-3xl font-heading font-bold text-primary italic">15-18%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-dark/30">AVG. ANNUAL APPRECIATION</div>
             </div>
          </div>
          <InvestmentMatrix />
          
          {/* Dynamic Financial Intelligence Calculator */}
          <div className="mt-24">
            <InvestmentCalculator />
          </div>
        </div>
      </section>

      {/* 5. LOCATION SYNERGY (Connectivity Detailing) */}
      <section className="py-24 md:py-40 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6 text-center">
           <SectionHeader 
             badge="Strategic Proximity"
             title="The Pulse of <br/> Connectivity."
             subtitle="Seamlessly connected to Pune's core business hubs via the Solapur-Pune Highway and the upcoming Outer Ring Road."
             className="mb-20"
           />
           
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { time: "15 MINS", label: "Kharadi IT Hub", icon: <Building2 className="text-primary" /> },
                { time: "12 MINS", label: "Magarpatta City", icon: <Landmark className="text-primary" /> },
                { time: "20 MINS", label: "EON IT Park", icon: <Sparkles className="text-primary" /> },
                { time: "05 MINS", label: "Solapur Highway", icon: <MapPin className="text-primary" /> }
              ].map((loc, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 60, scale: 0.8, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  whileHover={{ scale: 1.08, y: -15, rotateZ: i % 2 === 0 ? 2 : -2, boxShadow: "0px 30px 100px rgba(212,175,55,0.25)" }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="p-10 rounded-[3rem] bg-light border border-white/5 transition-all hover:border-accent/60 space-y-4 cursor-pointer"
                >
                   <div className="w-12 h-12 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center shadow-lg border border-primary/10">
                      {loc.icon}
                   </div>
                   <div className="space-y-1">
                      <div className="text-2xl font-heading font-bold text-primary">{loc.time}</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-primary/50">{loc.label}</div>
                   </div>
                </motion.div>
              ))}
           </div>
            {/* Programmatic Google Maps & Business Profile Command Hub */}
            <div className="mt-16 text-left">
              <GoogleMapsCommandHub className="py-0" />
            </div>

            {/* Google Business Reviews Showcase (4.9 ★ based on 386+ Google Reviews) */}
            <div className="mt-12 text-left">
              <GoogleReviewsShowcase className="py-0 bg-transparent border-0" />
            </div>

            {/* Pune Real Estate Market Intelligence Hub (Macro Shifts, PMRDA 2026-2030, NA Plots & 260K IT Yield) */}
            <div className="mt-16 text-left">
              <PuneMarketIntelligenceHub className="py-0 bg-transparent border-0" />
            </div>
        </div>
      </section>

      {/* 6. ADVANCED ENQUIRY ENGINE (Final Conversion) */}
      <section id="contact" className="py-24 md:py-48 bg-warm-bg relative">
        <div className="absolute inset-0 bg-[url('/assets/amenities.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto max-w-5xl px-6 relative z-10">
           <AdvancedEnquiryForm 
             title="Authorize Your Priority Interest"
             subtitle="Capture the exhaustive inventory list, plot dimensions, and pre-launch pricing advantages before Phase 1 completion."
             buttonText="SECURE MY PLOT"
           />
        </div>
      </section>

      {/* 7. SEMANTIC SEO AUTHORITY BLOCK (Rank #1 Hardening) */}
      <section className="py-12 bg-white/5 border-t border-primary/10">
        <div className="container mx-auto max-w-7xl px-6">
           <h2 className="sr-only">Comprehensive Pune East Real Estate Directory & Micro-Market Data</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-3">
                 <h3 className="text-[10px] uppercase font-bold tracking-widest text-primary/40">Premium Corridors</h3>
                 <p className="text-xs text-primary/30 leading-relaxed text-justify">
                   Explore our ultra-luxury 2 BHK and 3 BHK apartments located strategically near the bustling Kharadi IT Park, EON IT Park Phase 2, and Magarpatta City. Ideal for IT professionals seeking zero-commute premium residences near SP Infocity and the World Trade Center Pune.
                 </p>
              </div>
              <div className="space-y-3">
                 <h3 className="text-[10px] uppercase font-bold tracking-widest text-primary/40">Infrastructure Impact</h3>
                 <p className="text-xs text-primary/30 leading-relaxed text-justify">
                   Positioned adjacent to the proposed Pune Ring Road and Solapur Highway, Kumar Magnacity offers unparalleled connectivity to Pune Airport, Pune Railway Station, and the upcoming Hadapsar Gadital metro extensions.
                 </p>
              </div>
              <div className="space-y-3">
                 <h3 className="text-[10px] uppercase font-bold tracking-widest text-primary/40">Property Typology</h3>
                 <p className="text-xs text-primary/30 leading-relaxed text-justify">
                   From expansive NA Villa Bungalow plots in Manjari to high-rise luxury towers in Hadapsar Annexe, our 150-acre township integrates Podar International School, healthcare, and retail into a cohesive urban ecosystem.
                 </p>
              </div>
              <div className="space-y-3">
                 <h3 className="text-[10px] uppercase font-bold tracking-widest text-primary/40">Surrounding Micro-Markets</h3>
                 <p className="text-xs text-primary/30 leading-relaxed text-justify">
                   Serving the elite communities of Viman Nagar, Koregaon Park, Keshav Nagar, Mundhwa, Fatima Nagar, Shewalewadi, Loni Kalbhor, Uruli Kanchan, and the greater Saswad Road industrial corridor with generational wealth assets.
                 </p>
              </div>
           </div>
        </div>
      </section>

      <Footer />
      <SovereignBar />
    </main>
  );
}
