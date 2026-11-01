"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { personal, navigation } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add background blur if scrolled
      setScrolled(currentScrollY > 20);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-black/75 backdrop-blur-xl border-b border-white/10 py-3.5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand Wordmark (Configurable) */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-white flex items-center gap-2.5 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white group-hover:bg-emerald-400 transition-colors duration-200" />
          <span className="font-semibold tracking-[-0.03em] uppercase">{personal.name}</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-9 text-[14px] font-medium text-white/70">
          {navigation.links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors duration-150 relative py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Rolling Text Button */}
        <div className="hidden md:flex items-center">
          <a
            href={navigation.ctaButton.href}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-6 py-2.5 text-[14px] font-semibold text-black transition-all duration-300 hover:bg-white/90 active:scale-95 shadow-md"
          >
            <div className="relative flex items-center gap-1.5 overflow-hidden h-5">
              <span className="flex items-center gap-1.5 transition-transform duration-300 group-hover:-translate-y-full">
                {navigation.ctaButton.text}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
              <span className="absolute top-0 left-0 flex items-center gap-1.5 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                {navigation.ctaButton.text}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
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
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-white/10 bg-black/95 backdrop-blur-2xl px-6 py-6 space-y-4 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {navigation.links.map((link) => (
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
                href={navigation.ctaButton.href}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-black"
              >
                {navigation.ctaButton.text}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
