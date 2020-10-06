/**
 *  # Group Members
 * Walter Ruganzu
 * Mike Mwanje
 * Isaac Ssemugenyi
 * Davies Wabuluka
 * n!, is the product of all positive integers less than or equal to n
 * Given a number n , n! = n.(n-1).(n-2).(n-3)......1
 */

// Switching algorithm from loop to recurrsive
function factorial(number) {
  let result = 1;
  if (typeof number === 'string') {
    result = 'Factorial can\'t be a string';
    return result;
  }else if (number < 0) {
    result = 'Number can\'t be a negative';
    return result;
  } if (number === 0 || number === 1) {
    return result;
  }
  return number * factorial(number - 1);
}

// console.log(factorial('home'));

module.exports = factorial;
