export type ServiceData = {
  slug: string;
  iconName: "MapPin" | "Settings" | "BookOpen" | "Code2" | "PenLine" | "Search";
  title: string;
  tagline: string;
  shortDescription: string;
  longDescription: string[];
  bullets: string[];
  whyItMatters: string;
  metaTitle: string;
  metaDescription: string;
};

export const servicesData: ServiceData[] = [
  {
    slug: "local-seo",
    iconName: "MapPin",
    title: "Local SEO",
    tagline: "Dominate Google Maps and the Local Pack",
    shortDescription:
      "Local SEO is the single most powerful marketing channel for local service businesses worldwide. When someone searches 'plumber near me' or 'electrician in Manchester', you need to be in the top three results. I make that happen.",
    longDescription: [
      "When someone in your town searches for the services you offer, do they find you — or your competitors? For local service businesses worldwide, Local SEO is the difference between a phone that rings and one that doesn't.",
      "I specialise in Local SEO for local businesses worldwide. That means I understand the nuances of Google Business Profile management, how local citations work in different markets, and what it actually takes to rank in your city — wherever it is.",
      "Every strategy I build is specific to your service area, your competition, and your customers' search behaviour. No templates, no guesswork — just methodical, data-driven Local SEO that gets you in front of the right people at exactly the right moment.",
    ],
    bullets: [
      "Google Business Profile optimisation and management",
      "Local citation building and NAP consistency",
      "Local pack and Google Maps ranking",
      "Review generation strategy",
      "Service area page creation",
      "Local link building",
    ],
    whyItMatters:
      "Over 46% of all Google searches have local intent. When someone searches 'plumber near me' or 'electrician Manchester', they are ready to book. Without Local SEO, you are invisible to the customers most likely to hire you today.",
    metaTitle: "Local SEO Services | Google Maps & Local Pack | Raza Cheena",
    metaDescription:
      "Expert Local SEO for service businesses worldwide. Google Business Profile optimisation, local pack rankings, citation building, and review strategy. Free SEO audit available.",
  },
  {
    slug: "technical-seo",
    iconName: "Settings",
    title: "Technical SEO",
    tagline: "Give Google Every Reason to Rank You Higher",
    shortDescription:
      "A technically broken website will never rank well, no matter how good your content is. I audit and fix every technical issue holding your site back — from page speed and Core Web Vitals to crawlability, indexing, and schema markup.",
    longDescription: [
      "You can have the best content in the world, but if Google can't crawl, understand, and index your pages efficiently, you won't rank. Technical SEO is the foundation everything else is built on.",
      "I conduct thorough technical audits covering every aspect of your website's health — from server response times and Core Web Vitals to crawl budget management, schema implementation, and mobile usability.",
      "Unlike agencies that hand you a report and leave you to figure it out, I implement the fixes too. You get a technically excellent website that Google wants to rank and users love to use.",
    ],
    bullets: [
      "Core Web Vitals optimisation (LCP, CLS, INP)",
      "Site speed and performance improvements",
      "Schema markup implementation",
      "Crawl budget and indexation fixes",
      "Mobile usability and responsive design",
      "HTTPS, canonical tags, and redirect management",
    ],
    whyItMatters:
      "Google's ranking algorithms include over 200 signals — and many of them are technical. A site that loads slowly, has crawl errors, or lacks structured data is actively penalised. Technical SEO removes every barrier between your content and a top ranking.",
    metaTitle: "Technical SEO Services | Core Web Vitals & Audit | Raza Cheena",
    metaDescription:
      "Technical SEO audits and implementation for websites worldwide. Core Web Vitals, schema markup, crawlability, and indexation fixes. Get your site technically perfect.",
  },
  {
    slug: "semantic-seo",
    iconName: "BookOpen",
    title: "Semantic SEO",
    tagline: "Build Topical Authority Google Trusts",
    shortDescription:
      "Google doesn't just read keywords — it understands topics, entities, and context. I build content strategies that signal genuine expertise to Google's algorithms, helping your site rank for entire topic clusters rather than isolated keywords.",
    longDescription: [
      "Modern SEO is about demonstrating expertise at a topic level, not just matching individual keywords. Google's algorithms now evaluate whether your site has genuine depth and authority across a subject — not just whether a keyword appears on a page.",
      "I use semantic SEO to map out the full topic landscape relevant to your business, identify the entity relationships Google expects to see, and build a content architecture that signals comprehensive expertise.",
      "The result is a site that doesn't just rank for a handful of keywords — it ranks for an entire topic cluster and earns visibility in Google's AI Overviews, featured snippets, and People Also Ask boxes.",
    ],
    bullets: [
      "Entity mapping and topic cluster architecture",
      "Search intent analysis and content planning",
      "Internal linking strategy",
      "NLP-optimised content briefs",
      "Featured snippet and AI Overview targeting",
      "Competitor content gap analysis",
    ],
    whyItMatters:
      "Google's Helpful Content system and AI-powered ranking now evaluate topical authority holistically. Sites with deep, interconnected content on a subject consistently outrank those with isolated, keyword-stuffed pages.",
    metaTitle: "Semantic SEO Services | Topical Authority | Raza Cheena",
    metaDescription:
      "Build topical authority with semantic SEO. Entity mapping, topic clusters, NLP-optimised content, and AI Overview targeting for businesses worldwide. Free audit available.",
  },
  {
    slug: "nextjs-development",
    iconName: "Code2",
    title: "Next.js Development",
    tagline: "Fast, Beautiful Websites Built to Rank",
    shortDescription:
      "Your website is your most important marketing asset. I build fast, conversion-optimised websites with Next.js that look stunning, load instantly, and are built for SEO from the ground up — not retrofitted as an afterthought.",
    longDescription: [
      "Most websites are built first and then SEO is bolted on afterwards. I build websites where SEO is considered at every architectural decision — from how routes are structured and pages are rendered to how metadata is managed and schema markup is implemented.",
      "I use Next.js with the App Router, TypeScript, and Tailwind CSS to build websites that score near-perfect on Core Web Vitals out of the box. Every site I build is mobile-first, accessible, and built to convert visitors into customers.",
      "Whether you need a straightforward service business website or a complex multi-location platform with programmatic SEO, I can design and build it — with every technical SEO requirement handled from day one.",
    ],
    bullets: [
      "Next.js with App Router and Server Components",
      "Tailwind CSS and shadcn/ui design system",
      "Full SEO implementation baked in",
      "Core Web Vitals optimised by default",
      "Mobile-first, conversion-focused layouts",
      "Programmatic SEO for multi-location sites",
    ],
    whyItMatters:
      "Page experience is now a confirmed Google ranking factor. Sites that load in under 2.5 seconds with stable layouts consistently outrank slower competitors. A Next.js website built with SEO in mind starts with a huge technical advantage.",
    metaTitle: "Next.js Web Development | SEO-Ready Websites | Raza Cheena",
    metaDescription:
      "Fast, beautiful Next.js websites built with SEO at the core. App Router, TypeScript, Tailwind CSS, Core Web Vitals optimised by default. For local businesses worldwide.",
  },
  {
    slug: "content-writing",
    iconName: "PenLine",
    title: "Content Writing",
    tagline: "Human Copy That Ranks and Converts",
    shortDescription:
      "Great content is the foundation of every successful SEO strategy. I write humanised, E-E-A-T optimised copy in natural, human English that Google loves and your customers actually want to read — service pages, location pages, and blog articles.",
    longDescription: [
      "Most SEO content reads like it was written by a robot — because it was. Keyword-stuffed, awkward, and robotic copy might have worked in 2015. Today, Google's algorithms are sophisticated enough to evaluate genuinely helpful, expert content.",
      "I write content that demonstrates real Experience, Expertise, Authority, and Trust (E-E-A-T) — the signals Google now uses to evaluate content quality. Every piece I write is in natural, human English and reads like it was written by a knowledgeable local professional.",
      "From service pages and location pages to FAQ content and blog articles, I write copy that ranks in search and converts when it arrives. You'll never have to apologise for your website content again.",
    ],
    bullets: [
      "Service and location page copywriting",
      "E-E-A-T signals (Experience, Expertise, Authority, Trust)",
      "FAQ content with FAQPage schema",
      "Blog articles and AEO-formatted content",
      "Natural English — clear, human, jargon-free",
      "Natural keyword integration, never stuffed",
    ],
    whyItMatters:
      "Google's Helpful Content update demoted millions of pages of generic, keyword-focused content. Sites with genuine, expert, humanised content now dominate. The quality of your writing is now a direct ranking factor.",
    metaTitle: "SEO Content Writing | E-E-A-T Optimised Copy | Raza Cheena",
    metaDescription:
      "Human SEO content writing with genuine E-E-A-T signals. Service pages, location pages, blog articles, and FAQ content that ranks and converts.",
  },
  {
    slug: "seo-audits",
    iconName: "Search",
    title: "SEO Audits",
    tagline: "Find Out Exactly What's Holding You Back",
    shortDescription:
      "Before you invest in any SEO work, you need to know where you stand. My comprehensive SEO audits cover every aspect of your online presence and give you a prioritised action plan with clear, actionable recommendations.",
    longDescription: [
      "Most business owners know their website isn't performing as well as it should — but they don't know why, or where to start fixing it. A thorough SEO audit answers both questions with data.",
      "My audits cover your entire online presence: technical health, on-page content, Google Business Profile, backlink profile, and competitor benchmarking. I don't just list problems — I prioritise them by impact and give you a clear action plan.",
      "Whether you need an audit to inform a full SEO retainer, or just want an honest assessment before making decisions, I'll give you a clear, jargon-free picture of where you stand and what to do about it.",
    ],
    bullets: [
      "Full technical SEO audit",
      "On-page content and keyword analysis",
      "Google Business Profile review",
      "Competitor benchmarking",
      "Backlink profile assessment",
      "Prioritised, actionable recommendations",
    ],
    whyItMatters:
      "Without an audit, you're investing in SEO without knowing where the problems are. An audit ensures every penny you spend is directed at the highest-impact changes — not guesswork.",
    metaTitle: "SEO Audit Services | Technical & Local SEO Audit | Raza Cheena",
    metaDescription:
      "Comprehensive SEO audits for businesses worldwide. Technical SEO, on-page analysis, Google Business Profile review, and competitor benchmarking. Free initial audit available.",
  },
];

export function getService(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}
