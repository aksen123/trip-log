import type { Trip } from '../types/trip'
import { MapLinks } from './MapLinks'
import { Section } from './Section'

export function AccommodationSection({ accommodation }: { accommodation: NonNullable<Trip['accommodation']> }) {
  return <Section eyebrow="01 · STAY" title="오늘 우리가 머물 곳"><div className="stay-name"><span aria-hidden="true">⌂</span><div><h3>{accommodation.name}</h3><p>{accommodation.address}</p></div></div><dl className="stay-times"><div><dt>CHECK IN</dt><dd>{accommodation.checkIn}</dd></div><div><dt>CHECK OUT</dt><dd>{accommodation.checkOut}</dd></div></dl>{accommodation.mapQuery && <MapLinks query={accommodation.mapQuery} />}</Section>
}
