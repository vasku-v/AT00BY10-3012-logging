/**
 * @file main.js
 * @description
 * Demonstrates the basic ude of the Winston logger library configured in logger.js.
 * Logs informational, warning, and error messages to both the console and log files.
 *
 * Log destinations:
 * - Console output
 * - logs/error.log (error-level logs)
 * - logs/combined.log (all logs)
 */

const logger = require("./logger");

// Log messages using the generic log() method
logger.log("info", "This is an informational message.");
logger.log("warn", "This is a warning message.");
logger.log("error", "This is an error message.");

// Log messages using level-specific helper methods
logger.info("This is another informational message.");
logger.warn("This is another warning message.");
logger.error("This is another error message.");
