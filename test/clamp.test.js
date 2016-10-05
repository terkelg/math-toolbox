import { clamp } from '../src/math-toolbox'

describe('Force a value within the boundaries by clamping it to the range `min`, `max`.', () => {
  it('Clamp 30 between 10 and 20 and expect 30', () => {
    expect(clamp(10, 20, 30)).toBe(20)
  })

  it('Clamp 30 between 20 and 45 and expect 30', () => {
    expect(clamp(20, 45, 30)).toBe(30)
  })

  it('Clamp 10 between 20 and 45 and expect 20', () => {
    expect(clamp(20, 45, 10)).toBe(20)
  })
})
