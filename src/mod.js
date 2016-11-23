/**
 * Compute value of one parameter modulo another.
 *
 * @param  {number} a - Value a.
 * @param  {number} n - Value b.
 * @return {number} Returns the value of x modulo n.
 * @see {@link https://www.opengl.org/sdk/docs/man4/html/mod.xhtml}
 */
function mod (a, n) {
  return (a % n + n) % n
}

export { mod }
