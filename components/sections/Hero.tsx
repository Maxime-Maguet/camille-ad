import { Check } from "lucide-react";
import Ticker from "./Ticker";
import * as m from "motion/react-m";

const BADGES = [
  "À distance ou sur site",
  "Sans engagement de durée",
  "Réponse sous 48h ouvrées",
];

const ctaPrimary =
  "text-[0.73rem] font-medium tracking-widest uppercase text-white bg-ink py-3.25 px-7 border-[1.5px] border-ink hover:bg-transparent hover:text-ink transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] text-center";

const ctaSecondary =
  "text-[0.73rem] font-normal tracking-widest uppercase text-bark py-3.25 px-7 border-[1.5px] border-linen hover:border-bark hover:text-ink transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]";

export default function Hero() {
  return (
    <section
      id="hero"
      className="lg:min-h-screen grid grid-rows-[auto_auto_auto] lg:grid-rows-[1fr_auto_auto] pt-16.5 relative overflow-hidden"
    >
      <div className="relative flex flex-col justify-center px-5 pt-10 lg:px-13 lg:pt-16.5">
        <m.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="inline-flex items-center gap-2.5 text-[0.65rem] font-medium tracking-[0.22em] uppercase text-stone mb-7"
        >
          <span className="w-7 h-px bg-linen" />
          Assistante administrative freelance à Toulouse · Haute-Garonne & Tarn
        </m.div>

        <m.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="font-display text-[clamp(2.4rem,6.2vw,5.75rem)] leading-[0.95] tracking-[-0.03em] font-black text-ink"
        >
          <span className="block">Je gère votre</span>
          <span className="block">administratif.</span>
          <span className="block italic font-normal text-stone">
            Vous gérez votre entreprise.
          </span>
        </m.h1>
      </div>

      <m.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="flex flex-col gap-8 px-6 pt-10 pb-8 lg:pb-15 lg:grid lg:grid-cols-[minmax(0,1.4fr)_auto] lg:gap-16 lg:items-end lg:px-13"
      >
        <div>
          <p className="text-[0.95rem] leading-[1.8] font-light text-bark max-w-2xl">
            Secrétariat, RH, paie et pré-comptabilité pour les TPE, PME et
            entreprises de services, en Haute-Garonne et dans le Tarn.
          </p>
          <ul className="grid grid-cols-2 gap-x-7 gap-y-3 mt-6 list-none max-w-lg">
            {BADGES.map((badge) => (
              <li
                key={badge}
                className="flex items-center gap-2 text-[0.62rem] font-medium tracking-[0.16em] uppercase text-stone"
              >
                <Check
                  className="size-3.5 shrink-0 text-stone"
                  strokeWidth={1.75}
                  aria-hidden
                />
                {badge}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2.5 items-start lg:items-end">
          <a href="#contact" className={ctaPrimary}>
            Réserver un appel gratuit de 30 min
          </a>
          <a
            href="#prestations"
            className={`${ctaSecondary} self-center lg:self-end`}
          >
            Voir les services
          </a>
        </div>
      </m.div>

      <Ticker />
    </section>
  );
}
