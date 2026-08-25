import { ArrowRight } from "lucide-react";
import { focusRing, hoverPress } from "./primitives";

const reasons = [
  {
    title: "Ship End To End",
    body: "Backend, frontend and deployment — I build the whole slice, not just the pretty part.",
    tone: "bg-ink",
  },
  {
    title: "AI That Actually Works",
    body: "Voice agents, LLM pipelines and generated content wired into real product flows.",
    tone: "bg-ink",
  },
  {
    title: "Security Minded",
    body: "JWT auth, RBAC and encryption baked in from the first commit, not bolted on later.",
    tone: "bg-ink",
  },
  {
    title: "Fast, Honest Delivery",
    body: "Clear scope, frequent demos and code you can read six months from now.",
    tone: "bg-ink",
  },
];

export function WhyMe() {
  return (
    <section id="why" className="border-b-8 border-ink">
      <div className="grid lg:grid-cols-2">
        <div className="relative overflow-hidden border-b-8 border-ink bg-brut-red p-8 sm:p-14 lg:border-r-8 lg:border-b-0">
          <div
            aria-hidden
            className="texture-dots-strong pointer-events-none absolute inset-0"
          />
          <div className="relative">
            <h2 className="text-5xl font-black tracking-tighter text-paper uppercase sm:text-6xl">
              Why Teams Work With Me
            </h2>
            <div className="rm-safe-rotate mt-8 -rotate-1 border-4 border-ink bg-paper px-5 py-4 shadow-[10px_10px_0px_0px_#000]">
              <p className="text-lg font-bold">
                One developer, full coverage — from database to interface.
              </p>
            </div>
            <a
              href="#projects"
              className={`mt-8 inline-flex items-center gap-2 border-4 border-ink bg-brut-yellow px-5 py-3 text-sm font-black tracking-widest uppercase shadow-[8px_8px_0px_0px_#000] ${hoverPress} ${focusRing}`}
            >
              Explore Work
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>

        <div className="bg-cream p-8 sm:p-14">
          <ul className="space-y-10">
            {reasons.map((r) => (
              <li key={r.title} className="group flex items-start gap-4">
                <span
                  aria-hidden
                  className={`mt-1 h-6 w-6 shrink-0 border-4 border-ink transition-colors duration-150 ease-out group-hover:bg-brut-hot ${r.tone}`}
                />
                <div>
                  <h3 className="origin-left text-2xl font-black tracking-tight uppercase transition-all duration-300 ease-out group-hover:scale-105 group-hover:text-brut-hot">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-base font-bold">{r.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
