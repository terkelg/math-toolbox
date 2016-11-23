import { mod } from './math-toolbox'

/**
 * Calculates the shortest difference between two given angles given in degrees.
 *
 * @param  {number} a - Current.
 * @param  {number} b - Target.
 * @return {number} The distance.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.DeltaAngle.html}
 */
function deltaAngleDeg (a, b) {
  let d = mod(b - a, 360)
  if (d > 180) d = Math.abs(d - 360)
  return d
}

export { deltaAngleDeg, deltaAngleDeg as deltaAngle }
