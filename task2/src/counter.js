/**
 * @file counter.js
 * @description tally counter with read, increase and reset operations.
 *
 * @module counter
 */

let count = 0;

/**
 * Returns the current counter value.
 * @return {number}
 */
function readCounter() {
  return count;
}

/**
 * Increases the counter by one.
 * @returns {number} The updated counter value.
 */
function increaseCounter() {
  count += 1;
  return count;
}

/**
 * Resets the counter.
 * @returns {number} The reset value (0).
 */
function resetCounter() {
  count = 0;
  return count;
}

module.exports = { readCounter, increaseCounter, resetCounter };
