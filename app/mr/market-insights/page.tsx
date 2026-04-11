import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import registry from "@/data/seo-registry.json";
import { SEORegistry } from "@/types/seo";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";

export const runtime = "edge";

export default function MarathiMarketInsightsHub() {
  const blogs = Object.entries(registry as SEORegistry)
    .filter(([key]) => key.startsWith("mr/market-insights/"))
    .map(([key, data]) => ({
      slug: key,
      ...data
    }));

  return (
    <main className="min-h-screen bg-light">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary overflow-hidden relative text-center">
         <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
         
         <div className="container mx-auto max-w-4xl px-4 relative z-10 space-y-6">
            <span className="text-accent font-bold uppercase tracking-[0.5em] text-[10px]">रिअल इस्टेट विश्लेषण</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">मार्केट इनसाइट्स</h1>
            <p className="text-white/50 max-w-2xl mx-auto leading-relaxed italic">
                पुणे पूर्वेकडील निवडक NA प्लॉट गुंतवणूकदारांसाठी प्रगत विश्लेषण, ROI अहवाल आणि पायाभूत सुविधा अपडेट्स.
            </p>
         </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog, i) => (
              <Link 
                key={blog.slug}
                href={`/${blog.slug}`}
                className="group block bg-white rounded-[2.5rem] p-8 md:p-10 border border-dark/5 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all space-y-6 relative overflow-hidden"
              >
                 <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-accent text-dark flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform">
                        <ArrowRight size={20} />
                    </div>
                 </div>

                 <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-3 text-dark/30 text-[10px] uppercase font-bold tracking-widest">
                       <Tag size={12} className="text-accent" />
                       <span>मार्केट रिपोर्ट</span>
                       <span className="opacity-20">|</span>
                       <Clock size={12} />
                       <span>५ मिनिट वाचन</span>
                    </div>
                    
                    <h3 className="text-2xl font-heading font-bold text-dark group-hover:text-primary transition-colors leading-tight">
                       {blog.title.split('|')[0].trim()}
                    </h3>
                    
                    <p className="text-sm text-dark/40 leading-relaxed line-clamp-3 italic">
                       {blog.description}
                    </p>
                 </div>

                 <div className="pt-4 border-t border-dark/5 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase text-accent tracking-tighter">संपूर्ण माहिती वाचा</span>
                    <BookOpen size={14} className="text-dark/20 group-hover:text-accent transition-colors" />
                 </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
