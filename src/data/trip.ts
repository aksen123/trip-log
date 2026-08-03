import type { Trip } from '../types/trip'

// TODO: 아래 내용과 지도 URL은 모두 화면 확인용 예시입니다. 실제 여행 정보로 교체하세요.
export const trip: Trip = {
  id: 'trip-2026-summer-gapyeong',
  slug: '2026-summer-gapyeong',
  title: '2026 친구들 여름 여행',
  description: '잠깐 일상에서 벗어나, 물 좋은 가평에서 여름 한 페이지를 같이 채워요.',
  startDate: '2026-08-08',
  endDate: '2026-08-09',
  dateLabel: '2026년 8월 8일(토) — 8월 9일(일)',
  location: '경기도 가평',
  notices: [
    '오전 10시까지 가평역 1번 출구 앞에 모여 주세요.',
    '장보기 비용은 공용 회비에서 결제합니다. 개인 구매는 미리 알려 주세요.',
    '비 예보가 있으면 출발 전날 단체 채팅방에서 일정을 다시 안내할게요.',
  ],
  schedules: [
    {
      id: 'meet',
      time: '10:00',
      title: '가평역 집합',
      description: '인원 확인 후 차량을 나눠 타고 이동해요.',
      location: '가평역 1번 출구',
      mapUrl: 'https://map.naver.com/p/search/%EA%B0%80%ED%8F%89%EC%97%AD',
    },
    {
      id: 'lunch',
      time: '11:30',
      title: '점심 식사',
      description: '가볍게 식사하고 근처 마트에서 장을 봅니다.',
      location: '가평 시내 예시 식당',
      mapUrl: 'https://map.kakao.com/?q=%EA%B0%80%ED%8F%89%20%EB%A7%9B%EC%A7%91',
    },
    {
      id: 'check-in',
      time: '15:00',
      title: '숙소 체크인',
      description: '방 배정 후 자유 시간과 물놀이를 즐겨요.',
      location: '가평 숲속 펜션 (예시)',
      mapUrl: 'https://map.naver.com/p/search/%EA%B0%80%ED%8F%89%20%ED%8E%9C%EC%85%98',
    },
    {
      id: 'dinner',
      time: '18:30',
      title: '저녁 식사',
      description: '바비큐와 함께 느긋한 저녁 시간을 보냅니다.',
      location: '숙소 바비큐장',
    },
  ],
  accommodation: {
    name: '가평 숲속 펜션 (예시)',
    address: '경기도 가평군 예시로 123 (실제 예약 숙소 주소로 교체 필요)',
    checkIn: '8월 8일 15:00',
    checkOut: '8월 9일 11:00',
    mapUrl: 'https://map.naver.com/p/search/%EA%B0%80%ED%8F%89%20%ED%8E%9C%EC%85%98',
  },
  checklist: ['세면도구와 수건', '편한 옷과 여벌 옷', '개인 상비약', '물놀이용품', '휴대폰 충전기'],
  settlementNotes: [
    '예상 회비: 1인 80,000원 (예시)',
    '숙박·공용 식비·장보기 비용이 포함됩니다.',
    '여행 종료 후 영수증을 정리해 단체 채팅방에 공유합니다.',
    '계좌번호는 공개 페이지에 올리지 않고 단체 채팅방으로 안내합니다.',
  ],
  participants: ['민준', '서연', '지우', '현우', '유진', '도윤'],
  additionalNotes: [
    '숙소 비품과 주차 가능 대수는 출발 전 다시 확인해 주세요.',
    '개인정보, 공동현관 비밀번호 등 민감한 정보는 단체 채팅방에서만 공유해요.',
  ],
}
