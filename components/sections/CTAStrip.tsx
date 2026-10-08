import Reveal from "../ui/Reveal";

export default function CTAStrip() {
  return (
    <Reveal direction={"up"}>
      <div
        id="cta-strip"
        className="bg-sand py-20 section-px flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-15 border-b border-linen"
      >
        <div className="font-display text-[clamp(1.6rem,3vw,2.8rem)]/[1.1] font-bold tracking-[-0.02em] text-ink">
          Prêt à déléguer <br /> votre administratif ?
          <span className=" block italic font-normal text-stone">
            Parlons-en 30 minutes, c&apos;est offert.
          </span>
        </div>
        <a
          href="#contact"
          className="text-[0.72rem] font-medium tracking-widest uppercase text-white bg-ink py-3.25 px-7 border-[1.5px] border-ink hover:bg-transparent hover:text-ink transition-all duration-300 ease-in-out"
        >
          Réserver un appel gratuit
        </a>
      </div>
    </Reveal>
  );
}
