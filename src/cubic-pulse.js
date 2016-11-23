/**
 * Cubic Pulse.
 *
 * @param  {number} c - Edge 1.
 * @param  {number} w - Edge 2.
 * @param  {number} x - Source value for interpolation.
 * @return {number} Cubic pulse.
 * @see {@link http://www.iquilezles.org/www/articles/functions/functions.htm}
 */
function cubicPulse (c, w, x) {
  x = Math.abs(x - c)
  if (x > w) return 0
  x /= w
  return 1 - x * x * (3 - 2 * x)
}

export { cubicPulse }
