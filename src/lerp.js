/**
 * Linearly interpolate between two values (mix).
 *
 * @param  {number} x - Start of the range in which to interpolate.
 * @param  {number} y - End of the range in which to interpolate.
 * @param  {number} r - Value to use to interpolate between x and y.
 * @return {number} Lerped value
 * @see {@link https://www.opengl.org/sdk/docs/man/html/mix.xhtml}
 */
function lerp (x, y, r) {
  return x + ((y - x) * r)
}

export { lerp, lerp as mix }
