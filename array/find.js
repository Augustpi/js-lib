var myLength = require('./length.js');
Array.prototype.myFind = function(callback) {
    const element = undefined;
    for (let i = 0; i < this.myLength(); i++) {
        if(callback(this[i])) return this[i];
    }
    return element;
}


var fruits = [
    {ad:'mert',status:'mühendis'},
    {ad:'onur',status:'mühendis'},
    {ad:'sinan',status:'mühendis'},
    {ad:'hasan',status:'tekniker'},
    {ad:'mehmet',status:'tekniker'}
];

var kisi = fruits.myFind(function(item){
    return item.ad ===  'hasan'
});
console.log(kisi);