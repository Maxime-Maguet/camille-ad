import SectionHeader from "../ui/SectionHeader";
import Image from "next/image";
import Reveal from "../ui/Reveal";

export default function About() {
  const stats: { value: string; label: string }[] = [
    { value: "100–120", label: "salariés gérés" },
    { value: "100–120", label: "paies par mois" },
    { value: "20", label: "clients et chantiers" },
  ];

  const pilliers: { num: string; value: string; label: string }[] = [
    {
      num: "01",
      value: "Opérationnelle dès le premier jour",
      label:
        "Silae, Chorus Pro, conventions collectives : pas de temps de formation.",
    },
    {
      num: "02",
      value: "Réactivité freelance",
      label:
        "Pas de circuit de validation. On démarre quand vous en avez besoin.",
    },
    {
      num: "03",
      value: "Organisation & rigueur",
      label: "Process clairs, tableaux de suivi, comptes rendus réguliers.",
    },
  ];

  const camilleProfil: {
    img: string;
    alt: string;
    name: string;
    role: string;
  } = {
    img: "/images/camille-profil.jpeg",
    alt: "Camille, assistante administrative freelance",
    name: "Camille",
    role: "Assistante administrative freelance · Haute-Garonne & Tarn",
  };

  return (
    <section
      id="about"
      className="grid bg-white lg:grid-cols-[1fr_2px_1fr] overflow-hidden"
    >
      <Reveal
        direction={"left"}
        className={
          "flex flex-col justify-center px-5 mt-10 pt-0 pb-25 lg:mt-0 lg:pl-13 lg:pr-16 lg:pt-25"
        }
      >
        <div className="mb-6 lg:hidden">
          <div className="flex items-center justify-between">
            <p className="inline-flex items-center text-[0.65rem] font-medium tracking-[0.22em] uppercase text-stone">
              <span className="mr-2.5 block h-px w-5 bg-linen" />
              À propos
            </p>
            <div className="relative mr-4 h-32 w-32 shrink-0 overflow-hidden rounded-full border border-linen md:mr-2 md:h-40 md:w-40">
              <Image
                src={camilleProfil.img}
                alt={camilleProfil.alt}
                fill
                loading="lazy"
                sizes="(min-width: 768px) 160px, 128px"
                className="object-cover object-top sepia-15 contrast-[1.05]"
              />
            </div>
          </div>
          <p className="mt-2 font-display text-[1.85rem] leading-none font-bold italic text-ink">
            {camilleProfil.name}
          </p>
          <p className="mt-2 text-[0.72rem] leading-snug font-light text-bark">
            {camilleProfil.role}
          </p>
        </div>

        <SectionHeader
          className="hidden lg:block"
          label={`À propos`}
          title={`Une expertise`}
          subtitle={`terrain.`}
        />

        <h2 className="mb-6 font-display text-[clamp(2.4rem,4.5vw,4rem)]/[1.05] font-bold text-ink lg:hidden">
          Une expertise <br />
          <span className="font-normal italic text-stone">terrain.</span>
        </h2>

        <p className="mt-2 max-w-[560px] text-[15px] font-light leading-[1.85] text-bark">
          2 ans au cœur d&apos;une entreprise de propreté et de voirie : paie,
          contrats, facturation, plannings, appels d&apos;offres, équipes
          terrain. J&apos;ai appris à gérer l&apos;administratif d&apos;une PME
          sous pression. Aujourd&apos;hui, je mets cette expérience au service
          de votre entreprise, quel que soit votre secteur.
        </p>

        <p className="mt-12 text-[0.65rem] font-medium tracking-[0.16em] uppercase text-stone">
          Dans mon précédent poste
        </p>
        <div className="grid grid-cols-3 gap-px bg-linen mt-4">
          {stats.map((item, i) => {
            return (
              <div key={i} className="bg-white text-center px-1 py-5 sm:px-2 lg:p-6">
                <div className="font-display text-[clamp(1.25rem,2.1vw,2.15rem)]/[1] font-black text-ink tracking-tight whitespace-nowrap">
                  {item.value}
                </div>
                <div className="text-[0.62rem] font-normal uppercase text-stone tracking-[0.16em] mt-1">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="border border-linen bg-parch mt-8">
          {pilliers.map((item, i) => {
            return (
              <div
                key={i}
                className="border-b border-linen last:border-b-0 p-5 hover:bg-sand"
              >
                <div className="font-display text-[0.75rem] text-[#C9BEA8] tracking-widest mb-1.5">
                  {item.num}
                </div>
                <p className="text-[13px] font-light leading-[1.5] text-stone">
                  <span className="text-[0.9rem] font-bold text-ink">
                    {item.value}
                  </span>
                  {" — "}
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </Reveal>
      <div className="bg-linen hidden lg:block" />
      <Reveal
        direction={"right"}
        className={
          "relative hidden overflow-hidden lg:block lg:min-h-[80vh]"
        }
      >
        <Image
          src={camilleProfil.img}
          alt={camilleProfil.alt}
          fill
          loading="lazy"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top sepia-15 contrast-[1.05]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(26,20,16,.75) 0%, rgba(26,20,16,.1) 55%, transparent 100%)",
          }}
        ></div>
        <div className="absolute bottom-12 left-12 right-12">
          <div className="font-display text-[2.2rem]/[1] font-bold italic text-white mb-2">
            {camilleProfil.name}
          </div>
          <div className="text-[0.68rem] font-normal tracking-[.2em] uppercase text-[rgba(253,252,249,.5)]">
            {camilleProfil.role}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
