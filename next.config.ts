import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    domains: [
      "images.unsplash.com",
      "assets.aceternity.com",
      "localhost",
      "storage.caardify.com",
      "pub-bbc1748562c14819bd7b1815b4645cd8.r2.dev",
      "pub-6e23d43e615b4dd58619e575477c3b05.r2.dev",
      "r2.caardify.com",
    ],
  },
};

export default nextConfig;
