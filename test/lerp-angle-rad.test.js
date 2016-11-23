import { lerpAngleRad } from '../src/math-toolbox'

describe('Lerp Angle Rad', () => {
  it('Expect (0, 10, 0.2) to be 2', () => {
    expect(lerpAngleRad(3.14159, 1.0472, 0.174533)).toBeCloseTo(3.507130, 5)
  })
})
