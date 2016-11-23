import { fract } from '../src/math-toolbox'

describe('Fract', () => {
  it('Expect 1.50 to be 0.5', () => {
    expect(fract(1.50)).toBe(0.5)
  })
})
