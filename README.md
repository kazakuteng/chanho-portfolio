# 정찬호 개발자 포트폴리오

Vue 3와 Vite로 만든 밝은 테마의 반응형 포트폴리오입니다. 백엔드 개발, 실제 서비스 운영, AI 모델 개발 경험을 요약하고 프로젝트별 담당 기능을 소개합니다.

## 배포

- 배포 주소: https://kazakuteng.github.io/chanho-portfolio/
- 호스팅: GitHub Pages
- 자동 배포: `master`에 반영하면 GitHub Actions에서 `npm ci`와 `npm run verify`를 실행하고, 성공한 `dist`를 배포합니다.
- Pull Request에서는 검사와 빌드만 실행합니다.
- 워크플로: `.github/workflows/deploy.yml`
- 현재 진행 상태: https://github.com/kazakuteng/chanho-portfolio/actions

로컬 개발 주소도 `/chanho-portfolio/` 경로를 사용합니다. 개인 도메인을 연결하면 `vite.config.js`의 `base`를 함께 변경해야 합니다.

## 시작하기

```bash
npm install
npm run dev
```

## 콘텐츠와 화면

- `src/data/portfolio.js`: 소개, 경험 요약, 프로젝트, 기술, 연락처
- `src/App.vue`: 소개 → 프로젝트 → 경험 → 기술 → 연락 순서의 화면
- `src/styles/main.css`: 흰 배경, 구분선, 반응형 레이아웃

FloaQ는 데이터 구성·모델 학습·평가, 빵긋은 게임 API와 중복 저장 방지, Kazakuteng은 전적 기록·조회와 구성원 관리 기능을 중심으로 설명합니다. FloaQ 수치는 person 클래스의 test AP50-95이며 평가 데이터와 한계를 함께 표기합니다.

## 검증

```bash
npm run verify
```

코드 검사, 콘텐츠 테스트, 배포용 빌드를 실행합니다. 작업 절차는 `docs/workflow.md`에 있습니다.
