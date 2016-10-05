import { isPowerOfTwo } from '../src/math-toolbox'

describe('Returns true if the value is power of two.', () => {
  it('Expect input value 5 to be false', () => {
    expect(isPowerOfTwo(5)).toBe(false)
  })

  it('Expect input value 2 to be true', () => {
    expect(isPowerOfTwo(2)).toBe(true)
  })
})
