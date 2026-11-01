import { ArrowUpRight, Mail, FileText, ArrowUp } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-[#22252E] bg-[#0A0B0D] pt-24 pb-12">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Big Editorial CTA (Qumax style) */}
        <div className="rounded-3xl border border-[#22252E] bg-[#121316] p-8 sm:p-14 lg:p-16 mb-20 text-center flex flex-col items-center relative overflow-hidden">
          {/* Subtle glow behind button */}
          <div
            className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-white/5 blur-[90px] rounded-full"
            aria-hidden="true"
          />

          <span className="text-xs font-mono uppercase tracking-widest text-[#9496A1] mb-4">
            (05) Get In Touch
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[-0.035em] leading-[1.08] max-w-2xl mb-6">
            Have a project or opportunity in mind?
          </h2>

          <p className="text-[#9496A1] text-base sm:text-lg max-w-xl mb-10 leading-relaxed font-normal">
            Whether you need a dynamic Laravel backend, a modern Next.js frontend, or want to discuss
            software engineering roles—let&apos;s build together.
          </p>

          {/* Prominent Action Button with Dual-Text Hover Slider */}
          <a
            href="mailto:hirzirofifirsyadhi@gmail.com?subject=Inquiry%20via%20Portfolio"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-10 py-4 text-base font-semibold text-black transition-all duration-300 hover:bg-[#E2E8F0] shadow-xl hover:scale-105 active:scale-95"
          >
            <span className="relative flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-[140%]">
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-5 h-5" />
            </span>
            <span className="absolute flex items-center gap-2 translate-y-[140%] transition-transform duration-300 group-hover:translate-y-0">
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </a>
        </div>

        {/* Footer Navigation & Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#22252E]/80 items-center">
          <div className="md:col-span-5 space-y-2">
            <div className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Hirzi Rofif Irsaydhi</span>
            </div>
            <p className="text-xs sm:text-sm text-[#9496A1]">
              Web Developer &bull; D4 TRPL Politeknik Negeri Banyuwangi
            </p>
          </div>

          <div className="md:col-span-7 flex flex-wrap items-center justify-start md:justify-end gap-6 text-sm font-medium text-[#9496A1]">
            <a
              href="https://github.com/bheeluckzz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href="mailto:hirzirofifirsyadhi@gmail.com"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>

            <a
              href="/CV_Hirzi_Rofif_Irsaydhi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>CV (PDF)</span>
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white hover:text-emerald-400 transition-colors ml-2"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Colophon & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5E616E]">
          <div>
            &copy; 2026 Hirzi Rofif Irsaydhi. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Built with Next.js 16 &amp; Tailwind CSS v4</span>
            <span>&bull;</span>
            <span className="text-[#9496A1]">Designed for Performance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
