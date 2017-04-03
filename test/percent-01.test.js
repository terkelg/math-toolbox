import { percent01 } from '../src/math-toolbox'

describe('Calculate percentage to clamped decimal value between 0-1', () => {
  it('Expect 125 of 100 to be 1', () => {
    expect(percent01(125, 100)).toBe(1)
  })

  it('Expect 1 of 100 to in base 2 to be 0.5', () => {
    expect(percent01(1, 100, 2)).toBe(0)
  })

  it('Expect 50 of 100 to be 0.5', () => {
    expect(percent01(50, 100)).toBe(0.5)
  })
})
