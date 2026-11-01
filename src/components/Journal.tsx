"use client";

import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ScrollReveal } from "./animations/ScrollReveal";

export function Journal() {
  const { journal } = PORTFOLIO_DATA;

  return (
    <section id="journal" className="py-24 sm:py-36 border-t border-white/10 bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2 block">
                {journal.tag}
              </span>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] uppercase">
                {journal.heading}
              </h2>
            </div>
            <p className="text-white/70 max-w-md text-sm sm:text-base leading-relaxed">
              {journal.description}
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Articles Grid (Qumax .section_home-blogs-v1 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journal.articles.map((article, idx) => (
            <ScrollReveal key={article.title} direction="up" delay={idx * 0.1}>
              <a
                href={article.slug}
                target="_blank"
                rel="noopener noreferrer"
                className="group qumax-card rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/30 hover:bg-white/[0.12] h-full"
              >
                <div>
                  {/* Meta Row */}
                  <div className="flex items-center justify-between text-xs font-mono text-white/50 mb-6 pb-4 border-b border-white/10">
                    <span>{article.date}</span>
                    <span className="text-white/80">{article.readTime}</span>
                  </div>

                  <div className="text-xs font-mono uppercase tracking-wider text-white/50 mb-3">
                    {article.category}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug group-hover:text-white transition-colors">
                    {article.title}
                  </h3>
                </div>

                <div className="pt-8 flex items-center justify-between text-xs font-semibold text-white border-t border-white/10 mt-8">
                  <span>Read Notes</span>
                  <span className="w-9 h-9 rounded-full border border-white/20 bg-white/10 flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
