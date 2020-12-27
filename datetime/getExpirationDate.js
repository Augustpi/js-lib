var getExpirationDate = function (time) {
    return new Date(+new Date() + time).toUTCString();
};

// Set for one week from now
var expires = getExpirationDate(1000 * 60 * 60 * 24 * 7);
console.log(expires);