var myLength = require('./length.js');
Array.prototype.myLastIndexOf = function(item) {
    for (let i = this.myLength(); i > 0; i--) {
        console.log("array")
        if(this[i]==item) return i
    }
    return -1;
}
// array = [0, 8, 7, 2, 11, 1, 3,3,8,20,21,20,21];

// console.log("dizi arama=>",array.myLastIndexOf(8));

// array = ["mert","demir"];

// console.log("dizi arama=>",array.myIndexOf("demir"));