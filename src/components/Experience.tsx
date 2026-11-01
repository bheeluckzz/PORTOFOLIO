"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ScrollReveal } from "./animations/ScrollReveal";
import { ScrollHighlight } from "./animations/ScrollHighlight";

export function Experience() {
  const [activeSlide, setActiveSlide] = useState(0);
  const { experience } = PORTFOLIO_DATA;

  const prevSlide = () => {
    setActiveSlide((curr) =>
      curr === 0 ? experience.credentials.length - 1 : curr - 1
    );
  };

  const nextSlide = () => {
    setActiveSlide((curr) =>
      curr === experience.credentials.length - 1 ? 0 : curr + 1
    );
  };

  return (
    <>
      {/* 1. Qumax .section_home-intro with Scroll-Highlight Text */}
      <section className="py-24 sm:py-36 bg-black text-white relative border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <div className="max-w-5xl">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 mb-6 block">
              {experience.stanceTag}
            </span>
            <ScrollHighlight
              text={experience.stanceText}
              as="h2"
              className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.15]"
            />
          </div>
        </div>
      </section>

      {/* 2. Qumax .section_testimonial-v1 */}
      <section id="experience" className="py-24 sm:py-36 bg-[#0E0E0E] text-white relative border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          {/* Top Headline (.testimonial-v1_top) */}
          <ScrollReveal direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2 block">
                  {experience.tag}
                </span>
                <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] max-w-2xl leading-tight">
                  {experience.heading}
                </h2>
              </div>

              {/* Slider Controls (Qumax .testimonial-v1_slider-button) */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous Credential"
                  className="w-14 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next Credential"
                  className="w-14 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Testimonial Cards Grid with Selection State */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experience.credentials.map((item, index) => {
              const isSelected = index === activeSlide;
              return (
                <ScrollReveal key={item.id} direction="up" delay={index * 0.1}>
                  <div
                    onClick={() => setActiveSlide(index)}
                    className={`qumax-card rounded-3xl p-8 flex flex-col justify-between space-y-8 transition-all duration-300 cursor-pointer h-full ${
                      isSelected
                        ? "border-white/50 bg-white/[0.12] scale-[1.02] shadow-2xl"
                        : "opacity-80 hover:opacity-100 hover:border-white/30"
                    }`}
                  >
                    {/* Card Top */}
                    <div>
                      <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                        <span className="text-[11px] font-mono tracking-widest text-white/60 uppercase">
                          {item.badge}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-white/50 font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white/70" />
                          <span>{item.period}</span>
                        </span>
                      </div>

                      <Quote className="w-7 h-7 text-white/40 mb-4" />

                      <p className="text-base sm:text-lg font-medium text-white/90 leading-relaxed">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>

                    {/* Card Bottom: Author Info */}
                    <div className="pt-6 border-t border-white/10">
                      <div className="text-base font-semibold text-white tracking-tight">
                        {item.author}
                      </div>
                      <div className="text-xs text-white/60 mt-0.5">
                        {item.role}
                      </div>
                      <div className="text-xs font-mono text-white/40 mt-1 uppercase">
                        {item.organization}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
