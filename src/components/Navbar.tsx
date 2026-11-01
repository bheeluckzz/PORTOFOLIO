"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Works", href: "#works" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#experience" },
  { name: "Journal", href: "#journal" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/75 backdrop-blur-xl border-b border-white/10 py-3.5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand Wordmark (Qumax Style) */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white group-hover:bg-emerald-400 transition-colors duration-200" />
          <span className="font-semibold tracking-[-0.03em] uppercase">HIRZI</span>
        </Link>

        {/* Desktop Navigation Links (Qumax spacing) */}
        <nav className="hidden md:flex items-center gap-10 text-[14px] font-medium text-white/70">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors duration-150 relative py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Button (Qumax exact Primary Button with Rolling Text Slider) */}
        <div className="hidden md:flex items-center">
          <a
            href="mailto:hirzirofifirsyadhi@gmail.com?subject=Project%20Collaboration"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-6 py-2.5 text-[14px] font-semibold text-black transition-all duration-300 hover:bg-white/90"
          >
            <div className="relative flex items-center gap-1.5 overflow-hidden h-5">
              <span className="flex items-center gap-1.5 transition-transform duration-300 group-hover:-translate-y-full">
                Let&apos;s Talk
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
              <span className="absolute top-0 left-0 flex items-center gap-1.5 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                Let&apos;s Talk
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-black/95 backdrop-blur-2xl px-6 py-6 space-y-4">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-white/70 hover:text-white transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-white/10">
            <a
              href="mailto:hirzirofifirsyadhi@gmail.com?subject=Project%20Collaboration"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-black"
            >
              Let&apos;s Talk
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
