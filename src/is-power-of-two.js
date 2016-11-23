/**
 * Checks if a number is a power of two.
 *
 * @param   {number}  value Number to test.
 * @returns {boolean} returns true if the value is power of two.
 */
function isPowerOfTwo (value) {
  return value !== 0 && (value & (value - 1)) === 0
}

export { isPowerOfTwo }
