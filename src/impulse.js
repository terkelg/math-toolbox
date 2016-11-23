/**
 * Impulse.
 *
 * @param  {number} k - Stretching of the function. Max is 1.0.
 * @param  {number} x - Input value.
 * @return {number} Impulse.
 * @see {@link http://www.iquilezles.org/www/articles/functions/functions.htm}
 */
function impulse (k, x) {
  let h = k * x
  return h * Math.exp(1 - h)
}

export { impulse }
