"use client";

import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ScrollReveal } from "./animations/ScrollReveal";
import { ScrollHighlight } from "./animations/ScrollHighlight";

export function Services() {
  const { services } = PORTFOLIO_DATA;

  return (
    <section id="services" className="py-24 sm:py-36 bg-black text-white relative border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        {/* Qumax Headline & Manifesto Block (.home-services_top) */}
        <div className="mb-20 space-y-8">
          <ScrollReveal direction="up">
            <div className="text-xs font-mono uppercase tracking-widest text-white/50 mb-3">
              {services.tag}
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-tight max-w-5xl">
              {services.heading}
            </h2>
          </ScrollReveal>

          {/* Scroll Highlight Manifesto Quote (Qumax .scroll-highlight) */}
          <div className="pt-8 border-t border-white/10">
            <ScrollHighlight
              text={services.manifestoQuote}
              as="p"
              className="text-xl sm:text-3xl lg:text-4xl font-medium leading-relaxed max-w-4xl italic"
            />
          </div>
        </div>

        {/* 4 Pillar Cards Grid (Qumax .home-services_bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.pillars.map((service, idx) => (
            <ScrollReveal key={service.title} direction="up" delay={idx * 0.08}>
              <div className="qumax-card rounded-3xl p-8 flex flex-col justify-between space-y-8 transition-all duration-300 hover:border-white/30 h-full">
                {/* Card Top: Header & Number */}
                <div className="flex items-start justify-between pb-6 border-b border-white/10">
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug max-w-[160px]">
                    {service.title}
                  </h3>
                  <span className="text-sm font-mono text-white/50 font-semibold">
                    {service.number}
                  </span>
                </div>

                {/* Card Bottom: Points List (Qumax .solutions-v_card-points) */}
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-white/70 font-medium leading-snug"
                    >
                      <span className="text-white/30 select-none">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
