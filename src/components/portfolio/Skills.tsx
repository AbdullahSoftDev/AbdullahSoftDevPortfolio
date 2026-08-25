const skills = [
  {
    no: "01",
    name: "JavaScript / TypeScript",
    level: 92,
    detail: "Modern React apps, Node services and typed end-to-end contracts.",
    tone: "bg-brut-red",
  },
  {
    no: "02",
    name: "Python",
    level: 90,
    detail: "AI pipelines, automation scripts and security tooling.",
    tone: "bg-brut-yellow",
  },
  {
    no: "03",
    name: "React",
    level: 88,
    detail: "Component systems, animation and accessible interfaces.",
    tone: "bg-brut-violet",
  },
  {
    no: "04",
    name: "AI Integration",
    level: 86,
    detail: "LLM APIs, voice agents and retrieval-driven features.",
    tone: "bg-brut-red",
  },
  {
    no: "05",
    name: "C++",
    level: 85,
    detail: "Data structures, algorithms and systems fundamentals.",
    tone: "bg-brut-yellow",
  },
  {
    no: "06",
    name: "WordPress",
    level: 75,
    detail: "Custom themes and fast client-ready marketing sites.",
    tone: "bg-brut-violet",
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative border-b-8 border-ink">
      <div className="grid lg:grid-cols-2">
        <div className="relative border-b-8 border-ink bg-cream lg:border-r-8 lg:border-b-0">
          <div
            aria-hidden
            className="texture-dots-strong pointer-events-none absolute inset-0"
          />
          <div className="relative p-8 sm:p-14 lg:sticky lg:top-24">
            <span className="rm-safe-rotate inline-block -rotate-2 border-4 border-ink bg-brut-yellow px-3 py-1 text-sm font-black tracking-widest uppercase shadow-[4px_4px_0px_0px_#000]">
              03 / Toolkit
            </span>
            <h2 className="mt-6 text-6xl font-black tracking-tighter uppercase sm:text-7xl">
              Skills
            </h2>
            <p className="text-stroke-ink text-5xl font-black tracking-tighter uppercase sm:text-6xl">
              &amp; Tools
            </p>
            <p className="mt-6 max-w-md text-lg font-bold">
              The stack I reach for when something has to be built, shipped and kept
              alive.
            </p>
          </div>
        </div>

        <ul className="bg-paper">
          {skills.map((s) => (
            <li
              key={s.name}
              className="group border-b-4 border-ink px-8 py-10 transition-colors duration-150 ease-out last:border-b-0 hover:bg-brut-hot sm:px-12"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-2xl font-black tracking-tighter">{s.no}</span>
                <span className="text-2xl font-black">{s.level}%</span>
              </div>
              <h3 className="mt-3 text-3xl font-black tracking-tighter uppercase">
                {s.name}
              </h3>
              <p className="mt-3 max-w-md text-base font-bold">{s.detail}</p>
              <div
                role="img"
                aria-label={`${s.name} proficiency ${s.level} percent`}
                className="mt-5 h-6 w-full border-4 border-ink bg-cream"
              >
                <div className={`h-full ${s.tone}`} style={{ width: `${s.level}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div aria-hidden className="edge-zigzag w-full border-t-8 border-ink" />
    </section>

  );
}
