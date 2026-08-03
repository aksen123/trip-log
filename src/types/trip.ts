export type TripSchedule = {
  id: string
  time: string
  title: string
  description?: string
  location?: string
  mapQuery?: string
}

export type TripVehicle = {
  id: string
  driver: string
  vehicle?: string
  passengers: string[]
  note?: string
}

export type Trip = {
  id: string
  slug: string
  title: string
  description: string
  startDate: string
  endDate: string
  dateLabel: string
  location: string
  schedules: TripSchedule[]
  vehicles: TripVehicle[]
  accommodation?: {
    name: string
    address: string
    checkIn?: string
    checkOut?: string
    mapQuery?: string
  }
  checklist: string[]
  settlementNotes: string[]
  attendance: {
    confirmed: string[]
    tentative: string[]
    declined: string[]
  }
  additionalNotes: string[]
}
