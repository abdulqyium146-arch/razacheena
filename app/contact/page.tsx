import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/923474825228?text=Hi%20Raza%2C%20I%27d%20like%20to%20find%20out%20more%20about%20your%20Local%20SEO%20services.";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Raza Cheena | Free SEO Audit for UK Local Businesses",
  description:
    "Get in touch with Raza Cheena for a free SEO audit. UK Local SEO specialist available for local service businesses across the UK. Typically responds within one business day.",
  authors: [{ name: "Raza Cheena", url: "https://razacheena.com/about/" }],
  creator: "Raza Cheena",
  publisher: "Raza Cheena",
  alternates: { canonical: "https://razacheena.com/contact/" },
  openGraph: {
    title: "Contact Raza Cheena | Free SEO Audit",
    description:
      "Book your free SEO audit today. UK Local SEO specialist for local service businesses. Responds within one business day.",
    url: "https://razacheena.com/contact/",
    siteName: "Raza Cheena",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Contact Raza Cheena — Free SEO Audit", type: "image/jpeg" }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Raza Cheena | Free SEO Audit",
    description: "Book your free SEO audit today. UK Local SEO specialist. Responds within one business day.",
    images: ["/og-image.jpg"],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Raza Cheena",
  url: "https://razacheena.com/contact/",
  mainEntity: {
    "@type": "Person",
    "@id": "https://razacheena.com/#person",
    name: "Raza Cheena",
    telephone: "07700000000",
    email: "hello@razacheena.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "07700000000",
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: "English",
    },
  },
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "0347 4825228",
    href: "tel:03474825228",
    note: "Mon–Fri, 9am–6pm",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "0347 4825228",
    href: WA_LINK,
    note: "Fastest way to reach me",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@razacheena.com",
    href: "mailto:hello@razacheena.com",
    note: "Response within 1 business day",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 1 Business Day",
    href: null,
    note: "Usually much faster",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "United Kingdom",
    href: null,
    note: "Working with clients nationwide",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* ── PAGE HEADER ── */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-slate-400 text-sm mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="text-slate-600">/</li>
              <li className="text-slate-300">Contact</li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <h1
              className="text-4xl md:text-5xl font-extrabold text-white mb-6"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Let&apos;s Talk About Your Business
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Whether you want a free SEO audit, a new website, or you're just not sure
              where to start — get in touch. I'll give you an honest assessment and a
              clear recommendation, no obligation.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: info */}
            <div>
              <h2
                className="text-2xl font-extrabold text-slate-900 mb-6"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Get in Touch
              </h2>

              <div className="space-y-5 mb-10">
                {contactInfo.map(({ icon: Icon, label, value, href, note, ...rest }) => {
                  const isWa = label === "WhatsApp";
                  return (
                    <div key={label} className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${isWa ? "bg-green-50" : "bg-blue-100"}`}>
                        <Icon className={`w-5 h-5 ${isWa ? "text-[#25D366]" : "text-blue-700"}`} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            target={"external" in rest ? "_blank" : undefined}
                            rel={"external" in rest ? "noopener noreferrer" : undefined}
                            className={`font-semibold transition-colors ${isWa ? "text-[#25D366] hover:text-green-600" : "text-slate-900 hover:text-blue-700"}`}
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-slate-900 font-semibold">{value}</p>
                        )}
                        <p className="text-slate-400 text-xs mt-0.5">{note}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* What to expect */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <h3
                  className="text-base font-bold text-slate-900 mb-3"
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  What Happens After You Get in Touch?
                </h3>
                <ol className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-700 shrink-0">1.</span>
                    I'll review your message and your website within one business day.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-700 shrink-0">2.</span>
                    I'll send you a free, personalised audit with my initial findings.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-700 shrink-0">3.</span>
                    If it's a good fit, I'll send a tailored proposal with clear pricing.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-blue-700 shrink-0">4.</span>
                    No pressure. No lock-in. You decide if and when you want to proceed.
                  </li>
                </ol>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
