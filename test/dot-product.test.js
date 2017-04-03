import { dotProduct } from '../src/math-toolbox'

describe('Calculate dot product', () => {
  it('Expect -24', () => {
    expect(dotProduct(1, 1, 4, 4, 5, 6, 2, 1)).toBe(-24)
  })
})
