
// -----------------------------------------------------------------------------
// sample
// This snippet can be used to get a random number from an array.
// 
// sample([3, 7, 9, 11]); // 9

export const sample = arr => arr[Math.floor(Math.random() * arr.length)];
