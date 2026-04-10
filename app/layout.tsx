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
  title: "Kumar Magnacity | Premium NA Bungalow Plots in Manjari-Hadapsar, Pune",
  description: "Invest in Pune's most secure, RERA-registered 150-acre township. Zero encroachment risk, 100% legal title, and high-appreciation NA plots by Kumar Properties.",
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
