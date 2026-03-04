# Task 1 - Tally counter REST API

A simple REST API built with **Node.js**, **Express** and **Winston** that
implements a persistent in-memory tally counter. The API supports reading,
increasing and resetting the counter, and includes structured logging and
automated tests (unit + integration).

## Used Versions

- Node.js: 22.19.0
- Express: 4.18.2
- Winston: 3.11.0

- Mocha 11.7.5
- Chai 6.2.2
- Supertest 7.2.2

## Project Structure

.  
-- .gitignore  
-- package.json  
-- README.md  
-- rest.http  
-- src/  
----- counter.js  
----- logger.js  
----- main.js  
----- routes.js  
-- test/  
----- counter.api.test.js  
----- counter.unit.test.js

## Installation

### Initialize the project

npm init -y

### Install Dependencies

npm install express@4.18.2 winston@3.11.0

npm install --save-dev mocha chai supertest

## Running the Application

### Start the server

node src/main.js

### Log output appears:

- in the console (all logs)
- in logs/error.log (error-level logs)
- in logs/combined.log (all logs)

Logging is handled by Winston wit two transports: file and console.

## Available Endpoints

- **GET /counter-read** → Returns current counter value
- **GET /counter-increase** → Increments counter by one
- **GET /counter-reset** → Resets counter to zero

## Tests

The project includes automated tests for both the internal counter logic and the
REST API. All tests run with NODE_ENV=test, which prevents the server from
opening a real network port and allows Supertest to interact directly with the
Express application instance.

### Running tests

- npm test

### Test types

### Unit test

- counter.unit.test.js

The unit tests are implemented using Mocha together with Chai's Expect style.
All tests are placed in one suite. The tests validate the internal logic of the
counter module:

- **readCounter()** returns the correct value
- **increaseCounter()** increments the value
- **resetCounter()** resets the value to zero

Unit tests ensure that the core functionality works independently of Express or
HTTP routing.

### Integration test

- counter.api.test.js

Integration tests verify that the REST API endpoints behave correctly when
accessed through HTTP requests simulated by SuperTest:

- **GET /counter-read** returns the current counter value
- **GET /counter-increase** increments the counter
- **GET /counter-reset** resets the counter

These tests confirm that routing, JSON responses and state changes work together
as expected.

### Smoke test

A basic smoke test was performed by running:

- node src/main.

and manually calling the endpoints using rest.http-file to confirm that the API
responds correctly in a real runtime environment.
