import { parabola } from '../src/math-toolbox'

describe('Check parabola', () => {
  it('Parabola x = 1 and k = 5', () => {
    expect(parabola(1, 5)).toBe(0)
  })
})
