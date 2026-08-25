import { focusRing } from "./primitives";

export function Footer() {
  return (
    <footer className="border-t-8 border-ink bg-ink py-10 text-paper">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-lg font-black tracking-tighter uppercase">
          Muhammad Abdullah — Abdullah Softdev
        </p>
        <p className="text-sm font-black tracking-widest uppercase">
          © {new Date().getFullYear()} · Built with React &amp; Tailwind
        </p>
        <a
          href="#top"
          className={`self-start border-4 border-paper px-4 py-2 text-sm font-black tracking-widest uppercase transition-colors duration-100 ease-out hover:bg-paper hover:text-ink ${focusRing}`}
        >
          Back To Top
        </a>
      </div>
    </footer>
  );
}
