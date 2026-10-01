<script setup>
import { ref } from 'vue'
import { portfolio } from './data/portfolio'

const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }
</script>

<template>
  <div class="site-shell">
    <a class="skip-link" href="#main">본문으로 이동</a>
    <header class="topbar">
      <a class="logo" href="#top" @click="closeMenu">{{ portfolio.profile.name }}<span>포트폴리오</span></a>
      <button class="menu-button" aria-controls="main-nav" :aria-expanded="menuOpen" :aria-label="menuOpen ? '메뉴 닫기' : '메뉴 열기'" @click="menuOpen = !menuOpen">
        {{ menuOpen ? '닫기' : '메뉴' }}
      </button>
      <nav id="main-nav" :class="['nav', { open: menuOpen }]" aria-label="주요 메뉴" @keydown.esc="closeMenu">
        <a v-for="item in portfolio.nav" :key="item.href" :href="item.href" @click="closeMenu">{{ item.label }}</a>
      </nav>
    </header>

    <main id="main">
      <div id="top" />
      <section id="about" class="hero section-pad">
        <p class="eyebrow">
          {{ portfolio.profile.role }}
        </p>
        <h1>{{ portfolio.profile.headline }}</h1>
        <p class="hero-intro">
          {{ portfolio.profile.intro }}
        </p>
        <div class="hero-actions">
          <a class="button primary" href="#projects">프로젝트 보기 <span aria-hidden="true">↓</span></a>
          <a class="text-link" :href="portfolio.profile.github" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        </div>
        <div class="summary-grid" aria-label="주요 경험 요약">
          <a v-for="item in portfolio.summary" :key="item.title" :href="item.href" class="summary-item">
            <h2>{{ item.title }} <span aria-hidden="true">↗</span></h2>
            <p>{{ item.body }}</p>
          </a>
        </div>
      </section>

      <section id="projects" class="section-pad content-section">
        <header class="section-head">
          <h2>프로젝트</h2>
          <p>제가 맡은 역할과 구현한 기능을 정리했습니다.</p>
        </header>
        <div class="projects">
          <article v-for="project in portfolio.projects" :id="`project-${project.id}`" :key="project.id" class="project-card">
            <div class="project-overview">
              <p class="project-meta">
                {{ project.statusLabel }}
              </p>
              <h3>{{ project.title }}</h3>
              <p class="project-subtitle">
                {{ project.subtitle }}
              </p>
              <p class="project-description">
                {{ project.description }}
              </p>
              <dl class="project-role">
                <dt>담당</dt><dd>{{ project.role }}</dd>
              </dl>
              <div class="tech-list" aria-label="사용 기술">
                <span v-for="tech in project.tech" :key="tech">{{ tech }}</span>
              </div>
              <a v-if="project.link" class="text-link" :href="project.link" target="_blank" rel="noreferrer">서비스 보기 <span aria-hidden="true">↗</span></a>
            </div>
            <figure v-if="project.image" class="project-image">
              <img :src="project.image" :alt="project.imageAlt" loading="lazy">
              <figcaption>{{ project.imageAlt }}</figcaption>
            </figure>
            <div v-if="project.metrics" class="project-metrics">
              <table>
                <caption>{{ project.metricCaption }}</caption>
                <thead>
                  <tr>
                    <th scope="col">
                      용도 / 모델
                    </th><th scope="col">
                      AP50-95
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="metric in project.metrics" :key="metric.purpose">
                    <th scope="row">
                      {{ metric.purpose }}<span>{{ metric.model }}</span><small>{{ metric.dataset }}</small>
                    </th>
                    <td>{{ metric.value }}</td>
                  </tr>
                </tbody>
              </table>
              <p class="metric-note">
                {{ project.metricNote }}
              </p>
            </div>
            <div class="project-details">
              <div v-for="detail in project.details" :key="detail.title" class="detail-item">
                <h4>{{ detail.title }}</h4>
                <p>{{ detail.body }}</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="experience" class="section-pad content-section">
        <header class="section-head">
          <h2>경험</h2><p>서비스 운영에서 팀 프로젝트까지</p>
        </header>
        <div class="timeline">
          <article v-for="item in portfolio.journey" :key="item.period" class="timeline-item">
            <p class="timeline-period">
              {{ item.period }}
            </p>
            <div class="timeline-content">
              <h3>{{ item.title }}</h3><p>{{ item.body }}</p>
            </div>
            <span class="tag">{{ item.tag }}</span>
          </article>
        </div>
      </section>

      <section id="skills" class="section-pad content-section">
        <header class="section-head">
          <h2>사용 기술</h2><p>프로젝트와 학습에 사용한 도구들</p>
        </header>
        <div class="skill-grid">
          <article v-for="skill in portfolio.skills" :key="skill.group" class="skill-item">
            <h3>{{ skill.group }}</h3>
            <div>
              <div class="tech-list">
                <span v-for="item in skill.items" :key="item">{{ item }}</span>
              </div><p>{{ skill.note }}</p>
            </div>
          </article>
        </div>
      </section>
    </main>

    <footer id="contact" class="footer section-pad">
      <div><h2>연락</h2><p>프로젝트와 개발 경험에 대해 더 이야기하고 싶다면 연락 주세요.</p></div>
      <div class="contact-links">
        <a :href="`mailto:${portfolio.profile.email}`">{{ portfolio.profile.email }} <span aria-hidden="true">↗</span></a><a :href="portfolio.profile.github" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
      </div>
      <div class="footer-bottom">
        <span>© 2026 {{ portfolio.profile.name }}</span><a href="#top">맨 위로 ↑</a>
      </div>
    </footer>
  </div>
</template>
