// -----------------------------------------------------------------------------
// indexOfAll
// This snippet can be used to get all indexes of a value in an array, which returns an empty array, 
// in case this value is not included in it.
// 
// indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
// indexOfAll([1, 2, 3], 4); // []

export const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
