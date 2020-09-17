
// -----------------------------------------------------------------------------
// isObject
// This snippet can be used to check whether a provided value is an object. 
// It uses the Object constructor to create an object wrapper for the given value.
// If it is already an object, then an object type that corresponds to the given value will be returned.
//  Otherwise, a new object will be returned.
// 
// isObject([1, 2, 3, 4]); // true
// isObject([]); // true
// isObject(['Hello!']); // true
// isObject({ a: 1 }); // true
// isObject({}); // true
// isObject(true); // false
export const isObject = obj => obj === Object(obj);