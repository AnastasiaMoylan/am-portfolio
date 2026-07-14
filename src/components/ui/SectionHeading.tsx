import "./SectionHeading.css";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  level?: 2 | 3;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  level = 2,
}: SectionHeadingProps) {
  const HeadingTag = `h${level}` as "h2" | "h3";

  return (
    <div className="section-heading">
      {eyebrow && <p className="section-heading-eyebrow">{eyebrow}</p>}
      <HeadingTag className="section-heading-title">{title}</HeadingTag>
      {subtitle && <p className="section-heading-subtitle">{subtitle}</p>}
    </div>
  );
}
