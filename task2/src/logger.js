/**
 * @file logger.js
 * @description
 * Configures and exports a Winston logger instance used in the application.
 * The logger outputs JSON-formatted log entries with timestamps to both the
 * console and log files.
 *
 * Log files:
 * - logs/error.log (error-level logs)
 * - logs/combined.log (all logs)
 *
 * @module logger
 */

const { createLogger, transports, format } = require("winston");

const logger = createLogger({
  level: "info",
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "logs/error.log", level: "error" }),
    new transports.File({ filename: "logs/combined.log" }),
  ],
});

module.exports = logger;
