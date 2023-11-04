import { randomSign } from '../src/math-toolbox'

describe('Return random sign 1 or -1', () => {
  const sign = randomSign()

  it('Should be greater than or equal to -1', () => {
    expect(sign).toBeGreaterThanOrEqual(-1)
  })

  it('Should be less than or equal to 1', () => {
    expect(sign).toBeLessThanOrEqual(1)
  })
})
