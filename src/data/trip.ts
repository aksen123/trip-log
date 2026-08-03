import type { Trip } from '../types/trip'

// TODO: 아래 내용과 지도 URL은 모두 화면 확인용 예시입니다. 실제 여행 정보로 교체하세요.
export const trip: Trip = {
  id: 'trip-2026-summer-gapyeong',
  slug: '2026-summer-gapyeong',
  title: '2026/08/29',
  description: '올해도 간다',
  startDate: '2026-08-29',
  endDate: '2026-08-30',
  dateLabel: '2026년 8월 29일(토) — 8월 30일(일)',
  location: '경기도 가평',
  schedules: [
    {
      id: 'meet',
      time: '10:30',
      title: '서바이벌 집합',
      description: '인원 확인 후 차량을 나눠 타고 이동해요.',
      location: '가평역 1번 출구',
      mapQuery: '가평역 1번 출구',
    },
    {
      id: 'lunch',
      time: '11:30',
      title: '점심 식사',
      description: '가볍게 식사하고 근처 마트에서 장을 봅니다.',
      location: '가평 시내 예시 식당',
      mapQuery: '가평 시내 예시 식당',
    },
    {
      id: 'check-in',
      time: '15:00',
      title: '숙소 체크인',
      description: '방 배정 후 자유 시간과 물놀이를 즐겨요.',
      location: '가평 숲속 펜션 (예시)',
      mapQuery: '가평 숲속 펜션',
    },
    {
      id: 'dinner',
      time: '18:30',
      title: '저녁 식사',
      description: '바비큐와 함께 느긋한 저녁 시간을 보냅니다.',
      location: '숙소 바비큐장',
    },
  ],
  vehicles: [
    // {
    //   id: 'vehicle-minjun',
    //   driver: '민준',
    //   vehicle: '민준 차',
    //   passengers: ['서연', '지우'],
    //   note: '',
    // },
    // {
    //   id: 'vehicle-hyunwoo',
    //   driver: '현우',
    //   vehicle: '현우 차',
    //   passengers: ['유진', '도윤'],
    //   note: '',
    // },
  ],
  accommodation: {
    name: '가평 숲속 펜션 (예시)',
    address: '경기도 가평군 예시로 123 (실제 예약 숙소 주소로 교체 필요)',
    checkIn: '8월 29일 14:30',
    checkOut: '8월 30일 11:00',
    mapQuery: '경기도 가평군 예시로 123',
  },
  checklist: ["체력"],
  settlementNotes: [
    '1차 회비: 1인 100,000원',
    '여행 당일 추가 회비 걷을 예정: 3~5 만원',
  ],
  attendance: {
    confirmed: ["선호", "상진", "태훈", "희태", "명진", "병선", "승준", "광수", "창호", "현우", "용운", "민욱", "경훈", "동찬", "도연", "태영", "진만"],
    tentative: ['원태','성열','둘리'],
    declined: ['선비', '재원', '진석', '영준', '성섭' ],
  },
  additionalNotes: [
    '숙소 비품과 주차 가능 대수는 출발 전 다시 확인해 주세요.',
    '개인정보, 공동현관 비밀번호 등 민감한 정보는 단체 채팅방에서만 공유해요.',
  ],
}
