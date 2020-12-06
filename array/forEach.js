var myLength = require('./length.js');
Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.myLength(); i++) {
        callback(this[i],i);
    }
}


// var fruits = [1,2,5,3,3,2];
// fruits.myForEach(function(item,i){
//     console.log(item,i)
// });