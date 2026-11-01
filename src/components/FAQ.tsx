"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ScrollReveal } from "./animations/ScrollReveal";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { faqs } = PORTFOLIO_DATA;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-36 border-t border-white/10 bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column (5 cols) */}
          <ScrollReveal direction="up" className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-white/50 block">
              {faqs.tag}
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] leading-tight">
              {faqs.heading}
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed pt-2">
              {faqs.description}
            </p>
          </ScrollReveal>

          {/* Right Column: Accordion (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.items.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <ScrollReveal key={faq.question} direction="up" delay={idx * 0.05}>
                  <div
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "border-white/30 bg-white/[0.08]"
                        : "border-white/10 bg-white/[0.03] hover:border-white/20"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      className="w-full flex items-center justify-between gap-4 p-6 sm:p-7 text-left cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg font-semibold text-white tracking-tight">
                        {faq.question}
                      </span>
                      <span className="shrink-0 w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 sm:px-7 pb-6 pt-0 text-sm sm:text-base text-white/70 leading-relaxed border-t border-white/10 mt-2 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
