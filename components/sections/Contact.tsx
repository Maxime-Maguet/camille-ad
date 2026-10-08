import { Suspense } from "react";
import ContactForm from "./ContactForm";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import {
  getCalendlyHref,
  isCalendlyReady,
} from "@/lib/content/calendly";

const calendlyOutlineCta =
  "inline-block cursor-pointer text-[0.73rem] font-normal tracking-widest uppercase text-bark py-3.25 px-7 border-[1.5px] border-linen hover-hover:hover:border-bark hover-hover:hover:text-ink transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]";

const ROWS: {
  label: string;
  value: string;
  href?: string;
}[] = [
  {
    label: "Email",
    value: "camille.maguet.assist@outlook.fr",
    href: "mailto:camille.maguet.assist@outlook.fr",
  },
  { label: "Intervention", value: "À distance ou sur site" },
  { label: "Zone", value: "Haute-Garonne & Tarn" },
];

export default function Contact() {
  const appelHref = getCalendlyHref("appelGratuit");
  const appelReady = isCalendlyReady(appelHref);

  return (
    <section id="contact" className="section-px pt-25 pb-25 bg-parch">
      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.2fr] items-start gap-12 lg:gap-0">
        <Reveal
          direction={"left"}
          className={"lg:pr-20 lg:border-r border-linen"}
        >
          <SectionHeader
            label="Contact"
            title="Parlons de"
            subtitle="votre projet."
          />
          <p className="text-[0.95rem]/[1.85] font-light text-stone">
            Premier échange de 30 minutes offert, sans engagement. Réponse sous
            48h ouvrées.
          </p>
          <div className="mt-6">
            {appelReady ? (
              <a
                href={appelHref}
                target="_blank"
                rel="noopener noreferrer"
                className={calendlyOutlineCta}
              >
                Réserver un appel
              </a>
            ) : (
              <button
                type="button"
                aria-disabled="true"
                tabIndex={-1}
                className={calendlyOutlineCta}
              >
                Réserver un appel
              </button>
            )}
          </div>
          <div className="flex flex-col mt-6">
            {ROWS.map((r) => (
              <div
                key={r.label}
                className="flex justify-between items-center py-4 border-b border-linen last:border-b-0 gap-4"
              >
                <span className="text-[0.65rem] font-medium tracking-[0.16em] uppercase text-stone">
                  {r.label}
                </span>
                {r.href ? (
                  <a
                    href={r.href}
                    className="text-[0.88rem] font-light text-bark text-right hover-hover:hover:text-ink"
                  >
                    {r.value}
                  </a>
                ) : (
                  <span className="text-[0.88rem] font-light text-bark text-right">
                    {r.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal direction="right">
          <Suspense
            fallback={
              <div
                className="lg:pl-20 min-h-80"
                aria-hidden="true"
              />
            }
          >
            <ContactForm />
          </Suspense>
        </Reveal>
      </div>
    </section>
  );
}
