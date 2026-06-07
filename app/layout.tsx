import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Raza Cheena | UK Local SEO Specialist & Next.js Developer",
    template: "%s | Raza Cheena",
  },
  description:
    "Raza Cheena is a UK Local SEO specialist and Next.js developer helping local service businesses rank higher on Google, win more customers, and grow online. Free SEO audit available.",
  metadataBase: new URL("https://razacheena.com"),
  alternates: { canonical: "https://razacheena.com/" },
  openGraph: {
    title: "Raza Cheena | UK Local SEO Specialist & Next.js Developer",
    description:
      "UK Local SEO specialist helping local service businesses rank on Google Maps and Search. Expert in Technical SEO, Next.js development, and humanised content.",
    url: "https://razacheena.com",
    siteName: "Raza Cheena",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Raza Cheena — UK Local SEO Specialist" }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raza Cheena | UK Local SEO Specialist",
    description:
      "UK Local SEO specialist helping local businesses rank higher and win more customers online.",
  },
  verification: {
    google: "U8VWxgFOlWlWV7heTamUUXDcRq2XzmQmQbodpk1SDw4",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://razacheena.com/#person",
      name: "Raza Cheena",
      url: "https://razacheena.com",
      jobTitle: "UK Local SEO Specialist & Full-Stack Developer",
      description:
        "Raza Cheena is a UK Local SEO specialist and Next.js developer helping local service businesses rank on Google and grow online.",
      knowsAbout: [
        "Local SEO",
        "Technical SEO",
        "Semantic SEO",
        "Next.js Development",
        "UI/UX Design",
        "Content Strategy",
        "Google Business Profile Optimisation",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://razacheena.com/#website",
      url: "https://razacheena.com",
      name: "Raza Cheena — UK Local SEO Specialist",
      publisher: { "@id": "https://razacheena.com/#person" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://razacheena.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      className={`${sora.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
