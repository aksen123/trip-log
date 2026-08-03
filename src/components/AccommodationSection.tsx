import type { Trip } from '../types/trip'
import { MapLink } from './MapLink'
import { Section } from './Section'

export function AccommodationSection({ accommodation }: { accommodation: NonNullable<Trip['accommodation']> }) {
  return <Section eyebrow="03 · STAY" title="오늘 우리가 머물 곳"><div className="stay-name"><span aria-hidden="true">⌂</span><div><h3>{accommodation.name}</h3><p>{accommodation.address}</p></div></div><dl className="stay-times"><div><dt>CHECK IN</dt><dd>{accommodation.checkIn}</dd></div><div><dt>CHECK OUT</dt><dd>{accommodation.checkOut}</dd></div></dl>{accommodation.mapUrl && <MapLink href={accommodation.mapUrl} label="숙소 지도 보기" />}</Section>
}
