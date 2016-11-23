/**
 * Return delta time
 *
 * @param  {number} oldTime - Time previous frame in milliseconds
 * @param  {number} [newTime=Date.now()] - Time current frame in milliseconds
 * @return {number} Time difference in milliseconds
 */
function deltaTime (oldTime, newTime = Date.now()) {
  return newTime - oldTime
}

export { deltaTime }
