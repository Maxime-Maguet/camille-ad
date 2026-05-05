"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [isPinned, setIsPinned] = useState(false);

  const handleScroll = () => {
    console.log(scrollY);
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
      className={cn(
        "fixed z-300 flex items-center justify-between px-13 h-16.5",
        isPinned && "pinned",
      )}
    >
      <a
        href="#"
        className="font-display text-xl font-bold text-ink no-underline"
      >
        Camille
        <span className="block font-sans text-[0.6rem] font-normal tracking-[0.22em] uppercase text-stone">
          Assistante de Direction
        </span>
      </a>
      <ul className="">
        <li>
          <a href="#about">À propos</a>
        </li>
        <li>
          <Link href="#prestations">Prestations</Link>
        </li>
        <li>
          <a href="#ia">IA & Entreprises</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <a href="#contact" className="">
        Me contacter
      </a>
    </nav>
  );
}
