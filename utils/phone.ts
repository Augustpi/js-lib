/*
Good phone numbers are:
"(AAA)-NNN-NNNN"
"AAA-NNN-NNNN"
*/

const isAllDigits = (str: string) =>
  str.split("").every((c) => c >= "0" && c <= "9");

export default (areacode: string) => (phone: string) => {
  const parts = phone.split("-");

  if (parts.length !== 3 || !isAllDigits(parts[1]) || !isAllDigits(parts[2])) {
    return false;
  }

  return parts[0] === areacode.toString() || parts[0] == `(${areacode})`;
};


const testArray = [
  "",
  "not a number",
  "27 charing cross place",
  "(503)-867-5309",
  "503-845-3255",
  "800-555-1212",
  "(888)-555-1212",
  "467-2143",
  "home 503-222-4444",
];