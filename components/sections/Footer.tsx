import Link from "next/link";

export default function Footer() {
  const items: { label: string; href: string }[] = [
    { label: "À propos", href: "/#about" },
    { label: "Prestations", href: "/#prestations" },
    { label: "IA & Entreprises", href: "/#ia" },
    { label: "Contact", href: "/#contact" },
  ];

  const legal: { label: string; href: string }[] = [
    { label: "Mentions légales", href: "/mentions-legales" },
    {
      label: "Politique de confidentialité",
      href: "/politique-confidentialite",
    },
  ];

  return (
    <footer className="bg-ink py-9 px-13">
      <div className="flex justify-between items-center mb-6">
        <Link
          href="/"
          className="font-display text-[1.1rem] font-bold text-[rgba(253,252,249,.7)]"
        >
          Camille.
        </Link>
        <nav aria-label="Navigation pied de page">
          <ul className="flex gap-7">
            {items.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="text-[0.65rem] font-light tracking-[0.12em] uppercase text-white/60 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-[0.65rem] text-white/40 tracking-[0.06em]">
          © 2026 · Toulouse · Freelance
        </div>
      </div>
      <div className="border-t border-white/5 pt-5 flex justify-center gap-8">
        {legal.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="text-[0.6rem] font-light tracking-widest uppercase text-white/30 hover:text-white/60 transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
