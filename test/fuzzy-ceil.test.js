import { fuzzyCeil } from '../src/math-toolbox'

describe('Fuzzy ceil', () => {
  it('Expect fuzzy ceiling(1.12+1) to be 3', () => {
    expect(fuzzyCeil(1.12, 1)).toBe(3)
  })
})
