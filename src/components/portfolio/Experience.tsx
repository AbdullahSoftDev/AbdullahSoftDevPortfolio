import { Reveal, SectionHeading, Tag } from "./primitives";

const bullets = [
  "Built and documented RESTful APIs with Node.js and Express.",
  "Implemented AI features using Python and the OpenAI API.",
  "Collaborated on responsive, accessible user interfaces.",
  "Took part in code reviews and the team's agile process.",
];

export function Experience() {
  return (
    <section id="experience" className="relative border-b-8 border-ink py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading index="04 / Track Record" title="Experience" tone="violet" />

        <Reveal className="mt-10">
          <article className="group relative border-4 border-ink bg-paper p-6 shadow-[12px_12px_0px_0px_#000] transition-colors duration-300 ease-out hover:bg-brut-red/30 sm:p-10">
            <span
              aria-hidden
              className="rm-safe-rotate absolute -top-5 -right-5 h-11 w-11 rotate-12 rounded-full border-4 border-ink bg-brut-red"
            />
            <div className="flex flex-wrap items-center gap-4">
              <h3 className="text-3xl font-black tracking-tighter uppercase sm:text-4xl">
                SharpCode
              </h3>
              <Tag>Internship</Tag>
            </div>
            <p className="mt-2 text-lg font-black tracking-widest uppercase">
              Software Development Intern
            </p>

            <ul className="mt-6 space-y-4">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className="mt-1 h-5 w-5 shrink-0 border-4 border-ink bg-brut-yellow"
                  />
                  <span className="text-lg font-bold">{b}</span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
