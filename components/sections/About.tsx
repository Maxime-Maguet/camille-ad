export default function About() {
  const stats: { value: string; label: string }[] = [
    { value: "2+", label: "Ans exp." },
    { value: "3", label: "pôles" },
    { value: "48h", label: "réponse" },
  ];

  const pilliers: { num: string; value: string; label: string }[] = [
    {
      num: "01",
      value: "Spécialiste propreté & services",
      label: "CCN, Silae, Chorus Pro — opérationnelle dès J+1.",
    },
    {
      num: "02",
      value: "Réactivité freelance",
      label: "Pas de circuit de validation. On démarre quand vous avez besoin.",
    },
    {
      num: "03",
      value: "Maîtrise IA",
      label: "Formation et déploiement des outils adaptés à votre structure.",
    },
  ];

  return (
    <section className="grid grid-cols-[1fr_2px_1fr]">
      <div className="flex flex-col justify-center pl-13 pr-16 pt-25 pb-25">
        <div className="inline-flex items-center g-[10px] text-[0.65rem]  font-medium tracking-[0.22em] uppercase text-stone mb-7 ">
          <span className="block w-5 h-px bg-linen mr-2.5"></span>À propos
        </div>
        <h2 className=" font-display text-[clamp(2.4rem,4.5vw,4rem)]/[1.05]  tracking-tigth font-bold text-ink mb-6">
          Une expertise <br />
          <span className="italic font-normal text-stone">terrain.</span>
        </h2>

        <div className=" text-[0.95rem]/[1.85] font-light text-stone">
          <p className="mt-2">
            Avec{" "}
            <strong className="font-medium text-bark">
              2 ans d&apos;expérience dans la propreté industrielle
            </strong>
            , je connais votre réalité de l&apos;intérieur : la convention
            collective, les plannings contraints, les exigences du donneur
            d&apos;ordre et la pression du quotidien.
          </p>
          <p className="mt-4">
            Je propose un{" "}
            <strong className="font-medium text-bark">
              accompagnement direct, sans intermédiaire
            </strong>{" "}
            — centré sur ce dont vous avez vraiment besoin. Et j&apos;aide les
            entreprises qui le souhaitent à{" "}
            <strong className="font-medium text-bark">
              intégrer l&apos;IA
            </strong>{" "}
            dans leurs process.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-px bg-linen mt-12">
          {stats.map((item, i) => {
            return (
              <div key={i} className="bg-parch text-center p-6  ">
                <div className=" font-display text-[2.8rem]/[1] font-black text-ink tracking-tight">
                  {item.value}
                </div>
                <div className=" text-[0.62rem] font-normal uppercase text-stone tracking-[0.16em] mt-1">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="border border-linen mt-8">
          {pilliers.map((item, i) => {
            return (
              <div
                key={i}
                className="border-b border-linen last:border-b-0 p-5"
              >
                <div className="font-display text-[0.75rem] text-linen tracking-widest mb-1.5">
                  {item.num}
                </div>
                <div className="text-[0.9rem] font-medium text-ink mb-1 ">
                  {item.value}
                </div>
                <div className="text-[0.78rem] font-light text-stone tracking-[1.5]  ">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-linen" />
      <div className="relative overflow-hidden min-h-[80vh]">
        {/* photo Phase 5 */}
      </div>
    </section>
  );
}
