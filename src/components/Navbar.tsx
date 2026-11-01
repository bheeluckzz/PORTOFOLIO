"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Works", href: "#works" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
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
          ? "bg-[#0A0B0D]/85 backdrop-blur-md border-b border-[#22252E] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-white flex items-center gap-2 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white group-hover:bg-emerald-400 transition-colors duration-200" />
          <span className="font-semibold tracking-[-0.03em]">HIRZI</span>
          <span className="text-[#9496A1] text-xs font-mono tracking-widest uppercase">
            / DEV
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#9496A1]">
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

        {/* Right CTA Button (Qumax-inspired slide hover) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:hirzirofifirsyadhi@gmail.com?subject=Project%20Collaboration"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-6 py-2.5 text-[14px] font-medium text-black transition-all duration-300 hover:bg-[#E5E7EB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span className="relative flex items-center gap-1.5 transition-transform duration-300 group-hover:-translate-y-[120%]">
              Let&apos;s Talk
              <ArrowUpRight className="w-4 h-4" />
            </span>
            <span className="absolute flex items-center gap-1.5 translate-y-[120%] transition-transform duration-300 group-hover:translate-y-0">
              Let&apos;s Talk
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 rounded-lg border border-[#22252E] bg-[#121316] hover:bg-[#181A20] transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#22252E] bg-[#0A0B0D]/95 backdrop-blur-xl px-6 py-6 space-y-4">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-[#9496A1] hover:text-white transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-[#22252E]">
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
