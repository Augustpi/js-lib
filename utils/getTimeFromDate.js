// -----------------------------------------------------------------------------
// Get Time From Date
// This snippet can be used to get the time from a Date object as a string.
// 
// getColonTimeFromDate(new Date()); // "08:38:00"

export const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);
