import { nextPowerOfTwo } from '../src/math-toolbox'

describe('Test next power of two', () => {
  it('Expect next power of two with 1022 to be 1024', () => {
    expect(nextPowerOfTwo(1022)).toBe(1024)
  })

  it('Expect next power of two with 400 to be 512', () => {
    expect(nextPowerOfTwo(400)).toBe(512)
  })
})
