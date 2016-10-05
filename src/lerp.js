/**
 * Linear interpolation between two values (lerping)
 *
 * @param  {number} x - First point
 * @param  {number} y - Second point
 * @param  {number} r - Value to interpolate
 * @return {number} Lerped value
 */
function lerp (x, y, r) {
  return x + ((y - x) * r)
}

export { lerp }
