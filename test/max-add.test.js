import { maxAdd } from '../src/math-toolbox'

describe('Adds the given amount to the value, but never lets the value go over the specified maximum', () => {
  it('Add 10 to 30 with max 35, expect to it to return 35', () => {
    expect(maxAdd(10, 30, 35)).toBe(35)
  })

  it('Add 10 to 30 with max 45, expect to it to return 40', () => {
    expect(maxAdd(10, 30, 45)).toBe(40)
  })
})
