import type { TripVehicle } from '../types/trip'
import { Section } from './Section'

export function VehicleSection({ vehicles }: { vehicles: TripVehicle[] }) {
  return (
    <Section eyebrow="03 · RIDES" title="누구 차 타고 갈까요?">
      {vehicles.length === 0 ? (
        <div className="vehicle-empty">
          <span aria-hidden="true">🚙</span>
          <div>
            <h3>차량 배정은 아직 정해지지 않았어요</h3>
            <p>운전자와 탑승 인원이 정해지는 대로 여기에 업데이트할게요.</p>
          </div>
        </div>
      ) : (
        <div className="vehicle-grid">
          {vehicles.map((vehicle) => (
            <article className="vehicle-card" key={vehicle.id}>
              <div className="vehicle-heading">
                <span aria-hidden="true">🚙</span>
                <div>
                  <p>DRIVER · {vehicle.driver}</p>
                  <h3>{vehicle.vehicle ?? `${vehicle.driver} 차`}</h3>
                </div>
              </div>
              {vehicle.passengers.length > 0 && (
                <div className="passenger-list">
                  <p>함께 타는 사람</p>
                  <ul>
                    {vehicle.passengers.map((passenger) => <li key={passenger}>{passenger}</li>)}
                  </ul>
                </div>
              )}
              {vehicle.note && <p className="vehicle-note">{vehicle.note}</p>}
            </article>
          ))}
        </div>
      )}
    </Section>
  )
}
