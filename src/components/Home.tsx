export function Home() {
  return (
    <main className="home">
      <section className="home-card">
        <p className="hero-kicker">TRIP LOG</p>
        <h1>우리의 여행 기록</h1>
        <p>친구들과 공유하는 여행 공지를 모아두는 곳입니다.</p>
        <a className="home-link" href={`${import.meta.env.BASE_URL}20260829/`}>
          <span><strong>2026.08.29</strong> 가평 여행 공지</span>
          <span aria-hidden="true">→</span>
        </a>
      </section>
    </main>
  )
}
