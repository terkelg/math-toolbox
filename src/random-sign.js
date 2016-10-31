/**
 * Generate random sign (1 or -1)
 *
 * @return {number} Either 1 or -1
 */
function randomSign () {
  return (Math.random() > 0.5) ? 1 : -1
}

export { randomSign }
