import ContactForm from "./ContactForm";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
const ROWS: { label: string; value: string }[] = [
  { label: "Email", value: "camille@domaine.fr" },
  { label: "Zone", value: "Toulouse & périphérie" },
  { label: "Réponse", value: "Sous 24–48h" },
];

export default function Contact() {
  return (
    <section id="contact" className="px-13 pt-25 pb-25 bg-parch">
      <div className="grid grid-cols-[1fr_1px_1.2fr] items-start">
        {/*LEFT CONTENT */}

        <Reveal direction={"left"} className={"pr-20 border-r border-linen"}>
          <SectionHeader
            label="Contact"
            title="Parlons de"
            subtitle="votre projet."
          />
          <p className="text-[0.95rem]/[1.85] font-light text-stone">
            Réponse sous 24h. Premier échange gratuit, sans engagement.
          </p>
          <div className="flex flex-col mt-6">
            {ROWS.map((r, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-4 border-b border-linen last:border-b-0"
              >
                <span className="text-[0.65rem] font-medium tracking-[0.16em] uppercase text-stone">
                  {r.label}
                </span>
                <span className="text-[0.88rem] font-light text-bark">
                  {r.value}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-9 py-7 px-7.5 bg-ink">
            <p className="font-display text-[1rem] font-bold text-white mb-2">
              Premier échange offert
            </p>
            <p className="text-[0.82rem]/[1.7] font-light text-[rgba(253,252,249,.4)]">
              30 minutes pour analyser vos besoins et voir si on est alignés —
              sans engagement.
            </p>
          </div>
        </Reveal>

        {/*SEPARATION */}
        <div className="bg-linen self-stretch"></div>

        {/*CONTACT FORM */}
        <Reveal direction="right">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
