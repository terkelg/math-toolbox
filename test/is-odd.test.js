import { isOdd } from '../src/math-toolbox'

describe('Returns true if the number given is odd', () => {
  it('Expect input value 5 to be true', () => {
    expect(isOdd(5)).toBe(true)
  })

  it('Expect input value 2 to be false', () => {
    expect(isOdd(2)).toBe(false)
  })
})
