var myLength = require('./length.js');

Array.prototype.myToString = function() {
    var newString='';
    let item = ',';
    for (let i = 0; i < this.myLength(); i++) {
        if(i === this.myLength()-1) newString += this[i];
        else newString += this[i]+item;
    }
    return newString;
}
var array = ["mert","demir","vue","js","react","angular"]
console.log("str=>" ,array.myToString())