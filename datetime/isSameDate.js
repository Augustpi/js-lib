// -----------------------------------------------------------------------------
// isSameDate
// This snippet can be used to check whether two dates are equal.
// 
// isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true

export const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();