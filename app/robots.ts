import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Only block actual admin/API routes — never block /_next/ as Googlebot
        // needs /_next/static/ to render JS and CSS for accurate page assessment
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: "https://razacheena.com/sitemap.xml",
    host: "https://razacheena.com",
  };
}
