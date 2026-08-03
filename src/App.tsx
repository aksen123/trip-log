import { AccommodationSection } from './components/AccommodationSection'
import { AdditionalNotesSection } from './components/AdditionalNotesSection'
import { ChecklistSection } from './components/ChecklistSection'
import { NoticeSection } from './components/NoticeSection'
import { ParticipantsSection } from './components/ParticipantsSection'
import { ScheduleSection } from './components/ScheduleSection'
import { SettlementSection } from './components/SettlementSection'
import { TripHero } from './components/TripHero'
import { trip } from './data/trip'

export default function App() {
  return <><main><TripHero trip={trip} /><div className="content"><NoticeSection notices={trip.notices} /><ScheduleSection schedules={trip.schedules} /><div className="two-column">{trip.accommodation && <AccommodationSection accommodation={trip.accommodation} />}<ChecklistSection items={trip.checklist} /></div><div className="two-column"><SettlementSection notes={trip.settlementNotes} /><ParticipantsSection participants={trip.participants} /></div><AdditionalNotesSection notes={trip.additionalNotes} /></div></main><footer><p>잘 다녀오자, 우리.</p><span>2026 · GAPYEONG</span></footer></>
}
