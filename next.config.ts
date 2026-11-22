import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Enforce trailing slash on all URLs — matches canonical URLs and prevents duplicate content
  trailingSlash: true,

  // Remove X-Powered-By: Next.js header — no need to expose the stack
  poweredByHeader: false,

  // Static export for Cloudflare Pages
  output: "export",

  // Enable gzip/brotli compression
  compress: true,

  turbopack: {
    // Prevents false workspace root detection from parent-directory lockfiles
    root: path.resolve(__dirname),
  },

  images: {
    // No image optimisation server on static export — serve images as-is
    unoptimized: true,
    // Prefer AVIF, fall back to WebP — best compression for Core Web Vitals
    formats: ["image/avif", "image/webp"],
    // Allow self-hosted images
    remotePatterns: [],
  },
};

export default nextConfig;
