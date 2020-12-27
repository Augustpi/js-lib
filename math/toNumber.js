/**
 * from vue runtime.
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
export const toNumber = (val) => {
    var n = parseFloat(val);
    return isNaN(n) ? val : n
}