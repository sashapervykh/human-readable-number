module.exports = function toReadable(number) {
    let numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let tenth = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let decimals = [
        ,
        ,
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let hundred = Math.floor(number / 100);
    let ten = Math.floor(number / 10) - Math.floor(number / 100) * 10;
    let units = number % 10;
    let result;

    if (hundred != 0) {
        result = numbers[hundred] + " hundred";
        if (ten != 0) {
            if (ten == 1) {
                result = result + " " + tenth[units];
            } else {
                result = result + " " + decimals[ten];
                if (units != 0) {
                    result = result + " " + numbers[units];
                }
            }
        } else {
            if (units != 0) {
                result = result + " " + numbers[units];
            }
        }
    } else if (ten != 0) {
        if (ten == 1) {
            result = tenth[units];
        } else {
            result = decimals[ten];
            if (units != 0) {
                result = result + " " + numbers[units];
            }
        }
    } else {
        result = numbers[units];
    }

    return result;
};
