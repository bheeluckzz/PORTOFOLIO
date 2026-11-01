"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What is your primary software engineering stack?",
    answer:
      "My core backend stack is Laravel (PHP) with MySQL for relational databases and RESTful API architecture. On the frontend, I specialize in React, Next.js 16, TypeScript, and Tailwind CSS v4, prioritizing fast render times and strict accessibility.",
  },
  {
    question: "How does your electronics background influence your web development?",
    answer:
      "Vocational training in Industrial Electronics and Level 1 & 2 Technician certification from Samsung Tech Institute instilled a disciplined approach to diagnostics. When debugging software, I isolate variables and trace signals systematically back to the root cause rather than relying on guesswork.",
  },
  {
    question: "What were your concrete contributions during your PT Hummatech internship?",
    answer:
      "I developed school profile web platforms using Laravel MVC. My deliverables included writing dynamic frontends with interactive JavaScript components, configuring routing logic, handling MySQL database interactions, and implementing responsive layouts for production deployment.",
  },
  {
    question: "Can you collaborate within existing teams or repositories?",
    answer:
      "Yes. I am experienced with Git version control, GitHub collaboration, branch hygiene, pull request reviews, and following established architectural conventions.",
  },
  {
    question: "What opportunities are you currently available for?",
    answer:
      "I am actively considering Junior Software Engineer, Frontend Developer, or Fullstack Developer opportunities (full-time, contract, or internships), as well as selective freelance client projects.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 border-t border-[#22252E] bg-[#0A0B0D]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9496A1]">
              Common Queries
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-[-0.035em] leading-tight">
              FAQs
            </h2>
            <p className="text-[#9496A1] text-sm sm:text-base leading-relaxed pt-2">
              Got questions? Check out the frequently asked questions below for answers to common inquiries about my process, technical stack, and how we can collaborate effectively.
            </p>
          </div>

          {/* Right Column: Accordion (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl border transition-colors duration-200 ${
                    isOpen
                      ? "border-[#333745] bg-[#121316]"
                      : "border-[#22252E] bg-[#0E0F12] hover:border-[#2E323E]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-semibold text-white tracking-tight">
                      {faq.question}
                    </span>
                    <span className="shrink-0 w-8 h-8 rounded-full border border-[#22252E] bg-[#181A20] flex items-center justify-center text-[#9496A1]">
                      {isOpen ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-[#9496A1] leading-relaxed border-t border-[#22252E]/60 mt-2 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
