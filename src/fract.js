/**
 * Compute the fractional part of the argument.
 *
 * @param  {number} v - Specify the value to evaluate.
 * @return {number} Returns the fractional part of x.
 * @see {@link https://www.opengl.org/sdk/docs/man/html/fract.xhtml}
 */
function fract (v) {
  return v - Math.floor(v)
}

export { fract }
