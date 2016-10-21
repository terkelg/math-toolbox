/**
 * Subtracts the given amount from the value, but never lets the value go below the specified minimum.
 *
 * @param {number} value - The base value.
 * @param {number} amount - The amount to subtract from the base value.
 * @param {number} min - The minimum the value is allowed to be.
 * @return {number} The new value.
 */
function minSub (value, amount, min) {
  return Math.max(value - amount, min)
}

export { minSub }
