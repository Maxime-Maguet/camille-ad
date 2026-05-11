export default function Ticker() {
  const TICKER_ITEMS = [
    "Gestion RH",
    "Paie Silae",
    "CCN Propreté",
    "Chorus Pro",
    "Accompagnement IA",
    "Rapprochement bancaire",
    "Planning & Exploitation",
    "Relances clients",
    "Toulouse & périphérie",
    "Freelance · Disponible",
  ];

  return (
    <div className="bg-ink py-3.5 px-4 lg:px-13.5 flex items-center gap-0 overflow-hidden">
      <div className="flex whitespace-nowrap animate-ticker">
        {TICKER_ITEMS.map((item, i) => (
          <span
            key={i}
            className="text-xs font-normal tracking-[0.16em] uppercase text-white/40 px-6 lg:px-10 border-r border-white/10 shrink-0"
          >
            {item}
          </span>
        ))}
        {TICKER_ITEMS.map((item, i) => (
          <span
            key={`dup-${i}`}
            aria-hidden="true"
            className="text-xs font-normal tracking-[0.16em] uppercase text-white/40 px-6 lg:px-10 border-r border-white/10 shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
