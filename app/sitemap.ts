import type { MetadataRoute } from "next";
import { servicesData } from "@/lib/services-data";
import { locationsData } from "@/lib/locations-data";

// Update this date whenever pages are meaningfully edited.
const SITE_BUILD_DATE = new Date("2026-06-07");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://razacheena.com";

  const corePages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: SITE_BUILD_DATE, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/services/`, lastModified: SITE_BUILD_DATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact/`, lastModified: SITE_BUILD_DATE, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/about/`, lastModified: SITE_BUILD_DATE, changeFrequency: "yearly", priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = servicesData.map((s) => ({
    url: `${base}/services/${s.slug}/`,
    lastModified: SITE_BUILD_DATE,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const locationPages: MetadataRoute.Sitemap = locationsData.map((loc) => ({
    url: `${base}/local-seo-${loc.slug}/`,
    lastModified: SITE_BUILD_DATE,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...corePages, ...servicePages, ...locationPages];
}
