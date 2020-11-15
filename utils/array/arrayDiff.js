/**
 * difference
 * This snippet finds the difference between two arrays
 * 
 * how to use
 * ----------
 * difference([1, 2, 3], [1, 2, 4]); // [3]
 * 
 * @param {Array} a 
 * @param {Array} b 
 */
export const difference = (a, b) => {
    const s = new Set(b);
    return a.filter(x => !s.has(x));
};