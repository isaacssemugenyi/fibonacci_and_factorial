const assert = require('chai').assert;
const F = require('../factorial');

describe('factiorial numbers', function(){
  let factorial = F;

//   Checks if number < 0 returns a string
  it('fact(-5) is String', function(){ 
    assert.isString(factorial(-5)); 
  })

//   Checks if number = 0 returns a number
  it('fact(0) is Number', function(){ 
    assert.isNumber(factorial(0)); 
  })

//   checks if number = 1 returns a number
  it('fact(1) is Number', function(){ 
    assert.isNumber(factorial(1)); 
  })

//   checks if the value of factorial(5) is equal 120
  it('fact(5) = 120', function(){ 
    assert.equal(factorial(5), 120);
  })

  //   checks if the value of factorial(5) is equal 120
  it('fact(5) = 120', function(){ 
    assert.isString(factorial(175), 1504960400);
  })
})