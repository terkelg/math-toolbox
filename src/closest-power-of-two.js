/**
 * Returns the closest power of two value.
 *
 * @param  {number} value - Value.
 * @return {number} The nearest power of 2i.
 */
function closestPowerOfTwo (value) {
  return Math.pow(2, Math.round(Math.log(value) / Math.log(2)))
}

export { closestPowerOfTwo }
