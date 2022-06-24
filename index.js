//jshint esversion:9

//****************************************************************************************
//
//      App Description:
//      
//      Implement the 'ls' command using Node
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

    // log the file names
    console.log(filenames);
}); 