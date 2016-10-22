/**
 * Return the avarage of all values passed to the function.
 *
 * @param  {...number} numbers - The numbers to average.
 * @return {number} The average of all given values.
 */
function average (...numbers) {
  let sum = 0

  for (let number of numbers) {
    sum += (+number)
  }

  return sum / numbers.length
}

export { average }
