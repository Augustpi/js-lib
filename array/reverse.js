var myLength = require('./length.js');
Array.prototype.myReverse = function() {
    var newAray = [];
    var j =0;
    for (let i = this.myLength()-1; i >= 0; i--) {
        newAray[j] = this[i];
        j++;
    }
    return newAray;
}
// array = [0, 8, 7, 2, 11, 1, 3,3,8,20,21,20,21];

// console.log("dizi tersten  yazdırma=>",array.myReverse());