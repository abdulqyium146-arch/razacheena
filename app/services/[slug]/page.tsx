import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin, Settings, BookOpen, Code2, PenLine, Search,
  ArrowRight, CheckCircle2, AlertCircle,
} from "lucide-react";
import { servicesData, getService } from "@/lib/services-data";

const iconMap = {
  MapPin, Settings, BookOpen, Code2, PenLine, Search,
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    authors: [{ name: "Raza Cheena", url: "https://razacheena.com/about/" }],
    creator: "Raza Cheena",
    publisher: "Raza Cheena",
    alternates: { canonical: `https://razacheena.com/services/${slug}/` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://razacheena.com/services/${slug}/`,
      siteName: "Raza Cheena",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `${service.title} — Raza Cheena`, type: "image/jpeg" }],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = iconMap[service.iconName];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://razacheena.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://razacheena.com/services/" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://razacheena.com/services/${slug}/` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://razacheena.com/services/${slug}/#service`,
    name: service.title,
    description: service.shortDescription,
    provider: { "@id": "https://razacheena.com/#person" },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    url: `https://razacheena.com/services/${slug}/`,
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://razacheena.com/services/${slug}/#webpage`,
    url: `https://razacheena.com/services/${slug}/`,
    name: service.metaTitle,
    description: service.metaDescription,
    isPartOf: { "@id": "https://razacheena.com/#website" },
    about: { "@id": "https://razacheena.com/#person" },
    inLanguage: "en-GB",
  };

  const relatedServices = servicesData.filter((s) => s.slug !== slug).slice(0, 3);

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
              <li><Link href="/services/" className="hover:text-white transition-colors">Services</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-slate-300">{service.title}</li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <div className="w-14 h-14 bg-blue-700/30 border border-blue-700/40 rounded-2xl flex items-center justify-center mb-6">
              <Icon className="w-7 h-7 text-blue-400" />
            </div>
            <p className="text-blue-400 font-semibold text-sm mb-3 uppercase tracking-wider">{service.tagline}</p>
            <h1
              className="text-4xl md:text-5xl font-extrabold text-white mb-6"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              {service.title}
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              {service.shortDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-xl transition-colors"
              >
                Get a Free {service.title} Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-colors"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-3xl font-extrabold text-slate-900 mb-6"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                What&apos;s Included
              </h2>
              <ul className="space-y-4">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h2
                className="text-3xl font-extrabold text-slate-900 mb-6"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                About This Service
              </h2>
              {service.longDescription.map((para, i) => (
                <p key={i} className="text-slate-600 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section className="bg-blue-700 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-5">
            <AlertCircle className="w-8 h-8 text-blue-200 shrink-0 mt-0.5" />
            <div>
              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Why This Matters for Your Business
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed">{service.whyItMatters}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-extrabold text-slate-900 mb-8"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Other Services You Might Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((related) => {
              const RelatedIcon = iconMap[related.iconName];
              return (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}/`}
                  className="group bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-2xl p-6 transition-all"
                >
                  <div className="w-10 h-10 bg-blue-100 group-hover:bg-blue-200 rounded-xl flex items-center justify-center mb-4 transition-colors">
                    <RelatedIcon className="w-5 h-5 text-blue-700" />
                  </div>
                  <h3
                    className="text-base font-bold text-slate-900 mb-2"
                    style={{ fontFamily: "var(--font-sora)" }}
                  >
                    {related.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{related.shortDescription}</p>
                  <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-medium mt-4">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
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
            Ready to Get Started?
          </h2>
          <p className="text-slate-800 text-lg mb-8 max-w-2xl mx-auto">
            Book your free {service.title} audit. I&apos;ll review your current situation and
            tell you exactly what it will take to get you ranking — no obligation, no jargon.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl transition-colors"
          >
            Get My Free Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
