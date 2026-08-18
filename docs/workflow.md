# Codex workflow — harness engineering

하네스 엔지니어링은 AI에게 매번 긴 설명을 다시 하는 대신, 좋은 작업이 반복되도록 **맥락·규칙·검증·피드백 루프**를 프로젝트 안에 설계하는 방식입니다.

## 1. Orient
- `AGENTS.md`에서 작업 규칙을 읽는다.
- `docs/portfolio-spec.md`에서 제품 목표를 확인한다.
- `CHECKLIST.md`에서 다음 한 가지 작업을 고른다.

## 2. Change
- 개인 콘텐츠는 `src/data/portfolio.js`에서 수정한다.
- 구조 변경은 요구사항과 일치할 때만 수행한다.
- 확인하지 못한 사실은 만들지 않고 placeholder 또는 TODO로 남긴다.

## 3. Verify
- 작업 중 빠른 확인: `npm run test`
- 완료 전 전체 확인: `npm run verify`
- 실패하면 원인을 고친 뒤 같은 명령을 다시 실행한다.

## 4. Review
- 변경 내용이 “백엔드 × AI + 실제 운영” 메시지를 강화하는지 확인한다.
- 모바일, 키보드, 링크, 오탈자를 확인한다.
- 완료 항목과 다음 작업을 `CHECKLIST.md`에 반영한다.

## Codex에게 요청하는 예시
- “AGENTS.md와 체크리스트를 읽고 다음 미완료 항목 하나를 구현한 뒤 verify까지 해줘.”
- “portfolio.js의 placeholder 목록을 찾아 내가 답해야 할 질문만 정리해줘.”
- “공통 프로젝트 설명이 과장되지 않았는지 spec 기준으로 리뷰해줘.”
