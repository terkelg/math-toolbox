import { deltaAngleRad } from '../src/math-toolbox'

describe('Calculate the shortest difference between to given angles', () => {
  it('Expect (1.39626, 1.5708) to be close to 0.1745399', () => {
    expect(deltaAngleRad(1.39626, 1.5708)).toBeCloseTo(0.1745399, 5)
  })
})
