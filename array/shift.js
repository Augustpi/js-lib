var myLength = require('./length.js');

Array.prototype.myShift = function() {
    var newArray = [];
    let j =0;
    for (let i = 1; i < this.myLength(); i++) {
        newArray[j] = this[i];
        j++;
    }
    return newArray;
}
var array = ["adsasd","mert","demir","vue","js","react"]

console.log("shift=>" ,array.myShift())