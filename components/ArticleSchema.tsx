import { ArticleSchemaType } from "@/types/schema";

export interface ArticlePostData {
  title: string;
  excerpt: string;
  thumbnail: string;
  date: string;
  slug?: string;
}

export default function ArticleSchema({ post }: { post: ArticlePostData }) {
  const schema: ArticleSchemaType = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: [
      post.thumbnail.startsWith("http")
        ? post.thumbnail
        : `https://kumarmagnacitytownship.com${post.thumbnail.startsWith("/") ? post.thumbnail : `/${post.thumbnail}`}`,
    ],
    datePublished: post.date,
    dateModified: post.date,
    author: [
      {
        "@type": "Organization",
        name: "Kumar Properties Market Research Desk",
        url: "https://kumarmagnacitytownship.com",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "Kumar Properties",
      url: "https://kumarmagnacitytownship.com",
      logo: {
        "@type": "ImageObject",
        url: "https://kumarmagnacitytownship.com/assets/favicon.png",
      },
    },
    description: post.excerpt,
    mainEntityOfPage: post.slug 
      ? `https://kumarmagnacitytownship.com/insights/${post.slug}` 
      : "https://kumarmagnacitytownship.com/insights",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
