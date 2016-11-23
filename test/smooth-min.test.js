import { smoothMin } from '../src/math-toolbox'

describe('Smooth Min', () => {
  it('Expect (1, 5, 8) to be close to 0.99999', () => {
    expect(smoothMin(1, 5, 8)).toBeCloseTo(0.999999, 5)
  })
})
