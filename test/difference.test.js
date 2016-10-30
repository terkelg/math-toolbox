import { difference } from '../src/math-toolbox'

describe('Calculate absolute difference', () => {
  it('Expect difference between 10 and 20 t0 be 10', () => {
    expect(difference(10, 20)).toBe(10)
  })
})
