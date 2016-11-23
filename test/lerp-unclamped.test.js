import { lerpUnclamped } from '../src/math-toolbox'

describe('Lerp Unclamped', () => {
  it('Expect (0, 10, 0.2) to be 2', () => {
    expect(lerpUnclamped(0, 10, 0.2)).toBe(2)
  })

  it('Expect (0, 10, 2) to be 10', () => {
    expect(lerpUnclamped(0, 10, 2)).toBe(10)
  })

  it('Expect (0, 10, 0.5) to be 5', () => {
    expect(lerpUnclamped(0, 10, 0.5)).toBe(5)
  })

  it('Expect (0, 10, 0) to be 0', () => {
    expect(lerpUnclamped(0, 10, 0)).toBe(0)
  })
})
