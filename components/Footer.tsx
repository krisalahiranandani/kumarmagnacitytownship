import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent text-primary flex items-center justify-center font-bold text-lg rounded-tl-xl rounded-br-xl">
                K
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-xl tracking-tight">Kumar</span>
                <span className="text-[10px] text-accent font-bold uppercase tracking-[3px] -mt-1">MagnaCity</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              A 150-acre architectural masterpiece by Kumar Properties. Redefining luxury living through meticulously planned NA bungalow plots and world-class amenities.
            </p>
            <div className="flex gap-4">
              {/* Social icons removed for build stability */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-accent uppercase tracking-widest text-[12px] font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/concept" className="text-white/60 hover:text-white transition-colors text-sm">The Concept</Link></li>
              <li><Link href="/location" className="text-white/60 hover:text-white transition-colors text-sm">Location Matrix</Link></li>
              <li><Link href="/availability" className="text-white/60 hover:text-white transition-colors text-sm">Plot Inventory</Link></li>
              <li><Link href="/amenities" className="text-white/60 hover:text-white transition-colors text-sm">Amenities</Link></li>
              <li><Link href="/investment" className="text-white/60 hover:text-white transition-colors text-sm">Investment Guide</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-accent uppercase tracking-widest text-[12px] font-bold mb-6">Legal & Support</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy-policy" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/60 hover:text-white transition-colors text-sm">Terms & Conditions</Link></li>
              <li><Link href="/rera" className="text-white/60 hover:text-white transition-colors text-sm">RERA Compliance</Link></li>
              <li><Link href="/market-insights" className="text-white/60 hover:text-white transition-colors text-sm">Market Insights</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-accent uppercase tracking-widest text-[12px] font-bold mb-6">Experience Center</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/60">
                <MapPin size={18} className="text-accent shrink-0" />
                <span>Kumar MagnaCity, Manjari BK-Hadapsar Annexe, Pune - 412307</span>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <Phone size={18} className="text-accent shrink-0" />
                <a href="tel:+917744009295">+91 77440 09295</a>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <Mail size={18} className="text-accent shrink-0" />
                <a href="mailto:sales@kumarmagnacitytownship.com">sales@kumarmagnacitytownship.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/40 uppercase tracking-widest">
            MAHARERA REG. NO: P52100052096 | Available at maharera.mahaonline.gov.in
          </p>
          <p className="text-[10px] text-white/40 uppercase tracking-widest">
            © 2026 Kumar MagnaCity. Developed with Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
