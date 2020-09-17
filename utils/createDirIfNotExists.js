// -----------------------------------------------------------------------------
// Create Directory
// This snippet uses existsSync() to check whether a directory exists and then mkdirSync() to create it if it doesn’t.
// 
// const fs = require('fs'); /// it's requered
// 
// creates the directory 'test', if it doesn't exist
// createDirIfNotExists('test');

export const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
