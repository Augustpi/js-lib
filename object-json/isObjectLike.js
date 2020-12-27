
// -----------------------------------------------------------------------------
// isObjectLike
// This snippet can be used to check if a value is not null and that its typeof is “object”.
// 
// isObjectLike({}); // true
// isObjectLike([1, 2, 3]); // true
// isObjectLike(x => x); // false
// isObjectLike(null); // false

export const isObjectLike = val => val !== null && typeof val === 'object';