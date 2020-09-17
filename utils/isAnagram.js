// -----------------------------------------------------------------------------
// isAnagram
// This snippet can be used to check whether a particular string is an anagram with another string.
// 
// isAnagram('iceman', 'cinema'); // true

export const isAnagram = (str1, str2) => {
    const normalize = str =>
        str
            .toLowerCase()
            .replace(/[^a-z0-9]/gi, '')
            .split('')
            .sort()
            .join('');
    return normalize(str1) === normalize(str2);
};