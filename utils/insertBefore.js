// -----------------------------------------------------------------------------
// insertBefore
// This snippet can be used to insert an HTML string before a particular element.
// 
// insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>

export const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);
