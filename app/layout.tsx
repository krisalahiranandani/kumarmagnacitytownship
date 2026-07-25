import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#c9a227",
};
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/lib/modal-context";
import EnquiryModal from "@/components/EnquiryModal";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import GoogleConsent from "@/components/GoogleConsent";
import StructuredData from "@/components/StructuredData";
import ExitIntentModal from "@/components/ExitIntentModal";
import AIChatWidget from "@/components/AIChatWidget";
import NRIGeoBanner from "@/components/NRIGeoBanner";
import MetaPixel from "@/components/MetaPixel";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Suspense } from "react";
import ScrollProgress from "@/components/ScrollProgress";
import MobileQuickBar from "@/components/MobileQuickBar";

export const runtime = "nodejs";


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kumarmagnacitytownship.com"),
  manifest: "/manifest.json",
  title: {
    default: "Kumar Magnacity Township Hadapsar Annexe, Manjari | 2BHK & 3BHK Flats + NA Plots",
    template: "%s | Kumar Magnacity Township Hadapsar Annexe"
  },
  description: "Kumar Magnacity Township Hadapsar Annexe, Manjari — Pune's premier 150-acre mega township. 2BHK apartments from ₹72.99L*, 3BHK from ₹1.05Cr* + NA bungalow plots from ₹1.08Cr. Podar International School inside campus, ~1 Lakh sq.ft clubhouse. By Kumar Properties.",
  keywords: [
    "Kumar Magnacity Township", "Kumar Magnacity Hadapsar Annexe", "Kumar Magnacity Manjari", 
    "Kumar Magnacity Township Pune", "Kumar Magnacity Hadapsar Annexe Manjari", "Kumar Magnacity 2 BHK", 
    "Kumar Magnacity 3 BHK", "Kumar Magnacity NA Plots", "Kumar Magnacity property price", 
    "Kumar Magnacity floor plans", "Hadapsar Annexe Real Estate", "Flats in Hadapsar Annexe", 
    "Flats in Manjari Pune", "Township in Manjari East Pune", "Kumar Properties Manjari", 
    "Podar International School Kumar Magnacity", "Luxury Flats Hadapsar Annexe", 
    "Buy 2 BHK Hadapsar Annexe", "Buy 3 BHK Manjari", "Invest in Hadapsar Annexe", 
    "Best Township Hadapsar Annexe", "Kumar Magnacity RERA P52100052096"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: "mr_IN",
    url: "https://kumarmagnacitytownship.com",
    siteName: "Kumar Magnacity Township",
    title: "Kumar Magnacity Township | 2BHK & 3BHK Apartments",
    description: "Pune&apos;s premier 150-acre township at Manjari near Hadapsar. Premium 2BHK & 3BHK flats by Kumar Properties.",
    images: [
      {
        url: "/assets/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Kumar Magnacity Township Masterplan",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumar Magnacity Township | Pune East",
    description: "Premium 2BHK & 3BHK flats at Manjari near Hadapsar.",
    images: ["/assets/hero-bg.jpg"],
  },
  alternates: {
    canonical: "https://kumarmagnacitytownship.com",
    languages: {
      'en-IN': "https://kumarmagnacitytownship.com",
      'mr-IN': "https://kumarmagnacitytownship.com/mr"
    }
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/assets/favicon.png",
    apple: "/assets/apple-touch-icon.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_ID || "PLACEHOLDER_GOOGLE_VERIFICATION_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Core Web Vitals Resource Hints */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
      </head>
      <body className={`${playfair.variable} font-sans antialiased bg-dark text-white`}>
        <NRIGeoBanner />
        <StructuredData />
        {/* Google Consent Mode V2 (Must be loaded FIRST) */}
        <GoogleConsent />
        {/* Google Tag Manager (Loads asynchronously without blocking rendering) */}
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'} />
        {/* Google Analytics 4 */}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'} />
        {/* Google Ads Global Site Tag */}
        {process.env.NEXT_PUBLIC_GOOGLE_ADS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ADS_ID} />
        )}
        
        {/* Deployment V2.3.1 - Restoration Fix */}
        <ModalProvider>
          <ScrollProgress />
          {children}
          <EnquiryModal />
          <ExitIntentModal />
          <AIChatWidget />
          <WhatsAppWidget />
          <MobileQuickBar />
          <Suspense fallback={null}>
            <MetaPixel />
          </Suspense>
        </ModalProvider>
      </body>
    </html>
  );
}
