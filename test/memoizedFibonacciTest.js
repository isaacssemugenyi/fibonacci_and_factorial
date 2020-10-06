const { assert } = require('chai');
const mF = require('../fibonacciWithMemoization');

describe('Memoized Fibonacci', () => {
  const memoizedFibonacci = mF;

  // Failing test
  it('Failing test', () => {
    assert.equal(memoizedFibonacci(4), 1);
  });

  // returns 0 for fibonacci(0)
  it('fibonacci(0) = 0', () => {
    assert.equal(memoizedFibonacci(0), 0);
  });

  // returns 1 for fibonacci(1)
  it('fibonacci(1) = 1', () => {
    assert.equal(memoizedFibonacci(1), 1);
  });

  // return 1 for fibonacci(2)
  it('fibonacci(2) = 1', () => {
    assert.equal(memoizedFibonacci(2), 1);
  });

  // Checks the runtime
  it('runtime < 500ms', () => {
    assert.equal(memoizedFibonacci(40), 102334155);
  });
});
