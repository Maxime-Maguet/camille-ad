import Link from "next/link";
import ScrollToTopLink from "../ui/ScrollToTopLink";
export default function Footer() {
  const items: { label: string; href: string }[] = [
    { label: "À propos", href: "/#about" },
    { label: "Prestations", href: "/#prestations" },
    { label: "IA & Entreprises", href: "/#ia" },
    { label: "Contact", href: "/#contact" },
  ];

  const legal: { label: string; href: string }[] = [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Confidentialité", href: "/politique-confidentialite" },
  ];

  return (
    <footer className="bg-ink py-7 section-px flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
      <div className="flex-1">
        <ScrollToTopLink
          href="/"
          className="font-display text-[1.1rem] font-bold text-white/70"
        >
          Camille.
        </ScrollToTopLink>
      </div>

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

      <div className="flex-1 flex items-center justify-start lg:justify-end gap-6">
        {legal.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="text-[0.6rem] font-light tracking-widest uppercase text-white/30 hover:text-white/60 transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
        <span className="text-[0.65rem] text-white/30 tracking-[0.06em]">
          © 2026 · Toulouse
        </span>
      </div>
    </footer>
  );
}
