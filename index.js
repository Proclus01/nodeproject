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

import fs from 'fs'; // require filesystem to get <stats> object and operate on it
import chalk from 'chalk'; // require chalk for console coloring

// Handling lstat with promises using fs.promises from fs
const { lstat } = fs.promises;

// read current directory:
//
//      First parameter is PATH, initially we tested it with '.' 
//      but now we replace the static path with process.cwd(),
//      this lets us run our node app from anywhere in the file system.
//
fs.readdir(process.cwd(), async (err, filenames) => { // 2 callback variables: error, filenames
    if (err) {
        // Error handling code here
        console.log(err);
    }

    // Map over the filenames array
    // For each file name, call lstat and return the promise that gets created when we call it
    const statPromises = filenames.map( filename => {
        return lstat(filename);
    });

    // Promise.all will wait for all operations to resolve 
    // and then we can store our results in a new array.
    const allStats = await Promise.all(statPromises);

    // Iterate over allStats
    for (let stats of allStats) {
        // Get index of every element passed in
        const index = allStats.indexOf(stats);

        // Log the filename at index with a boolean indicating File or Folder
        // Conditionally branch to normal text if file, colored if folder
        if (stats.isFile()) {
            console.log(filenames[index]);
        } else {
            console.log(chalk.red(filenames[index]));
        }
        
    } // for...of end
}); // readdir end
