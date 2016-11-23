import { expStep } from '../src/math-toolbox'

describe('Exponential step', () => {
  it('Expect (1, 0.5, 0.2) to be close to 0.60653', () => {
    expect(expStep(1, 0.5, 0.2)).toBeCloseTo(0.60653, 5)
  })
})
