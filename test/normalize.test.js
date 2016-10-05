import { normalize } from '../src/math-toolbox'

describe('Normalize values', () => {
  it('Normalize 0-100 with input 50', () => {
    expect(normalize(0, 100, 50)).toBe(0.5)
  })

  it('Normalize 1-10 with input 1', () => {
    expect(normalize(1, 10, 1)).toBe(0)
  })
})
