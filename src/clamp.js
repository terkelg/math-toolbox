/**
 * Constrain a value to lie between two further values.
 *
 * @param  {number} min - Lower end of the range into which to constrain v.
 * @param  {number} max - Upper end of the range into which to constrain v.
 * @param  {number} v   - Value to clamp.
 * @return {number} The value to constrain.
 * @see {@link https://www.opengl.org/sdk/docs/man/html/clamp.xhtml}
 */
function clamp (min, max, v) {
  return Math.min(max, Math.max(min, v))
}

export { clamp }
