
// -----------------------------------------------------------------------------
// words
// This snippet converts a string into an array of words.
// 
// words('I love javaScript!!'); // ["I", "love", "javaScript"]
// words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]

export const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);