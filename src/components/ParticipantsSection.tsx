import { Section } from './Section'

export function ParticipantsSection({ participants }: { participants: string[] }) {
  return <Section eyebrow="06 · CREW" title={`${participants.length}명이 함께해요`}><ul className="participants">{participants.map((name, index) => <li key={name}><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>{name}</li>)}</ul></Section>
}
