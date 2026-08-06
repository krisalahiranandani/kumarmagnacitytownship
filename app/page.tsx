import { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://kumarmagnacitytownship.com',
  },
};

export default function Page() {
  return <HomePageClient />;
}
