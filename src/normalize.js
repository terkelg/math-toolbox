/**
 * Normalize a value between two bounds
 *
 * @param  {number} min - Minimum boundary
 * @param  {number} max - Maximum boundary
 * @param  {number} x   - Value to normalize
 * @return {number} Normalized value
 */
function normalize (min, max, x) {
  return (x - min) / (max - min)
}

export { normalize }
