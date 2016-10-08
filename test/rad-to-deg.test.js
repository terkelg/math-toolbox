import { radToDeg } from '../src/math-toolbox'

describe('Convert radians to degrees', () => {
  it('Expect 1.5708 radians to be ≈ 90 degrees', () => {
    expect(radToDeg(1.5708)).toBeCloseTo(90.000, 3)
  })
})
