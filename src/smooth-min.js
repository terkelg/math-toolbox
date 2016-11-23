/**
 * Smooth Min.
 *
 * @param  {number} a - First value to compare.
 * @param  {number} b - Second value to compare.
 * @param  {number} k - Radious/distance of the smoothness.
 * @return {number} Smooth min output.
 * @see {@link http://iquilezles.org/www/articles/smin/smin.htm}
 */
function smoothMin (a, b, k) {
  let res = Math.exp(-k * a) + Math.exp(-k * b)
  return -Math.log(res) / k
}

export { smoothMin }
