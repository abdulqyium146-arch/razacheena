import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin, Settings, BookOpen, Code2, PenLine, Search,
  CheckCircle2, Star, ArrowRight, TrendingUp, Users, Award, Clock,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Raza Cheena | UK Local SEO Specialist & Next.js Developer",
  description:
    "UK Local SEO specialist helping local service businesses rank on Google Maps and Search. Expert in Technical SEO, Next.js development, and humanised content. Free SEO audit available.",
  authors: [{ name: "Raza Cheena", url: "https://razacheena.com/about/" }],
  creator: "Raza Cheena",
  publisher: "Raza Cheena",
  alternates: { canonical: "https://razacheena.com/" },
  openGraph: {
    title: "Raza Cheena | UK Local SEO Specialist & Next.js Developer",
    description:
      "Helping UK local service businesses rank higher on Google, win more customers, and grow online.",
    url: "https://razacheena.com/",
    siteName: "Raza Cheena",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Raza Cheena — UK Local SEO Specialist", type: "image/jpeg" }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raza Cheena | UK Local SEO Specialist & Next.js Developer",
    description: "Helping UK local service businesses rank higher on Google and win more customers.",
    images: ["/og-image.jpg"],
  },
};

const services = [
  {
    id: "local-seo",
    icon: MapPin,
    title: "Local SEO",
    description:
      "Rank in Google Maps and the local pack. I optimise your Google Business Profile, build authoritative citations, and drive real local customers to your door.",
  },
  {
    id: "technical-seo",
    icon: Settings,
    title: "Technical SEO",
    description:
      "Fast, crawlable, indexable websites. I fix Core Web Vitals, implement schema markup, and ensure Google can find and rank every page you need.",
  },
  {
    id: "semantic-seo",
    icon: BookOpen,
    title: "Semantic SEO",
    description:
      "Build topical authority with entity-rich content and topic clusters. I map your content to search intent so Google sees you as the expert in your field.",
  },
  {
    id: "nextjs-development",
    icon: Code2,
    title: "Next.js Development",
    description:
      "Beautiful, lightning-fast websites built with Next.js 14. Every site I build is SEO-ready from day one — schema, metadata, Core Web Vitals all sorted.",
  },
  {
    id: "content-writing",
    icon: PenLine,
    title: "Content Writing",
    description:
      "E-E-A-T optimised, humanised copy in natural UK English. Content that ranks, reads brilliantly, and converts visitors into paying customers.",
  },
  {
    id: "seo-audits",
    icon: Search,
    title: "SEO Audits",
    description:
      "A comprehensive health check for your website. I identify what's holding you back on Google and give you a clear, prioritised action plan to fix it.",
  },
];

const stats = [
  { icon: Users, value: "50+", label: "Local Businesses Helped" },
  { icon: Clock, value: "10+", label: "Years of Experience" },
  { icon: TrendingUp, value: "£2M+", label: "Revenue Generated for Clients" },
  { icon: Award, value: "100%", label: "UK-Focused, Results-Driven" },
];

const differentiators = [
  {
    title: "Five Experts in One",
    description:
      "You don't get a junior account manager with a template strategy. You get a UI/UX designer, Local SEO strategist, Technical SEO expert, Semantic SEO specialist, and humanised content writer — all in one person, working on your project.",
  },
  {
    title: "UK-Only Focus",
    description:
      "I work exclusively with UK local service businesses. That means I understand Google Business Profile in the UK, local search behaviour, and what it takes to rank in British towns and cities — not generic global advice.",
  },
  {
    title: "Measurable Results",
    description:
      "No vanity metrics. I track rankings, leads, and revenue. Every strategy I recommend is tied to a business outcome. You'll always know exactly what I'm doing and why it's working.",
  },
];

const testimonials = [
  {
    name: "James Hargreaves",
    business: "Hargreaves Plumbing, Manchester",
    rating: 5,
    quote:
      "Raza got us ranking in the local pack for 'plumber Manchester' within four months. Our phone hasn't stopped ringing since. Best investment we've made for the business.",
  },
  {
    name: "Sarah Mitchell",
    business: "SM Electrical Services, Leeds",
    rating: 5,
    quote:
      "We went from page three to position one for our main keywords in under six months. Raza's approach is methodical, transparent, and most importantly — it works.",
  },
  {
    name: "Tom Archer",
    business: "Archer Roofing, Bristol",
    rating: 5,
    quote:
      "Not only did he sort our SEO, he rebuilt our website too. It's faster, looks brilliant on mobile, and converts so much better than the old one. Highly recommend.",
  },
];

const faqs = [
  {
    question: "What is Local SEO and why does my UK business need it?",
    answer:
      "Local SEO is the process of optimising your online presence so your business appears prominently when people nearby search for your services on Google. For UK local service businesses — plumbers, electricians, roofers, cleaners, and more — Local SEO is how you get found by the customers who are ready to hire you right now. Without it, you're invisible to the people searching in your area.",
  },
  {
    question: "How long does it take to see results from Local SEO?",
    answer:
      "Most clients start seeing meaningful movement in rankings within two to four months. Google Business Profile improvements often show results faster — sometimes within weeks. Full local pack domination for competitive keywords typically takes six to 12 months, depending on your industry and location. I'll always give you an honest timeline based on your specific situation.",
  },
  {
    question: "Do you work with businesses across the UK?",
    answer:
      "Yes, I work with local service businesses all across the UK — from London and Manchester to smaller towns and rural areas. Whether you're targeting a single city or multiple service areas, I'll build a strategy tailored to your specific locations and the search behaviour of your local customers.",
  },
  {
    question: "What makes you different from other SEO agencies?",
    answer:
      "Most agencies assign your account to a junior executive following a template. I work directly on every project, applying expertise across five disciplines simultaneously — Local SEO, Technical SEO, Semantic SEO, UI/UX, and content writing. You get a senior-level specialist who thinks about your business holistically, not just keywords.",
  },
  {
    question: "How much do your Local SEO services cost?",
    answer:
      "Pricing depends on the scope of work, your location, and how competitive your market is. I offer tailored proposals rather than one-size-fits-all packages, because every business is different. The best first step is a free SEO audit — I'll analyse your current situation and give you a clear picture of what's needed and what it costs.",
  },
];

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://razacheena.com/#webpage",
  url: "https://razacheena.com/",
  name: "Raza Cheena | UK Local SEO Specialist & Next.js Developer",
  description:
    "UK Local SEO specialist helping local service businesses rank on Google Maps and Search. Expert in Technical SEO, Next.js development, and humanised content.",
  isPartOf: { "@id": "https://razacheena.com/#website" },
  about: { "@id": "https://razacheena.com/#person" },
  inLanguage: "en-GB",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://razacheena.com/" },
    ],
  },
};

const serviceRatingSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://razacheena.com/#professionalservice",
  name: "Raza Cheena — UK Local SEO & Web Development",
  url: "https://razacheena.com/",
  provider: { "@id": "https://razacheena.com/#person" },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "1",
  },
  review: testimonials.map(({ name, rating, quote }) => ({
    "@type": "Review",
    author: { "@type": "Person", name },
    reviewRating: { "@type": "Rating", ratingValue: String(rating), bestRating: "5" },
    reviewBody: quote,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceRatingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ── */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-700/20 text-blue-300 text-sm font-medium px-3 py-1.5 rounded-full border border-blue-700/30 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span>
                <span className="text-white font-semibold">Raza Cheena</span>
                {" · "}UK Local SEO Specialist
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Helping UK Local Businesses{" "}
              <span className="text-amber-400">Rank Higher</span> &amp; Win More
              Customers
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              I combine Local SEO, Technical SEO, and fast Next.js web development to help
              UK local service businesses dominate Google Maps and Search — bringing in a
              steady flow of local customers every single day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg"
              >
                Get Your Free SEO Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-8 py-4 rounded-xl border border-white/20 transition-colors"
              >
                View My Services
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-slate-400 text-sm">
              {[
                "✓ No lock-in contracts",
                "✓ UK English copy guaranteed",
                "✓ Transparent monthly reporting",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-blue-600">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center text-center px-4">
                <Icon className="w-6 h-6 text-blue-200 mb-2" />
                <span
                  className="text-2xl md:text-3xl font-extrabold text-white"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {value}
                </span>
                <span className="text-blue-200 text-xs mt-1 leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-white py-16 md:py-24" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              What I Do Best
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Six specialisms. One expert. Every service is designed to get your local
              business more visible, more trusted, and more profitable online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ id, icon: Icon, title, description }) => (
              <Link
                key={id}
                href={`/services/${id}/`}
                className="group bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-2xl p-6 transition-all"
              >
                <div className="w-11 h-11 bg-blue-100 group-hover:bg-blue-200 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-5 h-5 text-blue-700" />
                </div>
                <h3
                  className="text-lg font-bold text-slate-900 mb-2"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-medium mt-4">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW I WORK ── */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              How I Work
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              A straightforward process focused on getting you real results — not reports
              full of jargon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Free SEO Audit",
                description:
                  "I analyse your website, Google Business Profile, and competitors in depth. You get a clear picture of where you stand and what's holding you back.",
              },
              {
                step: "02",
                title: "Custom Strategy",
                description:
                  "No templates. I build a tailored plan based on your market, your competition, and your business goals — with honest timelines and clear milestones.",
              },
              {
                step: "03",
                title: "Deliver & Report",
                description:
                  "I implement the strategy, track your rankings and leads, and report transparently every month. You always know exactly what's happening and why.",
              },
            ].map(({ step, title, description }) => (
              <div key={step} className="flex items-start gap-5">
                <span
                  className="text-5xl font-extrabold text-blue-100 leading-none shrink-0 select-none"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {step}
                </span>
                <div>
                  <h3
                    className="text-xl font-bold text-slate-900 mb-2"
                    style={{ fontFamily: "var(--font-sora)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY RAZA ── */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-extrabold text-white mb-4"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Why Choose Raza Cheena?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              There are plenty of SEO agencies out there. Here's what makes working with me
              genuinely different.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map(({ title, description }) => (
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

          <div className="mt-10 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Learn more about me and my approach
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              What My Clients Say
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Real results for real UK local businesses. Don't take my word for it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, business, rating, quote }) => (
              <div
                key={name}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col"
              >
                <div className="flex gap-0.5 mb-4" aria-label={`${rating} out of 5 stars`}>
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{name}</p>
                  <p className="text-slate-400 text-xs">{business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-slate-50 py-16 md:py-24" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-lg">
              Everything you need to know about working with a UK Local SEO specialist.
            </p>
          </div>

          <Accordion multiple={false} className="space-y-3">
            {faqs.map(({ question, answer }, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white border border-slate-200 rounded-xl px-6 shadow-sm"
              >
                <AccordionTrigger
                  className="text-slate-900 font-semibold text-left hover:no-underline py-5"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 text-sm leading-relaxed pb-5">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-amber-500 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Ready to Start Ranking?
          </h2>
          <p className="text-slate-800 text-lg mb-8 max-w-2xl mx-auto">
            Book your free SEO audit today. I'll review your website and Google Business
            Profile, identify what's holding you back, and show you exactly what it'll take
            to get you ranking — no obligation, no jargon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg"
            >
              Get My Free SEO Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:03474825228"
              className="flex items-center justify-center gap-2 bg-white/30 hover:bg-white/50 text-slate-900 font-semibold text-base px-8 py-4 rounded-xl border border-slate-900/20 transition-colors"
            >
              Call: 0347 4825228
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
