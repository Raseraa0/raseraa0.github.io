import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
};

module.exports = {
  images: {
    unoptimized: true,
  },
  output: "export"
}

export default nextConfig;
