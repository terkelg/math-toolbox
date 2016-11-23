/**
 * Smooth Max.
 *
 * @param  {number} a - First value to compare.
 * @param  {number} b - Second value to compare.
 * @param  {number} k - Radious/distance of the smoothness.
 * @return {number} Smooth min output.
 * @see {@link http://iquilezles.org/www/articles/smin/smin.htm}
 */
function smoothMax (a, b, k) {
  return Math.log(Math.exp(a) + Math.exp(b)) / k
}

export { smoothMax }
