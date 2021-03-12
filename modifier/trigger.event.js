import { events } from '../shared/constants'

/**
 * to simulate a MouseEvent (click, etc.)
 * @param {Element} el element
 * @param {MouseEvent} event mouse event
 */
export const triggerEvent = function (el, event = events.click) {
  var e = new MouseEvent(event, { bubbles: true, cancelable: true, view: window })
  !el.dispatchEvent(e)
}
