/**
 * Return delta time
 *
 * @param  {int} oldTime - Time previous frame in milliseconds
 * @param  {int} [newTime=Date.now()] - Time current frame in milliseconds
 * @return {int} Time difference in milliseconds
 */
function deltaTime (oldTime, newTime = Date.now()) {
  return newTime - oldTime
}

export { deltaTime }
