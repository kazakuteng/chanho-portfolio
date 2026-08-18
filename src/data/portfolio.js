// 개인 정보와 포트폴리오 콘텐츠는 이 파일 한 곳에서 수정합니다.
export const portfolio = {
  profile: {
    name: 'YOUR NAME',
    role: 'Backend × AI Developer',
    headline: '사용되는 서비스를 만들고,\nAI로 더 나은 경험을 설계합니다.',
    intro: 'Python과 Django로 웹 개발을 시작해 실제 동호회 서비스를 운영하고 있습니다. 지금은 Spring Boot와 FastAPI로 백엔드와 AI를 연결하는 개발자로 성장하고 있습니다.',
    email: 'your.email@example.com',
    github: 'https://github.com/YOUR_GITHUB',
    resume: '#'
  },
  stats: [
    { value: 'LIVE', label: '실사용 서비스 운영 중' },
    { value: 'SSAFY', label: 'Python 비전공 트랙 수료' },
    { value: 'NOW', label: '공통 프로젝트 진행 중' }
  ],
  journey: [
    { period: 'Before SSAFY', title: '서비스를 직접 만들고 운영하다', body: 'Django로 동호회 웹 서비스를 기획·개발하고 PythonAnywhere에 배포했습니다. 실제 구성원들과 사용하며 기능 개선과 운영을 경험하고 있습니다.', tag: '운영 경험' },
    { period: 'SSAFY', title: 'Python에서 웹과 AI로 확장하다', body: '비전공 Python 트랙에서 Python, AI, JavaScript, SQL, Django를 중심으로 학습하고 Git 기반 협업과 프로젝트 개발 과정을 익혔습니다.', tag: '교육 수료' },
    { period: 'Present', title: '백엔드와 AI를 연결하다', body: 'SSAFY 공통 프로젝트에서 팀과 함께 서비스를 만들며 Spring Boot, FastAPI, Redis, 생성형 AI를 실제 제품 구조 안에서 다루고 있습니다.', tag: '진행 중' }
  ],
  skills: [
    { group: 'Backend', items: ['Python', 'Django', 'Spring Boot', 'FastAPI'], note: 'REST API와 서비스 로직을 설계하고 AI 추론 서버를 연결합니다.' },
    { group: 'Data', items: ['SQL', 'MySQL', 'Redis'], note: '관계형 모델링부터 세션과 실시간 데이터 흐름까지 고민합니다.' },
    { group: 'Frontend', items: ['JavaScript', 'Vue 3', 'HTML', 'CSS'], note: 'API가 사용자 경험으로 완성되는 화면을 직접 구현합니다.' },
    { group: 'AI', items: ['Hugging Face', 'FLUX', 'SDXL', 'LoRA'], note: '생성형 AI를 서비스 기능으로 연결하는 방법을 실험합니다.' }
  ],
  projects: [
    {
      number: '01', status: 'IN PROGRESS', title: 'AI 아동 교육 플랫폼', subtitle: '모션 인식과 생성형 AI를 활용한 놀이 서비스',
      description: '6~9세 아동이 몸을 움직이며 즐길 수 있는 게임 경험을 팀과 함께 개발하고 있습니다. 안정적인 게임 흐름과 AI 기능의 서비스 연동에 집중합니다.',
      highlights: ['Spring Boot 백엔드', 'FastAPI AI 서버', 'Redis 세션 설계'], tech: ['Java', 'Spring Boot', 'FastAPI', 'Redis', 'Vue 3'], link: '#'
    },
    {
      number: '02', status: 'LIVE SERVICE', title: 'Kazakuteng', subtitle: '동호회 구성원이 실제 사용하는 운영 서비스',
      description: 'SSAFY 입과 전 Django로 직접 기획·개발·배포했습니다. 과제에서 끝나지 않고 실제 사용자의 의견을 반영하며 서비스를 운영하고 있습니다.',
      highlights: ['기획부터 배포까지', '실제 사용자 운영', '피드백 기반 개선'], tech: ['Python', 'Django', 'JavaScript', 'SQL'], link: 'https://kazakuteng.pythonanywhere.com/'
    }
  ],
  current: ['AI 캐릭터 생성 파이프라인', 'FLUX · SDXL · LoRA 실험', 'FastAPI 추론 API', 'Redis 기반 세션 관리'],
  nav: [
    { label: 'About', href: '#about' }, { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' }, { label: 'Projects', href: '#projects' }, { label: 'Contact', href: '#contact' }
  ]
}
