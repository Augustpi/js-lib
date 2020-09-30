var data = {
    listName: 'New list',
    todos: []
}

var setData = function (obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            data[key] = obj[key];
        }
    }
}


setData({
    todos: [
        'Fix my wand',
        'Buy new robes',
        'Enroll in courses'
    ]
})
