import type { TripSchedule } from "../types/trip";
import { MapLinks } from "./MapLinks";
import { Section } from "./Section";

export function ScheduleSection({ schedules }: { schedules: TripSchedule[] }) {
  return (
    <Section
      eyebrow="02 · ITINERARY"
      title="일정"
      description="대략적인 일정임 맞출필요 없음"
    >
      <div className="timeline">
        {schedules.map((item) => (
          <article className="schedule-item" key={item.id}>
            <time>{item.time}</time>
            <div className="timeline-dot" aria-hidden="true" />
            <div className="schedule-content">
              <h3>{item.title}</h3>
              {item.description && <p>{item.description}</p>}
              {item.location && <p className="location">⌖ {item.location}</p>}
              {item.mapQuery && <MapLinks query={item.mapQuery} />}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
