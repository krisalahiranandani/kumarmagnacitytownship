import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SovereignBar from "@/components/SovereignBar";

export const runtime = 'edge';

// This would eventually fetch from a database or JSON file
const getPageData = (category: string, slug: string) => {
  // Mock data for initial implementation
  return {
    title: `${slug.replace(/-/g, ' ')} | Kumar Magnacity`,
    description: `Secure your future with ${slug.replace(/-/g, ' ')} at Kumar Magnacity Hadapsar Annexe.`,
    category: category,
    slug: slug,
    isMarathi: false,
  };
};

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const data = getPageData(category, slug);
  return {
    title: data.title,
    description: data.description,
  };
}

export default async function SEONodePage({ params }: PageProps) {
  const { category, slug } = await params;
  const data = getPageData(category, slug);

  if (!data) notFound();

  return (
    <main className="min-h-screen pt-24">
      <Header />
      
      <section className="container mx-auto max-w-7xl px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-accent font-bold uppercase tracking-widest text-sm">
            {category.replace(/-/g, ' ')}
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold capitalize leading-tight">
            {slug.replace(/-/g, ' ')}
          </h1>
          <div className="w-20 h-1 bg-accent mx-auto" />
          <p className="text-xl text-dark/70 leading-relaxed max-w-2xl mx-auto">
             Experience the pinnacle of luxury land ownership in Pune&apos;s most promising growth corridor.
          </p>
        </div>
      </section>

      {/* Placeholder for dynamic content blocks */}
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <p className="text-dark/50 italic">Content for this node will be mapped from the legacy database...</p>
        </div>
      </section>
      
      <Footer />
      <SovereignBar />
    </main>
  );
}
