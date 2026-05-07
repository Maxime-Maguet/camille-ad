import { ReactNode } from "react";

type SectionHeaderProps = {
  label: string;
  title: ReactNode;
  subtitle: string;
  className?: string;
};

export default function SectionHeader({
  label,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <div className="inline-flex items-center g-[10px] text-[0.65rem]  font-medium tracking-[0.22em] uppercase text-stone mb-7 ">
        <span className="block w-5 h-px bg-linen mr-2.5"></span>
        {label}
      </div>
      <h2 className=" font-display text-[clamp(2.4rem,4.5vw,4rem)]/[1.05]  tracking-tigth font-bold text-ink mb-6">
        {title} <br />
        <span className="italic font-normal text-stone">{subtitle}</span>
      </h2>
    </div>
  );
}
