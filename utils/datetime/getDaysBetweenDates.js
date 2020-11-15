// -----------------------------------------------------------------------------
// Get Days Between Dates
// This snippet can be used to find the difference in days between two dates.
// 
// getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2

export const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
    (dateFinal - dateInitial) / (1000 * 3600 * 24);
