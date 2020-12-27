
// -----------------------------------------------------------------------------
// dropRight
// This snippet returns a new array with n elements removed from the right.

// dropRight([1, 2, 3]); // [1,2]
// dropRight([1, 2, 3], 2); // [1]
// dropRight([1, 2, 3], 42); // []

export const dropRight = (arr, n = 1) => arr.slice(0, -n);

