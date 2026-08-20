'use client';
import { usePathname } from 'next/navigation';
import { BreadcrumbListSchema, BreadcrumbItemSchema } from '@/types/schema';

export default function BreadcrumbSchema() {
  const pathname = usePathname();
  
  if (!pathname || pathname === '/') return null;

  const paths = pathname.split('/').filter(Boolean);
  
  const itemListElement: BreadcrumbItemSchema[] = paths.map((path, index) => {
    const url = `https://kumarmagnacitytownship.com/${paths.slice(0, index + 1).join('/')}`;
    // Format name (e.g., "flats-near-magarpatta" -> "Flats Near Magarpatta")
    const name = path
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return {
      "@type": "ListItem",
      position: index + 2,
      name: name,
      item: url
    };
  });

  // Always include Home as position 1
  itemListElement.unshift({
    "@type": "ListItem",
    position: 1,
    name: "Home",
    item: "https://kumarmagnacitytownship.com/"
  });

  const schema: BreadcrumbListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: itemListElement
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
