export function MapLink({ href, label = '지도에서 보기' }: { href: string; label?: string }) {
  return <a className="map-link" href={href} target="_blank" rel="noreferrer">{label}<span aria-hidden="true">↗</span></a>
}
