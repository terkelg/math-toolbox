(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.MathToolbox = global.MathToolbox || {})));
}(this, (function (exports) { 'use strict';

/**
 * Clamps a value between a minimum and maximum value and returns clamped value
 *
 * @param  {number} min - Minimum boundary
 * @param  {number} max - Maximum boundary
 * @param  {number} v   - Value to clamp
 * @return {number} The clamped value
 */
function clamp(min, max, v) {
  if (v < min) return min;
  if (v > max) return max;
  return v;
}

/**
 * Return diagonal of a rectangle
 *
 * @param  {number} w - Width
 * @param  {number} h - Height
 * @return {number} Diagonal length
 */
function diagonal(w, h) {
  return Math.sqrt(w * w + h * h);
}

/**
 * Returns the euclidian distance between the two given set of coordinates
 *
 * @param  {number} x1 - X coord of the first point
 * @param  {number} y1 - Y coord of the first point
 * @param  {number} x2 - X coord of the second point
 * @param  {number} y2 - Y coord of the second point
 * @return {number} The computed distance
 */
function distance(x1, y1, x2, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Linear interpolation between two values (lerping)
 *
 * @param  {number} x - First point
 * @param  {number} y - Second point
 * @param  {number} r - Value to interpolate
 * @return {number} Lerped value
 */
function lerp(x, y, r) {
  return x + (y - x) * r;
}

/**
 * Re-maps a number from one range to another
 *
 * @param  {number} value  - The incoming value to be converted
 * @param  {number} start1 - Lower bound of the value's current range
 * @param  {number} stop1  - Upper bound of the value's current range
 * @param  {number} start2 - Lower bound of the value's target range
 * @param  {number} stop2  - Upper bound of the value's target range
 * @return {number} Remapped number
 */
function map(value, start1, stop1, start2, stop2) {
  return (value - start1) / (stop1 - start1) * (stop2 - start2) + start2;
}

/**
 * Normalize a value between two bounds
 *
 * @param  {number} min - Minimum boundary
 * @param  {number} max - Maximum boundary
 * @param  {number} x   - Value to normalize
 * @return {number} Normalized value
 */
function normalize(min, max, x) {
  return (x - min) / (max - min);
}

/**
 * Remap the 0..1 interval into 0..1 parabola, such that the corners are remaped to 0 and the center to 1.
 * In other words, parabola(0) = parabola(1) = 0, and parabola(1/2) = 1.
 *
 * @param  {number} x - Coordinate on X axis
 * @param  {number} k - Value to map
 * @return {number} Mapped value
 */
function parabola(x, k) {
  return Math.pow(4 * x * (1 - x), k);
}

/**
 * Generate a random float
 *
 * @param  {number} minValue  - Minimum boundary
 * @param  {number} maxValue  - Maximum boundary
 * @param  {number} precision - Precision
 * @return {number} Generated float
 */
function randomFloat(minValue, maxValue) {
  var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

  return parseFloat(Math.min(minValue + Math.random() * (maxValue - minValue), maxValue).toFixed(precision));
}

/**
 * Generate a random integer
 *
 * @param  {number} min - Minimum boundary
 * @param  {number} max - Maximum boundary
 * @return {number} Generated integer
 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Smooth a value
 *
 * @param  {number} min - Minimum boundary
 * @param  {number} max - Maximum boundary
 * @param  {number} v   - Value
 * @return {number} Smoothed value
 */
function smoothStep(min, max, v) {
  var x = Math.max(0, Math.min(1, (v - min) / (max - min)));
  return x * x * (3 - 2 * x);
}

/**
 * Checks if a number is a power of two
 *
 * @param   {number}  value Number to test
 * @returns {boolean} returns true if the value is power of two
 */
function isPowerOfTwo(value) {
  return value !== 0 && (value & value - 1) === 0;
}

/**
 * Ensures that the value always stays between min and max, by wrapping the value around
 * If 'max' is not larger than 'min' the result is 0
 *
 * @param {number} value - The value to wrap
 * @param {number} min   - The minimum the value is allowed to be.
 * @param {number} max   - The maximum the value is allowed to be, should be larger than 'min'.
 * @return {number} Wrapped value.
 */
function wrap(value, min, max) {
  var range = max - min;
  if (range <= 0) return 0;

  var result = (value - min) % range;
  if (result < 0) result += range;

  return result + min;
}

exports.clamp = clamp;
exports.diagonal = diagonal;
exports.distance = distance;
exports.lerp = lerp;
exports.map = map;
exports.normalize = normalize;
exports.parabola = parabola;
exports.randomFloat = randomFloat;
exports.randomInt = randomInt;
exports.smoothStep = smoothStep;
exports.isPowerOfTwo = isPowerOfTwo;
exports.wrap = wrap;

Object.defineProperty(exports, '__esModule', { value: true });

})));
