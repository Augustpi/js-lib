
// -----------------------------------------------------------------------------
// is
// This snippet can be used to check if a value is of a particular type.
// 
// is(Array, [1]); // true
// is(ArrayBuffer, new ArrayBuffer()); // true
// is(Map, new Map()); // true
// is(RegExp, /./g); // true
// is(Set, new Set()); // true
// is(WeakMap, new WeakMap()); // true
// is(WeakSet, new WeakSet()); // true
// is(String, ''); // true
// is(String, new String('')); // true
// is(Number, 1); // true
// is(Number, new Number(1)); // true
// is(Boolean, true); // true
// is(Boolean, new Boolean(true)); // true

export const is = (type, val) => ![, null].includes(val) && val.constructor === type;