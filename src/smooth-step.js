/**
 * Smooth a value.
 *
 * @param  {number} min - Minimum boundary.
 * @param  {number} max - Maximum boundary.
 * @param  {number} v   - Value.
 * @return {number} Smoothed value.
 */
function smoothStep (min, max, v) {
  const x = Math.max(0, Math.min(1, (v - min) / (max - min)))
  return x * x * (3 - 2 * x)
}

export { smoothStep }
