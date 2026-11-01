import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";

interface Project {
  title: string;
  category: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  accent: string;
  role: string;
}

const PROJECTS: Project[] = [
  {
    title: "School Profile & Dynamic Portal",
    category: "Fullstack Web Application",
    role: "Lead MVC Developer @ PT Hummatech",
    description:
      "Enterprise school profile web platform built during internship at PT Hummatech. Implemented dynamic MVC architecture, custom interactive JavaScript components, role-based controllers, and relational database schema.",
    stack: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/bheeluckzz",
    accent: "from-emerald-950/30 to-transparent",
  },
  {
    title: "Nursing Fatimah Healthcare System",
    category: "Healthcare & Clinical Administration",
    role: "Backend & Systems Architecture",
    description:
      "Clinic workflow and patient care management system engineered to streamline record administration, nurse assignment tracking, and medical reports with strict data integrity.",
    stack: ["PHP", "Laravel", "MySQL", "JavaScript", "REST APIs"],
    githubUrl: "https://github.com/bheeluckzz/nursing_fatimah",
    accent: "from-sky-950/30 to-transparent",
  },
  {
    title: "High-Performance Landing Page",
    category: "Frontend Engineering & Core Web Vitals",
    role: "Frontend Architect",
    description:
      "Modern, responsive web landing page built with clean TypeScript paradigms. Optimized for fast First Contentful Paint, mobile usability, and zero cumulative layout shift.",
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "Performance"],
    githubUrl: "https://github.com/bheeluckzz/Landing_Page",
    accent: "from-purple-950/30 to-transparent",
  },
  {
    title: "Personal Developer Portfolio",
    category: "Studio Editorial Experience",
    role: "Design & Jamstack Engineering",
    description:
      "Editorial dark-mode portfolio inspired by high-end studio web experiences. Powered by Next.js 16, React 19, and Motion with full keyboard accessibility.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4"],
    githubUrl: "https://github.com/bheeluckzz/PORTOFOLIO",
    liveUrl: "https://portofolio-gilt-tau-30.vercel.app",
    accent: "from-neutral-900 to-transparent",
  },
  {
    title: "JSF Modular Web Framework",
    category: "Frontend Foundation",
    role: "Core Author",
    description:
      "Modular JavaScript web structure focusing on efficient DOM reconciliation, responsive state management, and lightweight asset bundles without heavy framework overhead.",
    stack: ["JavaScript", "DOM Architecture", "CSS3", "HTML5"],
    githubUrl: "https://github.com/bheeluckzz/JSF",
    accent: "from-amber-950/30 to-transparent",
  },
];

export function Works() {
  return (
    <section id="works" className="py-24 sm:py-32 border-t border-[#22252E] bg-[#0A0B0D]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Qumax Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#9496A1] mb-2 block">
              Selected Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[-0.035em] leading-tight">
              Works
            </h2>
          </div>
          <p className="text-[#9496A1] max-w-md text-sm sm:text-base leading-relaxed">
            Production software systems, internship deliverables, and open-source repositories
            crafted with architectural precision.
          </p>
        </div>

        {/* Project Cards (Qumax Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.title}
              className={`group rounded-3xl border border-[#22252E] bg-[#121316] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#333745] hover:bg-[#15171B] ${
                idx === 0 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Mockup Canvas Header */}
              <div className="rounded-2xl border border-[#22252E] bg-[#0A0B0D] p-6 mb-8 relative overflow-hidden transition-all duration-300 group-hover:border-[#333745]">
                {/* Subtle Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-40`}
                />

                {/* Window Chrome */}
                <div className="flex items-center justify-between pb-4 border-b border-[#22252E] relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2A2D37]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2A2D37]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2A2D37]" />
                  </div>
                  <span className="text-[11px] font-mono text-[#5E616E] tracking-wider uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Code / Architecture Preview Snippet */}
                <div className="pt-5 relative z-10">
                  <div className="flex items-center justify-between text-xs font-mono text-[#9496A1] mb-2">
                    <span>// {project.role}</span>
                    <span className="text-emerald-400">Verified</span>
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {project.title}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                  {project.title}
                </h3>
                <p className="text-[#9496A1] text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-[#C4C7D4] bg-[#181A20] px-3 py-1 rounded-full border border-[#22252E]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Bottom CTA Links */}
              <div className="flex items-center justify-between pt-6 border-t border-[#22252E]">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#9496A1] hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Source Code</span>
                </a>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-black bg-white hover:bg-[#E2E8F0] px-5 py-2.5 rounded-full transition-all duration-200"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                ) : (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#181A20] hover:bg-white hover:text-black px-5 py-2.5 rounded-full border border-[#22252E] transition-all duration-200"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
