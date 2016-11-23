/**
 * Calculates the linear parameter t that produces the interpolant value within the range [a, b].
 *
 * @param {number} a - The start value.
 * @param {number} b - The end value.
 * @param {number} v - The value.
 * @return {number} The result of the reverse interpolation.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.InverseLerp.html}
 */
function inverseLerp (a, b, v) {
  return (v - a) / (b - a)
}

export { inverseLerp, inverseLerp as inverseMix }
