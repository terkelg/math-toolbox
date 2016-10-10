/**
* Two numbers are fuzzyEqual if their difference is less than epsilon.
*
* @param  {number} a - The first number to compare.
* @param  {number} b - The second number to compare.
* @param  {number} [epsilon=0.0001] - The epsilon (a small value used in the calculation).
* @return {boolean} True if |a-b|<epsilona otherwise false.
*/
function fuzzyEqual (a, b, epsilon = 0.0001) {
  return Math.abs(a - b) < epsilon
}

export { fuzzyEqual }
