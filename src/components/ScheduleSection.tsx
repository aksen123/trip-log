import type { TripSchedule } from '../types/trip'
import { MapLink } from './MapLink'
import { Section } from './Section'

export function ScheduleSection({ schedules }: { schedules: TripSchedule[] }) {
  return <Section eyebrow="02 · ITINERARY" title="우리의 하루"><div className="timeline">{schedules.map((item) => <article className="schedule-item" key={item.id}><time>{item.time}</time><div className="timeline-dot" aria-hidden="true" /><div className="schedule-content"><h3>{item.title}</h3>{item.description && <p>{item.description}</p>}{item.location && <p className="location">⌖ {item.location}</p>}{item.mapUrl && <MapLink href={item.mapUrl} label={`${item.location ?? item.title} 지도 보기`} />}</div></article>)}</div></Section>
}
