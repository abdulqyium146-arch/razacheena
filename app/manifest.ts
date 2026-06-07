import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Raza Cheena | UK Local SEO Specialist",
    short_name: "RazaCheena",
    description:
      "UK Local SEO specialist helping local service businesses rank higher on Google and win more customers online.",
    start_url: "/",
    display: "standalone",
    background_color: "#0F172A",
    theme_color: "#1D4ED8",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
