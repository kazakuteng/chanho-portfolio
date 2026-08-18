<script setup>
import { ref } from 'vue'
import { portfolio } from './data/portfolio'

const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }
</script>

<template>
  <div class="site-shell">
    <header class="topbar">
      <a class="logo" href="#top" aria-label="처음으로"><span>Y</span>N</a>
      <button class="menu-button" :aria-expanded="menuOpen" aria-label="메뉴 열기" @click="menuOpen = !menuOpen">
        {{ menuOpen ? '닫기' : '메뉴' }}
      </button>
      <nav :class="['nav', { open: menuOpen }]" aria-label="주요 메뉴">
        <a v-for="item in portfolio.nav" :key="item.href" :href="item.href" @click="closeMenu">{{ item.label }}</a>
      </nav>
      <a class="top-contact" :href="`mailto:${portfolio.profile.email}`">Let’s talk <span>↗</span></a>
    </header>

    <main id="top">
      <section class="hero section-pad">
        <div class="hero-grid" aria-hidden="true" />
        <div class="hero-copy">
          <p class="eyebrow">
            <span class="pulse" /> OPEN TO OPPORTUNITIES
          </p>
          <p class="hero-role">
            {{ portfolio.profile.role }}
          </p>
          <h1>{{ portfolio.profile.headline }}</h1>
          <p class="hero-intro">
            {{ portfolio.profile.intro }}
          </p>
          <div class="hero-actions">
            <a class="button primary" href="#projects">프로젝트 보기 <span>↓</span></a>
            <a class="button ghost" :href="portfolio.profile.github" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          </div>
        </div>
        <aside class="code-card" aria-label="개발자 소개 카드">
          <div class="code-dots">
            <i /><i /><i /><span>developer.json</span>
          </div>
          <pre><span class="muted">{</span>
  <span class="key">"name"</span>: <span class="value">"{{ portfolio.profile.name }}"</span>,
  <span class="key">"focus"</span>: [
    <span class="value">"Backend"</span>,
    <span class="value">"AI"</span>
  ],
  <span class="key">"mindset"</span>: <span class="value">"Ship & Learn"</span>,
  <span class="key">"status"</span>: <span class="accent">"building"</span>
<span class="muted">}</span></pre>
        </aside>
      </section>

      <section id="about" class="stats section-pad" aria-label="핵심 경험">
        <article v-for="stat in portfolio.stats" :key="stat.label">
          <strong>{{ stat.value }}</strong><span>{{ stat.label }}</span>
        </article>
      </section>

      <section id="experience" class="section-pad content-section">
        <header class="section-head">
          <div>
            <p class="kicker">
              01 / JOURNEY
            </p><h2>배움이 서비스가 되기까지</h2>
          </div><p>개발을 배우는 데서 멈추지 않고,<br>사용되는 결과물로 연결해 왔습니다.</p>
        </header>
        <div class="timeline">
          <article v-for="(item, index) in portfolio.journey" :key="item.period" class="timeline-item">
            <div class="timeline-index">
              0{{ index + 1 }}
            </div>
            <div class="timeline-period">
              {{ item.period }}
            </div>
            <div class="timeline-content">
              <span class="tag">{{ item.tag }}</span><h3>{{ item.title }}</h3><p>{{ item.body }}</p>
            </div>
          </article>
        </div>
      </section>

      <section id="skills" class="section-pad content-section skills-section">
        <header class="section-head">
          <div>
            <p class="kicker">
              02 / TOOLKIT
            </p><h2>기술보다 사용 경험을 말합니다</h2>
          </div>
        </header>
        <div class="skill-grid">
          <article v-for="skill in portfolio.skills" :key="skill.group" class="skill-card">
            <p class="skill-number">
              {{ String(portfolio.skills.indexOf(skill) + 1).padStart(2, '0') }}
            </p><h3>{{ skill.group }}</h3>
            <div class="chip-list">
              <span v-for="item in skill.items" :key="item">{{ item }}</span>
            </div><p>{{ skill.note }}</p>
          </article>
        </div>
      </section>

      <section id="projects" class="section-pad content-section">
        <header class="section-head">
          <div>
            <p class="kicker">
              03 / SELECTED WORK
            </p><h2>문제를 해결한 프로젝트</h2>
          </div><p>최신 팀 프로젝트와 실제 운영 경험을<br>가장 먼저 보여드립니다.</p>
        </header>
        <div class="projects">
          <article v-for="project in portfolio.projects" :key="project.number" class="project-card">
            <div class="project-visual">
              <span class="project-number">{{ project.number }}</span><span class="status">● {{ project.status }}</span>
              <div class="visual-word">
                {{ project.number === '01' ? 'PLAY' : 'LIVE' }}
              </div>
            </div>
            <div class="project-info">
              <p class="project-subtitle">
                {{ project.subtitle }}
              </p><h3>{{ project.title }}</h3><p>{{ project.description }}</p>
              <ul>
                <li v-for="item in project.highlights" :key="item">
                  {{ item }}
                </li>
              </ul>
              <div class="tech-list">
                <span v-for="tech in project.tech" :key="tech">{{ tech }}</span>
              </div>
              <a :href="project.link" :target="project.link.startsWith('http') ? '_blank' : null" rel="noreferrer">{{ project.link.startsWith('http') ? '서비스 방문하기' : '상세 내용 준비 중' }} <span>↗</span></a>
            </div>
          </article>
        </div>
      </section>

      <section class="now section-pad content-section">
        <div>
          <p class="eyebrow">
            <span class="pulse" /> CURRENTLY WORKING ON
          </p><h2>오늘도 연결하고,<br>실험하고 있습니다.</h2>
        </div>
        <ul>
          <li v-for="(item, index) in portfolio.current" :key="item">
            <span>0{{ index + 1 }}</span>{{ item }}
          </li>
        </ul>
      </section>
    </main>

    <footer id="contact" class="footer section-pad">
      <p class="kicker">
        04 / CONTACT
      </p><h2>함께 해결할 문제가 있다면,<br><a :href="`mailto:${portfolio.profile.email}`">이야기를 나눠요. ↗</a></h2>
      <div class="footer-bottom">
        <span>© 2026 {{ portfolio.profile.name }}</span><a :href="portfolio.profile.github" target="_blank" rel="noreferrer">GitHub ↗</a><a href="#top">Back to top ↑</a>
      </div>
    </footer>
  </div>
</template>
