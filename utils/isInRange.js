/*!
 * Determine if an element is in the viewport
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */
var isInRange = function (elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

var findMe = document.querySelector('#find-me');

window.addEventListener('scroll', function () {
    if (isInViewport(findMe)) {
        console.log('In range!');
    } else {
        console.log('Nope...');
    }
}, false);