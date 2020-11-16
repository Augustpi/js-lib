var myLength = require('./length.js');

Array.prototype.myToString = function() {
    var newString='';
    let item = ',';
    for (let i = 0; i < this.myLength(); i++) {
        if(i === this.myLength()-1) newString += this[i];
        else newString += this[i]+item;
    }
    return newString;
}
var array = ["mert","demir","vue","js","react","angular"]
console.log("str=>" ,array.myToString())






var _toString = Object.prototype.toString;

function isPlainObject (obj) {
    return _toString.call(obj) === '[object Object]'
}

function toString (val) {
    return val == null
        ? ''
        : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
            ? JSON.stringify(val, null, 2)
            : String(val)
}

