
// -----------------------------------------------------------------------------
// maxN
// This snippet returns the n largest elements from a list. 
// If n is greater than or equal to the list’s length, then it will return the original list (sorted in descending order).
// 
// maxN([1, 2, 3]); // [3]
// maxN([1, 2, 3], 2); // [3,2]

export const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);