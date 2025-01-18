import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
