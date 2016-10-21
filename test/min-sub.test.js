import { minSub } from '../src/math-toolbox'

describe('Subtracts the given amount from the value, but never lets the value go below the specified minimum', () => {
  it('Substract 10 from 30 with min 25, expect to it to return 25', () => {
    expect(minSub(10, 30, 25)).toBe(25)
  })

  it('Substract 10 from 30 with min 35, expect to it to return 35', () => {
    expect(minSub(10, 30, 35)).toBe(35)
  })
})
