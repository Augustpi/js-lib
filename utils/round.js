
// -----------------------------------------------------------------------------
// round
// This snippet can be used to round a number to a specified number of digits.
// 
// round(1.005, 2); // 1.01

export const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

