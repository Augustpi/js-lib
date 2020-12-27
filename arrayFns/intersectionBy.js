
// -----------------------------------------------------------------------------
// intersectionBy
// This snippet can be used to return a list of elements that exist in both arrays, after a particular function has been executed to each element of both arrays.
// 
// intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]

export const intersectionBy = (a, b, fn) => {
    const s = new Set(b.map(fn));
    return a.filter(x => s.has(fn(x)));
};