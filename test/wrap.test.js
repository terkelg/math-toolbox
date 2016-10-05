import { wrap } from '../src/math-toolbox'

describe('Wrap any value that is not inbetween the two bounds', () => {
  it('Expect value 1 in range 0-10 to return 1', () => {
    expect(wrap(1, 0, 10)).toBe(1)
  })

  it('Expect value 11 in range 0-10 to return 1', () => {
    expect(wrap(11, 0, 10)).toBe(1)
  })

  it('Expect value -2 in range 0-10 to return 8', () => {
    expect(wrap(-2, 0, 10)).toBe(8)
  })

  it('Expect value 10 in range 1 - -10 to return 0', () => {
    expect(wrap(10, 1, -10)).toBe(0)
  })
})
