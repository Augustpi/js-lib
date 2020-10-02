function binaryToDecimal (binaryNumber) {
    let decimalNumber = 0
    const binaryDigits = binaryNumber.split('').reverse() // Splits the binary number into reversed single digits
    binaryDigits.forEach((binaryDigit, index) => {
        decimalNumber += binaryDigit * (Math.pow(2, index)) // Summation of all the decimal converted digits
    })
    console.log(`Decimal of ${binaryNumber} is ${decimalNumber}`)
}

binaryToDecimal('111001')
binaryToDecimal('101')