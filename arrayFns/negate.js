// -----------------------------------------------------------------------------
// negate
// This snippet can be used to apply the not operator (!) to a predicate function with its arguments.
// 
// [1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]

export const negate = func => (...args) => !func(...args);