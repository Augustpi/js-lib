
// -----------------------------------------------------------------------------
// union
// This snippet can be used to find the union of two arrays, resulting in an array 
// that has elements that come from both arrays but that do not repeat.
// 
// union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]

export const union = (a, b) => Array.from(new Set([...a, ...b]));
