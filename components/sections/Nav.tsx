"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import Link from "next/link";
import ScrollToTopLink from "../ui/ScrollToTopLink";

export default function Nav() {
  const [isPinned, setIsPinned] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "À propos", href: "/#about" },
    { label: "Prestations", href: "/#prestations" },
    { label: "IA & Entreprises", href: "/#ia" },
    { label: "Contact", href: "/#contact" },
  ];

  const handleScroll = () => {
    setIsPinned(scrollY > 50);
  };

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Navigation principale"
      className={cn(
        "fixed z-300 flex items-center justify-between section-px h-16.5 transition-[background,border-color] duration-400 w-full border-b border-transparent",
        isPinned && "bg-parch/97 backdrop-blur-md border-linen",
      )}
    >
      <ScrollToTopLink
        href="/"
        className="font-display text-xl font-bold text-ink tracking-[-0.01em]"
      >
        Camille
        <span className="block font-sans text-[0.6rem] font-normal tracking-[0.22em] uppercase text-stone -mt-0.5">
          Assistante de Direction
        </span>
      </ScrollToTopLink>

      <button
        onClick={handleClick}
        className="flex lg:hidden flex-col gap-1.5 justify-center items-center w-8 h-8"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        <span
          className={cn(
            "w-5 h-px bg-ink transition-all duration-300",
            isOpen && "rotate-45 translate-y-1.75",
          )}
        />
        <span
          className={cn(
            "w-5 h-px bg-ink transition-all duration-300",
            isOpen && "opacity-0",
          )}
        />
        <span
          className={cn(
            "w-5 h-px bg-ink transition-all duration-300",
            isOpen && "-rotate-45 -translate-y-1.75",
          )}
        />
      </button>
      <ul className="hidden lg:flex gap-9 list-none items-center">
        {navItems.map((item, i) => (
          <li key={i}>
            <Link
              className="text-[0.73rem] font-normal tracking-[0.13em] uppercase text-stone hover:text-ink transition-all duration-200"
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/#contact"
        className="hidden lg:block text-[0.72rem] font-medium tracking-widest uppercase text-white bg-ink py-2.5 px-6 border-[1.5px] border-ink hover:bg-transparent hover:text-ink transition-colors duration-250"
      >
        Me contacter
      </Link>
      {isOpen && (
        <div className="absolute top-16.5 right-13 bg-parch border border-linen shadow-sm lg:hidden min-w-48">
          <ul className="flex flex-col">
            {navItems.map((item, i) => (
              <li key={i} className="border-b border-linen last:border-none">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-3 text-[0.73rem] font-normal tracking-[0.13em] uppercase text-stone hover:text-ink hover:bg-sand transition-all duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="p-4">
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="block text-center text-[0.72rem] font-medium tracking-widest uppercase text-white bg-ink py-2.5 px-4 border-[1.5px] border-ink hover:bg-transparent hover:text-ink transition-colors duration-250"
              >
                Me contacter
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
