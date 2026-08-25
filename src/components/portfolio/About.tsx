import { Reveal, SectionHeading } from "./primitives";

const stats = [
  {
    label: "Education",
    value: "BS Computer Science",
    detail: "University of Central Punjab",
    tone: "bg-brut-red",
    hoverTone: "group-hover:bg-brut-red/30",
  },
  {
    label: "Experience",
    value: "SharpCode Intern",
    detail: "Software Development",
    tone: "bg-brut-yellow",
    hoverTone: "group-hover:bg-brut-yellow/30",
  },
  {
    label: "Core Focus",
    value: "AI + Full-Stack",
    detail: "Voice agents, SaaS, APIs",
    tone: "bg-brut-violet",
    hoverTone: "group-hover:bg-brut-violet/30",
  },
];

export function About() {
  return (
    <section id="about" className="relative border-b-8 border-ink py-20">
      <div aria-hidden className="texture-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading index="01 / About" title="Who I Am" tone="violet" />

        <Reveal className="mt-10">
          <div className="border-4 border-ink bg-paper p-6 shadow-[12px_12px_0px_0px_#000] transition-colors duration-300 ease-out hover:bg-[#FFF0F0] sm:p-10">
            <p className="text-lg font-bold sm:text-xl">
              I&apos;m Muhammad Abdullah, a Computer Science student at the University of
              Central Punjab and a full-stack developer with a heavy bias toward applied
              AI. During my internship at SharpCode I built RESTful APIs, wired up AI
              features with Python and the OpenAI API, and shipped responsive interfaces
              alongside a working agile team.
            </p>
            <p className="mt-5 text-lg font-bold sm:text-xl">
              These days I build voice agents, HR platforms, learning systems and security
              tooling — anything where a real backend and a real interface have to meet.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div
                className={`group relative border-4 border-ink bg-cream p-6 shadow-[8px_8px_0px_0px_#000] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#000] ${s.hoverTone}`}
              >
                <span
                  aria-hidden
                  className={`rm-safe-rotate absolute -top-4 -right-4 h-9 w-9 rotate-30 border-4 border-ink transition-transform duration-300 ease-out group-hover:rotate-0 ${s.tone}`}
                />
                <p className="text-sm font-black tracking-widest uppercase">{s.label}</p>
                <p className="mt-3 text-2xl font-black tracking-tighter uppercase">
                  {s.value}
                </p>
                <p className="mt-2 text-base font-bold">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
