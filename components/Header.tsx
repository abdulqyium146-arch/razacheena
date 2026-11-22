"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ArrowRight, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/923474825228?text=Hi%20Raza%2C%20I%27d%20like%20to%20find%20out%20more%20about%20your%20Local%20SEO%20services.";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Raza Cheena — Home">
            <span
              className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Raza<span className="text-blue-700">Cheena</span>
              <span className="text-amber-500">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-slate-600 font-medium hover:text-blue-700 transition-colors text-sm"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+923474825228"
              className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-blue-700 transition-colors"
              aria-label="Call Raza Cheena"
            >
              <Phone className="w-4 h-4" />
              +92 347 4825228
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
              aria-label="WhatsApp Raza Cheena"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
            >
              Free SEO Audit
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile: phone + WhatsApp + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:+923474825228"
              className="p-2 text-blue-700"
              aria-label="Call us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#25D366]"
              aria-label="WhatsApp us"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-slate-700 hover:text-blue-700 transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block py-3 px-4 text-slate-700 font-medium hover:bg-slate-50 hover:text-blue-700 rounded-lg transition-colors"
              >
                {label}
              </Link>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              Get a Free SEO Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
