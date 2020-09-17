// -----------------------------------------------------------------------------
// nodeListToArray
// This snippet can be used to convert a nodeList to an array.
// 
// nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]

export const nodeListToArray = nodeList => [...nodeList];