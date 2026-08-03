import { AccommodationSection } from "./components/AccommodationSection";
import { AdditionalNotesSection } from "./components/AdditionalNotesSection";
import { ChecklistSection } from "./components/ChecklistSection";
import { ScheduleSection } from "./components/ScheduleSection";
import { SettlementSection } from "./components/SettlementSection";
import { TripHero } from "./components/TripHero";
import { VehicleSection } from "./components/VehicleSection";
import { trip } from "./data/trip";

export default function App() {
  return (
    <>
      <main>
        <TripHero trip={trip} />
        <div className="content">
          {trip.accommodation && (
            <AccommodationSection accommodation={trip.accommodation} />
          )}
          <ScheduleSection schedules={trip.schedules} />
          <VehicleSection vehicles={trip.vehicles} />
          <div className="two-column">
            <ChecklistSection items={trip.checklist} />
            <SettlementSection notes={trip.settlementNotes} />
          </div>
          <AdditionalNotesSection notes={trip.additionalNotes} />
        </div>
      </main>
      <footer>
        <span>2026 · GAPYEONG · WITH ❤️</span>
      </footer>
    </>
  );
}
