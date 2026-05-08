import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import * as motion from "motion/react-client";

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

  const wrapperVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.13,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section id="prestations" className="bg-white px-13 pt-25 pb-25">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-2 gap-15 items-end mb-16 pb-12 border-b border-linen"
      >
        <SectionHeader
          label={`Prestations`}
          title={`Trois pôles.`}
          subtitle={`Une seule interlocutrice.`}
        />
        <p className="text-[0.95rem]/[1.85] font-light text-stone">
          Sur mesure — ponctuel, mensuel ou long terme. Pas de forfait rigide,
          juste ce dont vous avez besoin.
        </p>
      </motion.div>

      <motion.div
        variants={wrapperVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-3 gap-px bg-linen "
      >
        {services.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group bg-white py-12 px-9 flex flex-col relative overflow-hidden transition-colors duration-300 ease-in-out hover:bg-parch after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:h-0.5 after:bg-ink after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100"
          >
            <div className="relative w-full h-40 mb-7 overflow-hidden">
              <Image
                src={item.img}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="eager"
                className="object-cover sepia-20 contrast-[1.05] saturate-[0.9] transition-[filter] duration-400 ease-in-out group-hover:sepia-5 group-hover:contrast-[1.08]"
              />
            </div>
            <div className="font-display text-[4.5rem]/[1] font-black text-linen tracking mb-4">
              {item.num}
            </div>
            <div className="font-display text-[1.4rem] font-bold text-ink mb-3 tracking-[-0.01em]">
              {item.title}
            </div>
            <div className="text-[0.85rem]/[1.8] font-light text-stone mb-6 flex-1">
              {item.desc}
            </div>
            <div>
              <ul className="flex flex-col mt-auto list-none gap-1.75">
                {item.list.map((l, i) => (
                  <li
                    key={i}
                    className="relative text-[0.8rem] text-bark py-1.5 pl-3.5 border-b border-linen/50 last:border-none leading-normal before:content-['–'] before:absolute before:left-0 before:text-linen"
                  >
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
