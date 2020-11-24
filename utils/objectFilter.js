var objectFilter = function (obj, callback) {

    'use strict';

    // Setup a new object
    var filtered = {};

    // Loop through each item in the object and test it
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {

            // If the callback validates true, push item to the new object
            if (callback(obj[key], key, obj)) {
                filtered[key] = obj[key];
            }

        }
    }

    // Return the new object
    return filtered;

};

var lunch = {
    sandwich: 'turkey',
    drink: 'soda',
    desert: true,
    chips: 'Cape Cod'
};

var filtered = objectFilter(lunch, function (val) {
    return val.length > 5;
});

console.log(filtered);