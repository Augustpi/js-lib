// -----------------------------------------------------------------------------
// hasClass
// This snippet checks whether an element has a particular class.
// 
// hasClass(document.querySelector('p.special'), 'special'); // true
export const hasClass = (el, className) => el.classList.contains(className);
