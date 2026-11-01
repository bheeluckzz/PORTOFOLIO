export function Logos() {
  const TECHS = [
    "LARAVEL MVC",
    "NEXT.JS 16",
    "REACT 19",
    "TAILWIND CSS v4",
    "TYPESCRIPT",
    "MYSQL ARCHITECTURE",
    "PT HUMMATECH",
    "POLITEKNIK NEGERI BANYUWANGI",
    "SAMSUNG TECH INSTITUTE",
  ];

  return (
    <section className="py-12 border-y border-white/10 bg-black overflow-hidden relative">
      <div className="flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 text-xs sm:text-sm font-mono tracking-widest text-white/50 uppercase select-none">
          {TECHS.concat(TECHS).map((tech, idx) => (
            <div key={`${tech}-${idx}`} className="flex items-center gap-16">
              <span>{tech}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
