# Task 1 - Implement Logging Library

This task includes a simple Node.js application that uses the Winston logging
library to log informational, warning, and error messages. The logs output both
to the console and to log files.

## Used Versions

- Node.js: 22.19.0
- Winston: 3.11.0

## Project Structure

.  
-- .gitignore  
-- package.json  
-- README  
-- src  
---- logger.js  
---- main.js

## Installation

### Initialize the project

git init  
npm init -y

### Install Winston

npm install --save winston@3.11.0

## Running the Application

### Run the program:

node src/main.js

### Log output appears:

- in the console
- in logs/error.log (error-level logs)
- in logs/combined.log (all logs)

## Tests

### Smoke test

A simple smoke test was performed to verify the basic functionality of the
logger.

The program was executed using:

- node src/main.js

The logger successfully wrote error messages to logs/error.log and all messages
to logs/combined.log. Same messages were printed to the console. This confirms
that the logging configuration works as intended.
