import { Section } from './Section'

export function SettlementSection({ notes }: { notes: string[] }) {
  return <Section eyebrow="05 · MONEY" title="회비와 정산"><ul className="plain-list">{notes.map((note) => <li key={note}>{note}</li>)}</ul></Section>
}
