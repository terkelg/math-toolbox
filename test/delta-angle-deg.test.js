import { deltaAngleDeg } from '../src/math-toolbox'

describe('Calculate the shortest difference between to given angles', () => {
  it('Expect (90, 80) to be 10', () => {
    expect(deltaAngleDeg(90, 80)).toBe(10)
  })
})
