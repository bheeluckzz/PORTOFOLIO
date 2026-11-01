import { ArrowUpRight } from "lucide-react";

interface Article {
  date: string;
  readTime: string;
  title: string;
  category: string;
  slug: string;
}

const ARTICLES: Article[] = [
  {
    date: "November 2026",
    readTime: "4 min read",
    title: "Architecting Dynamic Portals with Laravel MVC & Relational Database Schemas",
    category: "Backend Architecture",
    slug: "https://github.com/bheeluckzz",
  },
  {
    date: "October 2026",
    readTime: "5 min read",
    title: "From Hardware Diagnostics to Software Engineering: Why Electronics Discipline Matters",
    category: "Engineering Mindset",
    slug: "https://github.com/bheeluckzz",
  },
  {
    date: "September 2026",
    readTime: "3 min read",
    title: "Optimizing Core Web Vitals and Interaction Performance with Next.js & Tailwind CSS",
    category: "Frontend Performance",
    slug: "https://github.com/bheeluckzz",
  },
];

export function Journal() {
  return (
    <section id="journal" className="py-24 sm:py-36 border-t border-white/10 bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2 block">
              (06) Editorial &amp; Insights
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] uppercase">
              Articles
            </h2>
          </div>
          <p className="text-white/70 max-w-md text-sm sm:text-base leading-relaxed">
            Documenting architectural decisions, hardware diagnostics, and fullstack performance notes.
          </p>
        </div>

        {/* 3 Articles Grid (Qumax .section_home-blogs-v1 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <a
              key={article.title}
              href={article.slug}
              target="_blank"
              rel="noopener noreferrer"
              className="group qumax-card rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/30 hover:bg-white/[0.12]"
            >
              <div>
                {/* Meta Row */}
                <div className="flex items-center justify-between text-xs font-mono text-white/50 mb-6 pb-4 border-b border-white/10">
                  <span>{article.date}</span>
                  <span className="text-white/80">{article.readTime}</span>
                </div>

                <div className="text-xs font-mono uppercase tracking-wider text-white/50 mb-3">
                  {article.category}
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug group-hover:text-white transition-colors">
                  {article.title}
                </h3>
              </div>

              <div className="pt-8 flex items-center justify-between text-xs font-semibold text-white border-t border-white/10 mt-8">
                <span>Read Notes</span>
                <span className="w-9 h-9 rounded-full border border-white/20 bg-white/10 flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
