/**
 * Fibonacci Numbers = Are numbers where the preceeding number
 * is the sum of two previous fibonacci numbers
*/
const calculator = require('./calculator');

function fibonacci(number) {
  return number < 0 ? 0 : number < 2 ? number : fibonacci(number - 1) + fibonacci(number - 2);
}

// calculator(30, fibonacci);

module.exports = fibonacci;
