import { CheckCircle2, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What is your primary software engineering stack?",
    answer:
      "My primary backend stack is Laravel (PHP) with MySQL for structured MVC systems and RESTful API architecture. On the frontend, I build with React, Next.js, and TypeScript, styled with Tailwind CSS for high-performance and accessible experiences.",
  },
  {
    question: "How does your electronics background impact your web development?",
    answer:
      "Vocational training in Industrial Electronics and certification as a Level 1 & 2 Technician by Samsung Tech Institute provided me with rigorous hardware diagnostics and systematic debugging habits. In software, this translates to tracing root causes methodically rather than relying on guesswork.",
  },
  {
    question: "What were your concrete contributions during your PT Hummatech internship?",
    answer:
      "I worked on developing dynamic school profile web platforms using Laravel. My tasks covered creating interactive JavaScript UI modules, architecting normalized MySQL database schemas, configuring controllers and routes, and delivering responsive layouts on schedule.",
  },
  {
    question: "What types of opportunities are you currently seeking?",
    answer:
      "I am actively seeking Junior Software Engineer, Frontend Developer, or Fullstack Developer opportunities (full-time, contract, or internships), as well as ambitious freelance client projects.",
  },
];

export function Philosophy() {
  return (
    <section className="py-24 sm:py-32 border-t border-[#22252E] bg-[#0A0B0D]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Large Statement Banner (Qumax style) */}
        <div className="rounded-2xl border border-[#22252E] bg-[#121316] p-8 sm:p-12 mb-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              Engineering Stance
            </span>
            <blockquote className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
              &ldquo;Software should be engineered to last—combining robust backend architecture with
              buttery, accessible user interfaces.&rdquo;
            </blockquote>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <div className="text-right hidden md:block">
              <div className="text-sm font-semibold text-white">Hirzi Rofif Irsaydhi</div>
              <div className="text-xs text-[#9496A1]">TRPL Poliwangi &bull; Ex-Hummatech</div>
            </div>
          </div>
        </div>

        {/* Technical FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#9496A1]">
              (04) Common Queries
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-[-0.03em] leading-tight">
              Frequently Asked Questions.
            </h2>
            <p className="text-[#9496A1] text-sm sm:text-base leading-relaxed">
              Clear answers regarding my technical stack, engineering background, and professional
              availability.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {FAQS.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-[#22252E] bg-[#121316] p-6 transition-colors duration-200 hover:border-[#333745]"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-[#9496A1] leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
