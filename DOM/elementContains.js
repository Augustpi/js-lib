
// -----------------------------------------------------------------------------
// elementContains
// This snippet checks whether the parent element contains the child.
// 
// elementContains(document.querySelector('head'), document.querySelector('title')); // true
// elementContains(document.querySelector('body'), document.querySelector('body')); // false

/**
 * 
 * @param {Element} parent
 * @param {Element} child
 */
export const elementContains = (parent, child) => parent !== child && parent.contains(child);
