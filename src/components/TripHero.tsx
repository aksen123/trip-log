import type { Trip } from '../types/trip'
import { getTripStatus } from '../utils/date'

export function TripHero({ trip }: { trip: Trip }) {
  return (
    <header className="hero">
      <div className="hero-topline"><span>SUMMER TRIP · 2026</span><span className="status">{getTripStatus(trip.startDate, trip.endDate)}</span></div>
      <div className="hero-copy">
        <p className="hero-kicker">우리의 여름, 잠시 여기</p>
        <h1>{trip.title}</h1>
        <p className="hero-description">{trip.description}</p>
      </div>
      <dl className="trip-meta">
        <div><dt>WHEN</dt><dd>{trip.dateLabel}</dd></div>
        <div><dt>WHERE</dt><dd>{trip.location}</dd></div>
      </dl>
    </header>
  )
}
