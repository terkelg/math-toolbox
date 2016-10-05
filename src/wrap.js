/**
 * Ensures that the value always stays between min and max, by wrapping the value around
 * If 'max' is not larger than 'min' the result is 0
 *
 * @param {number} value - The value to wrap
 * @param {number} min   - The minimum the value is allowed to be.
 * @param {number} max   - The maximum the value is allowed to be, should be larger than 'min'.
 * @return {number} Wrapped value.
 */
function wrap (value, min, max) {
  const range = max - min
  if (range <= 0) return 0

  let result = (value - min) % range
  if (result < 0) result += range

  return result + min
}

export { wrap }
