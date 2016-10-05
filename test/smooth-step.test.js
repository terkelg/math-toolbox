import { smoothStep } from '../src/math-toolbox'

describe('Smooth step values', () => {
  it('Smooth value 50 between 0-100', () => {
    expect(smoothStep(0, 100, 50)).toBe(0.5)
  })

  it('Smooth value 50 between 10-50', () => {
    expect(smoothStep(10, 50, 50)).toBe(1)
  })
})
