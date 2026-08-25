import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

export const pressable =
  "transition-all duration-100 ease-out active:translate-x-[2px] active:translate-y-[2px] active:shadow-none";

/** Presses in on hover (and stays pressed while active). */
export const hoverPress =
  "transition-all duration-100 ease-out hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none active:translate-x-[8px] active:translate-y-[8px] active:shadow-none";


type Tone = "red" | "yellow" | "violet" | "white" | "black";

export const toneBg: Record<Tone, string> = {
  red: "bg-brut-red text-ink",
  yellow: "bg-brut-yellow text-ink",
  violet: "bg-brut-violet text-ink",
  white: "bg-paper text-ink",
  black: "bg-ink text-paper",
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  index,
  title,
  tone = "yellow",
}: {
  index: string;
  title: string;
  tone?: Tone;
}) {
  return (
    <div className="border-b-8 border-ink pb-6">
      <span
        className={`rm-safe-rotate inline-block -rotate-2 border-4 border-ink px-3 py-1 text-sm font-black tracking-widest uppercase shadow-[4px_4px_0px_0px_#000] ${toneBg[tone]}`}
      >
        {index}
      </span>
      <h2 className="mt-4 text-5xl font-black tracking-tighter uppercase sm:text-6xl md:text-7xl">
        {title}
      </h2>
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block border-2 border-ink bg-cream px-2 py-1 text-xs font-black tracking-widest uppercase transition-colors duration-200 ease-out hover:bg-ink hover:text-cream">
      {children}
    </span>
  );
}
