/**
 * Almost Identity.
 *
 * @param  {number} x - Input value.
 * @param  {number} m - Threshold.
 * @param  {number} n - The value to take when x is zero.
 * @return {number} Smoothed value.
 * @see {@link http://www.iquilezles.org/www/articles/functions/functions.htm}
 */
function almostIdentity (x, m, n) {
  if (x > m) return x

  const a = 2 * n - m
  const b = 2 * m - 3 * n
  const t = x / m

  return (a * t + b) * t * t + n
}

export { almostIdentity }
