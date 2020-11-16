var myLength = require('./length.js');

Array.prototype.myEntries = function() {
    var newArray=[];
    var index=0;
    // for (let i = 0; i < item.myLength(); i++) {
    //     newArray[index]= item[i];
    //     index++;
    // }
    // for (let i = 0; i < this.myLength(); i++) {
    //     newArray[index]= this[i];
    //     index++;
    // }
    // return newArray;
    for (let i = 0; i < this.myLength(); i++) {
        this[i]= i + ',' + this[i]
    }
    return this
}
var array = ["mert","demir","vue","js","react","angular"]
console.log("unshift=>" ,array.myEntries())