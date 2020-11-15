// function merge(left, right) {
//     let arr = []
//     while (left.length && right.length) {
//         arr.push(left[0] < right[0] ? left.shift() : right.shift())
//     }
//     return [ ...arr]
// }
// function mergeSort(array) {
//     const half = array.length / 2
//     if(array.length < 2) return array 
//     return merge(mergeSort(array.splice(0, half)),mergeSort(array))
// }
// array = [4, 8, 7, 2, 11, 1, 3,3,,8,20,21,20,21];

// console.log(mergeSort(array));
var myLength = require('./length.js');

Array.prototype.myMin = function() {
    var min = this[0];
    for (let i = 1; i < this.myLength(); i++) {
        if(this[i]<min)
    	{
    		min=this[i];
		}
    }
    return min;
}
// array = [0, 8, 7, 2, 11, 1, 3,3,8,20,21,20,21];

// console.log("dizi en küçüğü=>",array.myMin());