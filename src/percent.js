/**
 * Work out what percentage value `a` is of value `b` using the given base.
 *
 * @param  {integer} number - The number to check.
 * @param  {number} a - The value to work out the percentage for.
 * @param  {number} b - The value you wish to get the percentage of.
 * @param  {number} [base=0] - The base value.
 * @return {number} The percentage a is of b, between 0 and 1.
 */
function percent (a, b, base = 0) {
  if (a > b || base > b) {
    return 1
  } else if (a < base || base > a) {
    return 0
  } else {
    return (a - base) / b
  }
}

export { percent }
