import { Section } from "./Section";

export function AdditionalNotesSection({ notes }: { notes: string[] }) {
  return (
    <Section
      eyebrow="06 · ONE MORE THING"
      title="마지막으로 😏"
      className="closing-section"
    >
      <div className="closing-message">

        <div>
          {notes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      </div>
      <p className="closing-signoff">그럼 다들 건강하게 만납시다.</p>
    </Section>
  );
}
