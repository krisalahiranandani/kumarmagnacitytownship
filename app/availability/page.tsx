import PillarTemplate from "@/components/PillarTemplate";
import EnquiryForm from "@/components/EnquiryForm";
import InventoryBadge from "@/components/InventoryBadge";
import { LandPlot, Tag, CheckCircle, Info } from "lucide-react";

export const runtime = "edge";

export const metadata = {
  title: "Plot Inventory & Pricing | Kumar Magnacity Availability",
  description: "Browse available NA bungalow plots at Kumar Magnacity. View real-time inventory, pricing, and plot sizes from 3,000 sq.ft. to 5,000 sq.ft."
};

export default function AvailabilityPage() {
  return (
    <PillarTemplate 
      title="The Sovereign Inventory" 
      subtitle="Exclusive NA bungalow plots ranging from 3,000 to 5,000+ sq.ft. Limited inventory available for Phase 1."
      badge="Our Plots"
    >
      <div className="space-y-24">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
               <h2 className="text-3xl font-heading font-bold text-dark">Phase 1 Selection</h2>
               <p className="text-dark/60 leading-relaxed font-light text-xl">
                  Phase 1 offers a curated selection of east-facing and garden-view plots. Every plot is RERA-registered and comes with an individual 7/12 extract.
               </p>
               
               <ul className="space-y-6">
                 {[
                   { t: "Prime East-Facing", s: "Rarest inventory with sunrise orientation." },
                   { t: "Garden Proximity", s: "Plots directly adjacent to Botanic Trails." },
                   { t: "Corner Estates", s: "Maximum privacy and dual-side road access." }
                 ].map((item, idx) => (
                   <li key={idx} className="flex gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 mt-1">
                         <CheckCircle size={14} />
                      </div>
                      <div>
                         <p className="font-bold text-dark">{item.t}</p>
                         <p className="text-sm text-dark/40">{item.s}</p>
                      </div>
                   </li>
                 ))}
               </ul>
            </div>

            <div className="bg-dark text-white p-12 rounded-[4rem] border border-white/10 shadow-3xl text-center space-y-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-10 blur-[80px]" />
               <InventoryBadge text="Last 12 Plots Remaining" />
               <div className="space-y-2">
                 <p className="text-accent uppercase font-bold tracking-[0.2em] text-xs">Pricing Starts At</p>
                 <p className="text-5xl md:text-6xl font-heading font-bold">₹2.25 Cr*</p>
                 <p className="text-white/40 text-[10px] uppercase tracking-widest">+ Tax & Maintenance</p>
               </div>
               <div className="pt-8 flex flex-col items-center gap-4">
                  <div className="flex items-center gap-3 text-xs text-white/60 bg-white/5 border border-white/10 px-6 py-3 rounded-full">
                     <Info size={14} className="text-accent" />
                     Custom Finance Packages Available
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-white rounded-[4rem] border p-12 md:p-24 shadow-xl">
            <div className="max-w-2xl mx-auto text-center space-y-8 mb-16">
               <h3 className="text-4xl font-heading font-bold text-dark">Reserve Your Legacy</h3>
               <p className="text-dark/40">Secure a private presentation and inventory lockout today.</p>
            </div>
            <EnquiryForm 
              title="Inventory Request" 
              subtitle="Get the live PDF inventory and specific plot pricing."
              buttonText="Download Inventory List" 
            />
         </div>
      </div>
    </PillarTemplate>
  );
}
