/**
* Calculates a fuzzy floor to the given value.
*
* @param  {number} value - The value to floor.
* @param  {number} [epsilon=0.0001] - The epsilon (a small value used in the calculation).
* @return {number} floor(value+epsilon).
*/
function fuzzyFloor (value, epsilon = 0.0001) {
  return Math.floor(value + epsilon)
}

export { fuzzyFloor }
