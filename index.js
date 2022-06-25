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

// read current directory:
//
//      First parameter is PATH, initially we tested it with '.' 
//      but now we replace the static path with process.cwd(),
//      this lets us run our node app from anywhere in the file system.
//
fs.readdir(process.cwd(), (err, filenames) => { // 2 callback variables: error, filenames
    if (err) {
        // error handling code here
        console.log(err);
    }

    // 
    for (let filename of filenames) {
        fileOrFolder(filename);
    }
}); 

const fileOrFolder = (inputFileName) => {

    fs.lstat('.', (err, stats) => {
        if (err) {
            // error handling code here
            console.log(err);
        }
    
        // Use <stats> object to confirm if item is file or folder
        if (stats.isFile() === true) {
            //
            console.log(`${inputFileName} - File`);
        } else if (stats.isDirectory() === true) {
            //
            console.log(`${inputFileName} - Folder`);
        }
    });
    
};