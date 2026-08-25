import { ArrowRight, Sparkles, Star } from "lucide-react";
import { focusRing, hoverPress } from "./primitives";

const marqueeItems = [
  "AVAILABLE FOR HIRE",
  "FULL-STACK DEVELOPER",
  "AI INTEGRATION",
  "VOICE AGENTS",
  "REACT + NODE",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b-8 border-ink">
      <div
        aria-hidden
        className="texture-dots-strong pointer-events-none absolute inset-0"
      />

      {/* decorative floating shapes */}
      <div
        aria-hidden
        className="rm-safe-rotate pointer-events-none absolute top-10 left-[-24px] hidden h-24 w-24 -rotate-12 border-4 border-ink bg-brut-red shadow-[8px_8px_0px_0px_#000] lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-24 right-10 hidden h-28 w-28 rounded-full border-4 border-ink bg-brut-yellow shadow-[8px_8px_0px_0px_#000] lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <span className="rm-safe-rotate inline-flex -rotate-2 items-center gap-2 border-4 border-ink bg-brut-violet px-3 py-1 text-sm font-black tracking-widest uppercase shadow-[4px_4px_0px_0px_#000]">
          <Sparkles className="h-4 w-4" aria-hidden />
          Muhammad Abdullah
        </span>

        <h1 className="mt-8 tracking-tighter uppercase flex items-center justify-between gap-6">
          <div>
            <span className="block w-fit border-4 border-ink bg-paper px-4 py-2 text-6xl leading-[0.85] font-black shadow-[10px_10px_0px_0px_#000] sm:text-8xl lg:px-8 lg:text-9xl">
              ABDULLAH
              <br />
              SOFTDEV
            </span>
            <span className="rm-safe-rotate -mt-2 block w-fit -rotate-2 border-4 border-ink bg-brut-yellow px-4 py-3 text-5xl leading-[0.9] font-black shadow-[12px_12px_0px_0px_#000] sm:text-7xl lg:px-8 lg:text-8xl">
              SHIPS HARD STUFF
            </span>
          </div>
          <img
            src="https://avatars.githubusercontent.com/u/232236940?v=4"
            alt="Muhammad Abdullah portrait"
            loading="eager"
            className="h-400px w-400px shrink-0 rounded-full border-4 border-ink object-cover shadow-[0px_0px_0px_0px_#000] transition-transform duration-300 ease-out hover:-rotate-6 sm:h-48 sm:w-48 lg:h-56 lg:w-56"
          />
        </h1>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
          <div className="relative border-4 border-ink bg-paper p-6 shadow-[10px_10px_0px_0px_#000] sm:p-8">
            <span
              aria-hidden
              className="absolute top-6 bottom-6 left-6 w-[6px] bg-brut-red"
            />
            <p className="pl-6 text-lg font-bold sm:text-xl">
              Full-stack &amp; AI developer. Computer Science student at the University of
              Central Punjab, SharpCode internship alum. I ship voice agents, SaaS
              platforms and interfaces that hit like a hammer.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 pl-6">
              <a
                href="#projects"
                className={`inline-flex items-center gap-2 border-4 border-ink bg-brut-red px-6 py-4 text-base font-black tracking-widest uppercase shadow-[8px_8px_0px_0px_#000] ${hoverPress} ${focusRing}`}
              >
                View Projects
                <ArrowRight className="h-5 w-5" aria-hidden />
              </a>
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 border-4 border-ink bg-paper px-6 py-4 text-base font-black tracking-widest uppercase shadow-[8px_8px_0px_0px_#000] hover:bg-ink hover:text-paper ${hoverPress} ${focusRing}`}
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="rm-safe-rotate group relative rotate-1 border-4 border-ink bg-brut-violet p-10 shadow-[14px_14px_0px_0px_#000] transition-transform duration-300 ease-out hover:rotate-0">
            <span
              aria-hidden
              className="animate-star-bounce absolute -top-7 -left-7 z-10 flex h-14 w-14 items-center justify-center border-4 border-ink bg-paper shadow-[6px_6px_0px_0px_#000]"
            >
              <Star className="h-7 w-7 fill-brut-red text-ink" />
            </span>
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[10rem] leading-none font-black text-ink/10 select-none">
              #1
            </span>
            <div className="relative flex flex-wrap items-center justify-center gap-2">
              <span className="rm-safe-rotate -rotate-2 border-4 border-ink bg-ink px-4 py-2 text-2xl font-black tracking-widest text-paper uppercase transition-transform duration-300 ease-out group-hover:rotate-0 sm:text-3xl">
                Voice
              </span>
              <span className="rm-safe-rotate rotate-2 border-4 border-ink bg-brut-red px-4 py-2 text-2xl font-black tracking-widest uppercase shadow-[6px_6px_0px_0px_#000] transition-transform duration-300 ease-out group-hover:rotate-0 sm:text-3xl">
                + AI
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden border-t-8 border-ink bg-brut-yellow py-3">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {marqueeItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-6 px-6 text-lg font-black tracking-widest whitespace-nowrap uppercase"
                >
                  {item}
                  <span className="inline-block h-3 w-3 rounded-full border-2 border-ink bg-ink" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}