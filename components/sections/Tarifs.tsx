import * as m from "motion/react-m";
import FaqAccordion from "./FaqAccordion";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import {
  faqItems,
  payrollNote,
  tarifPlans,
  type FormuleId,
} from "@/lib/content/tarifs";

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

const orderById: Record<FormuleId, string> = {
  ponctuelle: "order-1 lg:order-1",
  essentiel: "order-2 lg:order-2",
  serenite: "order-3",
};

const cardCtaClass =
  "mt-auto w-full text-center text-[0.73rem] font-normal tracking-widest uppercase text-bark py-3.25 px-7 border-[1.5px] border-linen hover-hover:group-hover:bg-white hover-hover:group-hover:text-ink hover-hover:group-hover:border-white transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]";

export default function Tarifs() {
  return (
    <section id="tarifs" className="bg-parch section-px pt-25 pb-25">
      <Reveal direction="up" className="mb-16">
        <SectionHeader
          label="Tarifs"
          title="Des tarifs clairs,"
          subtitle="sans engagement."
        />
      </Reveal>

      <m.div
        variants={wrapperVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-3 w-fit mx-auto gap-8 overflow-visible pt-4"
      >
        {tarifPlans.map((plan) => (
          <m.article
            key={plan.id}
            variants={itemVariants}
            className={`group relative flex h-full  flex-col origin-center bg-white border border-linen px-7 py-10 lg:px-8 lg:py-11 transition-all duration-700 ease-in-out hover-hover:hover:z-10 hover-hover:hover:scale-[1.1] hover-hover:hover:bg-ink ${orderById[plan.id]}`}
          >
            {plan.badge ? (
              <span className="absolute top-0 left-6 z-20 -translate-y-1/2 bg-[#C9BEA8] px-3 py-1 text-[0.62rem] font-medium tracking-[0.18em] uppercase text-ink">
                {plan.badge}
              </span>
            ) : null}
            <h3 className="font-display text-[1.05rem] font-bold tracking-[0.04em] text-ink mb-4 transition-colors duration-700 ease-in-out hover-hover:group-hover:text-white">
              {plan.name}
            </h3>
            <p className="font-display text-[1.65rem] leading-snug font-bold text-ink mb-4 transition-colors duration-700 ease-in-out hover-hover:group-hover:text-white">
              {plan.price}
            </p>
            <p className="text-[0.85rem] leading-[1.8] font-light text-stone mb-6 transition-colors duration-700 ease-in-out hover-hover:group-hover:text-white/72">
              {plan.forWho}
            </p>
            <ul className="flex flex-col list-none gap-1.75 mb-8">
              {plan.list.map((item) => (
                <li
                  key={item}
                  className="relative text-[0.8rem] text-bark py-1.5 pl-3.5 border-b border-linen/50 last:border-none leading-normal before:content-['–'] before:absolute before:left-0 before:text-linen transition-colors duration-500 ease-in-out hover-hover:group-hover:text-white/72 hover-hover:group-hover:border-white/20"
                >
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={`?formule=${plan.id}#contact`}
              data-formule={plan.id}
              className={cardCtaClass}
            >
              J&apos;en parle avec Camille
            </a>
          </m.article>
        ))}
      </m.div>

      <div className="mt-12 bg-white border border-[#C9BEA8] mx-auto w-fit px-7 py-5 lg:px-9 lg:py-6 flex flex-col gap-3 lg:flex-row lg:items-baseline lg:gap-x-8">
        <p className="font-display text-[18px] font-bold leading-snug text-ink shrink-0">
          {payrollNote.title}
        </p>
        <div className="flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-1">
          {payrollNote.parts.map((part) => (
            <p
              key={part}
              className="text-[0.85rem] leading-[1.7] font-light text-bark"
            >
              {part}
            </p>
          ))}
        </div>
      </div>

      <div className="border-b border-linen mt-16"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-center">
        <h3 className="mt-10 font-display text-[clamp(2.4rem,4.2vw,3.6rem)]/[1.05] font-bold tracking-[-0.02em] text-ink text-center">
          Questions
          <br />
          <span className="italic font-normal text-stone">fréquentes.</span>
        </h3>
        <div className="lg:col-span-2 mt-12">
          <FaqAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
