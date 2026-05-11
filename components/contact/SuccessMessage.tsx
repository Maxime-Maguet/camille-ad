"use client";

import * as m from "motion/react-m";

export default function SuccessMessage() {
  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center gap-6 pl-20 py-12"
    >
      {/* Cercle + Check SVG */}
      <svg
        aria-label="Message envoyé avec succès"
        role="img"
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cercle — r réduit à 30 pour ne pas déborder */}
        <m.circle
          cx="40"
          cy="40"
          r="30"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        {/* Check — recentré */}
        <m.path
          d="M27 40L36 50L53 30"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
        />
      </svg>

      {/* Texte */}
      <m.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 1.1 }}
        className="text-center"
      >
        <p className="font-display text-[1.4rem] font-normal text-ink mb-2">
          Message envoyé.
        </p>
        <p className="text-[0.88rem] font-light text-stone leading-relaxed">
          Camille reviendra vers vous sous 24 à 48h ouvrées.
        </p>
      </m.div>
    </m.div>
  );
}
