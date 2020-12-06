var myLength = require('./length.js');
Array.prototype.myMap = function(callback) {
    let newArray  =  [];
    for (let i = 0; i < this.myLength(); i++) {
        newArray.push(callback(this[i]));
    }
    return newArray;
}


// var fruits = [1,2,5,3,3,2];
// const newArray = fruits.myMap(function(item){
//     return item *  2;
// });
// console.log(newArray);