
// -----------------------------------------------------------------------------
// tomorrow
// This snippet can be used to get a string representation of tomorrow’s date.
// 
// tomorrow(); // 2019-09-08 (if current date is 2018-09-08)

export const tomorrow = () => {
    let t = new Date();
    t.setDate(t.getDate() + 1);
    return t.toISOString().split('T')[0];
};
