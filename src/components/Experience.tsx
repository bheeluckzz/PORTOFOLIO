"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote, CheckCircle2 } from "lucide-react";

interface CredentialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  badge: string;
  period: string;
}

const CREDENTIALS: CredentialItem[] = [
  {
    id: "hummatech",
    badge: "INTERNSHIP DELIVERABLE",
    quote:
      "Hirzi demonstrated high technical diligence during his internship at PT Hummatech, independently architecting dynamic school portals using Laravel MVC and implementing responsive, performant user interfaces.",
    author: "Software Engineering Division",
    role: "Frontend & Fullstack Mentorship",
    organization: "PT HUMMATECH (Malang / Banyuwangi)",
    period: "Feb 2026 — Jun 2026",
  },
  {
    id: "poliwangi",
    badge: "ACADEMIC EXCELLENCE",
    quote:
      "Consistent focus on algorithmic problem solving, clean database schemas, and structured web development paradigms within the D4 Software Engineering Technology (TRPL) curriculum.",
    author: "Department of Software Engineering",
    role: "D4 TRPL Undergraduate Program",
    organization: "POLITEKNIK NEGERI BANYUWANGI",
    period: "2023 — Present",
  },
  {
    id: "samsung",
    badge: "INDUSTRY CERTIFICATION",
    quote:
      "Certified Level 1 & Level 2 Technician qualification in micro-electronics and hardware diagnostics. Demonstrates rigorous problem diagnosis, signal tracing, and systematic repair execution.",
    author: "Samsung Tech Institute / GSI",
    role: "Hardware & Diagnostic Certification",
    organization: "SAMSUNG ELECTRONICS INDONESIA",
    period: "Certified 2023",
  },
];

export function Experience() {
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    setActiveSlide((curr) => (curr === 0 ? CREDENTIALS.length - 1 : curr - 1));
  };

  const nextSlide = () => {
    setActiveSlide((curr) => (curr === CREDENTIALS.length - 1 ? 0 : curr + 1));
  };

  return (
    <>
      {/* 1. Qumax .section_home-intro */}
      <section className="py-24 sm:py-36 bg-black text-white relative border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <div className="max-w-5xl">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 mb-6 block">
              (03) Engineering Stance
            </span>
            <p className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.15] text-white">
              Connecting system architecture, modern frontends, and diagnostic engineering discipline
              to bring durable software to life.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Qumax .section_testimonial-v1 */}
      <section id="experience" className="py-24 sm:py-36 bg-[#0E0E0E] text-white relative border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          {/* Top Headline (.testimonial-v1_top) */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2 block">
                (04) Experience &amp; Credentials
              </span>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] max-w-2xl leading-tight">
                Clients &amp; Credentials — Proven engineering in production environments.
              </h2>
            </div>

            {/* Slider Controls (Qumax .testimonial-v1_slider-button) */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous Testimonial"
                className="w-14 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next Testimonial"
                className="w-14 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonial Cards Slider / Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CREDENTIALS.map((item, index) => {
              const isSelected = index === activeSlide;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveSlide(index)}
                  className={`qumax-card rounded-3xl p-8 flex flex-col justify-between space-y-8 transition-all duration-300 cursor-pointer ${
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
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
