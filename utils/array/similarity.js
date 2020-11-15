
// -----------------------------------------------------------------------------
// similarity
// This snippet can be used to return an array of elements that appear in two arrays.
// 
// similarity([1, 2, 3], [1, 2, 4]); // [1, 2]

export const similarity = (arr, values) => arr.filter(v => values.includes(v));
