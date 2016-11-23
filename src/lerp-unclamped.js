/**
 * Linearly interpolates between x and y by a with no limit to a.
 *
 * @param  {number} x - The start value.
 * @param  {number} y - The end value.
 * @param  {number} a - The interpolation between the two floats.
 * @return {number} The float value as a result from the linear interpolation.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.LerpUnclamped.html}
 */
function lerpUnclamped (x, y, a) {
  if (a <= 0) return x
  if (a >= 1) return y
  return x + a * (y - x)
}

export { lerpUnclamped, lerpUnclamped as mixUnclamped }
