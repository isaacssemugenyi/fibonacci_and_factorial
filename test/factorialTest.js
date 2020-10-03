/* eslint-disable no-undef */
const { assert } = require('chai');
const F = require('../factorial');

describe('Factorials of numbers', () => {
  const factorial = F;

  //   Checks if number < 0 returns a string
  it('should return a message for negative numbers', () => {
    assert.isString(factorial(-5));
  });

  //   Checks if number = 0 returns a number
  it('should return a number for factorial of 0', () => {
    assert.isNumber(factorial(0));
  });

  //   checks if number = 1 returns a number
  it('should return a number for factorial of 1', () => {
    assert.isNumber(factorial(1));
  });

  //   checks if the value of factorial(5) is equal to 1
  it('should return a number for factorial of 0', () => {
    assert.equal(factorial(0), 1);
  });

  //   checks if the value of factorial(5) is equal to 1
  it('should return a number for factorial of 1', () => {
    assert.equal(factorial(1), 1);
  });

  //   checks if the value of factorial(5) is equal to 120
  it('should return value 120 for factorial of 5', () => {
    assert.equal(factorial(5), 120);
  });

  //   checks if the value of factorial(5) is equal to 120
  it('should return infinity for factorial of numbers greater than 170', () => {
    assert.equal(factorial(171), Infinity);
  });
});
