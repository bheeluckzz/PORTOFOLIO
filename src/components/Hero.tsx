import Image from "next/image";
import { ArrowDown, FileText, MapPin, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle radial ambient ground (restrained, no loud purple) */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#181A20]/40 blur-[120px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Statement & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Real status indicator badge (functional, marks real availability) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#22252E] bg-[#121316] text-[13px] font-medium text-[#9496A1]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Software Engineering Roles</span>
            </div>

            {/* 2-line maximum headline across viewports */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold text-white tracking-[-0.035em] leading-[1.06] text-balance">
              Crafting Resilient Web Systems &amp; Dynamic Interfaces.
            </h1>

            {/* Subtitle with real credentials */}
            <p className="text-base sm:text-lg text-[#9496A1] leading-relaxed max-w-2xl text-pretty font-normal">
              I&apos;m <span className="text-white font-medium">Hirzi Rofif Irsaydhi</span>, a
              software engineering student at{" "}
              <span className="text-white">Politeknik Negeri Banyuwangi (TRPL)</span> and
              ex-Frontend Developer Intern at{" "}
              <span className="text-white">PT Hummatech</span>. I build structured Laravel MVC
              backends and high-performance React &amp; Next.js frontend applications.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#works"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-all duration-200 hover:bg-[#E2E8F0] active:scale-[0.98]"
              >
                <span>View Selected Works</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="/CV_Hirzi_Rofif_Irsaydhi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#22252E] bg-[#121316] px-6 py-3.5 text-[15px] font-medium text-white transition-all duration-200 hover:bg-[#181A20] hover:border-[#333745] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-[#9496A1]" />
                <span>Curriculum Vitae (PDF)</span>
              </a>
            </div>

            {/* Real verified stats banner (No fake stats) */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#22252E] max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight">
                  4 Mo.
                </div>
                <div className="text-xs sm:text-sm text-[#9496A1] mt-1 font-medium">
                  Internship @ PT Hummatech
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight">
                  8+
                </div>
                <div className="text-xs sm:text-sm text-[#9496A1] mt-1 font-medium">
                  Repositories &amp; Systems
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight">
                  D4 TRPL
                </div>
                <div className="text-xs sm:text-sm text-[#9496A1] mt-1 font-medium">
                  Poliwangi Engineering
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px]">
              {/* Image Container Card */}
              <div className="relative rounded-2xl overflow-hidden border border-[#22252E] bg-[#121316] p-2.5 shadow-2xl transition-transform duration-300 hover:border-[#333745]">
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#0A0B0D]">
                  <Image
                    src="/images/foto1.jpg"
                    alt="Hirzi Rofif Irsaydhi"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                  {/* Subtle vignette layer at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D]/90 via-transparent to-transparent opacity-80" />

                  {/* Overlay Meta Details */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl border border-white/10 bg-[#0A0B0D]/75 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white text-sm font-semibold tracking-tight">
                          Hirzi Rofif Irsaydhi
                        </div>
                        <div className="text-xs text-[#9496A1] flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-emerald-400" />
                          <span>Banyuwangi, East Java, ID</span>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-white border border-white/10">
                        TRPL &apos;23
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Floating Micro Badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-2.5 px-4 py-2.5 rounded-xl border border-[#22252E] bg-[#121316]/95 backdrop-blur-md shadow-xl text-xs text-white">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="font-medium">Laravel &bull; React &bull; Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
