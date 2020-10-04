const assert = require('chai').assert;
const F = require('../fibonacci');

describe('Fibonacci Numbers', function(){
    let fibonacci = F;

    it('fib(-5) = 0', function(){ 
        assert.equal(fibonacci(-5), 0);
    })

    it('fib(0) = 1', function(){ 
        assert.equal(fibonacci(0), 0);
    })

    it('fib(1) = 1', function(){ 
        assert.equal(fibonacci(1), 1);
    })

    it('fib(2) = 2', function(){ 
        assert.equal(fibonacci(2), 1);
    })

    it('fib(40s) = 102334155', function(){ 
        assert.equal(fibonacci(40), 102334155);
    })
})