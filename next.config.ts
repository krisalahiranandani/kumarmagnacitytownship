import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  experimental: {
    // Ensuring native app-router behavior for Edge
  }
};

export default nextConfig;
