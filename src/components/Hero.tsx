"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, FileText, Star } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ScrollReveal } from "./animations/ScrollReveal";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { hero, personal } = PORTFOLIO_DATA;

  // Parallax Scroll Scrub on the Hero Background & Content
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-screen min-h-[760px] w-full overflow-hidden bg-black flex flex-col justify-end"
    >
      {/* Dynamic Background Image with Parallax Scale & Gradient Vignette */}
      <motion.div
        style={{ scale: bgScale, opacity: bgOpacity }}
        className="absolute inset-0 z-0 origin-center will-change-transform"
      >
        <Image
          src={hero.bgImage}
          alt={hero.altText}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] filter brightness-[0.8] contrast-[1.08]"
        />

        {/* Studio Dark Vignette & Gradient Overlays (Qumax .home-hero_bg-layer) */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/75 via-45% to-transparent opacity-95"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 opacity-70"
          aria-hidden="true"
        />
      </motion.div>

      {/* Hero Contents Container (.home-hero_wrapper) */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 pb-10 sm:pb-16 flex flex-col justify-end h-full"
      >
        {/* Top Floating Row: Intro Text & Glass Experience Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-8 sm:mb-12">
          {/* Top Left Intro */}
          <ScrollReveal direction="up" delay={0.1} className="md:col-span-7 lg:col-span-8 max-w-lg">
            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
              {hero.subtextLeft}
            </p>
          </ScrollReveal>

          {/* Top Right Card (.home-hero_card with glass blur) */}
          <ScrollReveal
            direction="up"
            delay={0.2}
            className="md:col-span-5 lg:col-span-4 flex justify-start md:justify-end"
          >
            <div className="qumax-card rounded-2xl p-5 sm:p-6 w-full max-w-[280px] space-y-4 shadow-2xl">
              <div className="text-xs sm:text-sm text-white/80 leading-snug">
                {hero.statCard.caption}
              </div>
              <div className="pt-2 border-t border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-mono">
                  {hero.statCard.value}
                </div>
                <div className="text-xs text-white/60 font-medium uppercase tracking-wider mt-0.5">
                  {hero.statCard.label}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Master Row: Big Headline & Info / Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-t border-white/10 pt-8">
          {/* Master Headline */}
          <ScrollReveal direction="up" delay={0.3} className="lg:col-span-8 space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-semibold text-white tracking-[-0.04em] leading-[1.05] text-balance">
              {hero.headlineTop}
              <br />
              <span className="text-white/60">{hero.headlineBottom}</span>
            </h1>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-white/90 active:scale-95 shadow-xl"
              >
                <span>{hero.primaryCta.text}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={hero.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-white/20 backdrop-blur-md active:scale-95"
              >
                <FileText className="w-4 h-4 text-white/70" />
                <span>{hero.secondaryCta.text}</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Right Info & Ratings (.home-hero_info-wrapper) */}
          <ScrollReveal direction="up" delay={0.4} className="lg:col-span-4 space-y-4 lg:text-left">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-sm font-semibold text-white">{personal.rating}</div>
              </div>
              <div className="text-xs font-medium text-white/70">
                {personal.ratingSubtitle}
              </div>
            </div>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
              {hero.leadDescription}
            </p>
          </ScrollReveal>
        </div>
      </motion.div>
    </section>
  );
}
