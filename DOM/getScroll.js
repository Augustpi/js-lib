/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
export default function getScroll (element, side = 'top') {
    const upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    const nodeName = element.nodeName;

    if (nodeName === 'BODY' || nodeName === 'HTML') {
        const html = element.ownerDocument.documentElement;
        const scrollingElement = element.ownerDocument.scrollingElement || html;
        return scrollingElement[upperSide];
    }

    return element[upperSide];
}

/**
 * 
 * @param {*} element 
 * @param {*} to 
 * @param {*} duration 
 */
function scrollTo (element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20

    var animateScroll = function () {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration)
        element.scrollTop = val;
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

/**
 * new easeInOut
 * 
 * @param {*} t Current time
 * @param {*} b Start value
 * @param {*} c Change in value
 * @param {*} d Duration
 */
Math.easeInOut = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};