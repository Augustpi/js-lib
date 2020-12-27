// Using a server-side timestamp with JS
var date = new Date(serverTimestamp * 1000);

// Before sending a timestamp to a server
var now = new Date();
var timestamp = now.getTime();
var timestampInSeconds = timestamp / 1000;