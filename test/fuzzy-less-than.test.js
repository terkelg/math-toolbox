import { fuzzyLessThan } from '../src/math-toolbox'

describe('Fuzzy less than', () => {
  it('Expect fuzzy 10.55 < 10.50 with epsilon 0.15 to be true', () => {
    expect(fuzzyLessThan(10.55, 10.50, 0.15)).toBe(true)
  })

  it('Expect fuzzy 10.5 < 10.55 with epsilon 0.05 to be true', () => {
    expect(fuzzyLessThan(10.55, 10.55, 0.05)).toBe(true)
  })
})
