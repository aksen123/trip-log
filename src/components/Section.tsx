import type { ReactNode } from 'react'

type SectionProps = { eyebrow: string; title: string; children: ReactNode; className?: string }

export function Section({ eyebrow, title, children, className = '' }: SectionProps) {
  return (
    <section className={`section-card ${className}`}>
      <header className="section-heading">
        <span>{eyebrow}</span>
        <h2>{title}</h2>
      </header>
      {children}
    </section>
  )
}
