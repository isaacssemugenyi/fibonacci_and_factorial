/**
 * Working with Memoization in Factorial, Here we cache the previous value in the series of
 * computing a particular factorial number
 * Isaac Ssemugenyi
 * Davies Wabuluka
 * Mike Mwanje
 * Walter Ruganzu
*/


var fact = (function() { 
    // Initialise a memory cache object
    var cache = {};  
    // Use and return this function to check if val is cached 
    function checkCache(val) { 
        cache[val] = factorial(val); // we cache it 
        return cache[val]; // and then return it 
    } 
    // We create and name the actual function to be used 
    function factorial(num) { 
        return (num === 0)? 1 : num * factorial(num - 1); 
    } // End of factorial function 
    // We return the function that checks, not the one that computes because it happens to be recursive 
    return checkCache; 
}());

// console.log(fact(10));

module.exports = fact;