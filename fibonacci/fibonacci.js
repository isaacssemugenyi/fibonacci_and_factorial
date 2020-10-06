/** Group Members
 * Walter Ruganzu
 * Mike Mwanje
 * Isaac Ssemugenyi
 * Davies Wabuluka
 *
 * Fibonacci Numbers = Are numbers where the preceeding number
 * is the sum of two previous fibonacci numbers
 */

// Switching algorithm from recurrsive to loop
function fibonacci(number) {
  if (number < 1) return 0;
  if (number === 1) return 1;
  if (number === 2) return 1;
  let begin = 0;
  let result = 1;
  let sum;
  let i = 2;
  while (i < number + 1) {
    sum = begin + result;
    begin = result;
    result = sum;
    i += 1;
  }
  return result;
}

module.exports = fibonacci;
