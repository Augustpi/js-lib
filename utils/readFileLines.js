const fs = require('fs');
// -----------------------------------------------------------------------------
// readFileLines
// This snippet can be used to read a file by getting an array of lines from a file.
// 
// const fs = require('fs');
// let arr = readFileLines('test.txt');
// console.log(arr); // ['line1', 'line2', 'line3']

export const readFileLines = filename =>
    fs
        .readFileSync(filename)
        .toString('UTF8')
        .split('\n');
