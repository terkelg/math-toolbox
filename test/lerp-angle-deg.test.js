import { lerpAngleDeg } from '../src/math-toolbox'

describe('Lerp Angle Deg', () => {
  it('Expect (0, 10, 0.2) to be 2', () => {
    expect(lerpAngleDeg(0, 10, 0.2)).toBe(2)
  })
})
