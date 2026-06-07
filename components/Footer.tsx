import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const services = [
  { href: "/services#local-seo", label: "Local SEO" },
  { href: "/services#technical-seo", label: "Technical SEO" },
  { href: "/services#semantic-seo", label: "Semantic SEO" },
  { href: "/services#nextjs", label: "Next.js Development" },
  { href: "/services#content", label: "Content Writing" },
  { href: "/services#audits", label: "SEO Audits" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* CTA strip */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-lg" style={{ fontFamily: "var(--font-sora)" }}>
              Ready to rank higher on Google?
            </p>
            <p className="text-blue-100 text-sm mt-0.5">
              Book your free SEO audit today — no obligation, no fluff.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
          >
            Get Your Free Audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span
                className="text-2xl font-extrabold text-white tracking-tight"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Raza<span className="text-blue-400">Cheena</span>
                <span className="text-amber-500">.</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              UK Local SEO specialist helping local service businesses rank higher on Google,
              win more customers, and grow online.
            </p>
            {/* NAP — critical for local SEO consistency */}
            <address className="not-italic space-y-2.5 text-sm">
              <a
                href="tel:07700000000"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                07700 000 000
              </a>
              <a
                href="mailto:hello@razacheena.com"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                hello@razacheena.com
              </a>
              <p className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                United Kingdom
              </p>
            </address>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-white font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3
              className="text-white font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas served */}
          <div>
            <h3
              className="text-white font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Areas Served
            </h3>
            <ul className="space-y-2 text-slate-400 text-sm columns-2">
              {[
                "London", "Manchester", "Birmingham", "Leeds", "Sheffield",
                "Bristol", "Edinburgh", "Glasgow", "Liverpool", "Leicester",
              ].map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
            <p className="text-slate-500 text-xs mt-3">+ all UK locations</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Raza Cheena. All rights reserved.</p>
          <p>UK Local SEO Specialist | razacheena.com</p>
        </div>
      </div>
    </footer>
  );
}
