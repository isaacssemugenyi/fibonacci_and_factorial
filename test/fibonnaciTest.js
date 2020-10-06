const { assert } = require('chai');
const F = require('../fibonacci/fibonacci');

describe('Fibonacci With A While-Loop', () => {
  const fibonacci = F;

  // Failing test
  it('Failing test', () => {
    assert.equal(fibonacci(4), 1);
  });

  // returns 0 for negative numbers
  it('fibonacci(-5) = 0', () => {
    assert.equal(fibonacci(-5), 0);
  });

  // returns 0 for fibonacci(0)
  it('fibonacci(0) = 0', () => {
    assert.equal(fibonacci(0), 0);
  });

  // returns 1 for fibonacci(1)
  it('fibonacci(1) = 1', () => {
    assert.equal(fibonacci(1), 1);
  });

  // return 1 for fibonacci(2)
  it('fibonacci(2) = 1', () => {
    assert.equal(fibonacci(2), 1);
  });

  // Checks the runtime
  it('runtime < 2000ms', () => {
    assert.equal(fibonacci(40), 102334155);
  });
});
