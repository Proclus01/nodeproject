//jshint esversion:9

//****************************************************************************************
//
//      The require function takes a path or library name as its input param
//      and then returns the value that is exported from the file in the path
//      Finally, we capture that value returned inside of a variable in our own JS file
//      This is how the module system works
//
// ****************************************************************************************

const message = require('./myscript.js'); // the ./ refers to a relative path

console.log(message);

