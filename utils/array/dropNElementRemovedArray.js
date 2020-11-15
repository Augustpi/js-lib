// -----------------------------------------------------------------------------
// Drop Elements
// This snippet returns a new array with n elements removed from the left.
// 
// drop([1, 2, 3]); // [2,3]
// drop([1, 2, 3], 2); // [3]
// drop([1, 2, 3], 42); // []

export const drop = (arr, n = 1) => arr.slice(n);