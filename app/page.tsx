import { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: "Kumar Magnacity Hadapsar Manjari | ₹72.99L* 2 & 3 BHK Flats & Plots Pune",
  description: "Kumar Magnacity Hadapsar (Hadapsar Annexe, Manjari BK) — 150-Acre Master Integrated Township in Pune East. Luxury 2 & 3 BHK Flats from ₹72.99L* & NA Villa Plots. MahaRERA Approved with Podar International School on campus.",
  keywords: [
    "Kumar Magnacity",
    "Kumar Magnacity Pune",
    "Kumar Magnacity Hadapsar",
    "Kumar Magnacity Manjari",
    "Kumar Magnacity price",
    "Kumar Magnacity 2 BHK",
    "Kumar Magnacity 3 BHK",
    "Kumar Magnacity plots",
    "Kumar Properties Pune"
  ],
  alternates: {
    canonical: 'https://kumarmagnacitytownship.com',
  },
};

export default function Page() {
  return <HomePageClient />;
}
