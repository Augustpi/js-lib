
// -----------------------------------------------------------------------------
// isPlainObject
// This snippet checks whether a value is an object created by the Object constructor.
// 
// isPlainObject({ a: 1 }); // true
// isPlainObject(new Map()); // false

export const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;