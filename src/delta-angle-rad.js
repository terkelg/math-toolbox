import { degToRad, radToDeg, deltaAngleDeg } from './math-toolbox'

/**
 * Calculates the shortest difference between two given angles given in radians.
 *
 * @param  {number} a - Current.
 * @param  {number} b - Target.
 * @return {number} The distance.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.DeltaAngle.html}
 */
function deltaAngleRad (a, b) {
  return degToRad(deltaAngleDeg(radToDeg(a), radToDeg(b)))
}

export { deltaAngleRad }
