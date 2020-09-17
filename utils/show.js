
// -----------------------------------------------------------------------------
// show
// This snippet can be used to show all the elements specified.
//
//show(...document.querySelectorAll('img')); // Shows all <img> elements on the page

export const show = (...el) => [...el].forEach(e => (e.style.display = ''));

