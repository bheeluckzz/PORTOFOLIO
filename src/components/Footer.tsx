import { ArrowUpRight, Mail, FileText, ArrowUp } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-[#22252E] bg-[#0A0B0D] pt-24 pb-12">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Qumax Big Editorial CTA Banner */}
        <div className="rounded-3xl border border-[#22252E] bg-[#121316] p-8 sm:p-14 lg:p-20 mb-20 text-center flex flex-col items-center relative overflow-hidden">
          {/* Subtle Ambient Backlight */}
          <div
            className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-white/[0.04] blur-[100px] rounded-full"
            aria-hidden="true"
          />

          <span className="text-xs font-mono uppercase tracking-widest text-[#9496A1] mb-4">
            Get In Touch
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white tracking-[-0.04em] leading-[1.06] max-w-3xl mb-6 text-balance">
            Have a project or opportunity in mind?
          </h2>

          <p className="text-[#9496A1] text-base sm:text-lg max-w-xl mb-10 leading-relaxed font-normal">
            Whether you need a dynamic Laravel backend, a modern Next.js interface, or want to discuss
            software engineering roles—let&apos;s talk.
          </p>

          {/* Qumax Rolling-Text Pill Button */}
          <a
            href="mailto:hirzirofifirsyadhi@gmail.com?subject=Project%20Collaboration"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-10 py-4 text-base font-semibold text-black transition-all duration-300 hover:bg-[#E2E8F0] shadow-2xl active:scale-95"
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

        {/* Footer Top: Brand, Tagline, Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#22252E]">
          <div className="md:col-span-5 space-y-4">
            <div className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="font-bold tracking-tight">HIRZI ROFIF IRSYADHI</span>
            </div>
            <p className="text-sm text-[#9496A1] max-w-sm leading-relaxed">
              Web developer &amp; software engineering student at Politeknik Negeri Banyuwangi (D4 TRPL).
              Ex-Frontend Developer Intern at PT Hummatech.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Navigation
            </div>
            <ul className="space-y-2 text-sm text-[#9496A1]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Profile</a>
              </li>
              <li>
                <a href="#works" className="hover:text-white transition-colors">Selected Works</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services &amp; Stack</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">Career &amp; Education</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Common FAQs</a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Direct Connect
            </div>
            <div className="flex flex-col gap-2.5 text-sm text-[#9496A1]">
              <a
                href="https://github.com/bheeluckzz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>github.com/bheeluckzz</span>
              </a>
              <a
                href="mailto:hirzirofifirsyadhi@gmail.com"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>hirzirofifirsyadhi@gmail.com</span>
              </a>
              <a
                href="/CV_Hirzi_Rofif_Irsaydhi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Download Curriculum Vitae (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5E616E]">
          <div>
            &copy; 2026 Hirzi Rofif Irsaydhi. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Designed after Qumax Studio Aesthetic</span>
            <span>&bull;</span>
            <a href="#about" className="text-white hover:text-emerald-400 inline-flex items-center gap-1 transition-colors">
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
