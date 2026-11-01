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
    title: "Architecting Dynamic Portals with Laravel MVC & MySQL",
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
    <section className="py-24 sm:py-32 border-t border-[#22252E] bg-[#0A0B0D]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#9496A1] mb-2 block">
              Editorial &amp; Insights
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-[-0.035em] leading-tight">
              Journal &amp; Notes
            </h2>
          </div>
          <p className="text-[#9496A1] max-w-md text-sm sm:text-base leading-relaxed">
            Documenting engineering paradigms, hardware diagnostics, and fullstack performance notes.
          </p>
        </div>

        {/* 3 Articles Grid (Qumax Journal Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <a
              key={article.title}
              href={article.slug}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-[#22252E] bg-[#121316] p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#333745] hover:bg-[#15171B]"
            >
              <div>
                {/* Meta */}
                <div className="flex items-center justify-between text-xs font-mono text-[#9496A1] mb-6 pb-4 border-b border-[#22252E]">
                  <span>{article.date}</span>
                  <span className="text-emerald-400">{article.readTime}</span>
                </div>

                <div className="text-xs font-mono uppercase tracking-wider text-[#9496A1] mb-3">
                  {article.category}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-white transition-colors">
                  {article.title}
                </h3>
              </div>

              <div className="pt-8 flex items-center justify-between text-xs font-semibold text-white">
                <span>Read Notes</span>
                <span className="w-8 h-8 rounded-full border border-[#22252E] bg-[#181A20] flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
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
