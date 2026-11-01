import Image from "next/image";
import { ArrowDown, ArrowUpRight, FileText, Sparkles, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0A0B0D]">
      {/* Subtle ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.03] blur-[140px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        {/* Top Dual Subtext (Direct Qumax Signature) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12 border-b border-[#22252E] text-sm text-[#9496A1] leading-relaxed font-normal">
          <p className="max-w-md">
            We create thoughtful digital systems that meet today’s engineering needs while staying
            flexible, scalable, and ready for what comes next.
          </p>
          <p className="max-w-md md:text-right md:ml-auto">
            Driven by technical discipline, focused on clean architecture, and built for long-term
            impact.
          </p>
        </div>

        {/* Central Headline & Flanking Stats (Qumax Hero Layout) */}
        <div className="py-12 md:py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-8">
            {/* Left Stat */}
            <div className="hidden lg:block shrink-0 pb-2">
              <div className="text-3xl font-bold text-white font-mono tracking-tight">04 Mo.+</div>
              <div className="text-xs text-[#9496A1] uppercase tracking-wider font-mono mt-1">
                PT Hummatech Internship
              </div>
            </div>

            {/* Central Master Headline */}
            <div className="text-center lg:text-center max-w-4xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#22252E] bg-[#121316] text-xs font-medium text-[#9496A1]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Software Engineering Roles</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-white tracking-[-0.04em] leading-[1.05] text-balance">
                Designed for today.
                <br />
                <span className="text-[#9496A1]">Made for tomorrow.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#9496A1] max-w-2xl mx-auto leading-relaxed font-normal pt-2">
                Thoughtfully crafted web systems, robust Laravel backends, and responsive Next.js
                interfaces engineered by <strong className="text-white font-medium">Hirzi Rofif Irsaydhi</strong>.
              </p>
            </div>

            {/* Right Stat */}
            <div className="hidden lg:block shrink-0 text-right pb-2">
              <div className="text-3xl font-bold text-white font-mono tracking-tight">D4 TRPL</div>
              <div className="text-xs text-[#9496A1] uppercase tracking-wider font-mono mt-1">
                Poliwangi Engineering
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 pb-12">
            <a
              href="#works"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-[#E2E8F0] active:scale-[0.98]"
            >
              <span>Explore Works</span>
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="/CV_Hirzi_Rofif_Irsaydhi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#22252E] bg-[#121316] px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#181A20] hover:border-[#333745] active:scale-[0.98]"
            >
              <FileText className="w-4 h-4 text-[#9496A1]" />
              <span>Curriculum Vitae (PDF)</span>
            </a>
          </div>

          {/* Mobile Stats Row */}
          <div className="grid grid-cols-2 gap-4 py-6 border-y border-[#22252E] lg:hidden text-center">
            <div>
              <div className="text-2xl font-bold text-white font-mono">04 Mo.+</div>
              <div className="text-xs text-[#9496A1] mt-0.5">PT Hummatech Internship</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white font-mono">D4 TRPL</div>
              <div className="text-xs text-[#9496A1] mt-0.5">Poliwangi Engineering</div>
            </div>
          </div>
        </div>

        {/* Hero Media Showcase (Qumax Wide Frame) */}
        <div className="relative rounded-3xl border border-[#22252E] bg-[#121316] p-3 sm:p-4 shadow-2xl overflow-hidden group">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] w-full rounded-2xl overflow-hidden bg-[#181A20]">
            <Image
              src="/images/foto1.jpg"
              alt="Hirzi Rofif Irsaydhi - Web Developer"
              fill
              priority
              sizes="(max-width: 1240px) 100vw, 1240px"
              className="object-cover object-top filter brightness-[0.95] contrast-[1.02] transition-transform duration-700 group-hover:scale-[1.02]"
            />

            {/* Studio Dark Vignette & Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-[#0A0B0D]/30 to-transparent opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0D]/70 via-transparent to-[#0A0B0D]/70 opacity-60" />

            {/* Bottom Overlay Card Details */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 p-5 sm:p-6 rounded-2xl border border-white/10 bg-[#0A0B0D]/80 backdrop-blur-md">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#9496A1]">
                    Lead Web Developer
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Hirzi Rofif Irsaydhi
                </div>
                <div className="text-xs sm:text-sm text-[#9496A1] flex items-center gap-2 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Banyuwangi, East Java &bull; D4 TRPL Politeknik Negeri Banyuwangi</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="mailto:hirzirofifirsyadhi@gmail.com?subject=Project%20Inquiry"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black transition-all duration-200 hover:bg-[#E2E8F0]"
                >
                  <span>Connect With Me</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
