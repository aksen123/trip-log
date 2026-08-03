import type { MouseEvent } from 'react'

type MapService = {
  id: 'naver' | 'kakao' | 'tmap'
  label: string
  icon: string
  appUrl: (query: string) => string
  webUrl: (query: string) => string
}

const services: MapService[] = [
  {
    id: 'naver',
    label: '네이버지도',
    icon: 'N',
    appUrl: (query) => `nmap://search?query=${encodeURIComponent(query)}&appname=${encodeURIComponent(window.location.href)}`,
    webUrl: (query) => `https://map.naver.com/p/search/${encodeURIComponent(query)}`,
  },
  {
    id: 'kakao',
    label: '카카오맵',
    icon: 'K',
    appUrl: (query) => `kakaomap://search?q=${encodeURIComponent(query)}`,
    webUrl: (query) => `https://m.map.kakao.com/scheme/search?q=${encodeURIComponent(query)}`,
  },
  {
    id: 'tmap',
    label: '티맵',
    icon: 'T',
    appUrl: (query) => `tmap://search?name=${encodeURIComponent(query)}`,
    webUrl: () => 'https://www.tmap.co.kr/',
  },
]

const isMobile = () => /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

export function MapLinks({ query }: { query: string }) {
  const openMap = (event: MouseEvent<HTMLAnchorElement>, service: MapService) => {
    if (!isMobile()) return
    event.preventDefault()
    window.open(service.appUrl(query), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="map-actions" aria-label={`${query} 지도 앱으로 열기`}>
      <p>지도 앱으로 열기</p>
      <div className="map-buttons">
        {services.map((service) => (
          <a
            className={`map-button ${service.id}`}
            href={service.webUrl(query)}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => openMap(event, service)}
            key={service.id}
          >
            <span className="map-icon" aria-hidden="true">{service.icon}</span>
            <span>{service.label}</span>
          </a>
        ))}
      </div>
      <small>모바일에서는 설치된 앱으로 연결됩니다. 앱이 열리지 않으면 다른 지도를 선택해 주세요.</small>
    </div>
  )
}
