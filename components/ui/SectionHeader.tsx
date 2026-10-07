import { ReactNode } from "react";

type SectionHeaderProps = {
  label: string;
  title: ReactNode;
  subtitle: string;
  className?: string;
  tone?: "light" | "dark";
};

export default function SectionHeader({
  label,
  title,
  subtitle,
  className,
  tone = "light",
}: SectionHeaderProps) {
  const isDark = tone === "dark";

  return (
    <div className={className}>
      <div
        className={`inline-flex items-center g-[10px] text-[0.65rem]  font-medium tracking-[0.22em] uppercase mb-7 ${isDark ? "text-[#C9BEA8]" : "text-stone"}`}
      >
        <span
          className={`block w-5 h-px mr-2.5 ${isDark ? "bg-[#C9BEA8]" : "bg-linen"}`}
        ></span>
        {label}
      </div>
      <h2
        className={` font-display text-[clamp(2.4rem,4.5vw,4rem)]/[1.05]  tracking-tigth font-bold mb-6 ${isDark ? "text-white" : "text-ink"}`}
      >
        {title} <br />
        <span
          className={`italic font-normal ${isDark ? "text-[#C9BEA8]" : "text-stone"}`}
        >
          {subtitle}
        </span>
      </h2>
    </div>
  );
}
