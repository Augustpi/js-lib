var myLength = require('./length.js');

Array.prototype.myPop = function() {
    var newArray = [];
    for (let i = 0; i < this.myLength()-1; i++) {
        newArray[i] = this[i];
    }
    return newArray;
}
var array = ["mert","demir","vue","js","react"]

console.log("pop=>" ,array.myPop())