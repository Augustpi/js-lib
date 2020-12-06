var typeOf = function (obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};

var arr = typeOf([]);
var obj = typeOf({});
var str = typeOf('');
var date = typeOf(new Date());
var num = typeOf(1);
var fn = typeOf(function () { });
var reg = typeOf(/test/i);
var bool = typeOf(true);
var nl = typeOf(null);
var undef = typeOf();

console.log(arr);
console.log(obj);
console.log(str);
console.log(date);
console.log(num);
console.log(fn);
console.log(reg);
console.log(bool);
console.log(nl);
console.log(undef);