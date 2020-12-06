var myLength = require('./length.js');
Array.prototype.myFilter = function(callback) {
    const newArray=[];
    for (let i = 0; i < this.myLength(); i++) {
        const result = callback(this[i]);
        if(result)  newArray.push(this[i]);
    }
    return newArray;
}


// var fruits = [
//     {ad:'mert',status:'mühendis'},
//     {ad:'onur',status:'mühendis'},
//     {ad:'sinan',status:'mühendis'},
//     {ad:'hasan',status:'tekniker'},
//     {ad:'mehmet',status:'tekniker'}
// ];

// var kisi = fruits.myFilter(function(item){
//     return item.status ===  'mühendis'
// });
// const status = fruits.filter(item=>{
//     return item.status ===  'mühendis'
// })
// console.log(kisi);