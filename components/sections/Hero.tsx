import Ticker from "./Ticker";
import * as m from "motion/react-m";

export default function Hero() {
  return (
    <section
      id="hero"
      className="lg:min-h-screen grid grid-rows-[auto_auto_auto] lg:grid-rows-[1fr_auto_auto] pt-16.5 relative overflow-hidden"
    >
      <div className="hidden lg:block absolute top-22.5 right-13 text-right text-[0.62rem] leading-[1.8] tracking-[0.2em] uppercase text-linen">
        Toulouse · 2026 <br />
        Freelance · Vol. I
      </div>

      <div className="relative flex flex-col justify-center px-5 lg:px-13 lg:pt-16.5">
        <m.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="inline-flex items-center gap-2.5 text-[0.65rem] font-medium tracking-[0.22em] uppercase text-stone mb-7"
        >
          <span className="w-7 h-px bg-linen" />
          Assistante de Direction Freelance · Toulouse
        </m.div>

        <m.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="font-display text-[clamp(4rem,9vw,9.5rem)] leading-[0.9] tracking-[-0.03em] font-black text-ink"
        >
          <span className="block">L&apos;expertise</span>
          <span className="block italic font-normal text-stone">qui vous</span>
          <span className="block">libère.</span>
        </m.h1>

        <m.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{ transformOrigin: "left" }}
          className="w-full h-px bg-linen my-10"
        />
      </div>

      <m.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="flex flex-col gap-8 px-6 pb-8 lg:pb-15 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-10 lg:items-end lg:px-13"
      >
        <p className="text-[0.95rem] leading-[1.8] font-light text-stone max-w-95">
          RH, comptabilité, exploitation — et accompagnement IA. Je prends en
          charge votre back-office avec la connaissance du secteur propreté et
          services.
        </p>
        <div className="hidden lg:block font-display text-[6rem] font-black text-linen leading-none tracking-[-0.04em] text-center">
          03
        </div>
        <div className="flex flex-col gap-2.5 items-start lg:items-end">
          <a
            href="#prestations"
            className="text-[0.73rem] font-medium tracking-widest uppercase text-white bg-ink py-3.25 px-7 border-[1.5px] border-ink hover:bg-transparent hover:text-ink transition-all duration-250"
          >
            Voir les prestations
          </a>
          <a
            href="#contact"
            className="text-[0.73rem] font-normal tracking-widest uppercase text-bark py-3.25 px-7 border-[1.5px] border-linen hover:border-bark hover:text-ink transition-all duration-250"
          >
            Prendre contact
          </a>
        </div>
      </m.div>

      <Ticker />
    </section>
  );
}
