// -----------------------------------------------------------------------------
// dropRightWhile
// This snippet removes elements from the right side of an array until the passed function returns true.
// 
// dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]

export const dropRightWhile = (arr, func) => {
    while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
    return arr;
};
