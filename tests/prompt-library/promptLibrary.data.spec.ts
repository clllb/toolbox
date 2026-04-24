import { describe, expect, it } from 'vitest'

describe('prompt library test harness', () => {
  it('runs Vitest in jsdom mode', () => {
    expect(document.createElement('div').tagName).toBe('DIV')
  })
})
