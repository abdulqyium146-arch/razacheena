import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { locationsData, getLocation } from "@/lib/locations-data";

export const dynamicParams = false;

export async function generateStaticParams() {
  return locationsData.map((loc) => ({ slug: `local-seo-${loc.slug}` }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const citySlug = slug.replace("local-seo-", "");
  const location = getLocation(citySlug);
  if (!location) return {};

  return {
    title: `Local SEO ${location.city} | Rank Higher on Google Maps | Raza Cheena`,
    description: `Expert Local SEO in ${location.city}. Raza Cheena helps ${location.city} service businesses rank on Google Maps, dominate the local pack, and win more customers. Free audit.`,
    authors: [{ name: "Raza Cheena", url: "https://razacheena.com/about/" }],
    creator: "Raza Cheena",
    publisher: "Raza Cheena",
    alternates: { canonical: `https://razacheena.com/local-seo-${location.slug}/` },
    openGraph: {
      title: `Local SEO ${location.city} | Raza Cheena`,
      description: `Dominate Google Maps and local search in ${location.city}. Expert Local SEO from Raza Cheena. Free SEO audit available.`,
      url: `https://razacheena.com/local-seo-${location.slug}/`,
      siteName: "Raza Cheena",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `Local SEO ${location.city} — Raza Cheena`, type: "image/jpeg" }],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Local SEO ${location.city} | Raza Cheena`,
      description: `Dominate Google Maps and local search in ${location.city}. Free SEO audit available.`,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const citySlug = slug.replace("local-seo-", "");
  const location = getLocation(citySlug);
  if (!location) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://razacheena.com/" },
      { "@type": "ListItem", position: 2, name: `Local SEO ${location.city}`, item: `https://razacheena.com/local-seo-${location.slug}/` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://razacheena.com/local-seo-${location.slug}/#service`,
    name: `Local SEO ${location.city}`,
    description: `Expert Local SEO services helping ${location.city} service businesses rank on Google Maps and local search.`,
    provider: { "@id": "https://razacheena.com/#person" },
    areaServed: { "@type": "City", name: location.city, containedInPlace: { "@type": "Country", name: "United Kingdom" } },
    url: `https://razacheena.com/local-seo-${location.slug}/`,
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://razacheena.com/local-seo-${location.slug}/#webpage`,
    url: `https://razacheena.com/local-seo-${location.slug}/`,
    name: `Local SEO ${location.city} | Rank Higher on Google Maps | Raza Cheena`,
    description: `Expert Local SEO in ${location.city}. Helping ${location.city} service businesses rank on Google Maps and win more customers.`,
    isPartOf: { "@id": "https://razacheena.com/#website" },
    about: { "@id": "https://razacheena.com/#person" },
    inLanguage: "en-GB",
  };

  const includedItems = [
    "Google Business Profile optimisation for " + location.city,
    "Local pack and Google Maps ranking",
    "Citation building for " + location.region,
    "Service area page creation",
    "Review generation strategy",
    `Competitor analysis for ${location.city} businesses`,
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* ── PAGE HEADER ── */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-slate-400 text-sm mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-slate-300">Local SEO {location.city}</li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">{location.city}, {location.region}</span>
            </div>
            <h1
              className="text-4xl md:text-5xl font-extrabold text-white mb-6"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Local SEO {location.city}
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              {location.city} is {location.description}. If your business isn&apos;t appearing
              in the Google local pack when customers search for your services here, you&apos;re
              losing enquiries to competitors every single day.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              I help {location.city} service businesses rank on Google Maps, dominate the
              local pack, and win more customers — with a strategy built specifically for your
              market, your competition, and your service area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-xl transition-colors"
              >
                Get a Free {location.city} SEO Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:03474825228"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call: 0347 4825228
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCAL CONTEXT ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-3xl font-extrabold text-slate-900 mb-6"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Local SEO in {location.city}: What You Need to Know
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  {location.searchContext}
                </p>
                <p>
                  I understand the {location.city} local search landscape — which keywords
                  drive enquiries, which competitors are dominating the local pack, and what
                  it takes to outrank them. This is not a generic SEO package. It&apos;s a
                  strategy built specifically for {location.city}.
                </p>
                <p>
                  Every {location.city} business I work with gets a tailored Local SEO
                  strategy — starting with a deep audit of your Google Business Profile,
                  your citations, your on-site content, and your competitors. From there, I
                  build and implement a plan with clear milestones and honest timelines.
                </p>
              </div>
            </div>

            <div>
              <h3
                className="text-xl font-extrabold text-slate-900 mb-6"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                What&apos;s Included in Your {location.city} SEO Package
              </h3>
              <ul className="space-y-4">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Location Served</p>
                <p className="text-slate-900 font-semibold">{location.city}, {location.county}</p>
                <p className="text-slate-500 text-sm">{location.region} · United Kingdom</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY ME ── */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Why {location.city} Businesses Choose Raza Cheena
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              I work exclusively with UK local service businesses. That means I understand
              your market, your customers, and what it takes to win in British cities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "UK-Only Specialist",
                body: `I work exclusively with UK businesses. I know the UK local search landscape inside out — including what's working right now for service businesses in ${location.city}.`,
              },
              {
                title: "Five Experts in One",
                body: "Local SEO, Technical SEO, Semantic SEO, content writing, and web development — all in one person. You get a holistic strategy, not a fragmented service.",
              },
              {
                title: "Transparent Reporting",
                body: "You'll always know what I'm doing, why I'm doing it, and what results it's producing. Monthly reports in plain English — no smoke and mirrors.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white border border-slate-200 rounded-2xl p-6">
                <CheckCircle2 className="w-7 h-7 text-blue-700 mb-4" />
                <h3
                  className="text-lg font-bold text-slate-900 mb-3"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-amber-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Ready to Rank Higher in {location.city}?
          </h2>
          <p className="text-slate-800 text-lg mb-8 max-w-2xl mx-auto">
            Start with a free {location.city} SEO audit. I&apos;ll review your Google Business
            Profile, your website, and your local competitors — and show you exactly what it
            will take to rank higher. No obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Get My Free Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/923474825228?text=Hi%20Raza%2C%20I%27d%20like%20Local%20SEO%20help%20in%20the%20area."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
