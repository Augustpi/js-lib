var myLength = require('./length.js');
Array.prototype.myIndexOf = function(item) {
    for (let i = 0; i < this.myLength(); i++) {
        if(this[i]==item) return i
    }
    return -1;
}
// array = [0, 8, 7, 2, 11, 1, 3,3,8,20,21,20,21];

// console.log("dizi arama=>",array.myIndexOf(8));

// array = ["mert","demir"];

// console.log("dizi arama=>",array.myIndexOf("demir"));