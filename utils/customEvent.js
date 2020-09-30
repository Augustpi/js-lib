``` Template
<p>
	<button data-count>Add One</button>
</p>

<p>
    Total: <span id="counter">0</span>
</p>
```

// --------------

/**
 * The counter script
 * @param  {Node}     btn      The counter button
 * @param  {Node}     counter  The count in the UI
 */
var countUp = function (btn, counter) {

    // The current count
    var currentCount = 0

    // Emit a custom event
    var emitEvent = function () {

        // Create a new event
        var event = new CustomEvent('counted', {
            bubbles: true,
            cancelable: true,
            detail: {
                currentCount: currentCount
            }
        })

        // Dispatch the event
        counter.dispatchEvent(event)

    }

    // Handle button clicks
    btn.addEventListener('click', function (event) {

        // Increase the count
        currentCount++

        // Update the UI
        counter.textContent = currentCount

        // Emit the custom event
        emitEvent()

    })

}

// Get the button and count elements
var btn = document.querySelector('[data-count]')
var counter = document.querySelector('#counter')

// Run the script
countUp(btn, counter)

// Alert the user when the count reaches 10
counter.addEventListener('counted', function (event) {
    if (event.detail.currentCount > 9) {
        alert('You are over capacity!')
    }
})