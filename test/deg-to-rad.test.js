import { degToRad } from '../src/math-toolbox'

describe('Convert degrees to radians', () => {
  it('Expect 180 degrees to be ≈ 3.14159 radians', () => {
    expect(degToRad(180)).toBeCloseTo(3.14159, 5)
  })
})
