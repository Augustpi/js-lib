
// -----------------------------------------------------------------------------
// isNumber
// This snippet can be used to check whether a provided value is a number.
// 
// isNumber('1'); // false
// isNumber(1); // true

export const isNumber = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
}