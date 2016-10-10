import { fuzzyFloor } from '../src/math-toolbox'

describe('Fuzzy floor', () => {
  it('Expect fuzzy floor(1.12-1) to be 2', () => {
    expect(fuzzyFloor(1.12, 1)).toBe(2)
  })
})
