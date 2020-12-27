(async () => {
    if (somethingIsTrue) {
        // import module for side effects
        await import('/modules/my-module.js');
    }
})();