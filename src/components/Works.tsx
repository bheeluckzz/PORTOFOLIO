import { ArrowUpRight, ExternalLink, Code2 } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";

interface Project {
  title: string;
  category: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  highlight: string;
}

const PROJECTS: Project[] = [
  {
    title: "School Profile & Dynamic Portal",
    category: "Fullstack MVC & CMS",
    description:
      "Enterprise school profile web platform built during internship at PT Hummatech. Implemented dynamic MVC architecture, custom interactive JavaScript components, role-based controllers, and relational database schema.",
    stack: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/bheeluckzz",
    highlight: "PT Hummatech Internship Project",
  },
  {
    title: "Nursing Fatimah Healthcare System",
    category: "Healthcare Web Application",
    description:
      "Clinic workflow and patient care management system engineered to streamline record administration, nurse assignment tracking, and medical reports with strict data integrity.",
    stack: ["PHP", "Laravel", "MySQL", "JavaScript", "REST APIs"],
    githubUrl: "https://github.com/bheeluckzz/nursing_fatimah",
    highlight: "Production Healthcare System",
  },
  {
    title: "High-Performance Landing Page",
    category: "Frontend Architecture",
    description:
      "Modern, responsive web landing page built with clean TypeScript paradigms. Optimized for fast First Contentful Paint, mobile usability, and zero cumulative layout shift.",
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "Core Web Vitals"],
    githubUrl: "https://github.com/bheeluckzz/Landing_Page",
    highlight: "TypeScript & Performance",
  },
  {
    title: "Personal Developer Portfolio",
    category: "Jamstack & Interaction",
    description:
      "Editorial dark-mode portfolio inspired by high-end studio web experiences. Powered by Next.js 16, React 19, and Motion with full keyboard accessibility.",
    stack: ["Next.js", "React 19", "TypeScript", "Motion", "Tailwind v4"],
    githubUrl: "https://github.com/bheeluckzz/PORTOFOLIO",
    liveUrl: "https://portofolio-gilt-tau-30.vercel.app",
    highlight: "Next.js 16 + Tailwind v4",
  },
  {
    title: "JSF Modular Web Framework",
    category: "Frontend Foundation",
    description:
      "Modular JavaScript web structure focusing on efficient DOM reconciliation, responsive state management, and lightweight asset bundles without heavy framework overhead.",
    stack: ["JavaScript", "HTML5", "CSS3", "DOM Architecture"],
    githubUrl: "https://github.com/bheeluckzz/JSF",
    highlight: "Modular Frontend",
  },
];

export function Works() {
  return (
    <section id="works" className="py-24 sm:py-32 border-t border-[#22252E] relative">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#9496A1] mb-2">
              (01) Portfolio Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.03em] leading-tight">
              Selected Works &amp; Systems.
            </h2>
          </div>
          <p className="text-[#9496A1] max-w-md text-sm sm:text-base leading-relaxed">
            Real software systems, internship deliverables, and open-source projects crafted with
            precision and clean code.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.title}
              className={`group rounded-2xl border border-[#22252E] bg-[#121316] p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:border-[#333745] hover:bg-[#15171B] ${
                idx === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div>
                {/* Card Top: Category and Highlight Tag */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#9496A1] bg-[#181A20] px-3 py-1 rounded-md border border-[#22252E]">
                    {project.category}
                  </span>
                  <span className="text-xs font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-0.5 rounded-full">
                    {project.highlight}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[#9496A1] text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-[#C4C7D4] bg-[#181A20] px-2.5 py-1 rounded border border-[#22252E]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Action Links */}
              <div className="flex items-center justify-between pt-6 border-t border-[#22252E]/80">
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
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-white/10 hover:bg-white hover:text-black px-4 py-2 rounded-full transition-all duration-200"
                  >
                    <span>Live Preview</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                ) : (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9496A1] hover:text-white"
                  >
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
