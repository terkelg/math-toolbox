import { distance } from '../src/math-toolbox'

describe('Returns the euclidian distance between the two given set of coordinates', () => {
  it('Expect distance between (3,2) and (5,-1) to ≈ 3.60555', () => {
    expect(distance(3, 2, 5, -1)).toBeCloseTo(3.60555, 5)
  })
})
