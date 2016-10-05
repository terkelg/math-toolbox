import { map } from '../src/math-toolbox'

describe('Check mapping', () => {
  it('Map input 1 in range 1-100 to value between 0-10', () => {
    expect(map(1, 0, 100, 0, 10)).toBe(0.1)
  })

  it('Map input 5 in range 0-10 to value between 0-100', () => {
    expect(map(5, 0, 10, 0, 100)).toBe(50)
  })
})
