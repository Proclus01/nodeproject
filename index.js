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
        // Error handling code here
        console.log(err);
    }

    // Create array with length = filenames
    // and fill the values with null
    // This array will store the results of lstat
    const allStats = Array(filenames.length).fill(null); 

    // Iterate over every filename and call lstat to get <stats> object for filename
    // then inspect stats object and validate
    for (let filename of filenames) {
        // Get index from for...of loop
        const index = filenames.indexOf(filename);

        // Inspect filename using lstat and then validate <stat> object returned
        fs.lstat(filename, (err, stats) => {
            if (err) {
                // error handling code here
                console.log(err);
            }
        
            // Push value at index into allStats array
            allStats[index] = stats;

            // Check if any value inside allStats == null
            const ready = allStats.every(
                // pass in iterator function to call for every element inside allstats
                // iterator returns boolean value
                (stats) => {
                    return stats;
                }
            );

            // If every value in allStats is not null, proceed to next step:
            //      Check if the scanned file is a file or folder and log the name
            if (ready) {
                allStats.forEach(
                    (stats, index) => {
                        console.log(filenames[index], stats.isFile());
                    }
                );
            }

        }); //lstat end
    } // for...of end
}); // readdir end
