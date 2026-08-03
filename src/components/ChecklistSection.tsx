import { Section } from './Section'

export function ChecklistSection({ items }: { items: string[] }) {
  return <Section eyebrow="04 · PACK" title="잊지 말고 챙겨요"><ul className="checklist">{items.map((item) => <li key={item}><span aria-hidden="true" />{item}</li>)}</ul></Section>
}
