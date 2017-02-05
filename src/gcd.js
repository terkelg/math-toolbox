/**
 * Compute the greatest common divisor using Euclid's algorithm.
 *
 * @param  {number} a - Value one.
 * @param  {number} b - Value two.
 * @return {number} Greatest common divisor.
 * @see {@link https://en.wikipedia.org/wiki/Greatest_common_divisor#Using_Euclid.27s_algorithm}
 */
function gcd (a, b) {
  if (b === 0) return a
  return gcd(b, a % b)
}

export { gcd }
