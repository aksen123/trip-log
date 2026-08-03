const toLocalDate = (value: string) => {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day)
}

export const getTripStatus = (startDate: string, endDate: string, now = new Date()) => {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const start = toLocalDate(startDate)
  const end = toLocalDate(endDate)

  if (today > end) return '여행 다녀옴 ✌️'

  const daysUntil = Math.ceil((start.getTime() - today.getTime()) / 86_400_000)
  if (daysUntil <= 0) return '오늘이 여행날임! 🌴'
  return `여행까지 ${daysUntil}일 남았음 😎`
}
