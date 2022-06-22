
//****************************************************************************************
//
//      This module stores state. It exports an object with methods that operate on
//      the state of the counter variable. 
//
// ****************************************************************************************

// There will only be one 'counter' variable in memory in our require cache
// so if this file gets required a second time by accident in the same file, 
// then that require will only point to the original require reference
let counter = 0;

// module.exports = {} has a closure scope export of the counter variable
module.exports = {
    // Export an increment function
    incrementCounter() {
        counter = counter + 1;
    },
    // Export a get counter value function
    getCounter() {
        return counter;
    }
};