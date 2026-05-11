export default function Footer() {
  const items: { label: string; href: string }[] = [
    { label: "À propos", href: "#about" },
    { label: "Prestations", href: "#prestations" },
    { label: "IA & Entreprises", href: "#ia" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <footer className="bg-ink py-9 px-13 flex justify-between items-center ">
      <a
        href="#hero"
        className="font-display text-[1.1rem] font-bold text-[rgba(253,252,249,.7)]"
      >
        Camille.
      </a>
      <nav aria-label="Navigation pied de page">
        <ul className="flex gap-7">
          {items.map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                className=" text-[0.65rem] font-light tracking-[0.12em] uppercase text-white/60 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="text-[0.65rem] text-white/40 tracking-[0.06em] ">
        © 2026 · Toulouse · Freelance
      </div>
    </footer>
  );
}
