import { describe, expect, it } from 'vitest'
import { portfolio } from '../src/data/portfolio'

describe('portfolio content', () => {
  it('keeps required sections in navigation', () => {
    expect(portfolio.nav.map((item) => item.href)).toEqual(['#about', '#experience', '#skills', '#projects', '#contact'])
  })

  it('includes the live Django service', () => {
    const liveProject = portfolio.projects.find((project) => project.status === 'LIVE SERVICE')
    expect(liveProject?.link).toBe('https://kazakuteng.pythonanywhere.com/')
    expect(liveProject?.tech).toContain('Django')
  })

  it('uses confirmed personal contact information', () => {
    expect(portfolio.profile.name).toBe('정찬호')
    expect(portfolio.profile.email).toBe('poo0404@naver.com')
    expect(portfolio.profile.github).toBe('https://github.com/kazakuteng/')
  })

  it('includes the awarded SSAFY common project deployment', () => {
    const commonProject = portfolio.projects.find((project) => project.title === '빵긋')
    expect(commonProject?.status).toBe('1ST PLACE')
    expect(commonProject?.link).toBe('https://i15a501.p.ssafy.io/')
    expect(commonProject?.highlights).toContain('백엔드 게임 API 구현')
  })

  it('connects project screenshots with accessible descriptions', () => {
    portfolio.projects.forEach((project) => {
      expect(project.image).toMatch(/project-/)
      expect(project.imageAlt).toBeTruthy()
    })
  })
})
