import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const runtime = "edge";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Thank You | Kumar Magnacity",
  description: "Thank you for your interest in Kumar Magnacity. Our team will contact you shortly."
};

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-light">
      <Header />
      
      <section className="min-h-[80vh] flex items-center justify-center pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl border border-dark/5 space-y-8">
            <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mx-auto animate-bounce-subtle">
              <CheckCircle2 size={48} />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark">Thank You!</h1>
              <p className="text-lg text-dark/60 leading-relaxed font-light">
                Your enquiry has been received successfully. Our property consultants will get in touch with you 
                within the next 24 hours to schedule your exclusive VIP Site Visit.
              </p>
            </div>

            <div className="pt-6">
              <Link 
                href="/" 
                className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary-light transition-all shadow-xl"
              >
                Back to Dashboard
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
