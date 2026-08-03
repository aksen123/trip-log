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
      <div className="attendance" aria-label="참석 여부">
        <AttendanceGroup label="참석" tone="confirmed" names={trip.attendance.confirmed} />
        <AttendanceGroup label="미정" tone="tentative" names={trip.attendance.tentative} />
        <AttendanceGroup label="불참" tone="declined" names={trip.attendance.declined} />
      </div>
    </header>
  )
}

function AttendanceGroup({ label, tone, names }: { label: string; tone: string; names: string[] }) {
  return (
    <section className={`attendance-group ${tone}`}>
      <header><span aria-hidden="true" /><h2>{label}</h2><strong>{names.length}</strong></header>
      {names.length > 0 ? <ul>{names.map((name) => <li key={name}>{name}</li>)}</ul> : <p>아직 없어요</p>}
    </section>
  )
}
