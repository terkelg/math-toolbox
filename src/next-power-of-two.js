/**
 * Returns the next power of two value.
 *
 * @param  {number} v - Value.
 * @return {number} The next power of two.
 */
function nextPowerOfTwo (v) {
  return Math.pow(2, Math.ceil(Math.log(v) / Math.log(2)))
}

export { nextPowerOfTwo }
