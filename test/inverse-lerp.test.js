import { inverseLerp } from '../src/math-toolbox'

describe('Inverse Lerp', () => {
  it('Expect (1, 10, 5) to be close to 0.44444', () => {
    expect(inverseLerp(1, 10, 5)).toBeCloseTo(0.44444, 5)
  })
})
