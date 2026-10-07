import Reveal from "../ui/Reveal";

const bullets = [
  "Équipes terrain, multi-sites, horaires décalés",
  "Plannings qui bougent et remplacements de dernière minute",
  "Embauches en volume : DPAE, CDD, avenants",
  "RH, facturation et clients le même jour",
  "Marchés publics et dépôt sur Chorus Pro",
];

const secteursRow1 = [
  "Propreté & nettoyage",
  "Services à la personne",
  "Bâtiment & artisans",
];

const secteursRow2 = [
  "Multi-services & maintenance",
  "Sécurité",
  "Transport & logistique",
];

const outils = [
  "Silae",
  "Chorus Pro",
  "EBP",
  "Suite Office",
  "Google Sheets",
  "Outlook",
  "Gmail",
];

const badgeClass =
  "inline-flex w-fit shrink-0 items-center justify-center whitespace-nowrap border border-[#C9BEA8] bg-white text-center text-[12px] leading-none text-ink";

export default function Preuve() {
  return (
    <>
      <section
        aria-labelledby="preuve-heading"
        className="bg-sand section-px py-18"
      >
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="left">
            <h3
              id="preuve-heading"
              className="mb-6 font-display text-[clamp(1.75rem,3vw,2.375rem)]/[1.1] font-bold tracking-[-0.02em] text-ink"
            >
              Habituée aux entreprises
              <br />
              <span className="font-normal italic text-stone">
                qui tournent à flux tendu.
              </span>
            </h3>
            <p className="text-[0.90625rem]/[1.85] font-light text-bark">
              Équipes sur le terrain, plannings qui changent chaque jour,
              embauches fréquentes, clients exigeants : j&apos;ai travaillé 2
              ans dans ce rythme, au sein d&apos;une entreprise de plus de 100
              salariés. Je sais mener plusieurs sujets de front sans rien
              laisser passer.
            </p>
            <ul className="mt-8 flex list-none flex-col gap-2.5" role="list">
              {bullets.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-[0.84375rem] leading-[1.65] text-bark"
                >
                  <span className="shrink-0 text-stone" aria-hidden="true">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="right" className="flex justify-center">
            <div className="w-fit">
              <p className="mb-5 text-center text-[0.6875rem] font-medium tracking-[0.18em] text-stone uppercase">
                Secteurs accompagnés
              </p>
              <div className="flex flex-col items-center gap-2">
                <div className="flex flex-wrap justify-center gap-2">
                  {secteursRow1.map((secteur) => (
                    <div
                      key={secteur}
                      className={`${badgeClass} px-3.5 py-2.5`}
                    >
                      {secteur}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {secteursRow2.map((secteur) => (
                    <div
                      key={secteur}
                      className={`${badgeClass} px-3.5 py-2.5`}
                    >
                      {secteur}
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-5 font-display text-[1.0625rem] text-bark italic">
                Et toute PME dont les équipes sont sur le terrain.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="border-b border-linen bg-white py-8">
        <Reveal
          direction="up"
          className="mx-auto flex w-fit max-w-full flex-col items-center gap-3 px-5 lg:flex-row lg:items-center lg:gap-0 lg:px-13"
        >
          <h3 className="shrink-0 font-display text-[19px] font-bold leading-none text-ink lg:mr-5">
            Je m&apos;adapte à vos outils
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {outils.map((outil) => (
              <div key={outil} className={`${badgeClass} px-3.5 py-2.5`}>
                {outil}
              </div>
            ))}
          </div>
          <p className="shrink-0 text-[12.5px] font-light text-bark lg:ml-12">
            Un autre logiciel ? Je me forme rapidement.
          </p>
        </Reveal>
      </div>
    </>
  );
}
