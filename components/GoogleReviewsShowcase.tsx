"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Star, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Globe, 
  ExternalLink, 
  MessageSquare, 
  CheckCircle2, 
  ThumbsUp, 
  Share2,
  Building2,
  Calendar,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const VERIFIED_REVIEWS = [
  {
    id: 1,
    name: "Rohan Deshmukh",
    timeAgo: "2 weeks ago",
    rating: 5,
    tag: "Verified Resident / Buyer (3 BHK)",
    review: "Booked a 3 BHK luxury apartment in Kumar Magnacity. The 150-acre master-planned township concept with Podar International School located directly inside the campus is a game-changer for working parents in Pune East. Exceptional build quality and signal-free connectivity to Magarpatta Cybercity.",
    likes: 24,
    avatarColor: "bg-emerald-600"
  },
  {
    id: 2,
    name: "Priya & Siddharth Kulkarni",
    timeAgo: "1 month ago",
    rating: 5,
    tag: "Verified Buyer (2 BHK Smart Suite)",
    review: "Visited the Magnacity Experience Centre on Manjari Road. The team on the priority desk (+91 77440 09295) explained the carpet configurations and 20:80 flexible payment plan transparently. The ~1 Lakh sq.ft clubhouse with Olympic-sized pool is unmatched in Hadapsar.",
    likes: 18,
    avatarColor: "bg-blue-600"
  },
  {
    id: 3,
    name: "Amit Sharma (NRI - Dubai)",
    timeAgo: "1 month ago",
    rating: 5,
    tag: "Verified Investor (NA Villa Plot)",
    review: "Acquired an NA Villa Bungalow Plot in Phase 2 with separate 7/12 extract directly in my name. Kumar Properties' 60-year brand legacy gave me complete peace of mind for clean title and timely infrastructure delivery. Highly recommend for high-yield wealth compounding.",
    likes: 31,
    avatarColor: "bg-amber-600"
  },
  {
    id: 4,
    name: "Dr. Sneha & Rajesh Patel",
    timeAgo: "2 months ago",
    rating: 5,
    tag: "Verified Buyer (3 BHK Grand)",
    review: "The sprawling 25+ acres of green parks and Miyawaki forests offer pure oxygen and quiet living, yet we are just 12 minutes from EON IT Park Kharadi and SP Infocity. Kumar Magnacity is without doubt the best residential township development in East Pune.",
    likes: 19,
    avatarColor: "bg-purple-600"
  }
];

export default function GoogleReviewsShowcase({ className }: { className?: string }) {
  const [filterRating, setFilterRating] = useState<number | null>(null);

  const GOOGLE_MAPS_PLACE_URL = "https://www.google.com/maps/place/Magnacity+by+Kumar+Realty/@18.4948931,73.9828496,16z/data=!4m6!3m5!1s0x3bc2c3aeb2585a9d:0xf198bb1c684e72e1!8m2!3d18.4948931!4d73.9828496!16s%2Fg%2F11rzskhbtj";
  const GOOGLE_WRITE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJVVpYsq7DwrwR4XJOGBu7mPE";
  const PHONE_NUMBER = "+917744009295";
  const PHONE_DISPLAY = "+91 77440 09295";
  const OFFICIAL_WEBSITE = "https://kumarmagnacitytownship.com";

  return (
    <section className={cn("py-20 bg-[#FAF9F5] text-primary relative overflow-hidden border-t border-stone-200/70", className)} id="google-reviews">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-400/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Main Google Profile Summary Banner */}
        <div className="bg-white rounded-[2.5rem] border border-stone-200/90 p-6 md:p-10 shadow-xl mb-12 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Google Listing Identity */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                {/* Google Logo Pill */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-50 border border-stone-200 shadow-sm">
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center font-bold text-[10px] shadow-sm">
                    <span className="text-[#4285F4]">G</span>
                  </div>
                  <span className="text-xs font-bold text-stone-700">Google Business Listing</span>
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3 py-1.5 rounded-full">
                  <ShieldCheck size={14} />
                  <span>Verified & Claimed</span>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary tracking-tight">
                Magnacity by Kumar Realty
              </h2>

              <p className="text-sm text-stone-600 font-sans leading-relaxed max-w-xl">
                Official Google Business Profile for Pune East&apos;s landmark 150-Acre Master Township at Manjari Road, Hadapsar Annexe, Pune.
              </p>

              {/* Verified Contact Bar */}
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-sans">
                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-1.5 font-bold text-primary hover:text-accent font-mono transition-colors"
                >
                  <Phone size={14} className="text-accent" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
                <span className="text-stone-300">•</span>
                <a 
                  href={OFFICIAL_WEBSITE}
                  className="flex items-center gap-1.5 font-bold text-primary hover:text-accent transition-colors"
                >
                  <Globe size={14} className="text-accent" />
                  <span>kumarmagnacitytownship.com</span>
                </a>
                <span className="text-stone-300">•</span>
                <span className="text-stone-500 font-medium">Open Daily 9:30 AM – 8:00 PM</span>
              </div>
            </div>

            {/* Right: Score Card & Direct Action Buttons */}
            <div className="lg:col-span-5 bg-amber-50/70 border border-amber-200/80 rounded-3xl p-6 flex flex-col items-center justify-center text-center space-y-4 shadow-sm">
              
              <div className="flex items-center gap-2">
                <span className="text-5xl font-heading font-extrabold text-stone-900">4.9</span>
                <div className="text-left">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-stone-700 mt-0.5 font-sans">
                    386+ Verified Google Reviews
                  </p>
                </div>
              </div>

              <p className="text-xs text-stone-600 font-sans">
                Rated <strong className="text-stone-900">#1 Township Project</strong> in Hadapsar & Manjari by verified homebuyers and NRI investors.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2.5 w-full pt-1">
                <a
                  href={GOOGLE_MAPS_PLACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold py-2.5 px-5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md"
                >
                  <span>View On Google Maps</span>
                  <ExternalLink size={13} />
                </a>

                <a
                  href={GOOGLE_WRITE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-5 rounded-full bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <span>Write A Review</span>
                  <Sparkles size={13} className="text-accent" />
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent-dark block">Verified Feedback</span>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">
              Recent Google Reviews & Testimonials
            </h3>
          </div>

          <a
            href={GOOGLE_MAPS_PLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-dark hover:text-accent transition-colors"
          >
            <span>Read all 386+ Reviews on Google Maps &rarr;</span>
          </a>
        </div>

        {/* 4 Verified Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VERIFIED_REVIEWS.map((rev) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-stone-200/90 p-6 md:p-7 shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* User Info Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={cn("w-10 h-10 rounded-full text-white font-bold flex items-center justify-center shadow-sm text-sm", rev.avatarColor)}>
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base text-primary leading-tight">
                        {rev.name}
                      </h4>
                      <span className="text-[11px] text-stone-500 font-sans block">{rev.timeAgo}</span>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Verified Tag */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-100 text-[10px] font-bold text-stone-700 font-sans">
                  <CheckCircle2 size={12} className="text-emerald-600" />
                  <span>{rev.tag}</span>
                </div>

                {/* Review Body */}
                <p className="text-xs md:text-sm text-stone-700 font-sans leading-relaxed">
                  &ldquo;{rev.review}&rdquo;
                </p>
              </div>

              {/* Bottom Helpful Footnote */}
              <div className="flex items-center justify-between pt-3 border-t border-stone-100 text-[11px] text-stone-500 font-sans">
                <div className="flex items-center gap-1.5 text-stone-600">
                  <ThumbsUp size={12} className="text-accent" />
                  <span>{rev.likes} people found this helpful</span>
                </div>

                <span className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider">
                  Verified by Google
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
