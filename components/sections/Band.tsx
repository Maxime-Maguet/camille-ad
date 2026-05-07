"use client";

import { useRef, useEffect } from "react";

import Image from "next/image";

export default function Band() {
  const band = useRef<HTMLDivElement>(null);
  const translate = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!band.current || !translate.current) return;
    const bandRec = band.current.getBoundingClientRect();
    const progress = -bandRec.top / window.innerHeight;
    const bg = translate.current;
    bg.style.transform = `translateY(${progress * 100}px)`;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      ref={band}
      className="h-[55vh] relative overflow-hidden flex items-center"
    >
      <div ref={translate} className="absolute -inset-20">
        <Image
          loading="eager"
          src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1800&q=80&auto=format&fit=crop`}
          alt={`image band`}
          fill
          className=" absolute object-cover object-center  bg-cover bg-center sepia-25 contrast-[1.1] saturate-[0.8] "
        />
      </div>
      <div className="absolute inset-0 bg-[rgba(26,20,16,0.72)]"></div>
      <div>
        <div className="relative z-2 py-0 px-13 max-w-195">
          <div className="font-display text-[clamp(1.8rem,3.5vw,3.2rem)]/[1.25]  text-white mb-6">
            <strong>Externalisez l&apos;administratif.</strong>
            <br />
            <span className="italic">
              Gardez le contrôle sur votre développement.
            </span>
          </div>
          <div className="text-[0.68rem] font-normal tracking-[0.18em] italic  uppercase text-[rgba(253,252,249,.35)] ">
            Camille · Freelance · Toulouse
          </div>
        </div>
      </div>
    </div>
  );
}
