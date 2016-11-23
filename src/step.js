/**
 * Generate a step function by comparing two values.
 *
 * @param  {number} edge - Location of the edge of the step function.
 * @param  {number} v    - Value to be used to generate the step function.
 * @return {number} Step value.
 * @see {@link https://www.opengl.org/sdk/docs/man/html/step.xhtml}
 */
function step (edge, v) {
  return (v < edge) ? 0 : 1
}

export { step }
