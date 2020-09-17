
/**
 * Move Cursor to End of Input
 *
 * Where el is a reference to an input or textarea.
 * 
 * @param {Element} el
 * @param {String} type 
 */
export function moveCursorToEnd (el, type) {
    if (typeof el.selectionStart == type) {
        el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange != "undefined") {
        el.focus();
        var range = el.createTextRange();
        range.collapse(false);
        range.select();
    }
}