var myLength = require('./length.js');
function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    return [ ...arr, ...left, ...right ]
}
Array.prototype. mergeSort = function() {
    const half = this.myLength() / 2
    
    if(this.myLength() < 2){
      return this 
    }
    
    const left = this.splice(0, half)
    return merge(left.mergeSort(),this.mergeSort())
}
// array = [4, 8, 7, 2, 11, 1, 3];
// console.log("mergeSORT=>",array.mergeSort());