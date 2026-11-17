/**
 * Write a function createCounter. It should accept an initial integer init.
 * It should return an object with three functions:
 *  - increment() increases the current value by 1 and then returns it.
 *  - decrement() reduces the current value by 1 and then returns it.
 *  - reset() sets the current value to init and then returns it.
 *
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
 var createCounter = function(init) {
    let current = init;

    return {
        increment: function() {
            current += 1;
            return current;
        },
        decrement: function() {
            current -= 1;
            return current;
        },
        reset: function() {
            current = init;
            return current;
        }
    };
};

const counter = createCounter(5);
console.log(counter.increment()); 
console.log(counter.reset());    
console.log(counter.decrement());

