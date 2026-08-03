import { Section } from './Section'

export function ChecklistSection({ items }: { items: string[] }) {
  return <Section eyebrow="04 · PACK" title="준비물"><ul className="checklist">{items.map((item) => <li key={item}><span aria-hidden="true" />{item}</li>)}</ul></Section>
}
