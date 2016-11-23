import { smoothMax } from '../src/math-toolbox'

describe('Smooth Max', () => {
  it('Expect (1, 5, 8) to be close to 0.62726', () => {
    expect(smoothMax(1, 5, 8)).toBeCloseTo(0.627268, 5)
  })
})
