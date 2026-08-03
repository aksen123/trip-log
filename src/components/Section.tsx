import type { ReactNode } from "react";

type SectionProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  description?: string;
  className?: string;
};

export function Section({
  eyebrow,
  title,
  children,
  description = "",
  className = "",
}: SectionProps) {
  return (
    <section className={`section-card ${className}`}>
      <header className="section-heading">
        <span>{eyebrow}</span>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </header>
      {children}
    </section>
  );
}
