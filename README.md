# Trip Log

친구들과 여행 일정과 준비 사항을 한눈에 공유하기 위한 모바일 우선 정적 안내 페이지입니다. 로그인이나 데이터베이스 없이 동작하며, 2026년 8월 29일 여행 공지는 `/trip-log/20260829/` 경로에서 표시합니다.

## 로컬 실행

Node.js 22와 pnpm 10을 권장합니다.

```bash
pnpm install
pnpm dev
```

프로덕션 빌드는 `pnpm build`, 코드 검사는 `pnpm lint`, 타입 검사는 `pnpm typecheck`로 실행합니다.

## 여행 정보 수정

여행 제목, 날짜, 일정, 지도 검색 장소, 숙소, 차량별 탑승자, 준비물, 정산 안내, 참석 상태는 모두 `src/data/trip.ts`에 있습니다. 데이터 형태를 변경하려면 `src/types/trip.ts`도 함께 확인하세요. 지도 URL을 서비스별로 복사할 필요 없이 일정이나 숙소의 `mapQuery`에 정확한 장소명 또는 도로명 주소를 한 번만 입력하면 네이버지도·카카오맵·티맵 버튼이 자동으로 생성됩니다. 현재 장소 정보는 화면 확인용 예시입니다.

## GitHub Pages 배포

`main` 브랜치에 변경사항이 push되면 `.github/workflows/deploy.yml`이 pnpm으로 빌드하고 GitHub Pages에 배포합니다. 저장소가 `trip-log`이므로 Vite의 base 경로는 `/trip-log/`로 설정되어 있습니다. 저장소의 **Settings → Pages → Build and deployment → Source**에서 **GitHub Actions**를 선택해야 합니다.

## 공개 범위 주의

이 페이지는 누구나 URL로 볼 수 있는 **공개 정적 페이지**입니다. 개인정보, 전화번호, 계좌번호, 숙소·공동현관 비밀번호처럼 민감한 정보는 절대 넣지 마세요. 추후 인증과 데이터베이스를 도입하기 전까지 로그인, 비공개 조회, 참여자별 접근 권한 기능은 없습니다.
