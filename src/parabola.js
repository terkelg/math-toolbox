/**
 * Remap the 0..1 interval into 0..1 parabola, such that the corners are remaped to 0 and the center to 1.
 * In other words, parabola(0) = parabola(1) = 0, and parabola(1/2) = 1.
 *
 * @param  {number} x - Coordinate on X axis
 * @param  {number} k - Value to map
 * @return {number} Mapped value
 */
function parabola (x, k) {
  return Math.pow(4 * x * (1 - x), k)
}

export { parabola }
