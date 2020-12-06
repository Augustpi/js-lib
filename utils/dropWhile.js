
// -----------------------------------------------------------------------------
// dropWhile
// This snippet removes elements from an array until the passed function returns true.
// 
// dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]

export const dropWhile = (arr, func) => {
    while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
    return arr;
};
