
// -----------------------------------------------------------------------------
// scrollToTop
// This snippet can be used to do a smooth scroll to the top of the current page.
// 
// scrollToTop();

export const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};
