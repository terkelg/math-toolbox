import { randomInt } from '../src/math-toolbox'

describe('Random int in range 5-10', () => {
  const value = randomInt(5, 10)
  it('Expect value to be less than 10', () => {
    expect(value).toBeLessThanOrEqual(10)
  })

  it('Expect value to be greater than 5', () => {
    expect(value).toBeGreaterThanOrEqual(5)
  })
})
