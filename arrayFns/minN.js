
// -----------------------------------------------------------------------------
// minN
// This snippet returns the n smallest elements from a list. 
// If n is greater than or equal to the list’s length, then it will return the original list (sorted in ascending order).
// 
// minN([1, 2, 3]); // [1]
// minN([1, 2, 3], 2); // [1,2]

export const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);
