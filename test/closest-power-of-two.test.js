import { closestPowerOfTwo } from '../src/math-toolbox'

describe('Find closest power of two', () => {
  it('Expect nearest power of two with 127 to be 128', () => {
    expect(closestPowerOfTwo(127)).toBe(128)
  })

  it('Expect nearest power of two with 180 to be 128', () => {
    expect(closestPowerOfTwo(180)).toBe(128)
  })
})
