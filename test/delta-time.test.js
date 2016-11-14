import { deltaTime } from '../src/math-toolbox'

describe('Calculate delta time', () => {
  it('Test delta time with 200 ms deifference', () => {
    expect(deltaTime(752976000, 752976200)).toBe(200) // Some time the test is too slow
  })
})
