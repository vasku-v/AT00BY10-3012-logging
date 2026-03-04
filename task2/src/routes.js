/**
 * @file routes.js
 * @description Express routes for the tally counter API.
 * Includes logging for each endpoint call.
 *
 * @module routes
 */

const express = require("express");
const router = express.Router();
const logger = require("./logger");
const counter = require("./counter");

/**
 * GET /counter-read
 *
 * Returns the current counter value.
 *
 * @route GET /counter-read
 * @returns {Object} 200 - JSON object containing the current counter value
 * @returns {Object} 500 - Error response if the cointer cannot be read
 */
router.get("/counter-read", (req, res) => {
  try {
    const count = counter.readCounter();
    logger.info(`[ENDPOINT] GET '/counter-read'`);
    logger.info(`[COUNTER] read ${count}`);
    res.json({ count: count });
  } catch (err) {
    logger.error(`[ERROR] counter-read failed: ${err.message}`);
    res.status(500).json({ error: "Internal server error." });
  }
});

/**
 * GET /counter-increase
 *
 * Increases the counter value by one.
 *
 * @route GET /counter-increase
 * @returns {Object} 200 - JSON object containing the increased counter value
 * @returns {Object} 500 - Error response if the cointer cannot be increased
 */
router.get("/counter-increase", (req, res) => {
  try {
    const count = counter.increaseCounter();
    logger.info(`[ENDPOINT] GET '/counter-increase'`);
    logger.info(`[COUNTER] increase ${count}`);
    res.json({ count: count });
  } catch (err) {
    logger.error(`[ERROR] counter-increase failed: ${err.message}`);
    res.status(500).json({ error: "Internal server error." });
  }
});

/**
 * GET /counter-reset
 *
 * Resets the counter value to zero and returns the updated value.
 *
 * @route GET /counter-reset
 * @returns {Object} 200 - JSON object containing the reset counter value
 * @returns {Object} 500 - Error response if the cointer cannot be read
 */
router.get("/counter-reset", (req, res) => {
  try {
    counter.resetCounter();
    const count = counter.readCounter();
    logger.info(`[ENDPOINT] GET '/counter-reset'`);
    logger.info(`[COUNTER] reset ${count}`);
    res.json({ count: count });
  } catch (err) {
    logger.error(`[ERROR] counter-reset failed: ${err.message}`);
    res.status(500).json({ error: "Internal server error." });
  }
});

module.exports = router;
