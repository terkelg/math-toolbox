import { linearToGammaSpace } from '../src/math-toolbox'

describe('Linear to gamma space', () => {
  it('Expect 0.25 to be 0.5325', () => {
    expect(linearToGammaSpace(0.25)).toBeCloseTo(0.5325)
  })
})
