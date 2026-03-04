/**
 * @file counter.unit.test.js
 * @description Unit tests for the counter module. The tests verify
 * the internal counter logic.
 */
const expect = require("chai").expect;
const counter = require("../src/counter");

/**
 * Unit tests for the counter module's functions.
 */
describe("Counter module unit tests", () => {
  /** Resets counter before each test to insure consistency. */
  beforeEach(() => {
    counter.resetCounter();
  });

  /** Counter should start at 0. */
  it("should start at 0", () => {
    expect(counter.resetCounter()).to.equal(0);
  });

  /** Counter should increase by one. */
  it("should increase by 1", () => {
    counter.increaseCounter();
    expect(counter.readCounter()).to.equal(1);
  });

  /** Counter should increase correctly when called multiple times. */
  it("should increase multiple times", () => {
    counter.increaseCounter();
    counter.increaseCounter();
    counter.increaseCounter();
    expect(counter.readCounter()).to.equal(3);
  });

  /** Counter should reset back to 0. */
  it("should reset to 0", () => {
    counter.increaseCounter();
    counter.resetCounter();
    expect(counter.readCounter()).to.equal(0);
  });
});
