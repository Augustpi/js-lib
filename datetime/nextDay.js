var nextDay = new Date(todayTimestamp + (1000 * 60 * 60 * 24 * 2));

var getNextDay = function (dayName) {

    // The current day
    var date = new Date();
    var now = date.getDay();

    // Days of the week
    var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    // The index for the day you want
    var day = days.indexOf(dayName.toLowerCase());

    // Find the difference between the current day and the one you want
    // If it's the same day as today (or a negative number), jump to the next week
    var diff = day - now;
    diff = diff < 1 ? 7 + diff : diff;

    // Get the timestamp for the desired day
    var nextDayTimestamp = date.getTime() + (1000 * 60 * 60 * 24 * diff);

    // Get the next day
    return new Date(nextDayTimestamp);

};

var nextMonday = getNextDay('Monday');

// You can use lowercase, too
var nextSaturday = getNextDay('saturday');

// You can even do weird mixed case
var nextFriday = getNextDay('friDay');