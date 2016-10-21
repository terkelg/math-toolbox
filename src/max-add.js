/**
 * Adds the given amount to the value, but never lets the value go over the specified maximum.
 *
 * @param {number} value - The value to add the amount to.
 * @param {number} amount - The amount to add to the value.
 * @param {number} max - The maximum the value is allowed to be.
 * @return {number} The new value.
 */
function maxAdd (value, amount, max) {
  return Math.min(value + amount, max)
}

export { maxAdd }
