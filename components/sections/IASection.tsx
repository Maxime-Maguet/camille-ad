import SectionHeader from "../ui/SectionHeader";
import Image from "next/image";

import Reveal from "../ui/Reveal";

export default function IASection() {
  const STEPS: { index: number; value: string; label: string }[] = [
    {
      index: 1,
      value: "Audit de vos process",
      label:
        "On identifie les tâches chronophages, répétitives ou sources d'erreurs.",
    },
    {
      index: 2,
      value: "Sélection des bons outils",
      label:
        "Pas de gadgets — uniquement ce qui est adapté à votre taille et votre budget.",
    },
    {
      index: 3,
      value: `Déploiement & formation`,
      label: "Je forme vos équipes pour une adoption durable et efficace.",
    },
  ];

  const METRICS: { label: string; metric: string; unit: string }[] = [
    { label: `Temps admin. économisé`, metric: "–40", unit: "% en moy." },
    { label: "Réduction erreurs de saisie", metric: "–70", unit: "%" },
    { label: "Traitement relances clients", metric: "×3", unit: "plus rapide" },
    { label: "Délai de mise en place", metric: "2–4", unit: "sem." },
  ];

  return (
    <section
      id="ia"
      className="bg-ink grid grid-cols-[1fr_1px_1fr] min-h-[70vh]"
    >
      {/* COLONNE GAUCHE*/}
      <Reveal direction={"up"}>
        <div className="py-25 pr-20 pl-13">
          <SectionHeader
            label={`Accompagnement IA`}
            title={
              <>
                Modernisez
                <br />
                vos process.
              </>
            }
            subtitle={`Sans vous perdre.`}
            className="[&_h2]:text-white"
          />

          <p className="text-[rgba(253,252,249,.4)] mt-2">
            L&apos;IA n&apos;est pas réservée aux grandes structures.
            J&apos;identifie où elle crée de la valeur chez vous — et je la
            déploie{" "}
            <strong className="text-[rgba(253,252,249,.7)] ">
              concrètement
            </strong>
            .
          </p>

          {/*STEPS*/}
          <div className="flex flex-col mt-8">
            {STEPS.map((step, i) => {
              return (
                <div
                  key={i}
                  className="hover:pl-2 transition-all duration-300 border-b border-[rgba(255,255,255,.05)] flex gap-5 py-6"
                >
                  <div className="font-display text-[1.6rem]/[1.6] font-black text-[rgba(255,255,255,.07)] min-w-8 ">
                    {step.index}
                  </div>
                  <div>
                    <div className="text-[0.92rem] font-medium text-white mb-1.25 ">
                      {step.value}
                    </div>
                    <div className="text-[0.82rem]/[1.6] font-light text-[rgba(253,252,249,.35)] ">
                      {step.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
      {/*SEPARATEUR */}

      <div className="bg-[rgba(255,255,255,.05)]"></div>

      {/*COLONNE DROITE*/}

      <Reveal direction={"right"}>
        <div className="py-25 pr-13 pl-20 flex flex-col justify-center">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop"
            alt="Tableau de bord analytique illustrant l'automatisation des process"
            loading="lazy"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "220px" }}
            className="object-cover sepia-30 contrast-[1.05] saturate-[0.7]"
          />
          <div className="flex flex-col gap-px">
            {METRICS.map((m, i) => {
              return (
                <div
                  key={i}
                  className="bg-[rgba(255,255,255,.03)] py-5.5 px-7 flex justify-between items-center border-l-2 border-transparent hover:bg-[rgba(255,255,255,.06)] hover:border-l-stone transition-all duration-300"
                >
                  <div className="text-[0.78rem] font-light text-[rgba(253,252,249,.35)] ">
                    {m.label}
                  </div>

                  <div className="font-display text-[1.8rem] font-bold text-white tracking-[-0.03em] ">
                    {m.metric}

                    <span className="text-[0.72rem] font-light text-[rgba(253,252,249,.3)] ml-0.75">
                      {m.unit}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
