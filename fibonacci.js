/**
 *  # Group Members
 * Walter Ruganzu
 * Mike Mwanje
 * Isaac Ssemugenyi
 * Davies Wabuluka
 *
 * Fibonacci Numbers = Are numbers where the preceeding number
 * is the sum of two previous fibonacci numbers
 */
// const iterator = require('./iterator');

function fibonacci(number) {
  if (number < 0) {
    return 0;
  } if (number < 2) {
    return number;
  } return fibonacci(number - 1) + fibonacci(number - 2);
}

// iterator(30, fibonacci);

module.exports = fibonacci;
