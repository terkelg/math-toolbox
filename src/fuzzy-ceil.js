/**
* Calculates a fuzzy ceil to the given value.
*
* @param  {number} value - The value to ceil.
* @param  {number} [epsilon=0.0001] - The epsilon (a small value used in the calculation).
* @return {number} ceiling(value+epsilon).
*/
function fuzzyCeil (value, epsilon = 0.0001) {
  return Math.ceil(value + epsilon)
}

export { fuzzyCeil }
