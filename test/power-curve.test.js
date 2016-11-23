import { powerCurve } from '../src/math-toolbox'

describe('Power curve', () => {
  it('Expect (0.2, 0, 1) to be 0.8', () => {
    expect(powerCurve(0.2, 0, 1)).toBe(0.8)
  })
})
