import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Reveal, SectionHeading, Tag, focusRing, pressable } from "./primitives";

type Category = "AI & VOICE" | "WEB DESIGN" | "SAAS APPS";

const categories: Category[] = ["AI & VOICE", "WEB DESIGN", "SAAS APPS"];

const projects: {
  name: string;
  category: Category;
  blurb: string;
  stack: string[];
  tone: string;
}[] = [
  {
    name: "Zoe",
    category: "AI & VOICE",
    blurb:
      "AI voice agent with wake-word activation and bilingual Urdu/English conversation, wired into telephony and messaging.",
    stack: ["React", "TypeScript", "Twilio", "WhatsApp API"],
    tone: "bg-brut-red",
  },
  {
    name: "Furniture E-commerce",
    category: "WEB DESIGN",
    blurb:
      "Storefront with cinematic Three.js product animations and a fast, tactile browsing experience.",
    stack: ["Three.js", "React", "Tailwind"],
    tone: "bg-brut-yellow",
  },
  {
    name: "Apex Motors",
    category: "WEB DESIGN",
    blurb:
      "Luxury automotive landing page built around scroll-driven motion and heavy typographic contrast.",
    stack: ["Three.js", "GSAP", "Anime.js", "React"],
    tone: "bg-brut-violet",
  },
  {
    name: "NexusHR",
    category: "SAAS APPS",
    blurb:
      "Full-stack HR system with employee records, JWT authentication and role-based access control.",
    stack: ["Node/Express", "Supabase", "React", "JWT", "RBAC"],
    tone: "bg-brut-yellow",
  },
  {
    name: "TWS AI — The Wise Student",
    category: "SAAS APPS",
    blurb:
      "AI learning platform with AI-run interviews, generated quizzes and a live in-browser coding IDE.",
    stack: ["React", "Node.js", "Python", "OpenAI API"],
    tone: "bg-brut-red",
  },
  {
    name: "Vigil",
    category: "SAAS APPS",
    blurb:
      "Linux monitoring and security tool with AES-256 encryption and real-time threat detection.",
    stack: ["Python", "AES-256", "Linux"],
    tone: "bg-brut-violet",
  },
];

export function Projects() {
  const [active, setActive] = useState<Category>("AI & VOICE");
  const visible = projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative border-b-8 border-ink py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading index="02 / Work" title="Projects" tone="red" />

        <div
          role="tablist"
          aria-label="Project categories"
          className="mt-8 flex flex-wrap gap-4"
        >
          {categories.map((c) => {
            const isActive = c === active;
            return (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(c)}
                className={`border-4 border-ink px-5 py-3 text-sm font-black tracking-widest uppercase shadow-[4px_4px_0px_0px_#000] ${pressable} ${focusRing} ${
                  isActive ? "bg-brut-red" : "bg-paper hover:bg-brut-yellow"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <article className="relative flex h-full flex-col border-4 border-ink bg-paper p-6 shadow-[8px_8px_0px_0px_#000] transition-all duration-150 ease-out hover:-translate-y-2 hover:shadow-[14px_14px_0px_0px_#000]">
                <span
                  aria-hidden
                  className={`rm-safe-rotate absolute -top-4 -left-4 h-9 w-9 -rotate-6 border-4 border-ink ${p.tone}`}
                />
                <h3 className="text-2xl font-black tracking-tighter uppercase">
                  {p.name}
                </h3>
                <p className="mt-3 grow text-base font-bold">{p.blurb}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li key={s}>
                      <Tag>{s}</Tag>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#"
                    className={`inline-flex items-center gap-2 border-4 border-ink bg-brut-yellow px-3 py-2 text-xs font-black tracking-widest uppercase shadow-[4px_4px_0px_0px_#000] ${pressable} ${focusRing}`}
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden />
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className={`inline-flex items-center gap-2 border-4 border-ink bg-cream px-3 py-2 text-xs font-black tracking-widest uppercase shadow-[4px_4px_0px_0px_#000] transition-colors duration-200 ease-out hover:bg-ink hover:text-cream focus-visible:bg-ink focus-visible:text-cream active:bg-ink active:text-cream ${pressable} ${focusRing}`}
                  >
                    <Github className="h-4 w-4" aria-hidden />
                    GitHub
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
