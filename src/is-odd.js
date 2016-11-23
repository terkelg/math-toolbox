/**
 * Returns true if the number given is odd.
 *
 * @param  {number} number - The number to check.
 * @return {boolean} True if the given number is odd. False if the given number is even.
 */
function isOdd (number) {
  return !!(number & 1)
}

export { isOdd }
