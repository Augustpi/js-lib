export const events = Object.freeze({
    click: 'click',
    scroll: 'scroll',
    focus: 'focus',
    blur: 'blur',
    input: 'input',
    mouseup: 'mouseup',
    mousedown: 'mousedown',
    mousemove: 'mousemove',
    mouseenter: 'mouseenter',
    mouseleave: 'mouseleave',
    resize: 'resize',
    error: 'error',
    abort: 'abort',
    load: 'load',
    beforeunload: 'beforeunload',
    unload: 'unload',
    reset: 'reset',
    submit: 'submit',
    keyup: 'keyup',
    keydown: 'keydown',
    keypress: 'keypress',
    change: 'change',
    online: 'online',
    offline: 'offline',
})

/**
 * to simulate a MouseEvent (click, etc.)
 * @param {Element} el element
 * @param {MouseEvent} event mouse event
 */
export const triggerEvent = function (el, event = events.click) {
    var e = new MouseEvent(event, { bubbles: true, cancelable: true, view: window })
    !el.dispatchEvent(e)
};
