import { lerp, mix } from '../src/math-toolbox'

describe('Lerp with x = 0, y = 1 and interpolation value 0.5 to be 0.5', () => {
  it('lerp', () => {
    expect(lerp(0, 1, 0.5)).toBe(0.5)
  })

  it('test mix alias', () => {
    expect(mix(0, 1, 0.5)).toBe(0.5)
  })
})
