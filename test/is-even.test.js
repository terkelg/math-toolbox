import { isEven } from '../src/math-toolbox'

describe('Returns true if the number given is even', () => {
  it('Expect input value 5 to be false', () => {
    expect(isEven(5)).toBe(false)
  })

  it('Expect input value 2 to be true', () => {
    expect(isEven(2)).toBe(true)
  })
})
