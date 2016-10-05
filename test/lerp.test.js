import { lerp } from '../src/math-toolbox'

test('Lerp with x = 0, y = 1 and interpolation value 0.5 to be 0.5', () => {
  expect(lerp(0, 1, 0.5)).toBe(0.5)
})
