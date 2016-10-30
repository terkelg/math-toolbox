import { within } from '../src/math-toolbox'

describe('Checks if two values are within the given tolerance of each other', () => {
  it('Expect 20.5 and 21 to be within each other with the tolerance 0.5', () => {
    expect(within(20.5, 21, 0.50)).toBe(true)
  })
})
