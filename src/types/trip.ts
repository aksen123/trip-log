export type TripSchedule = {
  id: string
  time: string
  title: string
  description?: string
  location?: string
  mapUrl?: string
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
  notices: string[]
  schedules: TripSchedule[]
  accommodation?: {
    name: string
    address: string
    checkIn?: string
    checkOut?: string
    mapUrl?: string
  }
  checklist: string[]
  settlementNotes: string[]
  participants: string[]
  additionalNotes: string[]
}
