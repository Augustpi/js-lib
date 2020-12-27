var formatter = new Intl.DateTimeFormat('en-US');

// This will use a short time formatting and a long date formatting
// What those look like varies from one locale to the next
var formatter = new Intl.DateTimeFormat('en-US', {
    timeStyle: 'short',
    dateStyle: 'full'
});

// Get the current date and time
var date = new Date();

// Format it into a string
formatter.format(date);


// Format it into a string
new Intl.DateTimeFormat('en-US', {
    timeStyle: 'short',
    dateStyle: 'full'
}).format(date);