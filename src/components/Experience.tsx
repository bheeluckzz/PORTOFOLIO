import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";

interface TimelineItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  skills: string[];
  type: "experience" | "education" | "certification";
}

const TIMELINE: TimelineItem[] = [
  {
    period: "Feb 2026 — Jun 2026",
    role: "Frontend Developer (Internship)",
    organization: "PT HUMMATECH",
    location: "Banyuwangi, East Java",
    description:
      "Developed school profile web platforms using Laravel MVC architecture. Responsible for dynamic page rendering, custom JavaScript interactive modules, routing configuration, controller business logic, and MySQL database management.",
    skills: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS", "Next.js"],
    type: "experience",
  },
  {
    period: "Aug 2023 — Present",
    role: "D4 Software Engineering (TRPL)",
    organization: "POLITEKNIK NEGERI BANYUWANGI",
    location: "Kabat, Banyuwangi",
    description:
      "Undergraduate engineering program focusing on modern software engineering paradigms, fullstack web systems, database design, software architecture, and collaborative campus software projects.",
    skills: ["Web Engineering", "Data Structures", "Database Architecture", "OOP", "Software Design"],
    type: "education",
  },
  {
    period: "2023",
    role: "Certificate of Competency: Electronics Repair",
    organization: "Samsung Tech Institute / GSI",
    location: "East Java",
    description:
      "Earned certified qualification as Level 1 & Level 2 Technician for handheld and micro-electronics repair. Demonstrates rigorous hardware diagnostic capabilities and precision troubleshooting.",
    skills: ["Level 1 & 2 Technician", "Hardware Diagnostics", "Precision Testing", "Hardware Logic"],
    type: "certification",
  },
  {
    period: "Aug 2020 — Jun 2023",
    role: "Teknik Elektronika Industri",
    organization: "SMK Muhammadiyah 2 Genteng",
    location: "Genteng, Banyuwangi",
    description:
      "Vocational engineering study covering industrial electronics, control systems, basic programming, schematic analysis, and hardware maintenance.",
    skills: ["Industrial Electronics", "Microcontroller Basics", "Hardware Maintenance"],
    type: "education",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-[#22252E] relative">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#9496A1] mb-2">
              (03) Career &amp; Education
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.03em] leading-tight">
              Journey &amp; Credentials.
            </h2>
          </div>
          <p className="text-[#9496A1] max-w-md text-sm sm:text-base leading-relaxed">
            From technical electronics discipline to fullstack software engineering and industry
            internship.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {TIMELINE.map((item) => (
            <div
              key={`${item.role}-${item.period}`}
              className="rounded-2xl border border-[#22252E] bg-[#121316] p-7 sm:p-9 transition-all duration-300 hover:border-[#333745] hover:bg-[#15171B]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Meta: Dates & Type Icon (4 cols) */}
                <div className="lg:col-span-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                  <div className="text-lg font-bold text-white tracking-tight">
                    {item.organization}
                  </div>
                  <div className="text-xs text-[#9496A1]">{item.location}</div>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#9496A1] bg-[#181A20] px-2.5 py-1 rounded border border-[#22252E]">
                      {item.type === "experience" && <Briefcase className="w-3 h-3 text-emerald-400" />}
                      {item.type === "education" && <GraduationCap className="w-3 h-3 text-sky-400" />}
                      {item.type === "certification" && <Award className="w-3 h-3 text-amber-400" />}
                      <span>{item.type}</span>
                    </span>
                  </div>
                </div>

                {/* Right Content: Role, Description & Skills (8 cols) */}
                <div className="lg:col-span-8 space-y-4">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {item.role}
                  </h3>
                  <p className="text-sm sm:text-base text-[#9496A1] leading-relaxed font-normal">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.skills.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-mono text-[#C4C7D4] bg-[#181A20] px-2.5 py-1 rounded border border-[#22252E]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
