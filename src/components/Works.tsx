import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";

interface WorkProject {
  title: string;
  category: string;
  githubUrl: string;
  liveUrl?: string;
  gradient: string;
  role: string;
  stack: string[];
}

const WORKS: WorkProject[] = [
  {
    title: "Brander / School Profile",
    category: "Fullstack Laravel MVC",
    role: "Lead MVC Developer @ PT Hummatech",
    githubUrl: "https://github.com/bheeluckzz",
    gradient: "from-[#141E30] to-[#243B55]",
    stack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
  },
  {
    title: "Zephyr / Nursing Fatimah",
    category: "Healthcare Clinic System",
    role: "Database & Backend Engineer",
    githubUrl: "https://github.com/bheeluckzz/nursing_fatimah",
    gradient: "from-[#0F2027] via-[#203A43] to-[#2C5364]",
    stack: ["PHP", "Laravel", "MySQL", "REST API"],
  },
  {
    title: "Nexify / Developer Portfolio",
    category: "Jamstack & Interaction",
    role: "Fullstack & UI Design",
    githubUrl: "https://github.com/bheeluckzz/PORTOFOLIO",
    liveUrl: "https://portofolio-gilt-tau-30.vercel.app",
    gradient: "from-[#161616] via-[#1f1f1f] to-[#292929]",
    stack: ["Next.js 16", "React 19", "Tailwind v4", "Motion"],
  },
  {
    title: "Vortex / Landing Page",
    category: "Frontend Architecture",
    role: "Core Web Vitals Specialist",
    githubUrl: "https://github.com/bheeluckzz/Landing_Page",
    gradient: "from-[#1D2671] to-[#C33764]",
    stack: ["TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Lumen / JSF Framework",
    category: "Frontend Foundation",
    role: "DOM Reconciliation Architect",
    githubUrl: "https://github.com/bheeluckzz/JSF",
    gradient: "from-[#2C3E50] to-[#4CA1AF]",
    stack: ["JavaScript", "HTML5", "CSS3", "DOM"],
  },
];

export function Works() {
  return (
    <section id="works" className="py-24 sm:py-36 bg-black text-white relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        {/* Section Headline (Qumax .section-headline-v1) */}
        <div className="flex items-center justify-between mb-16 pb-6 border-b border-white/10">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] uppercase">
            Works
          </h2>
          <span className="text-xs font-mono uppercase tracking-widest text-white/50">
            (01) Selected Systems
          </span>
        </div>

        {/* Works Cards Structure (Qumax Grid: 2-card, 1-card fullwidth, 2-card) */}
        <div className="space-y-8">
          {/* Top Row: 2 Cards (Aspect 3/2) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {WORKS.slice(0, 2).map((work) => (
              <WorkCard key={work.title} work={work} aspect="aspect-[3/2]" />
            ))}
          </div>

          {/* Middle Row: Featured Full-Width Card (Aspect 21/9) */}
          <div>
            <WorkCard work={WORKS[2]} aspect="aspect-[16/9] lg:aspect-[21/9]" featured />
          </div>

          {/* Bottom Row: 2 Cards (Aspect 3/2) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {WORKS.slice(3, 5).map((work) => (
              <WorkCard key={work.title} work={work} aspect="aspect-[3/2]" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkCard({
  work,
  aspect,
  featured = false,
}: {
  work: WorkProject;
  aspect: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`group relative ${aspect} w-full rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br ${work.gradient} p-8 flex flex-col justify-between transition-all duration-500 hover:border-white/30 shadow-2xl`}
    >
      {/* Subtle Inner Mesh / Glow */}
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />

      {/* Card Top: Tags */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 text-white/80 backdrop-blur-md">
          {work.category}
        </span>
        <a
          href={work.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white p-2 rounded-full bg-black/40 border border-white/10 backdrop-blur-md transition-colors"
          title="View Source Code"
        >
          <GithubIcon className="w-4 h-4" />
        </a>
      </div>

      {/* Qumax Frosted-Glass Floating Circle Center Button (.works-v1-card_button) */}
      <a
        href={work.liveUrl || work.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 m-auto w-24 h-24 rounded-full qumax-circle-button flex flex-col items-center justify-center text-center text-xs font-semibold text-white tracking-wide z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 hover:bg-white hover:text-black cursor-pointer select-none"
      >
        <span>View</span>
        <span>Project</span>
      </a>

      {/* Card Bottom: Title & Category (Qumax .works-v1-card_content) */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-4 border-t border-white/10">
        <div>
          <div className="text-xs font-mono text-white/60 mb-1">{work.role}</div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            {work.title}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          {work.stack.map((s) => (
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
