/**
 * Power Curve.
 *
 * @param  {number} x - Input value.
 * @param  {number} a - Edge 1.
 * @param  {number} b - Edge 2.
 * @return {number} Value.
 * @see {@link http://www.iquilezles.org/www/articles/functions/functions.htm}
 */
function powerCurve (x, a, b) {
  let k = Math.pow(a + b, a + b) / (Math.pow(a, a) * Math.pow(b, b))
  return k * Math.pow(x, a) * Math.pow(1 - x, b)
}

export { powerCurve }
