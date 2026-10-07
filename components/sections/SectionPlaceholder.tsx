import SectionHeader from "../ui/SectionHeader";

type SectionPlaceholderProps = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
};

export default function SectionPlaceholder({
  id,
  label,
  title,
  subtitle,
}: SectionPlaceholderProps) {
  return (
    <section id={id} className="section-px pt-25 pb-16 border-t border-linen">
      <SectionHeader label={label} title={title} subtitle={subtitle} />
    </section>
  );
}
