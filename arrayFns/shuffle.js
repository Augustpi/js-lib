
// -----------------------------------------------------------------------------
// shuffle
// This snippet can be used to order the elements of an array randomly using the Fisher-Yates algorithm.
// 
// const foo = [1, 2, 3];
// shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]

export const shuffle = ([...arr]) => {
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
};
