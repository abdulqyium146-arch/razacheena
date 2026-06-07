import type { MetadataRoute } from "next";

// Use a fixed build date — not new Date() — so lastModified only changes when
// content actually changes, not on every deploy. Update manually when pages are edited.
const SITE_BUILD_DATE = new Date("2026-06-07");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://razacheena.com";

  return [
    {
      url: `${base}/`,
      lastModified: SITE_BUILD_DATE,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${base}/services/`,
      lastModified: SITE_BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/contact/`,
      lastModified: SITE_BUILD_DATE,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${base}/about/`,
      lastModified: SITE_BUILD_DATE,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
