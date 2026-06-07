import type { NextConfig } from "next";
import path from "path";

const securityHeaders = [
  // HSTS — tells browsers to always use HTTPS (preload-eligible)
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Prevent clickjacking
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // Block MIME-type sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Control referrer information sent with requests
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Restrict browser features — no camera/mic/geolocation needed
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  // Enable DNS prefetching for performance
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

const nextConfig: NextConfig = {
  // Enforce trailing slash on all URLs — matches canonical URLs and prevents duplicate content
  trailingSlash: true,

  // Remove X-Powered-By: Next.js header — no need to expose the stack
  poweredByHeader: false,

  // Enable gzip/brotli compression
  compress: true,

  turbopack: {
    // Prevents false workspace root detection from parent-directory lockfiles
    root: path.resolve(__dirname),
  },

  images: {
    // Prefer AVIF, fall back to WebP — best compression for Core Web Vitals
    formats: ["image/avif", "image/webp"],
    // Allow self-hosted images
    remotePatterns: [],
  },

  async headers() {
    return [
      {
        // Apply security headers to every route
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  async redirects() {
    return [
      // Redirect www to non-www (canonical domain)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.razacheena.com" }],
        destination: "https://razacheena.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
