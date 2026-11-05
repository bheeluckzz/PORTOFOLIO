"use client";

import { motion } from "motion/react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function Logos() {
  const { runningTicker } = PORTFOLIO_DATA;

  return (
    <section className="py-12 border-y border-white/10 bg-black overflow-hidden relative select-none">
      <div className="flex overflow-hidden">
        {/* Continuous Animated Marquee Strip using Motion */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
          className="whitespace-nowrap flex items-center gap-16 text-xs sm:text-sm font-mono tracking-widest text-white/50 uppercase w-max"
        >
          {runningTicker.concat(runningTicker).map((tech, idx) => (
            <div key={`${tech}-${idx}`} className="flex items-center gap-16">
              <span className="hover:text-white transition-colors cursor-default">{tech}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
