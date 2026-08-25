import { useState } from "react";
import { Menu, X } from "lucide-react";
import { focusRing, pressable } from "./primitives";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-4 border-ink bg-cream">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
      >
        <a
          href="#top"
          className={`border-4 border-ink bg-[#D43636] px-3 py-2 text-xl font-black text-white tracking-tighter uppercase shadow-[4px_4px_0px_0px_#000] transition-colors duration-200 hover:bg-white hover:text-[#D43636] ${pressable} ${focusRing}`}
        >
          Abdullah SoftDev
        </a>

        <ul className="hidden items-center gap-2 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`inline-block border-4 border-transparent px-3 py-2 text-sm font-black tracking-widest uppercase transition-all duration-100 ease-out hover:border-ink hover:bg-brut-yellow hover:shadow-[4px_4px_0px_0px_#000] ${focusRing}`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:m.abdullah.cs23@gmail.com"
              className={`inline-block border-4 border-ink bg-ink px-4 py-2 text-sm font-black tracking-widest text-paper uppercase shadow-[4px_4px_0px_0px_#000] ${pressable} ${focusRing}`}
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-12 w-12 items-center justify-center border-4 border-ink bg-brut-yellow shadow-[4px_4px_0px_0px_#000] md:hidden ${pressable} ${focusRing}`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t-4 border-ink bg-cream md:hidden">
          <ul className="flex flex-col gap-3 p-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block border-4 border-ink bg-paper px-4 py-3 text-base font-black tracking-widest uppercase shadow-[4px_4px_0px_0px_#000] ${pressable} ${focusRing}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:m.abdullah.cs23@gmail.com"
                onClick={() => setOpen(false)}
                className={`block border-4 border-ink bg-brut-red px-4 py-3 text-base font-black tracking-widest uppercase shadow-[4px_4px_0px_0px_#000] ${pressable} ${focusRing}`}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
