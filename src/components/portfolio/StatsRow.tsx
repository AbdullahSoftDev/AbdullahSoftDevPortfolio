const stats = [
  { label: "Projects Shipped", value: "15+" },
  { label: "Tech Stack", value: "10+" },
  { label: "Internship", value: "6 MO" },
  { label: "Coffee Per Week", value: "∞" },
];

export function StatsRow() {
  return (
    <section
      aria-label="Key numbers"
      className="border-b-8 border-ink bg-ink text-paper"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`group px-6 py-12 transition-colors duration-150 ease-out hover:bg-brut-hot hover:text-ink ${
              i > 0 ? "border-t-4 border-paper/30 sm:border-t-0 sm:border-l-4" : ""
            }`}
          >
            <p className="text-xs font-black tracking-[0.2em] uppercase opacity-70">
              {s.label}
            </p>
            <p className="mt-4 text-6xl font-black tracking-tighter">{s.value}</p>
            <span className="mt-4 block h-3 w-40 max-w-full bg-paper/25 group-hover:bg-ink" />
          </div>
        ))}
      </div>
    </section>
  );
}
