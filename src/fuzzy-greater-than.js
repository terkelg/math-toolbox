/**
* A is fuzzyGreaterThan B if it is more than B - epsilon.
*
* @param  {number} a - The first number to compare.
* @param  {number} b - The second number to compare.
* @param  {number} [epsilon=0.0001] - The epsilon (a small value used in the calculation).
* @return {boolean} True if a>b-epsilon.
*/
function fuzzyGreaterThan (a, b, epsilon = 0.0001) {
  return a > b - epsilon
}

export { fuzzyGreaterThan }
