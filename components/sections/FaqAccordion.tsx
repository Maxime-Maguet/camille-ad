"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/content/tarifs";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="min-h-140 lg:min-h-0">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `faq-button-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div key={item.question} className="border-b border-linen">
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 py-3 px-2 -mx-2 text-left transition-colors duration-500 ease-in-out hover:bg-sand  "
            >
              <span className="text-[15.5px] leading-snug text-ink font-medium">
                {item.question}
              </span>
              <span
                className="shrink-0 text-[1.15rem] leading-none text-[#C9BEA8]"
                aria-hidden
              >
                {isOpen ? "–" : "+"}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={
                isOpen
                  ? "visible mb-3 h-auto overflow-hidden pr-6 lg:h-5"
                  : "hidden pr-6 lg:mb-3 lg:block lg:h-5 lg:invisible lg:overflow-hidden"
              }
            >
              <p className="text-[0.85rem] leading-[1.55] font-light text-bark">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
