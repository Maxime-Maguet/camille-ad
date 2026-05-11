"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function Nav() {
  const [isPinned, setIsPinned] = useState(false);

  const handleScroll = () => {
    setIsPinned(scrollY > 50);
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
        "fixed z-300 flex items-center justify-between px-13 h-16.5 transition-[background,border-color] duration-400 w-full border-b border-transparent",
        isPinned && "bg-parch/97 backdrop-blur-md border-linen",
      )}
    >
      <a
        href="#"
        className="font-display text-xl font-bold text-ink tracking-[-0.01em]"
      >
        Camille
        <span className="block font-sans text-[0.6rem] font-normal tracking-[0.22em] uppercase text-stone -mt-0.5">
          Assistante de Direction
        </span>
      </a>
      <ul className="flex gap-9 list-none items-center">
        <li>
          <a
            className=" text-[0.73rem] font-normal tracking-[0.13em] uppercase text-stone hover:text-ink transition-all duration-200"
            href="#about"
          >
            À propos
          </a>
        </li>
        <li>
          <a
            className=" text-[0.73rem] font-normal tracking-[0.13em] uppercase text-stone hover:text-ink transition-all duration-200"
            href="#prestations"
          >
            Prestations
          </a>
        </li>
        <li>
          <a
            className=" text-[0.73rem] font-normal tracking-[0.13em] uppercase text-stone hover:text-ink transition-all duration-200"
            href="#ia"
          >
            IA & Entreprises
          </a>
        </li>
        <li>
          <a
            className=" text-[0.73rem] font-normal tracking-[0.13em] uppercase text-stone hover:text-ink transition-all duration-200"
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>
      <a
        href="#contact"
        className="text-[0.72rem] font-medium tracking-widest uppercase text-white bg-ink py-2.5 px-6 border-[1.5px] border-ink hover:bg-transparent hover:text-ink transition-colors duration-250"
      >
        Me contacter
      </a>
    </nav>
  );
}
