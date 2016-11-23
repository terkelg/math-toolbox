/**
 * Converts the given value from linear to gamma (sRGB) color space.
 *
 * @param  {number} v - Linear color space value.
 * @return {number} Value in gamma.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.LinearToGammaSpace.html}
 */
function linearToGammaSpace (v) {
  return Math.pow(v, 1 / 2.2)
}

export { linearToGammaSpace }
