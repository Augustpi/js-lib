var myLength = require('./length.js');
Array.prototype.myBubbleSort = function() {
    var gecici = 0;
    var degisiklik=0;
    var adet = this.myLength();
    while (degisiklik == 0) {
        degisiklik = 1;
        for (i = 0; i < adet - 1; i++) {
            if (this[i] > this[i + 1]) {
                gecici = this[i];
                this[i] = this[i + 1];
                this[i + 1] = gecici;
                degisiklik = 0;
            }
        }
        adet--;
    }
    return this;
}
// array = [0, 8, 7, 2, 11, 1, 3,3,8,20,21,20,21];

// console.log(array.myBubbleSort());