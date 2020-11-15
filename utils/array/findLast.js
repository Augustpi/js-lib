// -----------------------------------------------------------------------------
// findLast
// This snippet returns the last element for which a given function returns a truthy value.
// 
// findLast([1, 2, 3, 4], n => n % 2 === 1); // 3

export const findLast = (arr, fn) => arr.filter(fn).pop();
