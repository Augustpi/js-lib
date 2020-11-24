var $ = function (selector, parent) {
    return (parent ? parent : document).querySelector(selector);
};

var btn = $('button');
console.log(btn);