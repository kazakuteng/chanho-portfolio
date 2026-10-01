# Portfolio specification

## Goal
채용 담당자가 소개와 프로젝트를 읽고 백엔드 개발, 서비스 운영, AI 탐지 모델 개발 경험과 본인 담당 범위를 빠르게 이해하도록 한다.

## Required sections
1. 소개: 직무, 소개 문장, 세 가지 핵심 경험 요약
2. 프로젝트: FloaQ, 빵긋, Kazakuteng의 담당 기능과 구현 과정
3. 경험: SSAFY 이전부터 공통·특화 프로젝트까지
4. 사용 기술: 프로젝트에서 사용한 도구와 맥락
5. 연락: 이메일, GitHub

## Visual direction
- 밝은 배경과 진한 글자, 절제된 파란색 강조
- 코드 장식, 큰 상태 배너, 어두운 배경 제외
- 본인 담당 역할과 해결한 문제를 먼저 보여준다.
- 스크린샷은 원본 비율을 유지하고 강제로 자르지 않는다.

## Content constraints
- 사용자 제공 사실과 저장소 코드·평가 기록을 바탕으로 작성한다.
- FloaQ 기간은 사용자 확인에 따라 8주이며 AI 담당 경험을 설명한다.
- 시스템의 부표 발사·신고·위치 공유와 본인의 AI 담당 범위를 구분한다.
- 해상용 YOLO11n, 시연용 YOLO11s와 person 클래스 test AP50-95 41.91%, 58.67%는 S15P21A208/AI/docs/model_selection.md 기록을 따른다.
- 두 데이터셋의 수치를 직접적인 모델 간 우열이나 전체 mAP으로 설명하지 않는다.
- test의 후보 선정 사용, 유사 장면, 빈 해상 배경 부족에 따른 추가 검증 필요성을 명시한다.
- 빵긋의 고유 플레이 ID, DB 유니크 제약, saveAndFlush와 재요청 시 기존 결과 반환은 S15P11A501의 GameSessionService, GameSessionWriter, GameSession 구현을 확인했다.
- saveAndFlush는 저장 SQL 실행과 제약 확인이며 최종 커밋과 동일하게 설명하지 않는다.
- Kazakuteng 동호회 서비스는 narak/app.py, requirements.txt, README.md를 확인해 Flask·SQLite 기반으로 표기한다. 전적 기록·조회, 구성원 삭제, 공략 개수 조회는 코드에서도 확인했다.
- narak의 PythonAnywhere 설정 파일은 배포 구성의 근거이며 현재 운영 호스팅을 확정하는 근거로 사용하지 않는다. 현재 URL은 사용자 확인 전까지 유지한다.
- 확인되지 않은 링크나 성과를 만들지 않는다.

## Quality bar
- 320px 이상 화면에서 가로 스크롤 없이 읽을 수 있다.
- 모바일 메뉴와 링크를 키보드로 사용할 수 있다.
- 이미지에 대체 설명을 제공하고 표에는 평가 기준을 표기한다.
- lint, 기존 콘텐츠 테스트, 정적 빌드를 통과한다.
