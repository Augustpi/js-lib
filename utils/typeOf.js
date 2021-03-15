
/**
 * typeOf
 * ---------
 * If you need a real typeof function
 *
 * @param {*} obj
 * @return string (variable type)
 *
 * How to use this function
 *
 * var arr = typeOf([])
 * var obj = typeOf({})
 * var str = typeOf('')
 * var date = typeOf(new Date())
 * var num = typeOf(1)
 * var fn = typeOf(function () { })
 * var reg = typeOf(/test/i)
 * var bool = typeOf(true)
 * var nl = typeOf(null)
 * var undef = typeOf()
 * or nodelist etc.
 *
 * console.log(arr)   // 'array'
 * console.log(obj)   // 'object'
 * console.log(str)   // 'string'
 * console.log(date   // 'date'
 * console.log(num)   // 'number'
 * console.log(fn)    // 'function'
 * console.log(reg)   // 'regexp'
 * console.log(bool)  // 'boolean'
 * console.log(nl)    // 'null'
 * console.log(undef) // 'undefined'
 */
var typeOf = function (obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};

// ['array', 'object', 'string', 'date', 'number', 'function', 'regexp', 'boolean', 'null', 'undefined']