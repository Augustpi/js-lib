var myLength = require('./length.js');

Array.prototype.myConcat = function(item) {
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
    newArray = [...item,...this]
    return newArray;
}
var array = ["mert","demir","vue","js","react","angular"]
item=["svelte","node.js"]
console.log("unshift=>" ,array.myConcat(item))