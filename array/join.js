var myLength = require('./length.js');

Array.prototype.myJoin = function(item) {
    var newString='';
    for (let i = 0; i < this.myLength(); i++) {
        if(i === this.myLength()-1) newString += this[i];
        else newString += this[i]+item;
    }
    return newString;
}
var array = ["mert","demir","vue","js","react"]
console.log("str=>" ,array.myJoin(","))