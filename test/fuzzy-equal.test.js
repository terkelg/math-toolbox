import { fuzzyEqual } from '../src/math-toolbox'

describe('Fuzzy equal', () => {
  it('Expect fuzzy equal 10 == 20 with default epsilon 0.0001 to be false', () => {
    expect(fuzzyEqual(10, 20)).toBe(false)
  })

  it('Expect fuzzy equal 10 == 11 with epsilon 3 to be true', () => {
    expect(fuzzyEqual(10, 11, 3)).toBe(true)
  })
})
