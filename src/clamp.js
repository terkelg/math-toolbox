/**
 * Clamps a value between a minimum and maximum value and returns clamped value
 *
 * @param  {number} min - Minimum boundary
 * @param  {number} max - Maximum boundary
 * @param  {number} v   - Value to clamp
 * @return {number} The clamped value
 */
function clamp (min, max, v) {
  if (v < min) return min
  if (v > max) return max
  return v
}

export { clamp }
