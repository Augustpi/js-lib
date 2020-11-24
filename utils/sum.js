
// -----------------------------------------------------------------------------
// sum
// This snippet can be used to find the sum of two or more numbers or arrays.
// 
// sum(1, 2, 3, 4); // 10
// sum(...[1, 2, 3, 4]); // 10

export const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);
