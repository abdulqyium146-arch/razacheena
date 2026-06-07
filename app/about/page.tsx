import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin, Settings, BookOpen, Code2, PenLine, ArrowRight, CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Raza Cheena | UK Local SEO Specialist",
  description:
    "Meet Raza Cheena — a UK Local SEO specialist and Next.js developer with 10+ years' experience helping local service businesses rank higher and win more customers online.",
  authors: [{ name: "Raza Cheena", url: "https://razacheena.com/about/" }],
  creator: "Raza Cheena",
  publisher: "Raza Cheena",
  alternates: { canonical: "https://razacheena.com/about/" },
  openGraph: {
    title: "About Raza Cheena | UK Local SEO Specialist",
    description:
      "10+ years helping UK local businesses dominate Google. Senior-level expertise across Local SEO, Technical SEO, Semantic SEO, Next.js development, and content writing.",
    url: "https://razacheena.com/about/",
    siteName: "Raza Cheena",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "About Raza Cheena — UK Local SEO Specialist", type: "image/jpeg" }],
    locale: "en_GB",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Raza Cheena | UK Local SEO Specialist",
    description: "10+ years helping UK local businesses dominate Google. Five-in-one expert: Local SEO, Technical SEO, Semantic SEO, Next.js, Content.",
    images: ["/og-image.jpg"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://razacheena.com/#person",
  name: "Raza Cheena",
  url: "https://razacheena.com",
  jobTitle: "UK Local SEO Specialist & Full-Stack Developer",
  description:
    "Raza Cheena is a UK-based Local SEO specialist and Next.js developer with over 10 years of experience helping local service businesses rank on Google and grow their customer base.",
  knowsAbout: [
    "Local SEO",
    "Google Business Profile Optimisation",
    "Technical SEO",
    "Core Web Vitals",
    "Semantic SEO",
    "Entity Optimisation",
    "Next.js Development",
    "UI/UX Design",
    "Humanised Content Writing",
    "E-E-A-T",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "SEO Specialist & Web Developer",
    occupationLocation: { "@type": "Country", name: "United Kingdom" },
  },
};

const expertRoles = [
  {
    icon: MapPin,
    title: "Local SEO Strategist",
    description:
      "Google Business Profile, local pack rankings, citation management, and service area pages. I know exactly what it takes to rank in competitive UK local markets.",
  },
  {
    icon: Settings,
    title: "Technical SEO Expert",
    description:
      "Core Web Vitals, schema markup, crawlability, and indexation. I fix the technical foundations that most agencies overlook or don't understand.",
  },
  {
    icon: BookOpen,
    title: "Semantic SEO Specialist",
    description:
      "Entity relationships, topic clusters, and NLP signals. I build content strategies that establish genuine topical authority, not just keyword density.",
  },
  {
    icon: Code2,
    title: "Next.js Developer",
    description:
      "Full-stack websites built with Next.js 14, Tailwind CSS, and TypeScript. Fast, beautiful, and SEO-ready from the very first line of code.",
  },
  {
    icon: PenLine,
    title: "Humanised Content Writer",
    description:
      "UK English copy with genuine E-E-A-T signals. I write like a knowledgeable local expert — not a keyword-stuffing robot or a corporate brochure.",
  },
];

const values = [
  {
    title: "Transparency First",
    description:
      "You'll always know what I'm doing, why I'm doing it, and what results it's driving. Monthly reports in plain English — no smoke and mirrors.",
  },
  {
    title: "Results Over Vanity",
    description:
      "I don't optimise for impressions or 'brand awareness'. I optimise for leads, calls, and revenue. If it doesn't grow your business, it's not part of the strategy.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "I don't take on dozens of clients to maximise revenue. I take on the right clients and build long-term partnerships where your success genuinely matters to me.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* ── PAGE HEADER ── */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-slate-400 text-sm mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-slate-300">About</li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-blue-700/30 text-blue-300 text-xs font-medium px-3 py-1 rounded-full border border-blue-700/40">
                Written &amp; maintained by
                <span className="text-white font-semibold">Raza Cheena</span>
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl font-extrabold text-white mb-6"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              About Raza Cheena
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              UK Local SEO specialist and Next.js developer helping local service businesses
              rank higher, attract more customers, and build a sustainable online presence.
            </p>
            <p className="text-slate-400 text-sm mt-3">
              <span className="font-medium text-slate-300">Raza Cheena</span> · UK Local SEO Specialist · 10+ years experience
            </p>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-3xl font-extrabold text-slate-900 mb-6"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Five Specialisms. One Mission.
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  I've spent over a decade working at the intersection of search, code, and
                  content — and I've seen first-hand how most UK local businesses are losing
                  customers every day simply because they can't be found online.
                </p>
                <p>
                  Most SEO agencies solve one piece of the puzzle. They'll fix your page
                  speed but ignore your content. Or they'll write blog posts but leave your
                  Google Business Profile in a mess. I approach every project through five
                  lenses simultaneously: Local SEO, Technical SEO, Semantic SEO, UI/UX
                  design, and humanised content writing.
                </p>
                <p>
                  The result? Websites that not only rank but convert. Businesses that don't
                  just appear on Google Maps — they dominate it. Clients who measure my value
                  in leads and revenue, not rankings spreadsheets.
                </p>
                <p>
                  I work exclusively with UK local service businesses because that's where I
                  can make the biggest impact. I understand your market, your customers, and
                  what it takes to win in British towns and cities.
                </p>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "10+", label: "Years of Experience" },
                { value: "50+", label: "UK Businesses Helped" },
                { value: "£2M+", label: "Revenue Generated" },
                { value: "100%", label: "UK-Focused Work" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center"
                >
                  <span
                    className="text-3xl font-extrabold text-blue-700 block mb-1"
                    style={{ fontFamily: "var(--font-sora)" }}
                  >
                    {value}
                  </span>
                  <span className="text-slate-500 text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERT ROLES ── */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              My Five Expert Roles
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Most specialists do one thing. I do five — and I do them simultaneously on
              every project, because that's what genuinely moves the needle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertRoles.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white border border-slate-200 rounded-2xl p-6"
              >
                <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-blue-700" />
                </div>
                <h3
                  className="text-lg font-bold text-slate-900 mb-2"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-extrabold text-white mb-4"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              How I Work
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Three principles that guide every client relationship I have.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ title, description }) => (
              <div
                key={title}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6"
              >
                <CheckCircle2 className="w-8 h-8 text-amber-400 mb-4" />
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
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
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-800 text-lg mb-8 max-w-2xl mx-auto">
            If you're serious about growing your local business online, I'd love to hear from
            you. Start with a free SEO audit — no obligation, just honest advice.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
