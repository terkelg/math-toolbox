import { randomFloat } from '../src/math-toolbox'

describe('Random float in range 5-10 with a precision 4', () => {
  it('Expect value to be less than 10', () => {
    expect(randomFloat(5, 10, 4)).toBeLessThanOrEqual(10)
  })

  it('Expect value to be greater than 5', () => {
    expect(randomFloat(5, 10, 4)).toBeGreaterThanOrEqual(5)
  })
})
