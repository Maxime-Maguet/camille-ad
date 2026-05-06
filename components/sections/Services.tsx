import Image from "next/image";

export default function Services() {
  const services: {
    img: string;
    alt: string;
    num: string;
    title: string;
    desc: string;
    list: string[];
  }[] = [
    {
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format&fit=crop",
      alt: "Consultante travaillant sur des dossiers de ressources humaines",
      num: "01",
      title: "Ressources Humaines",
      desc: "Gestion complète du personnel avec maîtrise totale de la convention collective propreté et des outils métier.",
      list: [
        "DPAE, contrats, avenants",
        "Paie sur Silae",
        "Congés, absences, visites médicales",
        "CCN Propreté & services associés",
        "Disciplinaire, ruptures conventionnelles",
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop",
      alt: "Graphiques financiers et gestion comptable sur un écran",
      num: "02",
      title: "Comptabilité & Gestion",
      desc: "Du quotidien comptable à la facturation marchés publics. Relances, paiements fournisseurs, Chorus Pro.",
      list: [
        "Saisie & rapprochement bancaire",
        "Facturation & relances clients",
        "Paiements fournisseurs",
        "Dépôt Chorus Pro",
        "Appels d'offres, devis",
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80&auto=format&fit=crop",
      alt: "Collaboration d'équipe optimisée par des outils numériques",
      num: "03",
      title: "Administration & IA",
      desc: "Gestion opérationnelle et déploiement concret de l'intelligence artificielle dans vos process internes.",
      list: [
        "Planning, dispatch, chantiers",
        "Suivi clients & reporting",
        "Audit process & gains IA",
        "Déploiement outils IA adaptés",
        "Formation des équipes",
      ],
    },
  ];

  return (
    <section className="bg-white">
      {/* Container du header  */}
      <div className="grid grid-cols-2 gap-15 items-end mb-16 pb-12 border-b border-linen">
        {/* Colonne de gauche */}
        <div className="">
          <div className="inline-flex items-center text-[0.65rem] font-medium tracking-[0.22em] uppercase text-stone mb-7">
            <span className="block w-5 h-px bg-linen mr-2.5"></span>
            Prestations
          </div>

          <h2 className="font-display text-[clamp(2.4rem,4.5vw,4rem)] leading-[1.05] tracking-tight font-bold text-ink">
            Trois pôles. <br />
            <span className="italic block font-normal text-stone">
              Une seule interlocutrice.
            </span>
          </h2>
        </div>

        {/* Colonne de droite */}
        <p className="text-[0.95rem]/[1.85] font-light text-stone ">
          Sur mesure — ponctuel, mensuel ou long terme. Pas de forfait rigide,
          juste ce dont vous avez besoin.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-px bg-linen">
        {services.map((item, index) => {
          return (
            <div
              key={index}
              className="group bg-white py-12 px-9 flex flex-col relative overflow-hidden transition-all duration-300 ease-in-out hover:bg-parch"
            >
              <div className=" relative w-full h-40 mb-8 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover sepia-20 contrast-[1.05] saturate-[0.9] transition-all duration-400 ease-in-out group-hover:sepia-5 group-hover:contrast-[1.08] "
                />
              </div>
              <div className="font-display text-[4.5rem]/[1] font-black text-linen tracking mb-4 ">
                {item.num}
              </div>
              <div className="font-display text-[1.4rem] font-bold text-ink mb-3 tracking-[-0.01em] ">
                {item.title}
              </div>
              <div className="text-[0.85rem]/[1.8] font-light text-stone mb-6 flex-1">
                {item.desc}
              </div>
              <div>
                <ul className="svc-list flex flex-col gap-1.75 mt-auto list-none">
                  {item.list.map((l, i) => {
                    return (
                      <li
                        key={i}
                        className="relative text-[0.8rem] text-bark py-1.5 pr-0 pl-3.5 border-b border-linen/50 last:border-none leading-normal before:content-['–'] before:absolute before:left-0 before:text-linen"
                      >
                        {l}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
