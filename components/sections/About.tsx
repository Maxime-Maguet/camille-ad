import SectionHeader from "../ui/SectionHeader";
import * as motion from "motion/react-client";
import Image from "next/image";
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

  const camilleProfil: {
    img: string;
    alt: string;
    name: string;
    role: string;
  } = {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=85&auto=format&fit=crop&sat=-20",
    alt: "portrait Camille",
    name: "Camille",
    role: "Assistante de Direction · Freelance · Toulouse",
  };

  return (
    <section
      id="about"
      className="grid grid-cols-[1fr_2px_1fr] overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col justify-center pl-13 pr-16 pt-25 pb-25"
      >
        <SectionHeader
          label={`À propos`}
          title={`Une expertise`}
          subtitle={`terrain.`}
        />

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

        <div className="border border-linen mt-8 ">
          {pilliers.map((item, i) => {
            return (
              <div
                key={i}
                className="border-b border-linen last:border-b-0 p-5 hover:bg-sand"
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
      </motion.div>

      <div className="bg-linen" />
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative overflow-hidden min-h-[80vh]"
      >
        <Image
          src={camilleProfil.img}
          alt={camilleProfil.alt}
          fill
          loading="eager"
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
          <div className="text-[0.68rem] font-normal tracking-[.2em] uppercase text-[rgba(253,252,249,.5)] ">
            {camilleProfil.role}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
