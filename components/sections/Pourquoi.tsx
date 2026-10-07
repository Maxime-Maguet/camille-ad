import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import * as m from "motion/react-m";

const advantages: { problem: string; answer: string }[] = [
  {
    problem: "Un salarié administratif ? Trop cher pour vos besoins.",
    answer:
      "Vous payez uniquement les heures utiles, sans charges ni engagement.",
  },
  {
    problem: "Votre activité varie : rush un mois, calme le suivant.",
    answer:
      "Vous ajustez mes heures selon vos besoins, sans contrat de travail à modifier ni salarié sous-occupé.",
  },
  {
    problem: "Recruter, former, gérer une absence : vous n'avez pas le temps.",
    answer:
      "Pas de recrutement ni de formation : je suis opérationnelle dès le premier jour, et vous gardez la même interlocutrice.",
  },
  {
    problem: "Votre boîte mail déborde.",
    answer:
      "Je trie, je réponds aux demandes courantes et je vous remonte l'essentiel.",
  },
  {
    problem: "Vous faites la paie le dimanche soir.",
    answer:
      "Je prépare et saisis la paie sur Silae. Vous n'avez plus qu'à valider.",
  },
  {
    problem: "Vos factures partent en retard, vos relances jamais.",
    answer:
      "Facturation et relances suivies chaque semaine. Votre trésorerie respire.",
  },
];

const steps: { num: string; title: string; body: string }[] = [
  {
    num: "01",
    title: "Appel découverte · 30 min, gratuit",
    body: "On fait le point sur vos besoins, vos outils et vos priorités.",
  },
  {
    num: "02",
    title: "Proposition écrite sous 48h",
    body: "Missions, volume d'heures, tarif. Pas de surprise.",
  },
  {
    num: "03",
    title: "Démarrage",
    body: "Contrat avec clause de confidentialité, puis un court questionnaire pour comprendre votre organisation. Vous me créez des accès à mon nom à vos outils. Je prends vos dossiers en main dès le premier jour.",
  },
  {
    num: "04",
    title: "Point mensuel",
    body: "Récapitulatif des tâches et des heures, ajustements si besoin.",
  },
];

const cardWrapperVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.08,
    },
  },
};

const cardVisible = {
  opacity: 1,
  y: 0,
  x: 0,
  transition: { duration: 0.85, ease: [0.4, 0, 0.2, 1] as const },
};

const cardFromLeft = {
  hidden: { opacity: 0, y: 20, x: -18 },
  visible: cardVisible,
};

const cardFromRight = {
  hidden: { opacity: 0, y: 20, x: 18 },
  visible: cardVisible,
};

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

const ctaClass =
  "inline-block w-full lg:w-auto text-[0.73rem] font-medium tracking-widest uppercase text-ink bg-white py-3.25 px-7 border-[1.5px] border-white hover:bg-sand transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] text-center";

export default function Pourquoi() {
  return (
    <section id="pourquoi" className="bg-ink section-px pt-28 pb-28">
      <Reveal direction="up" className="mb-12">
        <SectionHeader
          tone="dark"
          label="Pourquoi moi"
          title="Vous vous"
          subtitle="reconnaissez ?"
        />
      </Reveal>

      <m.div
        variants={cardWrapperVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-2 border-t border-white/12"
      >
        {advantages.map((item, index) => (
          <m.div
            key={item.problem}
            variants={index % 2 === 0 ? cardFromLeft : cardFromRight}
            className={`group border-b border-white/12 hover:bg-sand transition-colors duration-500 ease-in-out py-10 lg:py-12 ${
              index % 2 === 0 ? "lg:border-r lg:pr-12" : "lg:pl-12"
            }`}
          >
            <p className="font-display text-[20px] leading-[1.3] font-medium text-white mb-3 group-hover:text-ink transition-colors duration-500 ease-in-out">
              {item.problem}
            </p>
            <p className="text-[13.5px] leading-[1.7] font-light text-white/72 group-hover:text-ink transition-colors duration-500 ease-in-out">
              {item.answer}
            </p>
          </m.div>
        ))}
      </m.div>

      <Reveal direction="up" className="mt-10">
        <a href="#contact" className={ctaClass}>
          J&apos;en parle avec Camille
        </a>
      </Reveal>

      <div className="mt-28 border-t border-white/12 pt-16 ">
        <Reveal direction="up" className="mb-14">
          <h3 className="font-display text-[clamp(1.75rem,3vw,2.375rem)]/[1.1] font-bold tracking-[-0.02em] text-white">
            Simple,
            <br />
            <span className="italic font-normal text-[#C9BEA8]">
              du premier appel au premier mois.
            </span>
          </h3>
        </Reveal>

        <m.div
          variants={wrapperVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-8 "
        >
          {steps.map((step) => (
            <m.div key={step.num} variants={itemVariants}>
              <div className="group transition-transform duration-500 ease-in-out hover:-translate-y-0.5">
                <div
                  className="relative mb-6 h-0.5 w-full overflow-hidden bg-white/12 after:content-[''] after:absolute after:inset-0 after:bg-[#C9BEA8] after:scale-x-0 after:origin-left after:transition-transform after:duration-500 after:ease-in-out group-hover:after:scale-x-100"
                  aria-hidden
                />
                <p className="font-display text-[44px] leading-none mb-5 text-[#C9BEA8] transition-colors duration-500 ease-in-out group-hover:text-white">
                  {step.num}
                </p>
                <p className="text-[15px] font-bold text-white mb-3 leading-snug tracking-normal transition-[letter-spacing] duration-500 ease-in-out group-hover:tracking-wide">
                  {step.title}
                </p>
                <p className="text-[13.5px] leading-[1.7] font-light text-white/72 transition-colors duration-500 ease-in-out group-hover:text-white/90">
                  {step.body}
                </p>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
