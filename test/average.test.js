import { average } from '../src/math-toolbox'

describe('Calculate average', () => {
  it('Expect the everage of 10, 10, 10, 20, 30 to be 16', () => {
    expect(average(10, 20, 10, 10, 30)).toBe(16)
  })
})
