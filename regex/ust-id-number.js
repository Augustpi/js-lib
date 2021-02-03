const regex = /(?xi)^(
    (AT) ? U[0 - 9]{ 8} |                             // # Austria
        (BE) ? 0[0 - 9]{ 9 } |                             // # Belgium
            (BG) ? [0 - 9]{ 9, 10 } |                           // # Bulgaria
                (HR) ? [0 - 9]{ 11 } |                             // # Croatia
                    (CY) ? [0 - 9]{ 8 } L |                             // # Cyprus
                        (CZ) ? [0 - 9]{ 8, 10 } |                           // # Czech Republic
                            (DE) ? [0 - 9]{ 9 } |                              // # Germany
                                (DK) ? [0 - 9]{ 8 } |                              // # Denmark
                                    (EE) ? [0 - 9]{ 9 } |                              // # Estonia
                                        (EL | GR) ? [0 - 9]{ 9 } |                           // # Greece
                                            ES[A - Z][0 - 9]{ 7 } (?: [0 - 9] | [A - Z]) |             // # Spain
                                                (FI) ? [0 - 9]{ 8 } |                              // # Finland
                                                    (FR) ? [0 - 9A - Z]{ 2 } [0 - 9]{ 9 } |                   // # France
                                                        (GB) ? ([0 - 9]{ 9 } ([0 - 9]{ 3 })?| [A - Z]{ 2 } [0 - 9]{ 3 }) |// # United Kingdom
                                                            (HU) ? [0 - 9]{ 8 } |                              // # Hungary
                                                                (IE) ? [0 - 9]S[0 - 9]{ 5 } L |                       // # Ireland
                                                                    (IT) ? [0 - 9]{ 11 } |                             // # Italy
                                                                        (LT) ? ([0 - 9]{ 9 }| [0 - 9]{ 12 }) |                  // # Lithuania
                                                                            (LU) ? [0 - 9]{ 8 } |                              // # Luxembourg
                                                                                (LV) ? [0 - 9]{ 11 } |                             // # Latvia
                                                                                    (MT) ? [0 - 9]{ 8 } |                              // # Malta
                                                                                        (NL) ? [0 - 9]{ 9 } B[0 - 9]{ 2 } |                     // # Netherlands
                                                                                            (PL) ? [0 - 9]{ 10 } |                             // # Poland
                                                                                                (PT) ? [0 - 9]{ 9 } |                              // # Portugal
                                                                                                    (RO) ? [0 - 9]{ 2, 10 } |                           // # Romania
                                                                                                        (SE) ? [0 - 9]{ 12 } |                             // # Sweden
                                                                                                            (SI) ? [0 - 9]{ 8 } |                              // # Slovenia
                                                                                                                (SK) ? [0 - 9]{ 10 }                               // # Slovakia
) $ / gm;
const str = `ATU99999999
BE0999999999
BG999999999
HR12345678901
CY99999999L
CZ12345678
DK99999999
EE123456789
FI99999999
FRXX999999999
DE999999999
EL123456789
HU12345678
IE1S23456L
IE1234567T
IE1234567TW
IE1234567FA
ESA12345678
ESZ1234567E`;
let m;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}