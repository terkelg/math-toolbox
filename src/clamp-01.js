/**
 * Clamps a value between 0 and 1 and returns value
 *
 * @param  {number} v - Value to clamp
 * @return {number} The clamped value
 */
function clamp01 (v) {
  return v < 0 ? 0 : (v > 1 ? 1 : v)
}

export { clamp01 }
