import { deltaTime } from '../src/math-toolbox'

describe('Calculate delta time', () => {
  it('Test with default param of Date.now()', () => {
    expect(deltaTime(Date.now() - 200)).toBe(200)
  })
})
