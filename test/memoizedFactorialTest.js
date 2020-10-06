const { assert } = require('chai');
const F = require('../factorial/factorialWithMemoization');

describe('Memoized Factorial', () => {
  const factorial = F;
  // Failing test
  it('Failing test', () => {
    assert.equal(factorial(2), 0);
  });

  //   checks if the value of factorial(0) is equal to 1
  it('factorial(0) = 1', () => {
    assert.equal(factorial(0), 1);
  });

  //   checks if the value of factorial(1) is equal to 1
  it('factorial(1) = 1', () => {
    assert.equal(factorial(1), 1);
  });

  //   checks if the value of factorial(5) is equal to 120
  it('factorial(5) = 120', () => {
    assert.equal(factorial(5), 120);
  });

  //   checks if the value of factorial(171) is outputs Infinity
  it('factorial(171) = Infinity', () => {
    assert.equal(factorial(171), Infinity);
  });
});
