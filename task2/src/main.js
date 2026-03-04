/**
 * @file main.js
 * @description Starts the HTTP server using the Express app.
 */

const express = require("express");
const app = express();
const port = 3000;
const logger = require("./logger");
const routes = require("./routes");

logger.info("[MAIN] Starting");

app.use("/", routes);

/**
 * Server is run if not in the testing environment.
 */
if (process.env.NODE_ENV !== "test") {
  const server = app.listen(port, () => {
    logger.info(`[MAIN] Listening on port ${port}`);
  });

  process.on("SIGINT", () => {
    logger.info("[MAIN] Stopping");
    server.close(() => process.exit(0));
  });
}

/**
 * Exports Express instance for testing purposes
 */
module.exports = app;
