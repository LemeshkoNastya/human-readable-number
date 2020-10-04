module.exports = function toReadable (number) {
    const singleDigit = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const twoDigitNumber = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let str = "";
    if (number >= 100) {
        let one = parseInt(number / 100);
        str += singleDigit[one] + " hundred";
        let two = number % 100;
        if (two >= 10) {
            if (two % 10 == 0) {
                two = parseInt(two / 10);
                if (two == 1) {
                    str += " " + twoDigitNumber[0]
                } else {
                    str += " " + twoDigitNumber[two + 8];
                }
            } else {
                if (two >= 10 && two < 20) {
                    two = two % 10;
                    str += " " + twoDigitNumber[two];
                } else {
                    let three = two % 10;
                    two = parseInt(two / 10);
                    str += " " + twoDigitNumber[two + 8];
                    str += " " + singleDigit[three];
                }
            }
        } else {
            if (two != 0) {
                str += " " + singleDigit[two];
            }
        }
    } else if (number >= 10) {
        if (number % 10 == 0) {
            let one = parseInt(number / 10);
            if (one == 1) {
                str += twoDigitNumber[0]
            } else {
                str += twoDigitNumber[one + 8];
            }
        } else {
            if (number >= 10 && number < 20) {
                let one = number % 10;
                str += twoDigitNumber[one];
            } else {
                let two = number % 10;
                let one = parseInt(number / 10);
                str += twoDigitNumber[one + 8];
                str += " " + singleDigit[two];
            }
        }
    } else {
        str += singleDigit[number];
    }
    return str;
}
