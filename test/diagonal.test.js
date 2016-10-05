import { diagonal } from '../src/math-toolbox'

describe('Calculate the diagonal of an rectangle', () => {
  it('Diagonal of 30x13 to be ≈ 32.6956', () => {
    expect(diagonal(30, 13)).toBeCloseTo(32.6956, 4)
  })

  it('Diagonal of 16x10 to be ≈ 18.868', () => {
    expect(diagonal(16, 10)).toBeCloseTo(18.868, 3)
  })
})
