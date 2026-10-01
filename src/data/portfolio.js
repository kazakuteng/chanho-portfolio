import bbanggeutImage from '../assets/project-bbanggeut.png'
import kazakutengImage from '../assets/project-kazakuteng.png'

// 개인 정보와 프로젝트 설명을 한 곳에서 관리합니다.
export const portfolio = {
  profile: {
    name: '정찬호',
    role: 'Backend · AI Developer',
    headline: '직접 만들고 운영하며,\n서비스를 개선합니다.',
    intro: 'Flask로 동호회 서비스를 만들어 운영했고, Spring Boot로 아동 놀이 서비스의 게임 API를 개발했습니다. FloaQ에서는 해상용·시연용 AI 탐지 모델을 개발했습니다.',
    email: 'poo0404@naver.com',
    github: 'https://github.com/kazakuteng/',
    resume: null
  },
  summary: [
    { title: '백엔드 개발', body: '게임 결과 API 구현과 고유 ID 기반 중복 저장 방지', href: '#project-bbanggeut' },
    { title: '서비스 운영', body: '동호회 전적 기록·조회와 구성원 정보 관리', href: '#project-kazakuteng' },
    { title: 'AI 모델 개발', body: 'FloaQ 해상용·시연용 탐지 모델 개발 및 평가', href: '#project-floaq' }
  ],
  journey: [
    { period: 'SSAFY 이전', title: 'Flask 서비스 개발 및 운영', body: 'Flask와 SQLite로 동호회 구성원이 사용할 웹 서비스를 직접 기획하고 개발했습니다. 전적 기록·조회, 구성원 정보 관리, 챔피언 공략 기능을 구현했습니다.', tag: '개인 프로젝트' },
    { period: 'SSAFY', title: 'Python 기반 개발 학습과 팀 협업', body: 'Python 비전공 트랙에서 Python, JavaScript, SQL, Django를 학습하고 Git 기반의 팀 프로젝트를 경험했습니다.', tag: '교육' },
    { period: '공통 프로젝트', title: '빵긋 · 백엔드 게임 API 개발', body: '게임 결과 저장과 중복 처리 기능을 구현했습니다. 영상 포트폴리오 제작과 Jira 관리, AI·프론트엔드 연동을 보조했고 공통 프로젝트에서 1등을 수상했습니다.', tag: '1등 수상' },
    { period: '특화 프로젝트 · 8주', title: 'FloaQ · AI 모델 개발', body: '해상 구조 지원 시스템의 AI를 맡아 데이터를 구성하고, 해상용·시연용 객체 탐지 모델을 각각 학습하고 평가했습니다.', tag: '완료' }
  ],
  skills: [
    { group: 'Backend', items: ['Python', 'Flask', 'Django', 'Java', 'Spring Boot', 'FastAPI'], note: 'Flask 동호회 서비스와 Spring Boot 게임 API 개발 경험' },
    { group: 'Data', items: ['SQL', 'SQLite', 'MySQL', 'Redis'], note: '동호회 데이터 저장과 게임 세션 관리에 활용' },
    { group: 'Frontend', items: ['JavaScript', 'Vue 3', 'HTML', 'CSS'], note: '웹 화면 구현과 백엔드 API 연동' },
    { group: 'AI', items: ['YOLO11', 'Ultralytics', 'Roboflow'], note: 'FloaQ 데이터 라벨링, 객체 탐지 모델 학습·튜닝·평가' }
  ],
  projects: [
    {
      id: 'floaq', number: '01', status: 'COMPLETED', statusLabel: 'SSAFY 특화 프로젝트 · 8주 · 완료',
      title: 'FloaQ', subtitle: '해상 구조 지원 시스템', role: 'AI 데이터 구성 · 탐지 모델 학습 및 평가',
      description: '물에 빠진 사람을 탐지하고 부표 자동 발사, 해경 신고, 지속적인 위치 공유로 구조를 지원하는 시스템입니다. 해상 환경과 시연 환경에 맞춰 탐지 모델을 각각 개발했습니다.',
      highlights: ['해상용 YOLO11n · 시연용 YOLO11s 선정', '클래스 재구성과 데이터 라벨링', 'Recall을 우선한 모델 평가'],
      details: [
        { title: '데이터 구성', body: 'Roboflow 데이터를 animal·float·person으로 재구성하고 라벨링했습니다. 해상용에는 배 위 사람을 구분하는 person_with_float를 추가하고 train·validation·test로 나눴습니다.' },
        { title: '모델 학습·비교', body: 'GPU 서버에서 50 epoch 학습을 진행했습니다. 모델 크기, 입력 해상도, 증강, Mosaic, SGD 학습률을 비교해 해상용 YOLO11n과 시연용 YOLO11s를 선정했습니다.' },
        { title: '평가 기준', body: '물에 빠진 사람을 놓치지 않도록 person Recall을 우선 검토했습니다. AP50-95로 탐지 품질을 비교하고 오탐과 미탐을 함께 확인했습니다.' }
      ],
      metrics: [
        { purpose: '해상용', model: 'YOLO11n · 640px', dataset: 'v33 test · 248장', value: '41.91%' },
        { purpose: '시연용', model: 'YOLO11s · 960px', dataset: 'Demo v8 test · 100장', value: '58.67%' }
      ],
      metricCaption: 'person 클래스 AP50-95 · 각 모델의 test 평가 기록',
      metricNote: '서로 다른 데이터셋의 결과이며 직접적인 성능 비교값은 아닙니다. 해상 test는 최종 후보 선정에도 사용했으며, 유사 장면과 빈 바다 배경 부족으로 새 촬영 영상에서 추가 검증이 필요합니다.',
      tech: ['Python', 'YOLO11', 'Ultralytics', 'Roboflow'], link: null, image: null
    },
    {
      id: 'bbanggeut', number: '02', status: '1ST PLACE', statusLabel: 'SSAFY 공통 프로젝트 · 1등',
      title: '빵긋', subtitle: '아동 대상 신체·인지 놀이 서비스', role: '백엔드 게임 API 개발',
      description: 'WebRTC 기반 놀이와 캐릭터 대화를 제공하는 아동 교육 플랫폼입니다. 게임 결과를 저장하는 백엔드 API를 맡았습니다.',
      highlights: ['백엔드 게임 API 구현', '게임 고유 ID 기반 중복 저장 방지', '영상 포트폴리오 제작 및 협업 지원'],
      details: [
        { title: '게임 결과 저장', body: '게임별 플레이 결과를 받아 저장하는 API를 구현했습니다.' },
        { title: '중복 저장 방지', body: '각 플레이를 고유 ID로 식별하고 DB의 유니크 제약으로 중복을 막았습니다. saveAndFlush()로 저장 SQL을 실행해 제약 위반을 확인하고, 재요청에는 기존 결과를 반환하도록 처리했습니다.' },
        { title: '팀 협업', body: '영상 포트폴리오를 제작하고 Jira 관리와 AI·프론트엔드 연동 작업을 보조했습니다.' }
      ],
      tech: ['Java', 'Spring Boot', 'MySQL', 'FastAPI', 'Redis'],
      link: 'https://i15a501.p.ssafy.io/', image: bbanggeutImage, imageAlt: '빵긋 서비스의 시작 화면'
    },
    {
      id: 'kazakuteng', number: '03', status: 'LIVE SERVICE', statusLabel: '개인 프로젝트 · 운영 경험',
      title: 'Kazakuteng', subtitle: '동호회 전적 기록 및 관리 서비스', role: '기획 · 개발 · 배포 · 운영',
      description: 'Flask와 SQLite로 직접 만든 동호회 웹 서비스입니다. 구성원의 경기 전적을 기록하고 이전 기록을 다시 확인하며, 챔피언 공략을 작성하고 조회할 수 있습니다.',
      highlights: ['전적 기록과 이전 기록 조회', '구성원 데이터 수정·삭제', '챔피언 공략 작성 개수 표시'],
      details: [
        { title: '전적 기록·조회', body: '경기 전적을 저장하고 지난 기록을 다시 찾아볼 수 있도록 구현했습니다.' },
        { title: '구성원 정보 관리', body: '구성원 데이터를 수정하거나 삭제할 수 있도록 관리 기능을 만들었습니다.' },
        { title: '공략 작성 개수 표시', body: '챔피언 공략에서 작성 개수를 확인할 수 있도록 숫자로 표시했습니다.' }
      ],
      tech: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
      link: 'https://kazakuteng.pythonanywhere.com/', image: kazakutengImage, imageAlt: 'Kazakuteng 서비스의 점수 랭킹 화면'
    }
  ],
  nav: [
    { label: '소개', href: '#about' }, { label: '프로젝트', href: '#projects' },
    { label: '경험', href: '#experience' }, { label: '기술', href: '#skills' }, { label: '연락', href: '#contact' }
  ]
}
