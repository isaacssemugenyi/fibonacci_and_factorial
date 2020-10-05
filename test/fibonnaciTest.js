/* eslint-disable no-undef */
const { assert } = require('chai');
const F = require('../fibonacci');

describe('Fibonacci Numbers', () => {
  const fibonacci = F;

  it('should return 0 for fibonacci of negative integers', () => {
    assert.equal(fibonacci(-5), 0);
  });

  it('should return 1 for fibonacci of 0', () => {
    assert.equal(fibonacci(0), 0);
  });

  it('should return 1 for fibonacci of 1', () => {
    assert.equal(fibonacci(1), 1);
  });

  it('should return 2 for fibonacci of 2', () => {
    assert.equal(fibonacci(2), 1);
  });

  it('should take not more than 2000ms', () => {
    assert.equal(fibonacci(40), 102334155);
  });
});
