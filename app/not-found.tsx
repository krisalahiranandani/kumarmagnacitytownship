"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { MoveLeft, House, Search } from "lucide-react";

export const runtime = "edge";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-light flex flex-col">
      <Header />
      
      <div className="flex-grow flex items-center justify-center pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="relative bg-white rounded-[3.5rem] p-12 md:p-24 shadow-2xl border border-dark/5 overflow-hidden text-center">
             {/* Decorative Elements */}
             <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
             <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

             <div className="relative z-10 space-y-10">
                <div className="space-y-4">
                    <span className="text-[120px] md:text-[180px] font-heading font-black text-primary/5 leading-none block select-none">404</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark -mt-12 md:-mt-20">Path Not Found</h1>
                    <p className="text-dark/40 max-w-lg mx-auto leading-relaxed">
                        The luxury you seek remains within our reach, but this specific path does not. Let us guide you back to the Sovereign Estate.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link 
                        href="/" 
                        className="group bg-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[11px] flex items-center gap-3 hover:bg-primary-light transition-all shadow-xl"
                    >
                        <House size={16} />
                        Back to Home
                    </Link>
                    <Link 
                        href="/location" 
                        className="group bg-white text-dark border border-dark/10 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[11px] flex items-center gap-3 hover:bg-light transition-all"
                    >
                        Explore Location
                        <Search size={16} />
                    </Link>
                </div>
                
                <div className="pt-10 border-t border-dark/5 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Concept", "Amenities", "Investment", "Availability"].map((item) => (
                        <Link 
                            key={item}
                            href={`/${item.toLowerCase().replace(' ', '-')}`}
                            className="text-[10px] font-bold uppercase tracking-[0.2em] text-dark/40 hover:text-accent transition-colors py-2"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
             </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
