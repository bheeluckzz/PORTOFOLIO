import Image from "next/image";
import { ArrowDown, FileText, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[750px] w-full overflow-hidden bg-black flex flex-col justify-end">
      {/* Background Media - Hirzi's Portrait covering the Hero (Qumax .home-hero_bg) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/foto1.jpg"
          alt="Hirzi Rofif Irsaydhi"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top sm:object-[center_15%] filter brightness-[0.72] contrast-[1.05]"
        />
        {/* Exact Qumax Dark Gradient Layer Overlay (.home-hero_bg-layer) */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/80 via-40% to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"
          aria-hidden="true"
        />
      </div>

      {/* Hero Contents Container (.home-hero_wrapper) */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 pb-10 sm:pb-16 flex flex-col justify-end h-full">
        {/* Top Floating Row: Intro Text & Glass Experience Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-8 sm:mb-12">
          {/* Top Left Intro (.home-hero_intro) */}
          <div className="md:col-span-7 lg:col-span-8 max-w-lg">
            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
              We create thoughtful digital experiences that meet today’s needs while staying
              flexible, scalable, and ready for what comes next.
            </p>
          </div>

          {/* Top Right Card (.home-hero_card with glass blur) */}
          <div className="md:col-span-5 lg:col-span-4 flex justify-start md:justify-end">
            <div className="qumax-card rounded-2xl p-5 sm:p-6 w-full max-w-[280px] space-y-4 shadow-2xl">
              <div className="text-xs sm:text-sm text-white/80 leading-snug">
                Driven by experience, focused on excellence, and built for long-term impact.
              </div>
              <div className="pt-2 border-t border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-mono">
                  04 Mo.+
                </div>
                <div className="text-xs text-white/60 font-medium uppercase tracking-wider mt-0.5">
                  PT Hummatech Internship
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Master Row: Big Headline & Info / Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-t border-white/10 pt-8">
          {/* Master Headline (.home-hero_headline-text) */}
          <div className="lg:col-span-8 space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-semibold text-white tracking-[-0.04em] leading-[1.05] text-balance">
              Designed for today.
              <br />
              <span className="text-white/60">Made for tomorrow.</span>
            </h1>

            {/* Sub-headline Action Pills */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#works"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-white/90 active:scale-95 shadow-xl"
              >
                <span>Works</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="/CV_Hirzi_Rofif_Irsaydhi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-white/20 backdrop-blur-md active:scale-95"
              >
                <FileText className="w-4 h-4 text-white/70" />
                <span>Curriculum Vitae</span>
              </a>
            </div>
          </div>

          {/* Right Info & Ratings (.home-hero_info-wrapper) */}
          <div className="lg:col-span-4 space-y-4 lg:text-left">
            {/* Rating Stars (Qumax signature rating block) */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-sm font-semibold text-white">5.0 / 5</div>
              </div>
              <div className="text-xs font-medium text-white/70">
                D4 TRPL Politeknik Negeri Banyuwangi
              </div>
            </div>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
              Thoughtfully crafted to deliver modern style, lasting quality, and reliable software engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
