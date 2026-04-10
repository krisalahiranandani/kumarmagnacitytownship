import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

export const runtime = "edge";


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "The Pride of Pune's Rising East | Kumar Magnacity",
  description: "Secure your legacy with premium NA bungalow plots in Pune's most successful 150-acre township. RERA registered, 100% legal title, and world-class amenities by Kumar Properties.",
  keywords: "kumar magnacity, na plots pune, bungalow plots manjari, hadapsar annexe real estate, kumar properties, land investment pune",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${outfit.variable} antialiased`}>
        {/* Deployment V2.1.3 - Final Restoration Active */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(registrations => {
                  for (let registration of registrations) {
                    registration.unregister();
                  }
                });
              }
              // DOM Eraser: Forcefully remove legacy UI artifacts
              const cleanup = () => {
                document.querySelectorAll('.revision-milestone, .revision-banner, #revision-milestone, .clock, .countdown').forEach(el => el.remove());
              };
              cleanup();
              setTimeout(cleanup, 1000); // Catch late injections
              window.addEventListener('load', cleanup);
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
