import { mod } from '../src/math-toolbox'

describe('Mod', () => {
  it('Expect (13, 10) to be 3', () => {
    expect(mod(13, 10)).toBe(3)
  })
})
