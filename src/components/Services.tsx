interface ServiceCard {
  title: string;
  number: string;
  items: string[];
}

const SERVICES: ServiceCard[] = [
  {
    title: "Brand & Architecture",
    number: "(01)",
    items: [
      "Laravel Framework",
      "MVC Architecture",
      "Relational MySQL Schema",
      "RESTful API Development",
      "Data Validation & Security",
      "Role-Based Access Control",
      "CMS Architecture",
    ],
  },
  {
    title: "Advanced Tech",
    number: "(02)",
    items: [
      "Modern Next.js 16 Builds",
      "React 19 Components",
      "Tailwind CSS v4",
      "Custom Micro-Interactions",
      "TypeScript Type Safety",
      "Mobile-First Responsive",
      "Scalable Frontends",
    ],
  },
  {
    title: "Performance & Vitals",
    number: "(03)",
    items: [
      "Core Web Vitals Focus",
      "Sub-Second Load Times",
      "Clean Asset Bundling",
      "Image Optimization",
      "Prefers-Reduced-Motion",
      "Semantic HTML5 & SEO",
      "Cache & Prerender Logic",
    ],
  },
  {
    title: "Systems & Diagnostics",
    number: "(04)",
    items: [
      "Samsung Tech Certified",
      "Level 1 & 2 Diagnostics",
      "Hardware Debugging Protocol",
      "Industrial Electronics (SMK)",
      "Circuit Logic & Tracing",
      "Root Cause Analysis",
      "Operational Precision",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-36 bg-black text-white relative border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        {/* Qumax Headline & Manifesto Block (.home-services_top) */}
        <div className="mb-20 space-y-8">
          <div className="text-xs font-mono uppercase tracking-widest text-white/50">
            (02) Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-tight max-w-5xl">
            Services — Solutions That Connect. Bringing brand, design, and performance together with purpose.
          </h2>

          <div className="pt-6 border-t border-white/10">
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/80 leading-relaxed max-w-4xl italic">
              &ldquo;We didn’t start Qumax to follow trends, we started it to build systems that last.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* 4 Cards Grid (Qumax .home-services_bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="qumax-card rounded-3xl p-8 flex flex-col justify-between space-y-8 transition-all duration-300 hover:border-white/30"
            >
              {/* Card Top: Header & Number */}
              <div className="flex items-start justify-between pb-6 border-b border-white/10">
                <h3 className="text-xl font-bold text-white tracking-tight leading-snug max-w-[150px]">
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
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-white/70 font-medium"
                  >
                    <span className="text-white/30 select-none">&bull;</span>
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
