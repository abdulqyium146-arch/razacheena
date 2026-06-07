import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin, Settings, BookOpen, Code2, PenLine, Search, ArrowRight, CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "UK Local SEO & Web Development Services | Raza Cheena",
  description:
    "Local SEO, Technical SEO, Semantic SEO, Next.js development, content writing, and SEO audits for UK local service businesses. Find out what's right for your business.",
  authors: [{ name: "Raza Cheena", url: "https://razacheena.com/about/" }],
  creator: "Raza Cheena",
  alternates: { canonical: "https://razacheena.com/services/" },
  openGraph: {
    title: "UK Local SEO & Web Development Services | Raza Cheena",
    description:
      "Six specialist services designed to help UK local businesses rank higher, win more customers, and grow online.",
    url: "https://razacheena.com/services/",
    siteName: "Raza Cheena",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "UK Local SEO & Web Development Services — Raza Cheena", type: "image/jpeg" }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Local SEO & Web Development Services | Raza Cheena",
    description: "Six specialist services to help UK local businesses rank higher, win more customers, and grow online.",
    images: ["/og-image.jpg"],
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@id": "https://razacheena.com/#person" },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "UK Local SEO & Web Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local SEO" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Technical SEO" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Semantic SEO" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Next.js Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content Writing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Audits" } },
    ],
  },
};

const services = [
  {
    id: "local-seo",
    icon: MapPin,
    title: "Local SEO",
    tagline: "Dominate Google Maps and the Local Pack",
    description:
      "Local SEO is the single most powerful marketing channel for UK local service businesses. When someone searches 'plumber near me' or 'electrician in Manchester', you need to be in the top three results. I make that happen.",
    bullets: [
      "Google Business Profile optimisation and management",
      "Local citation building and NAP consistency",
      "Local pack and Google Maps ranking",
      "Review generation strategy",
      "Service area page creation",
      "Local link building",
    ],
  },
  {
    id: "technical-seo",
    icon: Settings,
    title: "Technical SEO",
    tagline: "Give Google Every Reason to Rank You Higher",
    description:
      "A technically broken website will never rank well, no matter how good your content is. I audit and fix every technical issue holding your site back — from page speed and Core Web Vitals to crawlability, indexing, and schema markup.",
    bullets: [
      "Core Web Vitals optimisation (LCP, CLS, INP)",
      "Site speed and performance improvements",
      "Schema markup implementation",
      "Crawl budget and indexation fixes",
      "Mobile usability and responsive design",
      "HTTPS, canonical tags, and redirect management",
    ],
  },
  {
    id: "semantic-seo",
    icon: BookOpen,
    title: "Semantic SEO",
    tagline: "Build Topical Authority Google Trusts",
    description:
      "Google doesn't just read keywords — it understands topics, entities, and context. I build content strategies that signal genuine expertise to Google's algorithms, helping your site rank for entire topic clusters rather than isolated keywords.",
    bullets: [
      "Entity mapping and topic cluster architecture",
      "Search intent analysis and content planning",
      "Internal linking strategy",
      "NLP-optimised content briefs",
      "Featured snippet and AI Overview targeting",
      "Competitor content gap analysis",
    ],
  },
  {
    id: "nextjs",
    icon: Code2,
    title: "Next.js Development",
    tagline: "Fast, Beautiful Websites Built to Rank",
    description:
      "Your website is your most important marketing asset. I build fast, conversion-optimised websites with Next.js 14 that look stunning, load instantly, and are built for SEO from the ground up — not retrofitted as an afterthought.",
    bullets: [
      "Next.js 14 with App Router and Server Components",
      "Tailwind CSS and shadcn/ui design system",
      "Full SEO implementation baked in",
      "Core Web Vitals optimised by default",
      "Mobile-first, conversion-focused layouts",
      "Programmatic SEO for multi-location sites",
    ],
  },
  {
    id: "content",
    icon: PenLine,
    title: "Content Writing",
    tagline: "UK English Copy That Ranks and Converts",
    description:
      "Great content is the foundation of every successful SEO strategy. I write humanised, E-E-A-T optimised copy in natural UK English that Google loves and your customers actually want to read — service pages, location pages, and blog articles.",
    bullets: [
      "Service and location page copywriting",
      "E-E-A-T signals (Experience, Expertise, Authority, Trust)",
      "FAQ content with FAQPage schema",
      "Blog articles and AEO-formatted content",
      "UK English — colour, optimise, realise, centre",
      "Natural keyword integration, never stuffed",
    ],
  },
  {
    id: "audits",
    icon: Search,
    title: "SEO Audits",
    tagline: "Find Out Exactly What's Holding You Back",
    description:
      "Before you invest in any SEO work, you need to know where you stand. My comprehensive SEO audits cover every aspect of your online presence and give you a prioritised action plan with clear, actionable recommendations.",
    bullets: [
      "Full technical SEO audit",
      "On-page content and keyword analysis",
      "Google Business Profile review",
      "Competitor benchmarking",
      "Backlink profile assessment",
      "Prioritised, actionable recommendations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* ── PAGE HEADER ── */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-slate-400 text-sm mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-slate-300">Services</li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <h1
              className="text-4xl md:text-5xl font-extrabold text-white mb-6"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              UK Local SEO &amp; Web Development Services
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Six specialist services working together to help your local business rank
              higher, attract more customers, and grow online. Everything you need — nothing
              you don't.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map(({ id, icon: Icon, title, tagline, description, bullets }, index) => (
            <div
              key={id}
              id={id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-blue-700" />
                </div>
                <h2
                  className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {title}
                </h2>
                <p className="text-blue-700 font-semibold text-sm mb-4">{tagline}</p>
                <p className="text-slate-600 leading-relaxed mb-6">{description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-3 rounded-lg transition-colors text-sm"
                >
                  Enquire About {title}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Bullets */}
              <div className={`bg-slate-50 rounded-2xl p-6 border border-slate-200 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <h3
                  className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-slate-700 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-amber-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Not Sure Where to Start?
          </h2>
          <p className="text-slate-800 text-lg mb-8 max-w-2xl mx-auto">
            Book a free SEO audit and I'll tell you exactly which services will make the
            biggest difference for your business — and in what order.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl transition-colors"
          >
            Get Your Free SEO Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
