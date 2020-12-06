var myLength = require('./length.js');
Array.prototype.myEvery = function(callback) {
    for (let i = 0; i < this.myLength(); i++) {
        if(!callback(this[i])) return false;
    }
    return true;
}


// var fruits = [1,3,4,3,3,4,1];

// var kisi = fruits.myEvery(function(item){
//     return item < 10;
// });
// console.log(kisi);