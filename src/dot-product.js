/**
 * Compute the dot product of any pair of 2D vectors.
 *
 * @param  {number} x0 - First x start position.
 * @param  {number} y0 - First y start position.
 * @param  {number} x1 - First x end position.
 * @param  {number} y1 - First y end position.
 * @param  {number} x2 - Second x start position.
 * @param  {number} y2 - Second y start position.
 * @param  {number} x3 - Second x end position.
 * @param  {number} y3 - Second y end position.
 * @return {number} Dot product.
 */
function dotProduct (x0, y0, x1, y1, x2, y2, x3, y3) {
  const dx0 = x1 - x0
  const dy0 = y1 - y0
  const dx1 = x3 - x2
  const dy1 = y3 - y2

  return dx0 * dx1 + dy0 * dy1
}

export { dotProduct }
