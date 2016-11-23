import { gammaToLinearSpace } from '../src/math-toolbox'

describe('Gamma to linear color space', () => {
  it('Expect 1 to be 1', () => {
    expect(gammaToLinearSpace(1)).toBe(1)
  })

  it('Expect 0.5 to be close to 0.2176', () => {
    expect(gammaToLinearSpace(0.5)).toBeCloseTo(0.2176, 4)
  })
})
