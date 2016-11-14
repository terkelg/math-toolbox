import { clamp01 } from '../src/math-toolbox'

describe('Clamp value between 0 and 1', () => {
  it('Expect clamp01 with 1 to be 1', () => {
    expect(clamp01(1)).toBe(1)
  })

  it('Expect clamp01 with 0.5 to be 0.5', () => {
    expect(clamp01(0.5)).toBe(0.5)
  })

  it('Expect clamp01 with -2 to be 0', () => {
    expect(clamp01(-2)).toBe(0)
  })
})
