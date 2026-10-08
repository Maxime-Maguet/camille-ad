"use client";

import * as m from "motion/react-m";
import { isCalendlyReady } from "@/lib/content/calendly";

const calendlyOutlineCta =
  "inline-block cursor-pointer text-[0.73rem] font-normal tracking-widest uppercase text-bark py-3.25 px-7 border-[1.5px] border-linen hover-hover:hover:border-bark hover-hover:hover:text-ink transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]";

type SuccessMessageProps = {
  calendlyHref: string;
};

export default function SuccessMessage({ calendlyHref }: SuccessMessageProps) {
  const ready = isCalendlyReady(calendlyHref);

  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center gap-6 lg:pl-20 py-12"
      role="status"
    >
      <m.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-center"
      >
        <p className="font-display text-[1.4rem] font-normal text-ink mb-6">
          Merci, votre message est bien parti. Je vous réponds sous 48h ouvrées.
        </p>
        {ready ? (
          <a
            href={calendlyHref}
            target="_blank"
            rel="noopener noreferrer"
            className={calendlyOutlineCta}
          >
            Réserver un appel
          </a>
        ) : (
          <button
            type="button"
            aria-disabled="true"
            tabIndex={-1}
            className={calendlyOutlineCta}
          >
            Réserver un appel
          </button>
        )}
      </m.div>
    </m.div>
  );
}
