import { mod } from './mod'
import { lerp } from './lerp'
import { deltaAngleDeg } from './delta-angle-deg'

/**
 * Same as Lerp but makes sure the values interpolate correctly when they wrap around 360 degrees.
 *
 * @param  {number} a - The start value.
 * @param  {number} b - The end value.
 * @param  {number} t - Value to inerpolate.
 * @return {number} The interpolated value.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.LerpAngle.html}
 */
function lerpAngleDeg (a, b, t) {
  const angle = deltaAngleDeg(a, b)
  return mod(a + lerp(0, angle, t), 360)
}

export { lerpAngleDeg, lerpAngleDeg as lerpAngle }
