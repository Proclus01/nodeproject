//jshint esversion:9

//****************************************************************************************
//
//      App Description:
//      
//      Implement the 'ls' command using Node
//
// ****************************************************************************************

const fs = require('fs'); // require filesystem

// read directory
fs.readdir('.', (err, filenames) => { // 2 callback variables: error, filenames
    if (err) {
        // error handling code here
        console.log(err);
    }

    // log the file names
    console.log(filenames);
}); 