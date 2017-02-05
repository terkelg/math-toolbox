import { gcd } from '../src/math-toolbox'

describe('Compute the greatest common divisor', () => {
  it('Expect 48, 18 to be 6', () => {
    expect(gcd(48, 18)).toBe(6)
  })

  it('Expect 54, 24 to be 6', () => {
    expect(gcd(54, 24)).toBe(6)
  })

  it('Expect 48, 180 to be 12', () => {
    expect(gcd(48, 180)).toBe(12)
  })
})
