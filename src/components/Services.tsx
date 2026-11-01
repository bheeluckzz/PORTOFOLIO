interface ServicePillar {
  number: string;
  title: string;
  description: string;
  items: string[];
}

const PILLARS: ServicePillar[] = [
  {
    number: "(01)",
    title: "Frontend Architecture",
    description:
      "Crafting component-driven web interfaces with modularity, clean state trees, and responsive fidelity.",
    items: [
      "Modern React & Next.js Builds",
      "Tailwind CSS v4 & Styling Systems",
      "Mobile-First Responsive Layouts",
      "Component Isolation & Reusability",
      "Accessibility & Keyboard Navigation",
      "TypeScript Integration & Typing",
    ],
  },
  {
    number: "(02)",
    title: "Backend & MVC Systems",
    description:
      "Developing resilient backend services, structured database layers, and secure RESTful endpoints.",
    items: [
      "Laravel Framework & MVC Pattern",
      "RESTful API Development & Sync",
      "MySQL Relational Database Design",
      "Controller, Migration & Route Logic",
      "Form Validation & Error Handling",
      "Dynamic Content Management (CMS)",
    ],
  },
  {
    number: "(03)",
    title: "Motion & Web Performance",
    description:
      "Ensuring web experiences load in sub-second speeds with purposeful, non-distracting motion choreography.",
    items: [
      "Subtle Scroll & Micro-Interactions",
      "Core Web Vitals Optimization (LCP/CLS)",
      "Image Compression & Responsive Formats",
      "Prefers-Reduced-Motion Fallbacks",
      "Semantic HTML5 & Search Engine SEO",
      "Clean Asset Bundling & Caching",
    ],
  },
  {
    number: "(04)",
    title: "Electronics & Systems Logic",
    description:
      "Hardware engineering discipline providing a strong foundation in hardware troubleshooting and systems thinking.",
    items: [
      "Samsung Tech Institute Certification",
      "Level 1 & Level 2 Electronics Repair",
      "Systematic Hardware Diagnostics",
      "Industrial Electronics Foundation (SMK)",
      "Circuit Logic & Hardware Debugging",
      "End-to-End Problem Solving",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 border-t border-[#22252E] bg-[#0A0B0D]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#9496A1] mb-2">
              (02) Technical Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.03em] leading-tight">
              Engineering Disciplines.
            </h2>
          </div>
          <p className="text-[#9496A1] max-w-md text-sm sm:text-base leading-relaxed">
            Bridging hardware discipline, backend architecture, and modern reactive frontend design.
          </p>
        </div>

        {/* 4 Pillars Grid (Qumax style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-[#22252E] bg-[#121316] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#333745] hover:bg-[#15171B]"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono text-emerald-400 font-semibold">
                    {pillar.number}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#333745]" />
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#9496A1] leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>
              </div>

              {/* Items List */}
              <ul className="space-y-2.5 pt-6 border-t border-[#22252E]">
                {pillar.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs sm:text-[13px] text-[#C4C7D4] font-medium"
                  >
                    <span className="text-[#5E616E] select-none">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
