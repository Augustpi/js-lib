Array.prototype.myLength = function() {
    var i =0;
    while(this[i] != null){
        i++;
    }
    return i;
}


// var fruits = ["Banana", "Orange", "Apple", "Mango",1,2,5,3,3,2];
// console.log("Uzunluk=>", fruits.myLength())