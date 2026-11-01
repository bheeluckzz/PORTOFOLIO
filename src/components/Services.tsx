interface ServicePillar {
  number: string;
  title: string;
  description: string;
  items: string[];
}

const PILLARS: ServicePillar[] = [
  {
    number: "(01)",
    title: "Backend & MVC Systems",
    description:
      "Developing resilient backend services, structured database layers, and secure RESTful endpoints.",
    items: [
      "Laravel Framework & MVC Pattern",
      "RESTful API Architecture & Sync",
      "MySQL Relational Database Schema",
      "Controller, Route & Middleware Logic",
      "Secure Data Validation & Sanitization",
      "Dynamic Content Management (CMS)",
      "Role-Based Access Control (RBAC)",
    ],
  },
  {
    number: "(02)",
    title: "Advanced Frontend Tech",
    description:
      "Crafting reactive web interfaces with modular components, clean state trees, and visual fidelity.",
    items: [
      "Modern React & Next.js 16 Builds",
      "Tailwind CSS v4 Design Tokens",
      "Mobile-First Responsive Layouts",
      "Custom CSS & Micro-Interactions",
      "TypeScript Type Safety",
      "Accessibility & Keyboard Navigation",
      "Modular Component Architecture",
    ],
  },
  {
    number: "(03)",
    title: "Performance & Vitals",
    description:
      "Ensuring web applications load instantaneously with smooth user transitions and zero layout shift.",
    items: [
      "Sub-Second Page Load Optimization",
      "Core Web Vitals (LCP, CLS, INP)",
      "Optimized Next.js Image Pipelines",
      "Prefers-Reduced-Motion Compliance",
      "Semantic HTML5 & On-Page SEO",
      "Lightweight Asset Bundling",
      "Cache & Prerender Strategies",
    ],
  },
  {
    number: "(04)",
    title: "Systems & Diagnostics",
    description:
      "Hardware engineering foundation delivering systematic troubleshooting and hardware-level discipline.",
    items: [
      "Samsung Tech Institute Certification",
      "Level 1 & Level 2 Certified Diagnostics",
      "Systematic Hardware Debugging",
      "Industrial Electronics Foundation (SMK)",
      "Circuit Logic & Signal Tracing",
      "Root Cause Analysis Protocol",
      "End-to-End Problem Solving",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 border-t border-[#22252E] bg-[#0A0B0D]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Qumax Stance Quote */}
        <div className="mb-20 pb-16 border-b border-[#22252E]">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-4">
            Engineering Manifesto
          </div>
          <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.03em] leading-tight max-w-4xl">
            &ldquo;We didn’t start writing software to follow trends, we started it to build systems that last.&rdquo;
          </blockquote>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#9496A1] mb-2 block">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-[-0.035em] leading-tight">
              Services &amp; Solutions
            </h2>
          </div>
          <p className="text-[#9496A1] max-w-md text-sm sm:text-base leading-relaxed">
            Bringing software architecture, modern frontend execution, and hardware diagnostics together with purpose.
          </p>
        </div>

        {/* 4 Pillars Grid (Qumax 4-Col Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-3xl border border-[#22252E] bg-[#121316] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#333745] hover:bg-[#15171B]"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#22252E]">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {pillar.title}
                  </h3>
                  <span className="text-xs font-mono text-emerald-400 font-semibold">
                    {pillar.number}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#9496A1] leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>
              </div>

              {/* Items List (Qumax Bullet Style) */}
              <ul className="space-y-3 pt-6 border-t border-[#22252E]">
                {pillar.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#C4C7D4] font-medium leading-snug"
                  >
                    <span className="text-[#5E616E] select-none text-base leading-none">&bull;</span>
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
