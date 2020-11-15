var myLength = require('./length.js');

String.prototype.mySplit = function(item) {
    var newArray = [];
    for (let i = 0; i < this.myLength(); i++) {
        if(this[i]==item) this[i]=',';
    }
    return this;
}
var str = "mert demir vue js"
console.log("str=>" ,str.mySplit(" "))