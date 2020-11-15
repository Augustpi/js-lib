// function merge(left, right) {
//     let arr = []
//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             arr.push(left.shift())  
//         } else {
//             arr.push(right.shift()) 
//         }
//     }
//     return [ ...left, ...right ]
// }
// Array.prototype.myMax = function() {
//     const half = array.length / 2
//     if(array.length < 2){
//       return array 
//     }
    
//     const left = array.splice(0, half)
//     return merge(myMax(left),myMax(array))
// }

//import myLength from "./length"
var myLength = require('./length.js');
Array.prototype.myMax = function() {
    var max = this[0];
    for (let i = 0; i < this.myLength(); i++) {
        if(this[i]>max)
    	{
    		max=this[i];
		}
    }
    return max;
}
// array = [10, 8, 7, 2, 11, 1, 3,3,8,20,21,20,21];

// console.log("dizi en büyük=>",array.myMax());