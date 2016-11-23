/**
 * Convert degrees to radians.
 *
 * @param  {number} degrees - Degrees.
 * @return {number} Angel in radians.
 */
function degToRad (degrees) {
  return degrees * Math.PI / 180
}

export { degToRad, degToRad as toRadians }
