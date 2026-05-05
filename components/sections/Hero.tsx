import Ticker from "./Ticker";

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-rows-[1fr, auto] pt-16.5 relative overflow-hidden">
      <div className="absolute top-22.5 right-13 text-right text-[0.62rem]/[1.8] tracking-[0.2em] uppercase text-stone ">
        Toulouse · 2026 <br />
        Freelance · Vol. I
      </div>

      <div className=" relative flex flex-col justify-center px-15 py-13">
        <div className="inline-flex items-center g-[10px] text-[0.65rem]  font-medium tracking-[0.22em] uppercase text-stone mb-7 ">
          <span className="block w-7 h-px bg-linen mr-2.5"></span>
          Assistante de Direction Freelance · Toulouse
        </div>
        <h1 className="font-display text-[clamp(4rem,9vw,9.5rem)]/[0.9]  tracking-[-0.03em] font-black text-ink">
          <span className="block">L&apos;expertise</span>
          <span className="block italic text-stone font-normal">qui vous</span>
          <span className="block">libère.</span>
        </h1>
        <div className="w-full h-px bg-linen my-10"></div>
      </div>

      <div
        className="grid grid-cols-[1fr_auto_1fr]
 gap-10 items-end pt-0 px-13 pb-15"
      >
        <p className="text-[0.95rem]/[1.8] font-light text-stone max-w-95">
          RH, comptabilité, exploitation — et accompagnement IA. Je prends en
          charge votre back-office avec la connaissance du secteur propreté et
          services.
        </p>
        <div className="font-display text-[6rem] font-bold text-linen tracking-[-0.04em] text-center">
          03
        </div>
        <div className="flex flex-col gap-2.5 items-end">
          <a
            href="#prestations"
            className="text-[0.72rem] font-medium tracking-widest uppercase text-white bg-ink py-3.25 px-7 border-[1.5px] border-ink hover:bg-transparent hover:text-ink transition-all duration-250 ease-in-out"
          >
            Voir les prestations
          </a>
          <a
            href="#contact"
            className="inline-block text-[0.73rem] font-normal tracking-widest uppercase text-bark py-3.25 px-7 border-[1.5px] border-linen 
            hover:border-bark hover:text-ink transition-all duration-250 ease-in-out"
          >
            Prendre contact
          </a>
        </div>
      </div>
      <Ticker />
    </section>
  );
}
