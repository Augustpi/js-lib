var formatDate = function (timestamp) {

    // Create a date object from the timestamp
    var date = new Date(timestamp)

    // Create a list of names for the months
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    // return a formatted date
    return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()

};

console.log(formatDate(1530680400000))
console.log(formatDate('2018-07-04 05:00:00'))