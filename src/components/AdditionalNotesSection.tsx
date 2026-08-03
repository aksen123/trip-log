import { Section } from './Section'

export function AdditionalNotesSection({ notes }: { notes: string[] }) {
  return <Section eyebrow="07 · NOTES" title="마지막으로"><ul className="plain-list">{notes.map((note) => <li key={note}>{note}</li>)}</ul></Section>
}
