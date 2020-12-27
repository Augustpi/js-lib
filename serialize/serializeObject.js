``` template
<form>
	<label for="title">Title</label>
	<input type="text" name="title" id="title" value="Go to Hogwarts">

	<label for="body">Body</label>
	<textarea id="body" name="body">Learn magic, play Quidditch, and drink some butter beer.</textarea>

	<input type="hidden" name="userId" value="1">

	<button>Submit</button>
</form>
```

var serializeObject = function (form) {

    // Create an object
    var obj = {}

    // Loop through each field in the form
    Array.prototype.slice.call(form.elements).forEach(function (field) {

        // Skip some fields we don't need
        if (!field.name || field.disabled || ['file', 'reset', 'submit', 'button'].indexOf(field.type) > -1) return

        // Handle multi-select fields
        if (field.type === 'select-multiple') {

            // Create an array of selected values
            var options = []

            // Loop through the options and add selected ones
            Array.prototype.slice.call(field.options).forEach(function (option) {
                if (!option.selected) return
                options.push(option.value)
            })

            // If there are any selection options, add them to the object
            if (options.length) {
                obj[field.name] = options
            }

            return

        }

        // If it's a checkbox or radio button and it's not checked, skip it
        if (['checkbox', 'radio'].indexOf(field.type) > -1 && !field.checked) return

        // Add the value to the object
        obj[field.name] = field.value

    })

    // Return the object
    return obj

}

document.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(serializeObject(event.target))
})