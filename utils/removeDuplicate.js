var sandwiches = ['turkey', 'ham', 'turkey', 'tuna', 'pb&j', 'ham', 'turkey', 'tuna'];
var deduped = Array.from(new Set(sandwiches));

// Logs ["turkey", "ham", "tuna", "pb&j"]
console.log(deduped);