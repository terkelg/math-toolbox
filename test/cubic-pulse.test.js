import { cubicPulse } from '../src/math-toolbox'

describe('Cubic Pulse', () => {
  it('Expect (0, 1, 0.5) to be 0.5', () => {
    expect(cubicPulse(0, 1, 0.5)).toBe(0.5)
  })

  it('Expect (0, 1, 0.65) to be close to 0.281749', () => {
    expect(cubicPulse(0, 1, 0.65)).toBeCloseTo(0.281749, 5)
  })

  it('Expect (0, 0.5, 0.65) to be 0', () => {
    expect(cubicPulse(0, 0.5, 0.65)).toBe(0)
  })
})
