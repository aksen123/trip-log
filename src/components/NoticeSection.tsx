import { Section } from './Section'

export function NoticeSection({ notices }: { notices: string[] }) {
  return <Section eyebrow="01 · MUST READ" title="가기 전에 꼭 확인해요" className="notice-section"><ol className="notice-list">{notices.map((notice, index) => <li key={notice}><span>{String(index + 1).padStart(2, '0')}</span><p>{notice}</p></li>)}</ol></Section>
}
