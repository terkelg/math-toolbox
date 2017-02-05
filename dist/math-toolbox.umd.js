(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.MathToolbox = global.MathToolbox || {})));
}(this, (function (exports) { 'use strict';

/**
 * Constrain a value to lie between two further values.
 *
 * @param  {number} min - Lower end of the range into which to constrain v.
 * @param  {number} max - Upper end of the range into which to constrain v.
 * @param  {number} v   - Value to clamp.
 * @return {number} The value to constrain.
 * @see {@link https://www.opengl.org/sdk/docs/man/html/clamp.xhtml}
 */
function clamp(min, max, v) {
  return Math.min(max, Math.max(min, v));
}

/**
 * Clamps a value between 0 and 1 and returns value
 *
 * @param  {number} v - Value to clamp
 * @return {number} The clamped value
 */
function clamp01(v) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

/**
 * Generate a step function by comparing two values.
 *
 * @param  {number} edge - Location of the edge of the step function.
 * @param  {number} v    - Value to be used to generate the step function.
 * @return {number} Step value.
 * @see {@link https://www.opengl.org/sdk/docs/man/html/step.xhtml}
 */
function step(edge, v) {
  return v < edge ? 0 : 1;
}

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
function map(value, start1, stop1, start2, stop2) {
  return (value - start1) / (stop1 - start1) * (stop2 - start2) + start2;
}

/**
 * Return diagonal of a rectangle.
 *
 * @param  {number} w - Width.
 * @param  {number} h - Height.
 * @return {number} Diagonal length.
 */
function diagonal(w, h) {
  return Math.sqrt(w * w + h * h);
}

/**
 * Returns the euclidian distance between the two given set of coordinates
 *
 * @param  {number} x1 - X coord of the first point.
 * @param  {number} y1 - Y coord of the first point.
 * @param  {number} x2 - X coord of the second point.
 * @param  {number} y2 - Y coord of the second point.
 * @return {number} The computed distance.
 */
function distance(x1, y1, x2, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Smooth a value.
 *
 * @param  {number} min - Minimum boundary.
 * @param  {number} max - Maximum boundary.
 * @param  {number} v   - Value.
 * @return {number} Smoothed value.
 */
function smoothStep(min, max, v) {
  var x = Math.max(0, Math.min(1, (v - min) / (max - min)));
  return x * x * (3 - 2 * x);
}

/**
 * Linearly interpolate between two values (mix).
 *
 * @param  {number} x - Start of the range in which to interpolate.
 * @param  {number} y - End of the range in which to interpolate.
 * @param  {number} r - Value to use to interpolate between x and y.
 * @return {number} Lerped value
 * @see {@link https://www.opengl.org/sdk/docs/man/html/mix.xhtml}
 */
function lerp(x, y, r) {
  return x + (y - x) * r;
}

/**
 * Normalize a value between two bounds.
 *
 * @param  {number} min - Minimum boundary.
 * @param  {number} max - Maximum boundary.
 * @param  {number} x   - Value to normalize.
 * @return {number} Normalized value.
 */
function normalize(min, max, x) {
  return (x - min) / (max - min);
}

/**
 * Generate a random float.
 *
 * @param  {number} minValue      - Minimum boundary.
 * @param  {number} maxValue      - Maximum boundary.
 * @param  {number} [precision=2] - Precision.
 * @return {number} Generated float.
 */
function randomFloat(minValue, maxValue) {
  var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

  return parseFloat(Math.min(minValue + Math.random() * (maxValue - minValue), maxValue).toFixed(precision));
}

/**
 * Generate a random integer
 *
 * @param  {number} min - Minimum boundary.
 * @param  {number} max - Maximum boundary.
 * @return {number} Generated integer.
 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Generate random sign (1 or -1).
 *
 * @return {number} Either 1 or -1.
 */
function randomSign() {
  return Math.random() > 0.5 ? 1 : -1;
}

/**
 * Ensures that the value always stays between min and max, by wrapping the value around.
 * If 'max' is not larger than 'min' the result is 0.
 *
 * @param {number} value - The value to wrap.
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

/**
 * Convert degrees to radians.
 *
 * @param  {number} degrees - Degrees.
 * @return {number} Angel in radians.
 */
function degToRad(degrees) {
  return degrees * Math.PI / 180;
}

/**
 * Convert radians to degrees.
 *
 * @param  {number} radians - Radians.
 * @return {number} Angel in degrees.
 */
function radToDeg(radians) {
  return radians * 180 / Math.PI;
}

/**
* Calculates a fuzzy floor to the given value.
*
* @param  {number} value - The value to floor.
* @param  {number} [epsilon=0.0001] - The epsilon (a small value used in the calculation).
* @return {number} floor(value+epsilon).
*/
function fuzzyFloor(value) {
  var epsilon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.0001;

  return Math.floor(value + epsilon);
}

/**
* Calculates a fuzzy ceil to the given value.
*
* @param  {number} value - The value to ceil.
* @param  {number} [epsilon=0.0001] - The epsilon (a small value used in the calculation).
* @return {number} ceiling(value+epsilon).
*/
function fuzzyCeil(value) {
  var epsilon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.0001;

  return Math.ceil(value + epsilon);
}

/**
* Two numbers are fuzzyEqual if their difference is less than epsilon.
*
* @param  {number} a - The first number to compare.
* @param  {number} b - The second number to compare.
* @param  {number} [epsilon=0.0001] - The epsilon (a small value used in the calculation).
* @return {boolean} True if |a-b|<epsilona otherwise false.
*/
function fuzzyEqual(a, b) {
  var epsilon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.0001;

  return Math.abs(a - b) < epsilon;
}

/**
* A is fuzzyGreaterThan B if it is more than B - epsilon.
*
* @param  {number} a - The first number to compare.
* @param  {number} b - The second number to compare.
* @param  {number} [epsilon=0.0001] - The epsilon (a small value used in the calculation).
* @return {boolean} True if a>b-epsilon.
*/
function fuzzyGreaterThan(a, b) {
  var epsilon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.0001;

  return a > b - epsilon;
}

/**
* A is fuzzyLessThan B if it is less than B + epsilon.
*
* @param  {number} a - The first number to compare.
* @param  {number} b - The second number to compare.
* @param  {number} [epsilon=0.0001] - The epsilon (a small value used in the calculation).
* @return {boolean} True if a<b+epsilon.
*/
function fuzzyLessThan(a, b) {
  var epsilon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.0001;

  return a < b + epsilon;
}

/**
 * Adds the given amount to the value, but never lets the value go over the specified maximum.
 *
 * @param {number} value - The value to add the amount to.
 * @param {number} amount - The amount to add to the value.
 * @param {number} max - The maximum the value is allowed to be.
 * @return {number} The new value.
 */
function maxAdd(value, amount, max) {
  return Math.min(value + amount, max);
}

/**
 * Subtracts the given amount from the value, but never lets the value go below the specified minimum.
 *
 * @param {number} value - The base value.
 * @param {number} amount - The amount to subtract from the base value.
 * @param {number} min - The minimum the value is allowed to be.
 * @return {number} The new value.
 */
function minSub(value, amount, min) {
  return Math.max(value - amount, min);
}

/**
 * Returns true if the number given is odd.
 *
 * @param  {number} number - The number to check.
 * @return {boolean} True if the given number is odd. False if the given number is even.
 */
function isOdd(number) {
  return !!(number & 1);
}

/**
 * Returns true if the number given is even.
 *
 * @param  {number} number - The number to check.
 * @return {boolean} True if the given number is even. False if the given number is false.
 */
function isEven(number) {
  return !(number & 1);
}

/**
 * Checks if a number is a power of two.
 *
 * @param   {number}  value Number to test.
 * @returns {boolean} returns true if the value is power of two.
 */
function isPowerOfTwo(value) {
  return value !== 0 && (value & value - 1) === 0;
}

/**
 * Returns the closest power of two value.
 *
 * @param  {number} value - Value.
 * @return {number} The nearest power of 2i.
 */
function closestPowerOfTwo(value) {
  return Math.pow(2, Math.round(Math.log(value) / Math.log(2)));
}

/**
 * Returns the next power of two value.
 *
 * @param  {number} v - Value.
 * @return {number} The next power of two.
 */
function nextPowerOfTwo(v) {
  return Math.pow(2, Math.ceil(Math.log(v) / Math.log(2)));
}

/**
 * Work out what percentage value `a` is of value `b` using the given base.
 *
 * @param  {integer} number - The number to check.
 * @param  {number} a - The value to work out the percentage for.
 * @param  {number} b - The value you wish to get the percentage of.
 * @param  {number} [base=0] - The base value.
 * @return {number} The percentage a is of b, between 0 and 1.
 */
function percent(a, b) {
  var base = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (a > b || base > b) {
    return 1;
  } else if (a < base || base > a) {
    return 0;
  } else {
    return (a - base) / b;
  }
}

/**
 * Return the avarage of all values passed to the function.
 *
 * @param  {...number} numbers - The numbers to average.
 * @return {number} The average of all given values.
 */
function average() {
  var sum = 0;

  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = numbers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var number = _step.value;

      sum += +number;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return sum / numbers.length;
}

/**
 * The absolute difference between two values.
 *
 * @param {number} a - The first value to check.
 * @param {number} b - The second value to check.
 * @return {number} The absolute difference between the two values.
 */
function difference(a, b) {
  return Math.abs(a - b);
}

/**
* Checks if two values are within the given tolerance of each other.
*
* @param {number} a - The first number to check
* @param {number} b - The second number to check
* @param {number} tolerance - The tolerance. Anything equal to or less than this is considered within the range.
* @return {boolean} True if a is <= tolerance of b.
*/
function within(a, b, tolerance) {
  return Math.abs(a - b) <= tolerance;
}

/**
 * Calculates the linear parameter t that produces the interpolant value within the range [a, b].
 *
 * @param {number} a - The start value.
 * @param {number} b - The end value.
 * @param {number} v - The value.
 * @return {number} The result of the reverse interpolation.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.InverseLerp.html}
 */
function inverseLerp(a, b, v) {
  return (v - a) / (b - a);
}

/**
 * Linearly interpolates between x and y by a with no limit to a.
 *
 * @param  {number} x - The start value.
 * @param  {number} y - The end value.
 * @param  {number} a - The interpolation between the two floats.
 * @return {number} The float value as a result from the linear interpolation.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.LerpUnclamped.html}
 */
function lerpUnclamped(x, y, a) {
  if (a <= 0) return x;
  if (a >= 1) return y;
  return x + a * (y - x);
}

/**
 * Calculates the shortest difference between two given angles given in degrees.
 *
 * @param  {number} a - Current.
 * @param  {number} b - Target.
 * @return {number} The distance.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.DeltaAngle.html}
 */
function deltaAngleDeg$$1(a, b) {
  var d = mod(b - a, 360);
  if (d > 180) d = Math.abs(d - 360);
  return d;
}

/**
 * Calculates the shortest difference between two given angles given in radians.
 *
 * @param  {number} a - Current.
 * @param  {number} b - Target.
 * @return {number} The distance.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.DeltaAngle.html}
 */
function deltaAngleRad$$1(a, b) {
  return degToRad(deltaAngleDeg$$1(radToDeg(a), radToDeg(b)));
}

/**
 * Compute the fractional part of the argument.
 *
 * @param  {number} v - Specify the value to evaluate.
 * @return {number} Returns the fractional part of x.
 * @see {@link https://www.opengl.org/sdk/docs/man/html/fract.xhtml}
 */
function fract(v) {
  return v - Math.floor(v);
}

/**
 * Compute value of one parameter modulo another.
 *
 * @param  {number} a - Value a.
 * @param  {number} n - Value b.
 * @return {number} Returns the value of x modulo n.
 * @see {@link https://www.opengl.org/sdk/docs/man4/html/mod.xhtml}
 */
function mod(a, n) {
  return (a % n + n) % n;
}

/**
 * Same as Lerp but makes sure the values interpolate correctly when they wrap around 360 degrees.
 *
 * @param  {number} a - The start value.
 * @param  {number} b - The end value.
 * @param  {number} t - Value to inerpolate.
 * @return {number} The interpolated value.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.LerpAngle.html}
 */
function lerpAngleDeg$$1(a, b, t) {
  var angle = deltaAngleDeg$$1(a, b);
  return mod(a + lerp(0, angle, t), 360);
}

/**
 * Same as Lerp but makes sure the values interpolate correctly when they wrap around 2 radians.
 *
 * @param  {number} a - The start value.
 * @param  {number} b - The end value.
 * @param  {number} t - Value to inerpolate.
 * @return {number} The interpolated value.
 */
function lerpAngleRad$$1(a, b, t) {
  return degToRad(lerpAngleDeg$$1(radToDeg(a), radToDeg(b), t));
}

/**
 * Converts the given value from gamma (sRGB) to linear color space.
 *
 * @param  {number} v - Gamma value.
 * @return {number} Value in linear color space.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.GammaToLinearSpace.html}
 */
function gammaToLinearSpace(v) {
  return Math.pow(v, 2.2);
}

/**
 * Converts the given value from linear to gamma (sRGB) color space.
 *
 * @param  {number} v - Linear color space value.
 * @return {number} Value in gamma.
 * @see {@link https://docs.unity3d.com/ScriptReference/Mathf.LinearToGammaSpace.html}
 */
function linearToGammaSpace(v) {
  return Math.pow(v, 1 / 2.2);
}

/**
 * Almost Identity.
 *
 * @param  {number} x - Input value.
 * @param  {number} m - Threshold.
 * @param  {number} n - The value to take when x is zero.
 * @return {number} Smoothed value.
 * @see {@link http://www.iquilezles.org/www/articles/functions/functions.htm}
 */
function almostIdentity(x, m, n) {
  if (x > m) return x;

  var a = 2 * n - m;
  var b = 2 * m - 3 * n;
  var t = x / m;

  return (a * t + b) * t * t + n;
}

/**
 * Impulse.
 *
 * @param  {number} k - Stretching of the function. Max is 1.0.
 * @param  {number} x - Input value.
 * @return {number} Impulse.
 * @see {@link http://www.iquilezles.org/www/articles/functions/functions.htm}
 */
function impulse(k, x) {
  var h = k * x;
  return h * Math.exp(1 - h);
}

/**
 * Cubic Pulse.
 *
 * @param  {number} c - Edge 1.
 * @param  {number} w - Edge 2.
 * @param  {number} x - Source value for interpolation.
 * @return {number} Cubic pulse.
 * @see {@link http://www.iquilezles.org/www/articles/functions/functions.htm}
 */
function cubicPulse(c, w, x) {
  x = Math.abs(x - c);
  if (x > w) return 0;
  x /= w;
  return 1 - x * x * (3 - 2 * x);
}

/**
 * ExpStep.
 *
 * @param  {number} x - Value to be used to generate the step function.
 * @param  {number} k - Edge of the step.
 * @param  {number} n - n value.
 * @return {number} Exponential step.
 * @see {@link http://www.iquilezles.org/www/articles/functions/functions.htm}
 */
function expStep(x, k, n) {
  return Math.exp(-k * Math.pow(x, n));
}

/**
 * Remap the 0..1 interval into 0..1 parabola, such that the corners are remaped to 0 and the center to 1.
 * In other words, parabola(0) = parabola(1) = 0, and parabola(1/2) = 1.
 *
 * @param  {number} x - Coordinate on X axis.
 * @param  {number} k - Value to map.
 * @return {number} Mapped value.
 * @see {@link http://www.iquilezles.org/www/articles/functions/functions.htm}
 */
function parabola(x, k) {
  return Math.pow(4 * x * (1 - x), k);
}

/**
 * Power Curve.
 *
 * @param  {number} x - Input value.
 * @param  {number} a - Edge 1.
 * @param  {number} b - Edge 2.
 * @return {number} Value.
 * @see {@link http://www.iquilezles.org/www/articles/functions/functions.htm}
 */
function powerCurve(x, a, b) {
  var k = Math.pow(a + b, a + b) / (Math.pow(a, a) * Math.pow(b, b));
  return k * Math.pow(x, a) * Math.pow(1 - x, b);
}

/**
 * Smooth Min.
 *
 * @param  {number} a - First value to compare.
 * @param  {number} b - Second value to compare.
 * @param  {number} k - Radious/distance of the smoothness.
 * @return {number} Smooth min output.
 * @see {@link http://iquilezles.org/www/articles/smin/smin.htm}
 */
function smoothMin(a, b, k) {
  var res = Math.exp(-k * a) + Math.exp(-k * b);
  return -Math.log(res) / k;
}

/**
 * Smooth Max.
 *
 * @param  {number} a - First value to compare.
 * @param  {number} b - Second value to compare.
 * @param  {number} k - Radious/distance of the smoothness.
 * @return {number} Smooth min output.
 * @see {@link http://iquilezles.org/www/articles/smin/smin.htm}
 */
function smoothMax(a, b, k) {
  return Math.log(Math.exp(a) + Math.exp(b)) / k;
}

/**
 * Return delta time
 *
 * @param  {number} oldTime - Time previous frame in milliseconds
 * @param  {number} [newTime=Date.now()] - Time current frame in milliseconds
 * @return {number} Time difference in milliseconds
 */
function deltaTime(oldTime) {
  var newTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();

  return newTime - oldTime;
}

/**
 * Compute the greatest common divisor using Euclid's algorithm.
 *
 * @param  {number} a - Value one.
 * @param  {number} b - Value two.
 * @return {number} Greatest common divisor.
 * @see {@link https://en.wikipedia.org/wiki/Greatest_common_divisor#Using_Euclid.27s_algorithm}
 */
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

exports.clamp = clamp;
exports.clamp01 = clamp01;
exports.step = step;
exports.map = map;
exports.diagonal = diagonal;
exports.distance = distance;
exports.smoothStep = smoothStep;
exports.lerp = lerp;
exports.mix = lerp;
exports.normalize = normalize;
exports.randomFloat = randomFloat;
exports.randomInt = randomInt;
exports.randomSign = randomSign;
exports.wrap = wrap;
exports.degToRad = degToRad;
exports.toRadians = degToRad;
exports.radToDeg = radToDeg;
exports.toDegrees = radToDeg;
exports.fuzzyFloor = fuzzyFloor;
exports.fuzzyCeil = fuzzyCeil;
exports.fuzzyEqual = fuzzyEqual;
exports.fuzzyGreaterThan = fuzzyGreaterThan;
exports.fuzzyLessThan = fuzzyLessThan;
exports.maxAdd = maxAdd;
exports.minSub = minSub;
exports.isOdd = isOdd;
exports.isEven = isEven;
exports.isPowerOfTwo = isPowerOfTwo;
exports.closestPowerOfTwo = closestPowerOfTwo;
exports.nextPowerOfTwo = nextPowerOfTwo;
exports.percent = percent;
exports.average = average;
exports.difference = difference;
exports.within = within;
exports.inverseLerp = inverseLerp;
exports.inverseMix = inverseLerp;
exports.lerpUnclamped = lerpUnclamped;
exports.mixUnclamped = lerpUnclamped;
exports.deltaAngleDeg = deltaAngleDeg$$1;
exports.deltaAngle = deltaAngleDeg$$1;
exports.deltaAngleRad = deltaAngleRad$$1;
exports.fract = fract;
exports.mod = mod;
exports.lerpAngleDeg = lerpAngleDeg$$1;
exports.lerpAngle = lerpAngleDeg$$1;
exports.lerpAngleRad = lerpAngleRad$$1;
exports.gammaToLinearSpace = gammaToLinearSpace;
exports.linearToGammaSpace = linearToGammaSpace;
exports.almostIdentity = almostIdentity;
exports.impulse = impulse;
exports.cubicPulse = cubicPulse;
exports.expStep = expStep;
exports.parabola = parabola;
exports.powerCurve = powerCurve;
exports.smoothMin = smoothMin;
exports.smoothMax = smoothMax;
exports.deltaTime = deltaTime;
exports.gcd = gcd;

Object.defineProperty(exports, '__esModule', { value: true });

})));
