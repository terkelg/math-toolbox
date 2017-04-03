/**
 * Work out what percentage value `a` is of value `b` using the given base.
 * Clamps returned value between 0-1.
 *
 * @param  {number} a - The percent to work out.
 * @param  {number} b - The value you wish to get the percentage of.
 * @param  {number} [base=0] - The base value.
 * @return {number} The percentage a is of b, clamped between 0 and 1.
 */
function percent01 (a, b, base = 0) {
  if (a > b || base > b) {
    return 1
  } else if (a < base || base > a) {
    return 0
  } else {
    return (a - base) / b
  }
}

export { percent01 }
