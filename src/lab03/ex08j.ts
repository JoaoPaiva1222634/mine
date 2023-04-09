import { getNumberOfDigits } from "./ex08a";

function getReverseOfDecreasingNumber(value: number) {
    if (!Number.isInteger(value))
        throw new RangeError('Value must be an integer number');

    let numberOfDigits: number = getNumberOfDigits(value);
    let reversedNumber: number = 0;

    for (let i = 0; i < numberOfDigits; i++) {
        let digit: number = Math.trunc((value / 10 ** i)) % 10;
        let nextDigit = (Math.trunc(value / 10) % 10);
        reversedNumber = reversedNumber * 10 + digit;

        if (i < numberOfDigits - 1)
            if (digit > nextDigit)
                return -1;
    }

    return reversedNumber;
}