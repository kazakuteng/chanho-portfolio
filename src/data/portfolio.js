import bbanggeutImage from '../assets/project-bbanggeut.png'
import kazakutengImage from '../assets/project-kazakuteng.png'

// 개인 정보와 포트폴리오 콘텐츠는 이 파일 한 곳에서 수정합니다.
export const portfolio = {
  profile: {
    name: '정찬호',
    role: 'Backend × AI Developer',
    headline: '사용되는 서비스를 만들고,\nAI로 더 나은 경험을 설계합니다.',
    intro: 'Python과 Django로 웹 개발을 시작해 실제 동호회 서비스를 운영하고 있습니다. 지금은 Spring Boot와 FastAPI로 백엔드와 AI를 연결하는 개발자로 성장하고 있습니다.',
    email: 'poo0404@naver.com',
    github: 'https://github.com/kazakuteng/',
    resume: null
  },
  stats: [
    { value: 'LIVE', label: '실사용 서비스 운영 중' },
    { value: '1st', label: 'SSAFY 공통 프로젝트 1등 수상' },
    { value: 'PLAN', label: '특화 프로젝트 기획 진행 중' }
  ],
  journey: [
    { period: 'Before SSAFY', title: '서비스를 직접 만들고 운영하다', body: 'Django로 동호회 웹 서비스를 기획·개발하고 PythonAnywhere에 배포했습니다. 실제 구성원들과 사용하며 기능 개선과 운영을 경험하고 있습니다.', tag: '운영 경험' },
    { period: 'SSAFY', title: 'Python에서 웹과 AI로 확장하다', body: '비전공 Python 트랙에서 Python, AI, JavaScript, SQL, Django를 중심으로 학습하고 Git 기반 협업과 프로젝트 개발 과정을 익혔습니다.', tag: '교육 수료' },
    { period: 'Common Project', title: '백엔드 게임 API로 수상까지 연결하다', body: 'SSAFY 공통 프로젝트에서 아동 대상 놀이 서비스를 완성하고 1등을 수상했습니다. 주요 역할은 백엔드 게임 API 구현과 영상 포트폴리오 제작이었고, Jira 관리와 AI·프론트엔드·PM 업무의 부족한 부분을 함께 보조했습니다.', tag: '1등 수상' },
    { period: 'Present', title: '특화 프로젝트를 기획하다', body: '공통 프로젝트 경험을 바탕으로 다음 특화 프로젝트를 기획하고 있습니다. 아직 확정되지 않은 성과나 담당 기능은 단정하지 않고, 문제 정의와 구현 방향을 구체화하는 단계입니다.', tag: '기획 중' }
  ],
  skills: [
    { group: 'Backend', items: ['Python', 'Django', 'Spring Boot', 'FastAPI'], note: 'REST API와 서비스 로직을 설계하고 AI 추론 서버를 연결합니다.' },
    { group: 'Data', items: ['SQL', 'MySQL', 'Redis'], note: '관계형 모델링부터 세션과 실시간 데이터 흐름까지 고민합니다.' },
    { group: 'Frontend', items: ['JavaScript', 'Vue 3', 'HTML', 'CSS'], note: 'API가 사용자 경험으로 완성되는 화면을 직접 구현합니다.' },
    { group: 'AI', items: ['Hugging Face', 'FLUX', 'SDXL', 'LoRA'], note: '생성형 AI를 서비스 기능으로 연결하는 방법을 실험합니다.' }
  ],
  projects: [
    {
      number: '01', status: '1ST PLACE', title: '빵긋', subtitle: '아동 대상 WebRTC 신체·인지 놀이 서비스',
      description: '아이가 게임으로 놀며 배우고, 캐릭터와 대화하며 하루를 기록하는 유아 통합 교육 플랫폼입니다. SSAFY 공통 프로젝트로 완성해 배포했고, 1등을 수상했습니다.',
      highlights: ['백엔드 게임 API 구현', '영상 포트폴리오 제작', 'Jira·AI·프론트엔드·PM 보조'], tech: ['Java', 'Spring Boot', 'FastAPI', 'Redis', 'WebRTC', 'React'], link: 'https://i15a501.p.ssafy.io/', image: bbanggeutImage, imageAlt: '빵긋 배포 서비스 시작 화면'
    },
    {
      number: '02', status: 'LIVE SERVICE', title: 'Kazakuteng', subtitle: '동호회 구성원이 실제 사용하는 운영 서비스',
      description: 'SSAFY 입과 전 Django로 직접 기획·개발·배포했습니다. 과제에서 끝나지 않고 실제 사용자의 의견을 반영하며 서비스를 운영하고 있습니다.',
      highlights: ['기획부터 배포까지', '실제 사용자 운영', '피드백 기반 개선'], tech: ['Python', 'Django', 'JavaScript', 'SQL'], link: 'https://kazakuteng.pythonanywhere.com/', image: kazakutengImage, imageAlt: 'Kazakuteng 점수 랭킹 화면'
    }
  ],
  current: ['SSAFY 특화 프로젝트 기획', '공통 프로젝트 회고 정리', '백엔드 게임 API 구현 사례 문서화', '영상 포트폴리오 자료 정리'],
  nav: [
    { label: 'About', href: '#about' }, { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' }, { label: 'Projects', href: '#projects' }, { label: 'Contact', href: '#contact' }
  ]
}
