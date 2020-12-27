// -----------------------------------------------------------------------------
// bottomVisible
// This snippet checks whether the bottom of a page is visible.
// 
// bottomVisible(); // true

export const bottomVisible = () =>
    document.documentElement.clientHeight + window.scrollY >=
    (document.documentElement.scrollHeight || document.documentElement.clientHeight);
