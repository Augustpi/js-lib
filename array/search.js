var myLength = require('./length.js');

Array.prototype.mySearch = function(item) {
    var itemLength = item.myLength();
    for (let i = 0; i < this.myLength(); i++) {
        if(this[i]==item) return i
    }
    return -1;
}