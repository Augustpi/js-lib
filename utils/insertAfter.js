// -----------------------------------------------------------------------------
// insertAfter
// This snippet can be used to insert an HTML string after the end of a particular element.
// 
// insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>

export const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);

