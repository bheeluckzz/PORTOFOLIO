"use client";

import { ArrowUpRight, Mail, FileText, ArrowUp } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ScrollReveal } from "./animations/ScrollReveal";

export function Footer() {
  const { footer, personal, navigation } = PORTFOLIO_DATA;

  return (
    <footer id="contact" className="border-t border-white/10 bg-black text-white pt-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        {/* Qumax Big Editorial CTA Banner */}
        <ScrollReveal direction="up">
          <div className="qumax-card rounded-3xl p-8 sm:p-14 lg:p-20 mb-20 text-center flex flex-col items-center relative overflow-hidden">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4">
              {footer.ctaTag}
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-semibold text-white tracking-[-0.04em] leading-[1.06] max-w-4xl mb-6 text-balance">
              {footer.ctaHeading}
            </h2>

            <p className="text-white/70 text-base sm:text-lg max-w-xl mb-10 leading-relaxed font-normal">
              {footer.ctaDescription}
            </p>

            {/* Qumax Rolling-Text Pill Button */}
            <a
              href={footer.ctaEmail}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-10 py-4 text-base font-semibold text-black transition-all duration-300 hover:bg-white/90 shadow-2xl active:scale-95"
            >
              <div className="relative flex items-center gap-2 overflow-hidden h-6">
                <span className="flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-full">
                  <span>{footer.ctaButtonText}</span>
                  <ArrowUpRight className="w-5 h-5" />
                </span>
                <span className="absolute top-0 left-0 flex items-center gap-2 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <span>{footer.ctaButtonText}</span>
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </div>
            </a>
          </div>
        </ScrollReveal>

        {/* Footer Top: Brand, Tagline, Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          <div className="md:col-span-5 space-y-4">
            <div className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white" />
              <span className="font-semibold tracking-tight uppercase">{personal.fullName}</span>
            </div>
            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              {personal.bio}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Navigation
            </div>
            <ul className="space-y-2 text-sm text-white/70">
              {navigation.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Direct Connect
            </div>
            <div className="flex flex-col gap-2.5 text-sm text-white/70">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>github.com/bheeluckzz</span>
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{personal.email}</span>
              </a>
              <a
                href={personal.cvPdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Download Curriculum Vitae (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            {footer.copyrightText}
          </div>
          <div className="flex items-center gap-4">
            <span>Built with Next.js 16 &amp; Tailwind CSS</span>
            <span>&bull;</span>
            <a href="#hero" className="text-white hover:text-white/80 inline-flex items-center gap-1 transition-colors">
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
