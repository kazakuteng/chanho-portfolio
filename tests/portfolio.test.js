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

  it('uses visible placeholders for unknown personal information', () => {
    expect(portfolio.profile.name).toBe('YOUR NAME')
    expect(portfolio.profile.email).toContain('example.com')
  })
})
