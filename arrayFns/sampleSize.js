
// -----------------------------------------------------------------------------
// sampleSize
// This snippet can be used to get n random elements from unique positions from an array up to the size of the array. 
// Elements in the array are shuffled using the Fisher-Yates algorithm.
// 
// sampleSize([1, 2, 3], 2); // [3,1]
// sampleSize([1, 2, 3], 4); // [2,3,1]

export const sampleSize = ([...arr], n = 1) => {
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr.slice(0, n);
};