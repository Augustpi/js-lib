// -----------------------------------------------------------------------------
// isBrowser
// This snippet can be used to determine whether the current runtime environment is a browser. 
// This is helpful for avoiding errors when running front-end modules on the server (Node).
// 
// isBrowser(); // true (browser)
// isBrowser(); // false (Node)

export const isBrowser = () => ![typeof window, typeof document].includes('undefined');