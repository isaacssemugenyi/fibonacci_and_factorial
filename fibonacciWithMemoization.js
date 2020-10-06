/**
 *  # Group Members
 * Walter Ruganzu
 * Mike Mwanje
 * Isaac Ssemugenyi
 * Davies Wabuluka
 * Fibonacci Numbers = Are numbers where the preceeding number
 * is the sum of two previous fibonacci numbers
*/
//  const iterator = require('./iterator');

// Memoized Function
let memoizedFibonacci = (function (){
    let memo = [0, 1];
    let fib = function (n) {
        let result = memo[n];
        if (typeof result != 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    };
    return fib;
})();

//  iterator(50, memoizedFibonacci);
// console.log(memoizedFibonacci(50));

module.exports = memoizedFibonacci;
