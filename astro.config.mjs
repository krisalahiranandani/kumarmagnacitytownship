import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  site: "https://kumarmagnacitytownship.com",
  output: "static",
  integrations: [
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(process.cwd(), "./"),
        "next/link": path.resolve(process.cwd(), "./lib/shims/link.tsx"),
        "next/image": path.resolve(process.cwd(), "./lib/shims/image.tsx"),
        "next/navigation": path.resolve(process.cwd(), "./lib/shims/navigation.ts"),
      },
    },
  },
});
