import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel automatically sets this, but it's good to be explicit
  swcMinify: true,

  turbopack: {
    root: process.cwd(),
  },

  // Enable static generation for better performance on Vercel
  staticPageGenerationTimeout: 60,

  // Image optimization for Vercel
  images: {
    remotePatterns: [],
  },

  // Headers for better caching
  headers: async () => {
    return [
      {
        source: "/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
