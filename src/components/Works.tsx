"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight, GitFork, Star, Code2 } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";
import { PORTFOLIO_DATA, HighlightProjectItem, SliderRepoItem } from "@/data/portfolioData";
import { ScrollReveal } from "./animations/ScrollReveal";

export function Works() {
  const { works } = PORTFOLIO_DATA;
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { clientWidth } = sliderRef.current;
      const scrollAmount = direction === "left" ? -clientWidth * 0.75 : clientWidth * 0.75;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="works" className="py-24 sm:py-36 bg-black text-white relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        {/* Section Headline */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2 block">
                {works.tag}
              </span>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] uppercase">
                {works.heading}
              </h2>
            </div>
            <p className="text-white/70 max-w-md text-sm sm:text-base leading-relaxed">
              {works.description}
            </p>
          </div>
        </ScrollReveal>

        {/* 1. Highlighted 4 Repos (PORTOFOLIO, IMM, WEDDING, RSIF) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {works.highlights.map((project, idx) => (
            <ScrollReveal key={project.id} direction="up" delay={idx * 0.08}>
              <HighlightCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        {/* 2. Scrollable Repositories Slider Carousel */}
        <div id="repositories" className="pt-16 border-t border-white/10">
          <ScrollReveal direction="up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2 block">
                  {works.sliderSection.tag}
                </span>
                <h3 className="text-2xl sm:text-4xl font-semibold tracking-[-0.03em] text-white">
                  {works.sliderSection.heading}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm mt-1 max-w-xl">
                  {works.sliderSection.description}
                </p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => scroll("left")}
                  disabled={!canScrollLeft}
                  aria-label="Scroll Repositories Left"
                  className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer ${
                    canScrollLeft
                      ? "bg-white/10 text-white hover:bg-white hover:text-black"
                      : "bg-white/5 text-white/30 cursor-not-allowed"
                  }`}
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scroll("right")}
                  disabled={!canScrollRight}
                  aria-label="Scroll Repositories Right"
                  className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer ${
                    canScrollRight
                      ? "bg-white/10 text-white hover:bg-white hover:text-black"
                      : "bg-white/5 text-white/30 cursor-not-allowed"
                  }`}
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Horizontal Slider Track */}
          <div
            ref={sliderRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {works.sliderSection.repos.map((repo) => (
              <div
                key={repo.id}
                className="shrink-0 w-[300px] sm:w-[360px] snap-start"
              >
                <RepoSlideCard repo={repo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightCard({ project }: { project: HighlightProjectItem }) {
  return (
    <div
      className={`group relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br ${project.gradient} p-7 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:border-white/30 shadow-2xl`}
    >
      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />

      {/* Card Top: Category Tag & Source Icon */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 text-white/80 backdrop-blur-md">
          {project.category}
        </span>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white p-2 rounded-full bg-black/40 border border-white/10 backdrop-blur-md transition-colors"
          title="View Source Code"
        >
          <GithubIcon className="w-4 h-4" />
        </a>
      </div>

      {/* Qumax Frosted-Glass Floating Circle Button (.works-v1-card_button) */}
      <a
        href={project.liveUrl || project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 m-auto w-24 h-24 rounded-full qumax-circle-button flex flex-col items-center justify-center text-center text-xs font-semibold text-white tracking-wide z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 hover:bg-white hover:text-black cursor-pointer select-none"
      >
        <span>View</span>
        <span>Project</span>
      </a>

      {/* Card Bottom: Role, Title, and Tech Tags */}
      <div className="relative z-10 flex flex-col gap-3 pt-4 border-t border-white/10">
        <div>
          <div className="text-xs font-mono text-white/60 mb-1">{project.role}</div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-white/70 line-clamp-2 mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-[11px] font-mono text-white/70 bg-black/60 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-md"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function RepoSlideCard({ repo }: { repo: SliderRepoItem }) {
  return (
    <div className="qumax-card rounded-2xl p-6 flex flex-col justify-between h-[230px] border border-white/10 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.12] group">
      <div>
        {/* Repo Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
          <div className="flex items-center gap-2 text-white">
            <Code2 className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-sm font-semibold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
              {repo.name}
            </span>
          </div>
          <span className="text-[11px] font-mono text-white/50 bg-black/40 px-2 py-0.5 rounded border border-white/10">
            {repo.language}
          </span>
        </div>

        <div className="text-[11px] font-mono uppercase tracking-wider text-white/40 mb-1.5">
          {repo.category}
        </div>

        <p className="text-xs text-white/70 leading-relaxed line-clamp-3">
          {repo.description}
        </p>
      </div>

      {/* Repo Footer Link */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between">
        <span className="text-xs font-mono text-white/40">github.com/bheeluckzz</span>
        <a
          href={repo.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-emerald-400 transition-colors"
        >
          <span>View Repo</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}
