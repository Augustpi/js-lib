var myLength = require('./length.js');
Array.prototype.mySome = function(callback) {
    let result;
    for (let i = 0; i < this.myLength(); i++) {
        if(callback(this[i])) result = true;
        else result = false
    }
    return result;
}


// var fruits = [12,32,41,31,32,41,1];

// var kisi = fruits.mySome(function(item){
//     return item < 10;
// });
// console.log(kisi);