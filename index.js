//jshint esversion:9

//****************************************************************************************
//
//      The require function takes a path or library name as its input param
//      and then returns the value that is exported from the file in the path
//      Finally, we capture that value returned inside of a variable in our own JS file
//      This is how the module system works
//
// ****************************************************************************************

// Just run the function but do not store the value, so we can see the require cache.
require('./myscript.js'); // the ./ refers to a relative path

// All exported modules that are then required by a file 
// will have their exported values go to a 'require cache':
console.log(require.cache);