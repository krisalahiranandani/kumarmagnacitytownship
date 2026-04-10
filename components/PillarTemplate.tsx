import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SovereignBar from "@/components/SovereignBar";
import { cn } from "@/lib/utils";

interface PillarTemplateProps {
  title: string;
  subtitle: string;
  badge?: string;
  children: React.ReactNode;
  isMarathi?: boolean;
}

export default function PillarTemplate({
  title,
  subtitle,
  badge,
  children,
  isMarathi = false
}: PillarTemplateProps) {
  return (
    <main className="min-h-screen bg-light">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/50 to-primary" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="max-w-3xl space-y-6">
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent font-bold text-[10px] uppercase tracking-widest">
                {badge}
              </div>
            )}
            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-4">
           {children}
        </div>
      </section>

      <Footer />
      <SovereignBar />
    </main>
  );
}
