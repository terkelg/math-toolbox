import { impulse } from '../src/math-toolbox'

describe('Impulse', () => {
  it('Expect (0.5, 10) to be close to 0.091578', () => {
    expect(impulse(0.5, 10)).toBeCloseTo(0.091578, 6)
  })
})
