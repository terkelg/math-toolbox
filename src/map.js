/**
 * Re-maps a number from one range to another (Also known as scale)
 *
 * @param  {number} value  - The incoming value to be converted
 * @param  {number} start1 - Lower bound of the value's current range
 * @param  {number} stop1  - Upper bound of the value's current range
 * @param  {number} start2 - Lower bound of the value's target range
 * @param  {number} stop2  - Upper bound of the value's target range
 * @return {number} Remapped number
 */
function map (value, start1, stop1, start2, stop2) {
  return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2
}

export { map }
