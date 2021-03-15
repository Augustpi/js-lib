// -----------------------------------------------------------------------------
// isBrowser
// This snippet can be used to determine whether the current runtime environment is a browser. 
// This is helpful for avoiding errors when running front-end modules on the server (Node).
// 
// isBrowser(); // true (browser)
// isBrowser(); // false (Node)

export const isBrowser = () => ![typeof window, typeof document].includes('undefined');

// From Vue
// Browser environment sniffing
export const inBrowser = typeof window !== 'undefined';
export const inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
export const weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
export const UA = inBrowser && window.navigator.userAgent.toLowerCase();
export const isIE = UA && /msie|trident/.test(UA);
export const isIE9 = UA && UA.indexOf('msie 9.0') > 0;
export const isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
export const isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
export const isEdge = UA && UA.indexOf('edge/') > 0;
export const isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
export const isIOS = (UA && /iphone|ipad|ipod|kios/.test(UA)) || (weexPlatform === 'ios');
export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
export const isPhantomJS = UA && /phantomjs/.test(UA);
export const isFF = UA && UA.match(/firefox\/(\d+)/); ü