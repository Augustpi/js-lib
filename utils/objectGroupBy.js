var groupBy = function (arr, criteria) {
    return arr.reduce(function (obj, item) {

        // Check if the criteria is a function to run on the item or a property of it
        var key = typeof criteria === 'function' ? criteria(item) : item[criteria];

        // If the key doesn't exist yet, create it
        if (!obj.hasOwnProperty(key)) {
            obj[key] = [];
        }

        // Push the value to the object
        obj[key].push(item);

        // Return the object to the next item in the loop
        return obj;

    }, {});
};


var nums = [6.1, 4.2, 6.3];
var words = ['one', 'two', 'three'];

var groupedNums = groupBy(nums, Math.floor);
var groupedWords = groupBy(words, 'length');

console.log(groupedNums);
// Object {
//     4: [4.2],
//     6: [6.1, 6.3]
// }
console.log(groupedWords);
// Object {
//     3: ["one", "two"],
//     5: ["three"]
// }