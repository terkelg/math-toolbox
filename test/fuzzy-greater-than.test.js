import { fuzzyGreaterThan } from '../src/math-toolbox'

describe('Fuzzy greater than', () => {
  it('Expect fuzzy 10.5 > 10.55 with epsilon 0.08 to be true', () => {
    expect(fuzzyGreaterThan(10.5, 10.55, 0.08)).toBe(true)
  })

  it('Expect fuzzy 10.5 > 10.55 with epsilon 0.05 to be false', () => {
    expect(fuzzyGreaterThan(10.5, 10.55, 0.05)).toBe(false)
  })
})
