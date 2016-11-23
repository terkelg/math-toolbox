import { almostIdentity } from '../src/math-toolbox'

describe('Almost Identity', () => {
  it('Expect 2 when input is 0, when n = 2', () => {
    expect(almostIdentity(0, 10, 2)).toBe(2)
  })

  it('Expect 2.512 when input is (2, 1, 2)', () => {
    expect(almostIdentity(2, 1, 2)).toBe(2)
  })
})
