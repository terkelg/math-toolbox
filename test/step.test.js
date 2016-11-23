import { step } from '../src/math-toolbox'

describe('Test step function', () => {
  it('Expect (1, 0.5) to be 0', () => {
    expect(step(1, 0.5)).toBe(0)
  })

  it('Expect (1, 2) to be 1', () => {
    expect(step(1, 2)).toBe(1)
  })
})
