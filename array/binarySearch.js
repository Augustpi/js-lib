var myLength = require('./length.js');
Array.prototype.myBinarySearch = function(value) {
    let first = 0; 
    let last = this.myLength() - 1;
    let position = -1;
    let found = false;
    let middle;
 
    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2);
        if (this[middle] == value) {
            found = true;
            position = middle;
        } else if (this[middle] > value) {
            last = middle - 1;
        } else {
            first = middle + 1;
        }
    }
    return position;
}
array2=[0,1,3,5,79,11,14,16,18,22]
array = [0, 8, 7, 2, 11, 1, 3,3,8,20,21,20,21];

console.log("dizi arama=>",array2.myBinarySearch(3));