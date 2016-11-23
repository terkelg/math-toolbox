/**
 * Returns true if the number given is even.
 *
 * @param  {number} number - The number to check.
 * @return {boolean} True if the given number is even. False if the given number is false.
 */
function isEven (number) {
  return !(number & 1)
}

export { isEven }
