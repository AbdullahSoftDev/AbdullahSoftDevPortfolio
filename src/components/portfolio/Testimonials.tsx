import { Star } from "lucide-react";

const quotes = [
  {
    quote:
      "Abdullah picked up our API layer in days and shipped features we had parked for months.",
    name: "Team Lead",
    role: "SharpCode",
  },
  {
    quote:
      "The voice agent handles Urdu and English calls better than the vendor tool we paid for.",
    name: "Product Owner",
    role: "Zoe Pilot",
  },
  {
    quote:
      "Clean commits, clear demos, zero drama. He treats deadlines like they matter.",
    name: "Project Manager",
    role: "NexusHR",
  },
  {
    quote:
      "He built the whole learning platform — interviews, quizzes and the in-browser IDE.",
    name: "Founder",
    role: "TWS AI",
  },
  {
    quote:
      "Scoping was honest, the estimate held, and the handover docs were actually useful.",
    name: "Tech Lead",
    role: "Freelance Client",
  },
  {
    quote:
      "Security was baked in from day one — auth, roles and encryption, no bolt-ons.",
    name: "Engineering Manager",
    role: "SecureOps",
  },
];

function Card({ q }: { q: (typeof quotes)[number] }) {
  return (
    <figure className="flex h-full w-[320px] shrink-0 flex-col border-4 border-ink bg-paper shadow-[10px_10px_0px_0px_#000] sm:w-[380px]">
      <div className="grow p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="flex" aria-label="5 out of 5 stars">
            {[0, 1, 2, 3, 4].map((s) => (
              <Star key={s} className="h-5 w-5 fill-brut-red text-ink" aria-hidden />
            ))}
          </span>
          <span className="border-2 border-ink bg-ink px-2 py-1 text-[10px] font-black tracking-widest text-paper uppercase">
            Verified
          </span>
        </div>
        <blockquote className="mt-4 text-base font-bold">
          &ldquo;{q.quote}&rdquo;
        </blockquote>
      </div>
      <figcaption className="border-t-4 border-ink bg-brut-violet px-5 py-4">
        <p className="text-sm font-black tracking-widest uppercase">{q.name}</p>
        <p className="text-xs font-bold uppercase">{q.role}</p>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="overflow-hidden border-b-8 border-ink bg-brut-yellow py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rm-safe-rotate mx-auto w-fit -rotate-1 border-4 border-ink bg-ink px-6 py-4 shadow-[12px_12px_0px_0px_#000]">
          <h2 className="font-system text-center text-4xl font-black tracking-tighter text-paper uppercase sm:text-6xl">
            Trusted By The People I Build With
          </h2>
        </div>
      </div>

      <div className="group relative mt-14 overflow-hidden">
        <div className="animate-marquee flex w-max gap-8 pl-8 group-hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 gap-8" aria-hidden={copy === 1}>
              {quotes.map((q) => (
                <Card key={q.name + q.role} q={q} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
