
// -----------------------------------------------------------------------------
// randomNumberInRange
// This snippet can be used to return a random number in a specified range.
// 
// randomNumberInRange(2, 10); // 6.0211363285087005

export const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;
