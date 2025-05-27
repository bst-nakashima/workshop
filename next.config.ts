import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bstinc.co.jp"
      },
    ],
    unoptimized: true
  },
};

export default nextConfig;
