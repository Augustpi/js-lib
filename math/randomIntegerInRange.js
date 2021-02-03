// -----------------------------------------------------------------------------
// randomIntegerInRange
// This snippet can be used to generate a random integer in a specified range.
// 
// randomIntegerInRange(0, 5); // 3

export const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

