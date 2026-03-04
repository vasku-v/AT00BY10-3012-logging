/**
 * @file counter.api.test.js
 * @description API tests for the Tally Counter REST endpoints using Mocha,
 * Chai and Supertest. Test run with NODE_ENV=test to prevent the server
 * from opening a real network port.
 */

const request = require("supertest");
const expect = require("chai").expect;

process.env.NODE_ENV = "test";
const app = require("../src/main");

/**
 * Integration test for the Tally Counter REST API.
 * Verifies correct HTTP status codes and JSON responses.
 */

describe("Tally Counter REST API", () => {
  /** Ensures the counter starts at the value 0. */
  it("should return initial tally counter value 0", async () => {
    const res = await request(app).get("/counter-read");
    expect(res.status).to.equal(200);
    expect(res.body.count).to.equal(0);
  });

  /** Ensures the counter increments by one. */
  it("should increase counter value", async () => {
    const res = await request(app).get("/counter-increase");
    expect(res.status).to.equal(200);
    expect(res.body.count).to.equal(1);
  });

  /** Ensures the counter resets to zero. */
  it("should reset counter to 0", async () => {
    const res = await request(app).get("/counter-reset");
    expect(res.status).to.equal(200);
    expect(res.body.count).to.equal(0);
  });
});
