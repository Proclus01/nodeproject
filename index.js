#!/usr/bin/env node
// ^ tell the computer to use node to execute this file directly

//jshint esversion:9

//****************************************************************************************
//
//      App Description:
//      
//      Implement the 'ls' command using Node including 'ls -a' and 'ls'
//      Run program in terminal using 'nls' and it automatically fetches file path
//      Files and folders are coloured differently when read in terminal
//
// ****************************************************************************************

const fs = require('fs'); // require filesystem
const util = require('util'); // require util for...

// Method #2 for handling lstat with promises using promisify from utils
const getlstat2 = utils.promisify(fs.lstat);

// Method #3 for handling lstat with promises using fs.promises from fs
const { getlstat3 } = fs.promises;

// read current directory:
//
//      First parameter is PATH, initially we tested it with '.' 
//      but now we replace the static path with process.cwd(),
//      this lets us run our node app from anywhere in the file system.
//
fs.readdir(process.cwd(), (err, filenames) => { // 2 callback variables: error, filenames
    if (err) {
        // Error handling code here
        console.log(err);
    }

    //
}); // readdir end

// Method #1 for handling lstat with promises
// Declare function wrapper with promise
// Promise contains an lstat call to serialize our asynchronous code
const getlstat = (filename) => {
    // Return a promise on function call
    return new Promise((resolve, reject) => {
        // Call lstat taking filename and stats as parameters
        fs.lstat(filename, (err, stats) => {
            // Reject the promise on error
            if (err) {
                reject(err);
            }

            // Resolve promise with the stats object
            resolve(stats);
        });
    });
};