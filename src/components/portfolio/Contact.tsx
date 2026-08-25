import { Github, Linkedin, Mail } from "lucide-react";
import { Reveal, SectionHeading, focusRing } from "./primitives";

const channels = [
  {
    label: "GitHub",
    value: "abdullahsoftdev",
    href: "https://github.com/abdullahsoftdev",
    Icon: Github,
    tone: "bg-brut-red",
  },
  {
    label: "LinkedIn",
    value: "abdullahsoftdev",
    href: "https://linkedin.com/in/abdullahsoftdev",
    Icon: Linkedin,
    tone: "bg-brut-violet",
  },
  {
    label: "Email",
    value: "m.abdullah.cs23@gmail.com",
    href: "mailto:m.abdullah.cs23@gmail.com",
    Icon: Mail,
    tone: "bg-brut-yellow",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative border-b-8 border-ink py-20">
      <div aria-hidden className="texture-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading index="05 / Say Hello" title="Contact" tone="red" />

        <p className="mt-8 max-w-2xl text-xl font-bold">
          Open to internships, freelance builds and collaboration on AI-heavy products.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {channels.map(({ label, value, href, Icon, tone }, i) => (
            <Reveal key={label} delay={i * 0.07}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noreferrer noopener"}
                className={`group block h-full border-4 border-ink bg-paper p-6 shadow-[8px_8px_0px_0px_#000] transition-all duration-150 ease-out hover:-translate-y-2 hover:bg-ink hover:text-paper hover:shadow-[12px_12px_0px_0px_#000] ${focusRing}`}
              >
                <span
                  className={`inline-flex h-14 w-14 items-center justify-center border-4 border-ink text-ink ${tone} group-hover:border-paper`}
                >
                  <Icon className="h-7 w-7" aria-hidden />
                </span>
                <p className="mt-5 text-sm font-black tracking-widest uppercase">
                  {label}
                </p>
                <p className="mt-2 text-lg font-bold break-words">{value}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
