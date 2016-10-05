/**
 * Return diagonal of a rectangle
 *
 * @param  {number} w - Width
 * @param  {number} h - Height
 * @return {number} Diagonal length
 */
function diagonal (w, h) {
  return Math.sqrt(w * w + h * h)
}

export { diagonal }
