/**
 * ExpStep.
 *
 * @param  {number} x - Value to be used to generate the step function.
 * @param  {number} k - Edge of the step.
 * @param  {number} n - n value.
 * @return {number} Exponential step.
 * @see {@link http://www.iquilezles.org/www/articles/functions/functions.htm}
 */
function expStep (x, k, n) {
  return Math.exp(-k * Math.pow(x, n))
}

export { expStep }
