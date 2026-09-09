import { ArticleSchemaType } from "@/types/schema";

export interface ArticlePostData {
  title: string;
  excerpt: string;
  thumbnail: string;
  date: string;
  slug?: string;
}

export default function ArticleSchema({ post }: { post: ArticlePostData }) {
  const imageUrl = post.thumbnail.startsWith("http")
    ? post.thumbnail
    : `https://kumarmagnacitytownship.com${post.thumbnail.startsWith("/") ? post.thumbnail : `/${post.thumbnail}`}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: [
      imageUrl,
      "https://kumarmagnacitytownship.com/assets/hero-bg.jpg",
      "https://kumarmagnacitytownship.com/assets/master-layout.jpg"
    ],
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en-IN",
    articleSection: "Pune Real Estate & Infrastructure Trends",
    isAccessibleForFree: true,
    author: [
      {
        "@type": "Organization",
        name: "Kumar Properties Technical Research & Advisory Board",
        url: "https://kumarmagnacitytownship.com",
        sameAs: [
          "https://kumarmagnacitytownship.com",
          "https://www.wikidata.org/wiki/Q1538"
        ]
      }
    ],
    publisher: {
      "@type": "Organization",
      name: "Kumar Properties",
      url: "https://kumarmagnacitytownship.com",
      logo: {
        "@type": "ImageObject",
        url: "https://kumarmagnacitytownship.com/assets/official-logo.png",
      },
    },
    description: post.excerpt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.slug 
        ? `https://kumarmagnacitytownship.com/insights/${post.slug}` 
        : "https://kumarmagnacitytownship.com/insights",
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
