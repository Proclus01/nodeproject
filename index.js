//jshint esversion:9

//****************************************************************************************
//
//      The require function takes a path or library name as its input param
//      and then returns the value that is exported from the file in the path
//      Finally, we capture that value returned inside of a variable in our own JS file
//      This is how the module system works
//
// ****************************************************************************************

const counterObject = require('./myscript.js'); 

// Check initial value of counter (expected: 0)
console.log(counterObject.getCounter());

// Increment counter
counterObject.incrementCounter();

// Check value again (expected: 1)
console.log(counterObject.getCounter());

// If we require a second time
const newCounterObject = require('./myscript.js'); 

// we still get the same state because it's a reference to the original require
console.log(newCounterObject.getCounter());