import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";

import Reveal from "../ui/Reveal";
import * as m from "motion/react-m";

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
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80&auto=format&fit=crop",
      alt: "Organisation administrative et suivi du quotidien en entreprise",
      num: "01",
      title: "Gestion administrative & secrétariat",
      desc: "Pour les dirigeants débordés par les mails, les devis et le suivi du quotidien.",
      list: [
        "Gestion des emails, de l'agenda et des prises de rendez-vous",
        "Rédaction de courriers, comptes rendus, procédures",
        "Classement et archivage, papier et numérique",
        "Devis, bons de commande, suivi fournisseurs et matériel",
        "Planning des équipes, dispatch, suivi des chantiers",
        "Suivi clients et tableaux de bord",
        "Montage administratif des appels d'offres",
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format&fit=crop",
      alt: "Dossiers de ressources humaines et contrats de travail",
      num: "02",
      title: "Ressources humaines & paie",
      desc: "Pour les entreprises sans service RH, où le dirigeant fait la paie le soir.",
      list: [
        "DPAE, contrats de travail, avenants",
        "Éléments variables et saisie de la paie sur Silae",
        "Congés, absences, arrêts maladie, visites médicales",
        "Registre unique du personnel et dossiers salariés",
        "Affiliations mutuelle et prévoyance",
        "Documents d'entrée et de sortie des salariés",
        "Application de votre convention collective",
        "Suivi administratif des procédures (disciplinaire, rupture conventionnelle)",
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop",
      alt: "Facturation et suivi comptable sur un écran",
      num: "03",
      title: "Pré-comptabilité & facturation",
      desc: "Pour les entreprises qui veulent être payées à temps et transmettre un dossier propre à leur expert-comptable.",
      list: [
        "Saisie des factures clients et fournisseurs",
        "Rapprochement bancaire",
        "Préparation des paiements fournisseurs",
        "Facturation clients et relances des impayés",
        "Dépôt des factures sur Chorus Pro",
        "Classement des pièces et transmission à l'expert-comptable",
        "Tableau de suivi de trésorerie",
        "Je prépare un dossier propre à l'expert-comptable, je ne le remplace pas",
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
    <section id="prestations" className="bg-white section-px pt-25 pb-25">
      <Reveal
        direction="up"
        className={
          "flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-15 items-end mb-16 pb-12 border-b border-linen"
        }
      >
        <SectionHeader
          label={`Services`}
          title={`Trois pôles.`}
          subtitle={`Une seule interlocutrice.`}
        />
        <p className="text-[0.95rem]/[1.85] font-light text-stone">
          Ponctuel ou mensuel, à distance ou sur site. Vous me confiez ce qui
          vous prend du temps.
        </p>
      </Reveal>

      <m.div
        variants={wrapperVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-linen"
      >
        {services.map((item, index) => (
          <m.div
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
                loading="lazy"
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
          </m.div>
        ))}
      </m.div>
    </section>
  );
}
