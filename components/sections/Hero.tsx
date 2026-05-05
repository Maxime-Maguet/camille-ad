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

      <div className="grid grid-cols-[1fr, auto, 1fr] gap-10 items-end pt-0 px-13 pb-15">
        <p className="">
          RH, comptabilité, exploitation — et accompagnement IA. Je prends en
          charge votre back-office avec la connaissance du secteur propreté et
          services.
        </p>
        <div className="">03</div>
        <div className="">
          <a href="#prestations" className="">
            Voir les prestations
          </a>
          <a href="#contact" className="">
            Prendre contact
          </a>
        </div>
      </div>
    </section>
  );
}
