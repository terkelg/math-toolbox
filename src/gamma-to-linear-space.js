/**
 * Converts the given value from gamma (sRGB) to linear color space.
 *
 * @param  {number} v - Gamma value.
 * @return {number} Value in linear color space.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.GammaToLinearSpace.html}
 */
function gammaToLinearSpace (v) {
  return Math.pow(v, 2.2)
}

export { gammaToLinearSpace }
